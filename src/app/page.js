"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import DBCard from "./components/DBCard";
import Filter from "./components/Filter";

function splitList(val, delimiterRegex) {
  const s = String(val || "").trim();
  if (!s) return [];
  return s
    .split(delimiterRegex)
    .map((x) => x.trim())
    .filter(Boolean);
}

export default function DatabasePage() {
  const [data, setData] = useState([[], [], []]); // [default, reversed, title]
  const [loading, setLoading] = useState(true);
  const [resultCount, setResultCount] = useState(0);

  const [formatList, setFormatList] = useState([]);
  const [contList, setContList] = useState([]);
  const [catList, setCatList] = useState([]);
  const [sort, setSort] = useState(0);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/resources", { cache: "no-store" });
      const json = await res.json();
      const raw = Array.isArray(json.items) ? json.items : [];

      const updated = raw.map((item) => {
        const next = { ...item };

        // optional fields if your sheet includes them
        if (next["Category"] && String(next["Category"]).trim()) {
          // old site used "; "
          next.Category = splitList(next["Category"], /;\s*/g);
        } else {
          next.Category = [];
        }

        if (next["Continent"] && String(next["Continent"]).trim()) {
          // old site used ", "
          next.Continent = splitList(next["Continent"], /,\s*/g);
        } else {
          next.Continent = [];
        }

        // normalize common fields (avoid undefined)
        next.Resource = String(next["Resource"] || next.Resource || "").trim();
        next.Link = String(next["Link"] || next.Link || "").trim();
        next.Format = String(next["Format"] || next.Format || "").trim();
        next.Creator = String(next["Creator"] || next.Creator || "").trim();
        next.Professor = String(
          next["Professor"] || next.Professor || "",
        ).trim();
        next.Class = String(next["Class"] || next.Class || "").trim();
        next.Keywords = String(next["Keywords"] || next.Keywords || "").trim();
        next.Image = String(next["Image"] || next.Image || "").trim();

        return next;
      });

      const revArray = [...updated].slice().reverse();

      const nameArray = [...updated].sort((a, b) => {
        const a1 = (a.Resource || "").toLowerCase();
        const b1 = (b.Resource || "").toLowerCase();
        return a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
      });

      setData([updated, revArray, nameArray]);
      setResultCount(updated.length);
    } catch (e) {
      setData([[], [], []]);
      setResultCount(0);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const activeData = useMemo(() => data[sort] || [], [data, sort]);

  return (
    <div className="db section--top">
      <div className="db__section db__section--filter">
        <Filter
          formatList={formatList}
          setFormatList={setFormatList}
          contList={contList}
          setContList={setContList}
          catList={catList}
          setCatList={setCatList}
        />
      </div>

      <div className="db__vl" />

      <div className="db__section db__section--content">
        <div className="db__tab">
          <ul className="tab__list">
            <li
              className={
                sort === 0 ? "tab__item tab__item--selected" : "tab__item"
              }
              onClick={() => setSort(0)}
            >
              Ascending Date
            </li>
            <li
              className={
                sort === 1 ? "tab__item tab__item--selected" : "tab__item"
              }
              onClick={() => setSort(1)}
            >
              Descending Date
            </li>
            <li
              className={
                sort === 2 ? "tab__item tab__item--selected" : "tab__item"
              }
              onClick={() => setSort(2)}
            >
              Title
            </li>
          </ul>

          <p className="tab__count">{`${resultCount} results`}</p>
        </div>

        <DBCard
          formatList={formatList}
          contList={contList}
          catList={catList}
          setResultCount={setResultCount}
          data={activeData}
          loading={loading}
        />
      </div>
    </div>
  );
}

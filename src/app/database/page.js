"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

export default function DatabasePage() {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/resources", { cache: "no-store" });
      const json = await res.json();
      setItems(Array.isArray(json.items) ? json.items : []);
    } catch {
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return items;

    return items.filter((it) => {
      const blob = [
        it.Resource,
        it.Creator,
        it.Format,
        it.Professor,
        it.Class,
        it.Keywords,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return blob.includes(query);
    });
  }, [items, q]);

  return (
    <main className="page container">
      <div className="page-header">
        <h1>Research Database</h1>
        <p>Browse and search resources collected through ESP.</p>
      </div>

      <div className="db-toolbar db-toolbar--stack">
        <input
          className="db-search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="search titles, creators, keywords..."
          aria-label="Search database"
        />

        <div className="db-count">
          {loading ? "loading…" : `${filtered.length} results`}
        </div>
      </div>

      {loading ? (
        <div className="db-loading">Loading resources…</div>
      ) : filtered.length === 0 ? (
        <div className="db-empty panel">
          <h2>No results found</h2>
          <p>Try a different keyword.</p>
        </div>
      ) : (
        <div className="db-grid">
          {filtered.map((it, idx) => (
            <div className="db-card2" key={`${it.Link}-${idx}`}>
              <div className="db-card2-corner" aria-hidden="true">
                ↗
              </div>

              <div className="db-card2-title">
                <a href={it.Link || "#"} target="_blank" rel="noreferrer">
                  {it.Resource || "Untitled"}
                </a>
              </div>

              <div className="db-kv">
                {it.Creator ? (
                  <div className="db-kv-row">
                    <div className="db-kv-key">Creator</div>
                    <div className="db-kv-value">{it.Creator}</div>
                  </div>
                ) : null}

                {it.Format ? (
                  <div className="db-kv-row">
                    <div className="db-kv-key">Format</div>
                    <div className="db-kv-value">{it.Format}</div>
                  </div>
                ) : null}

                {it.Professor ? (
                  <div className="db-kv-row">
                    <div className="db-kv-key">Professor</div>
                    <div className="db-kv-value">{it.Professor}</div>
                  </div>
                ) : null}

                {it.Class ? (
                  <div className="db-kv-row">
                    <div className="db-kv-key">Class</div>
                    <div className="db-kv-value">{it.Class}</div>
                  </div>
                ) : null}

                {it.Keywords ? (
                  <div className="db-kv-row">
                    <div className="db-kv-key">Keywords</div>
                    <div className="db-kv-value">{it.Keywords}</div>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

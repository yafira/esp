"use client";

import React from "react";
import CheckboxList from "./CheckboxList";

export default function Filter({
  formatList,
  setFormatList,
  contList,
  setContList,
  catList,
  setCatList,
}) {
  const format = [
    "Article",
    "Collection",
    "Book",
    "Website",
    "Video",
    "Audio",
    "Artwork",
    "Tool",
  ];
  const continent = ["North America", "Europe", "Africa", "Australia", "Asia"];
  const category = [
    "Tech & Society",
    "Design",
    "Programming & Data",
    "Media Arts",
    "Project Development & Research",
  ];

  function resetChecked() {
    setFormatList([]);
    setContList([]);
    setCatList([]);
  }

  const active = formatList.length || contList.length || catList.length;

  return (
    <div className="filter">
      <a className="bttn--primary filter__button" href="/contribute">
        Suggest Resources
      </a>

      <div className="filter__title-wrapper">
        <div className="filter__title">
          <p className="body-large bold">Filter Results</p>
        </div>

        <button
          type="button"
          className={
            active ? "filter__chip" : "filter__chip filter__chip-inactive"
          }
          onClick={resetChecked}
        >
          Clear
        </button>
      </div>

      <div className="checkbox-list-wrapper">
        <CheckboxList
          category="Format"
          labels={format}
          checkedList={formatList}
          setCheckedList={setFormatList}
        />
        <CheckboxList
          category="Continent"
          labels={continent}
          checkedList={contList}
          setCheckedList={setContList}
        />
        <CheckboxList
          category="Category"
          labels={category}
          checkedList={catList}
          setCheckedList={setCatList}
        />
      </div>
    </div>
  );
}

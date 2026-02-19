"use client";

import React, { useState } from "react";

export default function CheckboxList({
  category,
  labels,
  checkedList,
  setCheckedList,
}) {
  const [open, setOpen] = useState(true);

  const toggle = () => setOpen((prev) => !prev);

  function handleChange(event) {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedList((prev) => [...prev, value]);
    } else {
      setCheckedList((prev) => prev.filter((item) => item !== value));
    }
  }

  return (
    <div className="checkbox-list">
      <button type="button" className="checkbox-list__title" onClick={toggle}>
        <h5 className="body-default">{category}</h5>
        <span className="chev">{open ? "▴" : "▾"}</span>
      </button>

      <div
        className={
          open
            ? "checkbox-wrapper"
            : "checkbox-wrapper checkbox-wrapper--hidden"
        }
      >
        {labels.map((item) => (
          <label className="checkbox" key={item}>
            <span className="body-default">{item}</span>
            <input
              className="checkbox__icon"
              type="checkbox"
              value={item}
              checked={checkedList.includes(item)}
              onChange={handleChange}
            />
          </label>
        ))}
      </div>
    </div>
  );
}

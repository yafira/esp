"use client";

import React, { useEffect, useMemo } from "react";

function SkeletonCard({ i }) {
  return (
    <div className="db-card" key={i}>
      <div className="db-card__info">
        <div className="db-card__metadata metadata--top">
          <div className="skeleton-metadata skeleton" />
        </div>

        <div>
          <h4 className="skeleton-heading skeleton">loading</h4>
          <p className="skeleton-description skeleton">loading</p>
          <p className="skeleton-description skeleton">loading</p>
          <p className="skeleton-description skeleton-description-bottom skeleton">
            loading
          </p>
        </div>
      </div>
      <div className="db-card__image skeleton" />
    </div>
  );
}

export default function DBCard({
  data,
  loading,
  formatList,
  contList,
  catList,
  setResultCount,
}) {
  const filtered = useMemo(() => {
    const res = (data || [])
      .filter((item) =>
        formatList.length ? formatList.includes(item.Format) : true,
      )
      .filter((item) => {
        if (!contList.length) return true;
        const c0 = item?.Continent?.[0];
        const c1 = item?.Continent?.[1];
        return contList.includes(c0) || contList.includes(c1);
      })
      .filter((item) => {
        if (!catList.length) return true;
        const c0 = item?.Category?.[0];
        const c1 = item?.Category?.[1];
        return catList.includes(c0) || catList.includes(c1);
      })
      .filter((item) => {
        return item?.Resource && item?.Link;
      });

    return res;
  }, [data, formatList, contList, catList]);

  // ✅ update parent count AFTER render
  useEffect(() => {
    setResultCount(filtered.length);
  }, [filtered.length, setResultCount]);

  if (loading) {
    return (
      <>
        {Array.from({ length: 10 }).map((_, i) => (
          <SkeletonCard i={i} key={i} />
        ))}
      </>
    );
  }

  if (!filtered.length) {
    return (
      <div className="no-results">
        <h2 className="no-results__heading">No results found</h2>
        <p>Try adjusting your filter for more results</p>
      </div>
    );
  }

  return (
    <>
      {filtered.map((item, index) => {
        const cats = item?.Category || [];
        const conts = item?.Continent || [];

        return (
          <a
            href={item.Link}
            key={index}
            target="_blank"
            rel="noreferrer"
            className="db-link"
          >
            <div className="db-card">
              <div className="db-card__info">
                <div className="db-card__metadata metadata--top">
                  {cats[0] ? (
                    <>
                      <p className="db-card__category">{cats[0]}</p>
                      <span className="db-card__dot" />
                    </>
                  ) : null}
                  {cats[1] ? (
                    <>
                      <p className="db-card__category">{cats[1]}</p>
                      <span className="db-card__dot" />
                    </>
                  ) : null}
                  {item.Creator ? (
                    <p className="db-card__creator">{item.Creator}</p>
                  ) : null}
                </div>

                <div className="db-card__article">
                  <h4 className="heading-5 db-card__heading">
                    {item.Resource}
                  </h4>

                  {item.Professor || item.Class ? (
                    <p className="db-card__context">
                      {item.Professor ? <span>{item.Professor}</span> : null}
                      {item.Professor && item.Class ? (
                        <span className="db-card__dot" />
                      ) : null}
                      {item.Class ? <span>{item.Class}</span> : null}
                    </p>
                  ) : null}

                  {item.Keywords ? (
                    <p className="db-card__keywords">{item.Keywords}</p>
                  ) : null}
                </div>

                <div className="db-card__metadata">
                  {item.Format ? (
                    <div className="db-card__chip">{item.Format}</div>
                  ) : null}
                  {conts[0] ? (
                    <div className="db-card__chip">{conts[0]}</div>
                  ) : null}
                  {conts[1] ? (
                    <div className="db-card__chip">{conts[1]}</div>
                  ) : null}
                </div>
              </div>

              {item.Image ? (
                <img
                  className="db-card__image"
                  src={item.Image}
                  alt={`cover for ${item.Resource}`}
                />
              ) : null}
            </div>
          </a>
        );
      })}
    </>
  );
}

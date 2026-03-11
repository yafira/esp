"use client";
import { useCallback, useEffect, useMemo, useState } from "react";

const FORMATS = [
  "Article",
  "Book",
  "Collection",
  "Website",
  "Video",
  "Audio",
  "Artwork",
  "Tool",
];
const CONTINENTS = ["North America", "Europe", "Africa", "Australia", "Asia"];
const CATEGORIES = [
  "Tech & Society",
  "Design",
  "Programming & Data",
  "Media Arts",
  "Project Development & Research",
];

function kwColor(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++)
    h = (h * 31 + str.charCodeAt(i)) & 0xffffffff;
  return `kw-c${Math.abs(h) % 8}`;
}

function toggleItem(list, val) {
  return list.includes(val) ? list.filter((x) => x !== val) : [...list, val];
}

function TagGroup({ label, tags, active, onToggle }) {
  return (
    <div className="tag-group">
      <div className="tag-group-label">{label}</div>
      <div className="tag-group-pills">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`tag-pill${active.includes(tag) ? " tag-pill--on" : ""}`}
            onClick={() => onToggle(tag)}
            aria-pressed={active.includes(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function DatabasePage() {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [formats, setFormats] = useState([]);
  const [conts, setConts] = useState([]);
  const [cats, setCats] = useState([]);
  const [activeKeywords, setActiveKw] = useState([]);

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

  // sidebar + search only — drives keyword panel
  const baseFiltered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return items.filter((it) => {
      if (query) {
        const blob = [it.Resource, it.Creator, it.Format, it.Class, it.Keywords]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        if (!blob.includes(query)) return false;
      }
      if (formats.length && !formats.includes(it.Format)) return false;
      if (conts.length && !conts.some((v) => (it.Continent || []).includes(v)))
        return false;
      if (cats.length && !cats.some((v) => (it.Category || []).includes(v)))
        return false;
      return it.Resource && it.Link;
    });
  }, [items, q, formats, conts, cats]);

  // base + keyword filter — drives cards
  const filtered = useMemo(() => {
    if (!activeKeywords.length) return baseFiltered;
    return baseFiltered.filter((it) => {
      const kws = (it.Keywords || "")
        .split(/[;,|]/)
        .map((s) => s.trim().toLowerCase());
      return activeKeywords.some((k) => kws.includes(k.toLowerCase()));
    });
  }, [baseFiltered, activeKeywords]);

  // all unique keywords from base results, properly split
  const allKeywords = useMemo(() => {
    const seen = new Set();
    const out = [];
    baseFiltered.forEach((it) => {
      (it.Keywords || "")
        .split(/[;,|]/)
        .map((s) => s.trim())
        .filter(Boolean)
        .forEach((kw) => {
          const key = kw.toLowerCase().replace(/\s+/g, " ");
          if (!seen.has(key)) {
            seen.add(key);
            out.push(kw);
          }
        });
    });
    return out;
  }, [baseFiltered]);

  const sidebarActive = formats.length + conts.length + cats.length;
  const clearSidebar = () => {
    setFormats([]);
    setConts([]);
    setCats([]);
  };
  const clearKeywords = () => setActiveKw([]);

  return (
    <main className="db-layout container">
      {/* LEFT: FILTER SIDEBAR */}
      <aside className="db-sidebar" aria-label="Filter resources">
        <div className="db-sidebar-header">
          <span className="db-sidebar-title">Filter</span>
          {sidebarActive > 0 && (
            <button
              type="button"
              className="db-clear-btn"
              onClick={clearSidebar}
            >
              Clear {sidebarActive}
            </button>
          )}
        </div>

        <TagGroup
          label="Format"
          tags={FORMATS}
          active={formats}
          onToggle={(t) => setFormats((f) => toggleItem(f, t))}
        />
        <TagGroup
          label="Continent"
          tags={CONTINENTS}
          active={conts}
          onToggle={(t) => setConts((f) => toggleItem(f, t))}
        />
        <TagGroup
          label="Category"
          tags={CATEGORIES}
          active={cats}
          onToggle={(t) => setCats((f) => toggleItem(f, t))}
        />

        <a href="/contribute" className="db-suggest-btn">
          + Suggest a resource
        </a>
      </aside>

      {/* MIDDLE: CARDS */}
      <div className="db-main">
        <div className="page-header">
          <h1>Research Database</h1>
          <p>Browse and search resources collected through ESP.</p>
        </div>

        <div className="db-toolbar db-toolbar--stack">
          <input
            className="db-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="search titles, creators, keywords…"
            aria-label="Search database"
          />
          <div className="db-count">
            {loading
              ? "—"
              : `${filtered.length} result${filtered.length !== 1 ? "s" : ""}`}
          </div>
        </div>

        {sidebarActive > 0 && (
          <div className="db-active-tags" aria-label="Active filters">
            {[...formats, ...conts, ...cats].map((tag) => (
              <button
                key={tag}
                type="button"
                className="db-active-tag"
                onClick={() => {
                  if (formats.includes(tag))
                    setFormats((f) => f.filter((x) => x !== tag));
                  else if (conts.includes(tag))
                    setConts((f) => f.filter((x) => x !== tag));
                  else setCats((f) => f.filter((x) => x !== tag));
                }}
              >
                {tag} ×
              </button>
            ))}
          </div>
        )}

        {loading ? (
          <div className="db-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                className="db-card2 db-card2--skeleton"
                key={i}
                aria-hidden="true"
              >
                <div className="skeleton-line skeleton-title" />
                <div className="skeleton-line skeleton-short" />
                <div className="skeleton-line skeleton-short" />
                <div className="skeleton-line skeleton-shorter" />
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="db-empty panel">
            <h2>No results found</h2>
            <p>Try a different keyword or clear some filters.</p>
          </div>
        ) : (
          <div className="db-grid">
            {filtered.map((it, idx) => {
              const chips = [...(it.Category || []), ...(it.Continent || [])];
              return (
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
                    {it.Creator && (
                      <div className="db-kv-row">
                        <div className="db-kv-key">Creator</div>
                        <div className="db-kv-value">{it.Creator}</div>
                      </div>
                    )}
                    {it.Format && (
                      <div className="db-kv-row">
                        <div className="db-kv-key">Format</div>
                        <div className="db-kv-value">{it.Format}</div>
                      </div>
                    )}
                    {it.Class && (
                      <div className="db-kv-row">
                        <div className="db-kv-key">Class</div>
                        <div className="db-kv-value">{it.Class}</div>
                      </div>
                    )}
                  </div>
                  {chips.length > 0 && (
                    <div className="db-card2-chips">
                      {chips.map((c) => (
                        <span key={c} className="db-chip">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* RIGHT: KEYWORD PANEL */}
      <aside className="db-keyword-panel" aria-label="Filter by keyword">
        <div className="db-keyword-panel-header">
          <span className="db-keyword-panel-title">Keywords</span>
          {activeKeywords.length > 0 && (
            <button
              type="button"
              className="db-keyword-clear"
              onClick={clearKeywords}
            >
              Clear
            </button>
          )}
        </div>
        <div className="db-keyword-cloud">
          {allKeywords.length === 0 ? (
            <span className="db-keyword-empty">No keywords</span>
          ) : (
            allKeywords.map((kw) => {
              const isActive = activeKeywords
                .map((k) => k.toLowerCase())
                .includes(kw.toLowerCase());
              const isDimmed = activeKeywords.length > 0 && !isActive;
              return (
                <button
                  key={kw}
                  type="button"
                  className={`kw-tag ${kwColor(kw)}${isActive ? " kw-active" : ""}${isDimmed ? " kw-dimmed" : ""}`}
                  onClick={() => setActiveKw((k) => toggleItem(k, kw))}
                  aria-pressed={isActive}
                  title={kw}
                >
                  {kw}
                </button>
              );
            })
          )}
        </div>
      </aside>
    </main>
  );
}

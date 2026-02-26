import { NextResponse } from "next/server";

function splitList(val, regex) {
  const s = String(val || "").trim();
  if (!s) return [];
  return s
    .split(regex)
    .map((x) => x.trim())
    .filter(Boolean);
}

function pick(obj, ...keys) {
  for (const k of keys) {
    if (obj?.[k] != null && String(obj[k]).trim() !== "") return obj[k];
  }
  return "";
}

export async function GET() {
  try {
    const url = process.env.SHEETSDB_URL;
    if (!url) {
      return NextResponse.json(
        { error: "missing SHEETSDB_URL" },
        { status: 500 },
      );
    }

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: "sheetdb_fetch_failed", status: res.status, detail: text },
        { status: 500 },
      );
    }

    const raw = await res.json();
    const rows = Array.isArray(raw) ? raw : [];

    const items = rows.map((r) => {
      const Resource = String(
        pick(r, "Resource", "resource", "Title", "title"),
      ).trim();
      const Link = String(pick(r, "Link", "link", "URL", "url")).trim();

      return {
        Researcher: String(pick(r, "Researcher", "researcher")).trim(),
        Professor: String(pick(r, "Professor", "professor")).trim(),
        Class: String(pick(r, "Class", "class")).trim(),
        Resource,
        Link,
        Format: String(pick(r, "Format", "format")).trim(),
        Creator: String(pick(r, "Creator", "creator")).trim(),
        CreatorRole: String(
          pick(r, "Creator Role", "CreatorRole", "creator_role"),
        ).trim(),
        AuthorLink: String(
          pick(r, "Author Link", "AuthorLink", "author_link"),
        ).trim(),
        Keywords: String(pick(r, "Keywords", "keywords")).trim(),
        Category: splitList(pick(r, "Category", "category"), /;\s*/g),
        Continent: splitList(pick(r, "Continent", "continent"), /,\s*/g),
        Image: String(pick(r, "Image", "image")).trim(),
      };
    });

    return NextResponse.json({ items });
  } catch (err) {
    return NextResponse.json(
      { error: "server_error", detail: String(err?.message || err) },
      { status: 500 },
    );
  }
}

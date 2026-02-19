import { NextResponse } from "next/server";

function splitList(val, regex) {
  const s = String(val || "").trim();
  if (!s) return [];
  return s
    .split(regex)
    .map((x) => x.trim())
    .filter(Boolean);
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
      return NextResponse.json(
        { error: "failed_to_fetch_sheetdb", status: res.status },
        { status: 500 },
      );
    }

    const raw = await res.json();
    const items = (Array.isArray(raw) ? raw : []).map((item) => {
      const next = { ...item };

      // match old behavior
      if (next["Category"])
        next.Category = splitList(next["Category"], /;\s*/g);
      else next.Category = [];

      if (next["Continent"])
        next.Continent = splitList(next["Continent"], /,\s*/g);
      else next.Continent = [];

      // normalize common fields
      next.Resource = String(next["Resource"] || "").trim();
      next.Link = String(next["Link"] || "").trim();
      next.Format = String(next["Format"] || "").trim();
      next.Creator = String(next["Creator"] || "").trim();
      next.Image = String(next["Image"] || "").trim();

      return next;
    });

    return NextResponse.json({ items });
  } catch (err) {
    return NextResponse.json(
      { error: "server_error", detail: String(err?.message || err) },
      { status: 500 },
    );
  }
}

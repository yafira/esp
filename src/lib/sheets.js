export async function fetchSheet() {
  const key = process.env.GOOGLE_SHEETS_API_KEY;
  const sheetId = process.env.GOOGLE_SHEETS_SHEET_ID;
  const range = process.env.GOOGLE_SHEETS_RANGE;

  if (!key || !sheetId || !range) {
    throw new Error("missing google sheets env vars");
  }

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(range)}?key=${key}`;

  const res = await fetch(url, { next: { revalidate: 300 } }); // cache 5 min
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`sheets fetch failed: ${res.status} ${text}`);
  }

  const data = await res.json();
  const rows = data.values || [];
  if (rows.length < 2) return [];

  const headers = rows[0].map((h) => (h || "").toLowerCase().trim());
  const items = rows.slice(1).map((row) => {
    const obj = {};
    headers.forEach((h, i) => (obj[h] = row[i] ?? ""));
    return obj;
  });

  return items;
}

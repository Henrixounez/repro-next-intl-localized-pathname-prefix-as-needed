import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
      }}>
        <Link href="/traduction">Go to traduction page (fr)</Link>
        <Link href="/en/translation">Go to translation page (en)</Link>
      </div>
    </div>
  );
}

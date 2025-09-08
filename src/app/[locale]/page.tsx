import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("home");

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      marginTop: "2rem"
    }}>
      <h1>
        {t("title")} ({locale})
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Link href="/traduction">{t("goTo.translation")}</Link>
      </div>
    </div>
  );
}

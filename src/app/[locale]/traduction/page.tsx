import { Link } from "@/i18n/navigation";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";

export default async function TraductionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  setRequestLocale(locale);

  const t = await getTranslations("traduction");

  return (
    <div>
      <h1>{t("title")} ({locale})</h1>
      <p>{t("description")}</p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Link href="/traduction" locale="fr">{t("goTo.fr")}</Link>
        <Link href="/traduction" locale="en">{t("goTo.en")}</Link>
      </div>
    </div>
  );
}
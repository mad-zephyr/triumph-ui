import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Usable, use } from "react";

type THomePage = {
  params: Usable<{
    locale: string;
  }>;
};

export default function HomePage({ params }: THomePage) {
  const t = useTranslations("HomePage");

  const { locale } = use(params);

  console.log("LOCALE: ", locale);

  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}

import { Link } from "@/i18n/navigation";

type THomePage = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: THomePage) {
  const { locale } = await params;

  return (
    <main>
      <h1>{"title"}</h1>
      <Link href="/about">{"about"}</Link>
      <div>Lang: {locale}</div>
    </main>
  );
}

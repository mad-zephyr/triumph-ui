import { Link } from "@/i18n/navigation";
import { getClient } from "@/libs/graphql/apolloClient";
import { gql } from "@apollo/client";

type THomePage = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: THomePage) {
  const { locale } = await params;

  const query = gql`
    query ExampleQuery {
      company {
        ceo
      }
      roadster {
        apoapsis_au
      }
    }
  `;

  //   const { data } = await getClient().query({
  //     query,
  //     context: {
  //       fetchOptions: {
  //         next: { revalidate: 30 },
  //       },
  //     },
  //   });

  //   console.log("LOCALE: ", locale, data);

  return (
    <div>
      <h1>{"title"}</h1>
      <Link href="/about">{"about"}</Link>
    </div>
  );
}

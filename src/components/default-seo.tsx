import { DefaultSeo } from "next-seo";

const config = {
  title: "Paolo Calzone - dApp builder",
  description: "I build decentralized Apps to solve real world problems.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paolocalzone.xyz",
    site_name: "Paolo Calzone",
    images: [
      {
        url: "https://paolocalzone.xyz/og.jpg",
        alt: "Paolo Calzone",
      },
    ],
  },
  twitter: {
    handle: "@paolocalz",
    site: "@paolocalz",
    cardType: "summary_large_image",
  },
};

export default function SEO() {
  return <DefaultSeo {...config} />;
}

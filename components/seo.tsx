import { DefaultSeo } from "next-seo";

const config = {
  title: "winklesen Kraft - Design engineer",
  description: "I design & build interfaces",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://winklesenkraft.com",
    site_name: "winklesen Kraft",
    images: [
      {
        url: "https://winklesenkraft.com/og.jpg",
        alt: "winklesen Kraft",
      },
    ],
  },
  twitter: {
    handle: "@winklesenkraft",
    site: "@winklesenkraft",
    cardType: "summary_large_image",
  },
};

export default function SEO() {
  return <DefaultSeo {...config} />;
}

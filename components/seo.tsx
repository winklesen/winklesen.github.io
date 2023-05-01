import { DefaultSeo } from "next-seo";

const config = {
  title: "Samuel Bernard Jeffersen",
  description: "I develop Mobile Application",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://winklesen.com",
    site_name: "winklesen ",
    images: [
      {
        url: "https://winklesen.com/",
        alt: "winklesen ",
      },
    ],
  },
  twitter: {
    handle: "@winklesen",
    site: "@winklesen",
    cardType: "summary_large_image",
  },
};

export default function SEO() {
  return <DefaultSeo {...config} />;
}

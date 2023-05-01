import Image from "next/image";
import { NextSeo } from "next-seo";

import Link from "components/Link";
import Section from "components/Section";
import Workplaces from "components/Workplaces";
import Gallery from "components/Gallery";
import { ActivityType } from "components/Activity";

import bitrefillLogo from "public/projects/bitrefill-logo.png";
import tracklibLogo from "public/projects/tracklib-logo.png";
import styleroomLogo from "public/projects/styleroom-logo.png";
import trailroutesLogo from "public/projects/trailroutes-logo.png";
import notionLogo from "public/projects/notion-logo.png";
import strengthLogo from "public/projects/strength-logo.png";
import avatar from "public/avatar.png";

import { getActivities, getActivity } from "lib/strava";

export const connectLinks = [
  { label: "Email", href: "mailto:samuelbjeffersen@gmail.com" },
  { label: "Twitter", href: "https://twitter.com/winklesen" },
  { label: "GitHub", href: "https://github.com/winklesen" },
];

const workplaces = [
  // {
  //   title: "Design Engineer",
  //   description: "Bitrefill",
  //   time: "2021 - Now",
  //   imageSrc: bitrefillLogo,
  //   link: "https://bitrefill.com",
  // },
  // {
  //   title: "Frontend Developer",
  //   description: "Tracklib",
  //   time: "2016 - 2021",
  //   imageSrc: tracklibLogo,
  //   link: "https://tracklib.com",
  // },
  {
    title: "Mobile Application Developer",
    description: "MNC Play",
    time: "2020 - 2023",
    imageSrc: null,
    link: "https://mncplay.id",
  },
];

const sideProjects = [
  // {
  //   title: "Trail Routes",
  //   description: "Mapping platform built with react, mapbox, swiftUI",
  //   imageSrc: trailroutesLogo,
  //   link: "https://github.com/winklesen/routes",
  // },
  // {
  //   title: "notion-blog-nextjs",
  //   description: "Next.js starter repo with a blog powered by Notion",
  //   imageSrc: notionLogo,
  //   link: "https://github.com/winklesen/notion-blog-nextjs",
  // },
  {
    title: "Corporate App",
    description: "loirem ipsum dolor sit amet",
    imageSrc: null,
    link: "https://github.com/winklesen/",
  },
  {
    title: "Angkringan",
    description: "loirem ipsum dolor sit amet",
    imageSrc: null,
    link: "https://github.com/winklesen/",
  },
  {
    title: "winklesen-next",
    description: "The website you are looking at!",
    imageSrc: avatar,
    link: "https://github.com/winklesen/",
  },
];

const seoTitle = "About | winklesen ";
const seoDesc =
  "A passionate Android Developer who loves to build great products with delightful interfaces.";

export default function About({
  lastActivity,
}: {
  lastActivity: ActivityType;
}) {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          description: seoDesc,
          url: `https://winklesen.com/`,
          site_name: "winklesen ",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="flex flex-col gap-16 md:gap-24">
        {/* <div className="hidden sm:block">
          <Gallery lastActivity={lastActivity} />
        </div>
        <div className="-mb-8 sm:hidden animate-in">
          <Image
            src={avatar}
            width={48}
            height={48}
            alt="avatar of winklesen "
          />
        </div> */}
        <div
          className="flex flex-col gap-16 animate-in sm:animate-none md:gap-24"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Section heading="About me" headingAlignment="right">
            <div className="flex flex-col gap-6">
              <p>
                <em className="font-semibold">Hi there!</em>&nbsp; I’m Sam, a
                Android developer that loves to build great
                products with delightful interfaces.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere natus odit soluta temporibus. Maiores fuga non blanditiis impedit.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere natus odit soluta temporibus. Maiores fuga non blanditiis impedit.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere natus odit soluta temporibus. Maiores fuga non blanditiis impedit.
              </p>
              {/* <p>
                Currently working at{" "}
                <Link href="https://mncplay.id">MNC Play</Link>, making
                living on crypto possible. Before that I worked at music startup{" "}
                <Link href="https://tracklib.com">Tracklib</Link>, the record
                store for sampling.
              </p>
              <p>
                I love working in the realm between design and code. Some things
                that makes me excited are CSS, Design Systems, Animation,
                crafting excellent component apis and making interfaces feel fun
                and human.
              </p>
              <p>
                I grew up in Nacka just outside of Stockholm, Sweden and come
                from a background of studying Photography.
              </p>
              <p>
                Outside of work I’m obsessed with endurance sports and
                travelling with my family.
              </p> */}
            </div>
          </Section>
          <Section heading="Connect" headingAlignment="right">
            <ul className="flex gap-6 animated-list">
              {connectLinks.map((link) => (
                <li className="transition-opacity" key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </Section>
          <Section heading="Work" headingAlignment="right">
            <div className="flex flex-col w-full gap-8">
              <p>
                {new Date().getFullYear() - 2020}+ years of experience working
                in Android Development.
              </p>
              {/* <Workplaces items={workplaces} /> */}
            </div>
          </Section>
          <Section heading="Side projects" headingAlignment="right">
            <div className="flex flex-col w-full gap-8">
              <p>I enjoy hacking on the side.</p>
              {/* <Workplaces items={sideProjects} /> */}
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const activities: ActivityType[] = await getActivities();
  const lastNonVirtualActivityWithPhoto = activities;
  const activity = await getActivity(
0  );
  return {
    props: {
      lastActivity: activity,
    },
    revalidate: 3600,
  };
};

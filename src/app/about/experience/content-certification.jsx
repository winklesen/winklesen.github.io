import { useState } from "react";

export const ContentCertification = () => {
  const [hover, setHover] = useState([]);

  const vendorList = [
    {
      type: "Course",
      name: "Dicoding",
      link: "https://www.dicoding.com",
      certificate: [
        {
          name: "Android Developer Expert",
          link: "#",
        },
        
      ],
    },
    {
      type: "Competence",
      name: "Certiport",
      link: "https://certiport.pearsonvue.com/Certifications/Microsoft/MOS/Overview.aspx",
      certificate: [
        {
          name: "Microsoft Office Specialist",
          link: "#",
        },
        {
          name: "Database Administration Fundamental",
          link: "#",
        },
        {
          name: "HTML5 Application Development Fundamental",
          link: "#",
        },
      ],
    },
    {
      type: "Competence",
      name: "HackerRank",
      link: "https://www.hackerrank.com/",
      certificate: [
        {
          name: "Title",
          link: "#",
        },
        {
          name: "Title",
          link: "#",
        },
        {
          name: "Title",
          link: "#",
        },
      ],
    },
    {
      type: "Course",
      name: "Progate",
      link: "https://progate.com/",
      certificate: [
        {
          name: "Title",
          link: "#",
        },
        {
          name: "Title",
          link: "#",
        },
        {
          name: "Title",
          link: "#",
        },
      ],
    },    
    {
      type: "Course",
      name: "Sololearn",
      link: "https://www.sololearn.com",
      certificate: [
        {
          name: "Title",
          link: "#",
        },
        {
          name: "Title",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="cursor-default text-primary">
      {vendorList.map((vendor, index) => {
        return (
          <div key={index}>
            <h3 className="pb-3 text-lg font-medium leading-loose text-secondary md:text-xl">
              {vendor.type}
              <span className="text-base text-accent">
                {" "}
                @
                <a
                  href={vendor.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-underline"
                >
                  {vendor.name}
                </a>
              </span>
            </h3>
            <ul className="flex list-inside list-disc flex-col gap-4 pb-5 text-sm leading-relaxed lg:text-base">
              {vendor.certificate.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="static  items-center justify-start transition-all duration-300 hover:text-accent md:inline-flex"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

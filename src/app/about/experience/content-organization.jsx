export const ContentOrganization = () => {
  const datas = [
    {
      title: "Title",
      url: "#",
      organization: "Organization",
      date: "July 2020 - Present",
      description: (
        <>
          <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.
            
          </li>
        </>
      ),
    },

    {
      title: "Title",
      url: "#",
      organization: "Organization",
      date: "July 2020 - Present",
      description: (
        <>
          <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.
            
          </li>
        </>
      ),
    },

      
  ];

  return (
    <div className="flex flex-col gap-8 text-primary">
      {datas.map((data, index) => (
        <div key={index}>
          <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
            {data.title}
            <span className="text-base text-accent">
              {" "}
              @
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="text-underline"
              >
                {data.organization}
              </a>
            </span>
          </h3>
          <p className="pb-5 font-mono text-sm lg:text-base">{data.date}</p>
          <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            {data.description}
          </ul>
        </div>
      ))}
    </div>
  );
};

export const ContentAward = () => {
  const datas = [
    {
      title: "Juara Android 2023 Participant",
      url: "https://gdg.community.dev/events/details/google-gdg-jakarta-presents-juaraandroid-2023-info-session/",
      organization: "Google Developer Groups Indonesia",
      date: "May 2023",
      description: (
        <>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis autem atque nihil expedita itaque obcaecati
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis autem atque nihil expedita itaque obcaecati
          </li>
        </>
      ),
    },
    {
      title: "Bapekraf Developer Day 2023 Participant",
      url: "https://bdd.kemenparekraf.go.id/",
      organization: "Kemenparekraf",
      date: "May 2023",
      description: (
        <>
          <li>
            In the BDD 2023 event, I successfully qualified as one of the
            participants who received training course facilitation from the
            Ministry of Tourism and Creative Economy (Kemenparekraf).
          </li>
          <li>
            The training I obtained is the Android Developer Expert Course
            from Dicoding.
          </li>
        </>
      ),
    },
    {
      title:
        "Scholarship for Kotlin Android Developer Expert Learning",
      url: "#",
      organization: "IDCamp",
      date: "August 2019",
      description: (
        <>          
          <li>
            Earned the Kotlin Android Developer Expert Course from Dicoding.
          </li>
        </>
      ),
    },
    {
      title:
        "1st Place SEA Creative Camp Batch 4",
      url: "#",
      organization: "SEAMOLEC",
      date: "June 2019",
      description: (
        <>
          <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.
          </li>
        </>
      ),
    },
    {
      title:
        "Scholarship for Android Developer Expert Learning",
      url: "#",
      organization: "Dicoding",
      date: "Feb 2019",
      description: (
        <>          
          <li>
            Earned the Menjadi Android Developer Expert Course from Dicoding. Selected among hundreds of participants at High School.
          </li>
        </>
      ),
    },
    {
      title:
        "1st Place Teknologi Tepat Guna Depok",
      url: "#",
      organization: "Kamp Kreatif",
      date: "September 2018",
      description: (
        <>
          <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.
          </li>
      </>
      ),
    },
    {
      title: "INDONESIA ANDROID KEJAR 3.0 Participant",
      url: "#",
      organization: "GDG Indonesia",
      date: "Oct 2017",
      description: (
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.          
        </li>
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
          <ul className="flex list-inside list-disc flex-col gap-2 text-sm leading-relaxed lg:text-base">
            {data.description}
          </ul>
        </div>
      ))}
    </div>
  );
};

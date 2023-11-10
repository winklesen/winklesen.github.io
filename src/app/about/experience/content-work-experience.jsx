import androidIcon from "@icons/android.svg";
import javaIcon from "@icons/java.svg";
import gradleIcon from "@icons/gradle2.svg";
import dartIcon from "@icons/dart.svg";
import firebaseIcon from "@icons/firebase.svg";
import flutterIcon from "@icons/flutter.svg";
import googleCloudIcon from "@icons/google_cloud.svg";
import kotlinIcon from "@icons/kotlin.svg";

// import bootstrapIcon from "@icons/bootstrap.svg";
// import tailwindIcon from "@icons/tailwind.svg";
// import reactIcon from "@icons/react.svg";
// import nextjsIcon from "@icons/nextjs.svg";
// import laravelIcon from "@icons/laravel.svg";
// import nodejsIcon from "@icons/nodejs.svg";
// import expressIcon from "@icons/express.svg";
// import mongodbIcon from "@icons/mongodb.svg";
import Image from "next/image";

export const ContentWorkExperience = () => {
  const datas = [
    {
      title: "Mobile App Developer",
      url: "https://mncplay.id/",
      company: "MNC Play",
      date: "June 2020 - Present",
      description: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.
        </p>
      ),
      techs: [
        {
          name: "Flutter",
          icon: flutterIcon,
        },
        {
          name: "Dart",
          icon: dartIcon,
        },        
        {
          name: "Android SDK",
          icon: androidIcon , 
        },
        {
          name: "Kotlin",
          icon: kotlinIcon,
        },
        {
          name: "ML Kit",
          icon: googleCloudIcon,
        },        
        {          
          name: "Firebase Service",
          icon: firebaseIcon,
        },
      ],
    },
    // {
    //   title: "Flutter Developer Freelance",
    //   url: "#",
    //   company: "IUSTUDIO",
    //   date: "Jan 2022 - Present",
    //   description: (
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.
    //     </p>
    //   ),
    //   techs: [
    //     {
    //       name: "Flutter",
    //       icon: flutterIcon,
    //     },
    //     {
    //       name: "Dart",
    //       icon: dartIcon,
    //     },                
    //     {
          
    //       name: "Firebase Service",
    //       icon: firebaseIcon,
    //     },
    //   ],
    // },    
    {
      title: "Android Developer Intern",
      url: "https://mncplay.id/",
      company: "MNC Play",
      date: "September 2019 - December 2019",
      description: (
        <p>
          I contributed on developing Sales Productivity Tracking App, collaborated
          via GitHub, and played a key role as a Android Developer
          in building the{" "}
          <a
            href="#"
            className="text-underline"
            target="_blank"
            rel="noreferrer"
          >
            E-FAB
          </a>{" "}
          platform, ensuring functionality. I followed code best practices with
          descriptive commits, organized repositories, and established branching
          strategies.
        </p>
      ),
      techs: [
        {
          name: "Android SDK",
          icon: androidIcon,
        },
        {
          name: "Kotlin",
          icon: kotlinIcon,
        },
        {
          name: "Gradle",
          icon: gradleIcon,
        },        
        {
          name: "Firebase Service",
          icon: firebaseIcon,
        },
      ],
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
                {data.company}
              </a>
            </span>
          </h3>
          <p className="pb-5 font-mono text-sm lg:text-base">{data.date}</p>
          <div className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            {data.description}
          </div>
          <div className="mt-2">
            <h4 className="mb-1 font-medium">Technologies used</h4>
            <div className="flex flex-wrap gap-2">
              {data.techs.map((tech, index) => (
                <div
                  key={index}
                  className="rounded-md bg-accent/10 p-1"
                  title={tech.name}
                >
                  <Image
                    src={tech.icon}
                    alt={tech.icon}
                    width={28}
                    height={28}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

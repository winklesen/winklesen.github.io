export const ContentEducation = () => {
  return (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Information Systems
        <span className="text-base text-accent">
          {" "}
          @
          <a
            href="https://bsi.today"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            Bina Sarana Informatika University
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">Aug 2022 - Present</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">        
        {/* {" "}
          <a
            href="#"
            className="text-underline"
            target="_blank"
            rel="noreferrer"
          >
            something
          </a>{" "} */}
        <li>          
        Throughout the initial three semesters, my primary focus was on enhancing my proficiency in programming fundamentals and app security, meticulously documenting my progress within my personal Notion workspace—a repository I aim to refine for potential publication. 
        </li>
        <li>
        However, with the passage of time, a profound realization dawned upon me: crafting dashboards from diverse datasets holds a captivating allure and presents challenges akin to the intricate problem-solving involved in debugging. This newfound fascination with data has ignited a profound passion within me
        </li>
      </ul>
    </div>
  );
};

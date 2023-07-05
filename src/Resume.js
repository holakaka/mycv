import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Sai Gon University</h3>
          <p className="info">
            Final-year Infomation Technology student - GPA 7.33 <span>&bull;</span>{" "}
            <em className="date">September 2019</em>
            
          </p>
          <br></br>
        </div>
      </div>
    </div>
  </div>
);
const Skills = function Skills() {
  const hard_skills = [
    "Proficient ReactJS",
    "Basic understanding React Native, Redux, Postman",
    "Proficient JavaScript, HTML, CSS",
    "Deep understanding Java",
    "Basic understanding MSSQL/ MySQL",
    "Basic understanding Python",
    "Experience in using GIT tools to manage source code",
    "Proficient AI, PTS, Figma",
  ];
  const soft_skills = [
    "Working with English documents",
    "Task and time management",
    "Individual and team work",
    "Microsoft Office (Word, Excel, Powerpoint)",
  ];
  return (
    <div className="row skill">
      <div className="three columns header-col">
        <h1>
          <span>Skills</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <h3>Hard Skills</h3>
            <ul className="info">
              {hard_skills.map((skill, index) => (
                <li key={index}>
                  {" "}
                   <em className="info-program">{skill} </em>
                </li>
              ))}
            </ul>
            <br />
            <h3>Soft Skills</h3>
            <ul className="info">
              {soft_skills.map((skill, index) => (
                <li key={index}>
                  {" "}
                   <em className="info-program">{skill} </em>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Awards</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Academic Encouragement Scholarship</h3>
          <p className="info">
            Determined by 10% of the total of student in each major{" "}
            <span>&bull;</span>{" "}
            <em className="date">Second semester &#8209; 2020-2021</em>
          </p>

        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3>Academic Intern Scholarship</h3>
          <p className="info">
            AI Developer Internship Program of ISC Quang Trung Center{" "}
            <span>&bull;</span>{" "}
            <em className="date">2021</em>
          </p>

        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3>Excellent Science Research of SGU</h3>
          <p className="info">
          Topic chosen for exibition and participated for Student Conference of Science Research.{" "}
            <span>&bull;</span>{" "}
            <em className="date">2022-2023 </em>
          </p>

        </div>
      </div>


    </div>
  </div>
);

const Resume = () => {
  return (
    <React.Fragment>
      <Education />, <Skills />, <Work />
    </React.Fragment>
  );
};

export default Resume;

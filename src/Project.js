import DetailProject from "./DetailProject";
import { useState } from "react";
import { info_project } from "./data.js";

function EachProject({ project }) {
  const [idPopupDiv, setIdPopupDiv] = useState(false);
  const screenWidth = window.screen.width;

  const handleClick = () => {
    setIdPopupDiv(true);
  };
  return (
    <div className="columns portfolio-item">
      <div className="item-wrap">
        <a onClick={handleClick} title="">
          <img alt="" src={project.url_img} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{project.project_name}</h5>
              <p>{project.description}</p>
            </div>
          </div>
          <div className="link-icon">
            <i className="icon-plus"></i>
          </div>
        </a>
      </div>
      <DetailProject
        idPopupDiv={idPopupDiv}
        info_project={project}
        setIdPopupDiv={setIdPopupDiv}
      />
    </div>
  );
}

const Project = function Project() {
  
  return (
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Project</h1>
        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          {info_project.map((project) => (
            <EachProject key={project.id_project} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

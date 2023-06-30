import React, { useState, useEffect, useRef } from "react";

const DetailProject = function DetailProject({
  info_project,
  idPopupDiv,
  setIdPopupDiv,
}) {
  const screenWidth = window.screen.width;
  let state_popup = "";

  if (idPopupDiv) {
    state_popup = "block";
  } else state_popup = "none";

  const scrollToSection = () => {
    const section = document.getElementById(info_project.id_project);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    setIdPopupDiv(false);
  };
  const [popupHeight, setPopupHeight] = useState("100%");
  const popupDiv = useRef(null);
  const popupDiv_overview = useRef(null);

  useEffect(() => {
    if (idPopupDiv) {
      const popupDivHeight = popupDiv.current.offsetHeight;
      const popupDiv_overview_Height = popupDiv_overview.current.offsetHeight;
      const set_top_at = popupDivHeight + popupDiv_overview_Height;
      setPopupHeight(`calc( ${set_top_at}px)`);
    }
  }, [idPopupDiv]);

  return (
    <div
      style={{ display: state_popup }}
      className="popupBg"
      onClick={handleClose}
    >
      <div
        className={screenWidth <= 770 ? "popupDiv_mobile" : "popupDiv"}
        style={{ display: state_popup }}
        onClick={handlePopupClick}
      >
        <div className="popupDivlayoutinfo" style={{ display: state_popup }}>
          <section id="sectionPopupImg">
            <div
              className="popupDivimg"
              style={{
                display: state_popup,
              }}
              ref={popupDiv}
            >
              
            </div>
          </section>
          <section id="sectionPopupOverview">
            <div
              className="popupDivoverview"
              style={{ display: state_popup }}
              ref={popupDiv_overview}
            >
              <div className="project-info">
                <h3 style={{ color: "rgb(240, 96, 0)" }}>
                  {info_project.project_name}
                </h3>
                <h1 style={{ marginBottom: 0, color: "rgb(231, 231, 231)" }}>
                  | {info_project.description}
                </h1>
              </div>
              <p style={{ color: "rgb(231, 231, 231)", marginTop: 0 }}>
                {info_project.overview}
              </p>
            </div>
          </section>
          <section id="sectionPopupDetail">
            <div
              id={info_project.id_project}
              className="popupDivdetail"
              style={{ display: state_popup, top: popupHeight }}
            >
              <p
                style={{ color: "black", whiteSpace: "pre-line", margin: "0" }}
              >
                {info_project.detail_project}
              </p>

              <p className="info" style={{ marginBottom: "12px" }}>
                Team size: {info_project.team_size} <span>&bull;</span>{" "}
                <em className="date">Date: {info_project.date_project}</em>
              </p>

              {info_project.user_side.length > 0 && <h3>User side:</h3>}
              <ul style={{ listStyleType: "disc" }}>
                {info_project.user_side.map((user, index) => (
                  <li style={{ color: "black" }} key={index}>
                    <span>&bull;</span> {user}
                  </li>
                ))}
              </ul>
              {info_project.admin_side.length > 0 && <h3>Admin side:</h3>}

              <ul style={{ listStyleType: "disc" }}>
                {info_project.admin_side.map((admin, index) => (
                  <li style={{ color: "black" }} key={index}>
                    <span>&bull;</span> {admin}
                  </li>
                ))}
              </ul>
              {info_project.functions_of_project.length > 0 && (
                <h3>The product has the following functions:</h3>
              )}

              <ul style={{ listStyleType: "disc" }}>
                {info_project.functions_of_project.map((func, index) => (
                  <li style={{ color: "black" }} key={index}>
                    <span>&bull;</span> {func}
                  </li>
                ))}
              </ul>
              {info_project.equipment.length > 0 && (
                <h3>The equipment used:</h3>
              )}
              <ul style={{ listStyleType: "disc" }}>
                {info_project.equipment.map((equip, index) => (
                  <li style={{ color: "black" }} key={index}>
                    <span>&bull;</span> {equip}
                  </li>
                ))}
              </ul>
              {info_project.position.length > 0 && (
                <h3>Main responsibilities:</h3>
              )}

              <ul style={{ listStyleType: "disc" }}>
                {info_project.position.map((pos, index) => (
                  <li style={{ color: "black" }} key={index}>
                    <span>&bull;</span> {pos}
                  </li>
                ))}
              </ul>
              {info_project.flow_project.length > 0 && <h3>Description:</h3>}

              <ul style={{ listStyleType: "disc" }}>
                {info_project.flow_project.map((flw, index) => (
                  <li style={{ color: "black" }} key={index}>
                    <span>&bull;</span> {flw}
                  </li>
                ))}
              </ul>

              <h3>Technology Description: </h3>
              <p style={{ color: "black" }}>{info_project.technology}</p>
              

            </div>
          </section>
        </div>
        <div className="popupDivbarbutton" style={{ display: state_popup }}>
          <button
            className="button"
            style={{ background: "none" }}
            onClick={scrollToSection}
          >
            Detail
          </button>
          <button
            className="button"
            style={{ background: "none" }}
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProject;

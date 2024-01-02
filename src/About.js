import IMAGES from "./images";

const About = () => {
  return (
    <div className="row ">
      <div className="three columns">
        <img className="profile-pic" src={IMAGES.aboutMe} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <br></br>
        <p style={{ fontSize: "22px", color: "#c7c7c7" }}>
          With a goal of becoming a full-stack developer, <br></br>I believe my
          job-related skills and knowledge would be maximized to achieve strong
          values for the company.
          <br></br> <br></br>
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p
              className="address"
              style={{ fontSize: "22px", color: "#c7c7c7" }}
            >
              <span>Dang Ngoc Khang</span>
              <br />
              <br></br>
              <p
                style={{
                  fontSize: "20px",
                  color: "#c7c7c7",
                  whiteSpace: "nowrap",
                }}
              >
                <i className="fa fa-calendar-o"></i>&nbsp;&nbsp; 16/06/2001
                <br />
                <br></br>
                <i className="fa fa-envelope-o"></i>&nbsp;&nbsp;
                ngockhang16062001@gmail.com
                <br />
                <br></br>
                <i className="fa fa-phone"></i>&nbsp;&nbsp; 0326 160601
                <br />
                <br></br>
                <i className="fa fa-map-marker"></i>&nbsp;&nbsp; Binh Chanh, Ho Chi
                Minh
                <br />
              </p>
            </p>
          </div>
          <div className="columns download">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

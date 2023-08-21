import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, live, github, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>

          <div className="button-div">
            <a
              href={live}
              target="_blank"
              class="button button--flex button--small portfolio__button visit"
            >
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                }}
              >
                Visit
              </span>
              <i class="uil uil-arrow-right button__icon"></i>
            </a>

            <a
              target="_blank"
              href={github}
              class="button button--flex button--small portfolio__button github"
            >
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                }}
              >
                GitHub
              </span>
              <i class="uil uil-arrow-right button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

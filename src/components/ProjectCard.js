import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, live, github, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a
            href={live}
            target="_blank"
            class="button button--flex button--small portfolio__button"
          >
            Visit
            <i class="uil uil-arrow-right button__icon"></i>
          </a>

          <a
            target="_blank"
            href={github}
            id="button-github"
            class="button button--flex button--small portfolio__button"
          >
            GitHub
            <i class="uil uil-arrow-right button__icon"></i>
          </a>
        </div>
      </div>
    </Col>
  );
};

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import QuizApp from "../assets/img/projects/QuizApp.PNG";
import Restaurant from "../assets/img/projects/Gericht Restaurant.PNG";
import Youtube from "../assets/img/projects/Youtube Clone.PNG";
import GPT from "../assets/img/projects/ReactGPT3.PNG";
import AdminDashboard from "../assets/img/projects/ReactAdminDashboard.PNG";
import TodoList from "../assets/img/projects/Todo List.PNG";
import RecipeApp from "../assets/img/projects/Food Recipe.PNG";
import HairStudio from "../assets/img/projects/Hair-Studio.PNG";
import WeatherApp from "../assets/img/projects/Live Weather.PNG";
import Ecommerce from "../assets/img/projects/E-commerce.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Quiz App",
      description: "ReactJS , CSS",
      live: "https://quizchallege.netlify.app/",
      github: "https://github.com/developermaroof/Project-QuizApp",
      imgUrl: QuizApp,
    },
    {
      title: "Gericht Restaurant",
      description: "ReactJS , CSS",
      live: "https://gerichtchineserestaurant.netlify.app/",
      github: "https://github.com/developermaroof/Project-GerichtRestaurant",
      imgUrl: Restaurant,
    },
    {
      title: "Youtube Clone",
      description: "ReactJS , MaterialUI , RapidAPI",
      live: "https://duplicatedyoutube.netlify.app/",
      github: "https://github.com/developermaroof/Project-Youtube_Clone",
      imgUrl: Youtube,
    },
    {
      title: "GPT-3 Website",
      description: "ReactJS , CSS",
      live: "https://devreactgpt3.netlify.app/",
      github: "https://github.com/developermaroof/Project_ReactGPT3",
      imgUrl: GPT,
    },
    {
      title: "Admin Dashboard",
      description: "ReactJS , CSS , MaterialUI",
      live: "https://developer-admindashboard.netlify.app/",
      github: "https://github.com/developermaroof/Project-ReactAdminDashboard",
      imgUrl: AdminDashboard,
    },
    {
      title: "Todo List",
      description: "ReactJS , CSS",
      live: "https://dailylistoftodo.netlify.app/",
      github: "https://github.com/developermaroof/Project-TodoList",
      imgUrl: TodoList,
    },
    {
      title: "Recipe App",
      description: "HTML , CSS , JavaScript",
      live: "https://worldfoodrecipes.netlify.app/",
      github: "https://github.com/developermaroof/Project-FoodRecipeApp",
      imgUrl: RecipeApp,
    },
    {
      title: "Hair Studio",
      description: "HTML , CSS , JavaScript , BootStrap",
      live: "https://hair-studio-developer-maroof.netlify.app/",
      github: "https://github.com/developermaroof/Project-Hair-Studio",
      imgUrl: HairStudio,
    },
    {
      title: "Weather App",
      description: "HTML , CSS , JavaScript",
      live: "https://livecurrentweatherapp.netlify.app/",
      github: "https://github.com/developermaroof/Project-WeatherApp",
      imgUrl: WeatherApp,
    },
    {
      title: "Ecommerce Website",
      description: "HTML , CSS , JavaScript",
      live: "https://ecommerce-developermaroof.netlify.app/",
      github: "https://github.com/developermaroof/Project-E-Commerce",
      imgUrl: Ecommerce,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Most recent work</p>
                  <div class="project__info">
                    <div>
                      <span class="project__info-title">02</span>
                      <span class="project__info-name">
                        Year <br />
                        experience
                      </span>
                    </div>

                    <div>
                      <span class="project__info-title">60+</span>
                      <span class="project__info-name">
                        Completed <br />
                        projects
                      </span>
                    </div>
                  </div>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Most Featured Projects
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

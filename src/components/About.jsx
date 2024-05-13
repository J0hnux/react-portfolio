import "./About.scss";

const About = () => {
  return (
    <section className="about container section" id="about">
      <div className="about__left">
        <h1>About</h1>
        <div className="about__box">
          <p>
            Hello! I'm Clark, a self-taught{" "}
            <span className="frontend__color">Frontend</span> web developer
            based on Philippines. Ever since I was a kid it has been my dream to
            create things. Be it web based apps, games or software apps.
          </p>
          <p>
            I am keen to learn new things, especially regarding my tech stack
            when there are new updates and changes I try my best to learn it
            ASAP so that I can use it already on my projects.
          </p>
          <p>
            My most recent project was a fullstack blog site using NextJS and
            various other technologies for the backend. Though I am not
            confident with my backend to be considered as a fullstack developer,
            but we will soon get there.
          </p>
        </div>
        <div className="tech__stack">
          <h3>Technologies</h3>
          <ul>
            <li>
              <img src="/Technologies/html.svg" alt="html" />
            </li>
            <li>
              <img src="/Technologies/css3.svg" alt="css3" />
            </li>
            <li>
              <img src="/Technologies/javascript.svg" alt="javascript" />
            </li>
            <li>
              <img src="/Technologies/react.svg" alt="reactjs" />
            </li>
            <li>
              <img src="/Technologies/nextjs.svg" alt="nextjs" />
            </li>
            <li>
              <img src="/Technologies/tailwind.svg" alt="tailwind" />
            </li>
            <li>
              <img src="/Technologies/sass.svg" alt="sass" />
            </li>
          </ul>
        </div>
      </div>
      <img src="/my-pic2.jpeg" alt="" />
    </section>
  );
};

export default About;

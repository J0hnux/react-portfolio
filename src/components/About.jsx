const About = () => {
  return (
    <section className="about container section">
      <div className="about__left">
        <h1>About</h1>
        <div className="about__box">
          <p>
            Hello! I'm Clark, a self-taught <span>Frontend</span> web developer
            based on Philippines. Ever since I was a kid it has been my dream to
            create things. Be it web based apps, games or software apps.
          </p>
          <p>
            I am keen to learn new things, especially regarding my tech stack
            when there are new updates and changes I try my best to learn it
            ASAP so that I can use it already on my projects.
          </p>
          <p>
            My previous project is a fullstack blog site. Though I am not
            confident with my backend to be considered as a fullstack developer,
            but we will get there.
          </p>
        </div>
        <div className="tech__stack">
          <h3>Technologies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>ReactJS</li>
            <li>NextJS</li>
            <li>TailwindCSS</li>
            <li>SASS</li>
          </ul>
        </div>
      </div>
      <img src="/my-pic2.jpeg" alt="" />
    </section>
  );
};

export default About;

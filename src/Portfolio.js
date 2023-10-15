import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="jumbotron text-center bg-primary text-white">
      <h1>Welcome to My Portfolio</h1>
      <p>Web Developer | Graphic Designer | Content Creator</p>
    </header>
  );
};

const About = () => {
  return (
    <section className="my-5">
      <h2>About Me</h2>
      <p>I am a passionate and creative individual with experience in web development, graphic design, and content creation. I love solving problems and creating beautiful, user-friendly designs.</p>
    </section>
  );
};

const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'This is a brief description of Project 1.' },
    { title: 'Project 2', description: 'This is a brief description of Project 2.' },
    { title: 'Project 3', description: 'This is a brief description of Project 3.' },
  ];

  return (
    <section className="my-5">
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

const Contact = () => {
  return (
    <section className="my-5">
      <h2>Contact Me</h2>
      <p>Email: myemail@example.com</p>
      <p>Phone: +1234567890</p>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="text-center bg-dark text-white py-3 mt-auto">
      <p>©2023 My Portfolio</p>
    </footer>
  );
};

export default Portfolio;

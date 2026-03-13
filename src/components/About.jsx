import './styles.css'

const About = ({ title = "About Me", paragraphs = [
  "Hello, I'm Entonyos Solomon, a software engineer who graduated from Haramaya University. I am passionate about creating efficient, scalable, and user-friendly applications using modern web technologies.",
  "As a Full Stack Developer, I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have experience in building both frontend and backend applications. I am constantly learning and exploring new technologies to enhance my development skills.",
  "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community."
] }) => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">{title}</h2>
        <div className="about-content">
          {paragraphs.map((text, idx) => (
            <p className="about-text" key={idx}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About 
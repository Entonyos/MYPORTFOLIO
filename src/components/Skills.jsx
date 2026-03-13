import './styles.css'

const Skills = ({
  skills = {
    'Frontend': [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Redux', level: 80 },
    ],
    'Backend': [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 80 },
    ],
    'Tools': [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'Postman', level: 90 },
      { name: 'VS Code', level: 90 },
    ],
  }
}) => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="skill-category">
              <h3 className="skill-category-title">{category}</h3>
              <div className="skills-list">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 
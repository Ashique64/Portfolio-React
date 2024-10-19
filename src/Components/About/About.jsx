import React from "react";
import "./About.scss";

const About = () => {
    const calculateAge = (birthDate) => {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        let age = today.getFullYear() - birthDateObj.getFullYear();
        return age;
    };

    const age = calculateAge("1999-08-20");

    const ProgressBar = ({ skill, value }) => (
        <div className="progress">
            <span className="skill">
                {skill} <i className="val">{value}%</i>
            </span>
            <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: `${value}%` }}></div>
            </div>
        </div>
    );

    return (
        <div id="about">
            <div className="details">
                <h2>About me</h2>
                <p>
                    Hi, I'm Muhammed Ashique KP, a passionate Full Stack Developer with expertise in Python, Django, and
                    React.js. I specialize in building responsive, user-friendly web applications that provide seamless user
                    experiences. My proficiency in front-end technologies, including React and Bootstrap, combined with
                    strong back-end experience in Django, allows me to create complete solutions that are both functional
                    and visually appealing. I thrive on continuous learning and enjoy tackling complex challenges,
                    especially those involving API integrations and optimizing performance. With hands-on experience across
                    multiple projects, I’ve developed an eye for detail and a commitment to delivering high-quality,
                    scalable solutions.
                </p>
                <div className="personal">
                    <div className="sec1">
                        <ul>
                            <li>
                                <i className="fas fa-chevron-right"></i>
                                <strong>Birthday:</strong> <span>20 August 1999</span>
                            </li>
                            <li>
                                <i className="fas fa-chevron-right"></i> <strong>Website:</strong>
                                <span>
                                    <a href="#"><www className="ashique64 netlify app"></www></a>
                                </span>
                            </li>
                            <li>
                                <i className="fas fa-chevron-right"></i> <strong>Phone:</strong> <span>8606128064</span>
                            </li>
                            <li>
                                <i className="fas fa-chevron-right"></i> <strong>City:</strong>{" "}
                                <span>Malappuram,kerala</span>
                            </li>
                        </ul>
                    </div>
                    <div className="sec2">
                        <ul>
                            <li>
                                <i className="fas fa-chevron-right"></i> <strong>Age:</strong> <span>{age}</span>
                            </li>
                            <li>
                                <i className="fas fa-chevron-right"></i> <strong>Plus two:</strong> <span>Commerce</span>
                            </li>
                            <li>
                                <i className="fas fa-chevron-right"></i> <strong>Email:</strong>
                                <span>ashique200899@gmail.com</span>
                            </li>
                            <li>
                                <i className="fas fa-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <p>My skills are achieved through only self-learning technique.</p>
                <div className="skill_set">
                    <div className="skill1">
                        <ProgressBar skill="Python" value={90} />
                        <ProgressBar skill="React Js" value={85} />
                        <ProgressBar skill="CSS" value={95} />
                        <ProgressBar skill="Bootstrap" value={93} />
                        <ProgressBar skill="MongoDB" value={75} />
                        <ProgressBar skill="Postman" value={85} />
                    </div>
                    <div className="skill2">
                        <ProgressBar skill="Django" value={88} />
                        <ProgressBar skill="HTML" value={99} />
                        <ProgressBar skill="Java Script" value={80} />
                        <ProgressBar skill="Git" value={82} />
                        <ProgressBar skill="PostgreSQL" value={87} />
                        <ProgressBar skill="Figma" value={84} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

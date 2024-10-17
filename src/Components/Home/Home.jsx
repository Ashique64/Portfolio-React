import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaGithub, FaLinkedin, FaInstagram, FaCode } from "react-icons/fa";
import "./Home.scss";

const Home = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Full-Stack Developer", "Python Developer", "Django Developer", "React JS Developer"],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            startDelay: 500,
            loop: true,
            showCursor: false,
        };

        const typed = new Typed(typedElement.current, options);

        return () => {
            typed.destroy();
        };
    });
    return (
        <div id="home">
            <div className="details">
                <h2>Hi, I'm <span>Muhammed Ashique</span></h2>
                <h3>
                    I'm <span ref={typedElement}></span>
                </h3>
                <p>
                    I am a Full Stack Developer with a strong background in Python, Django, and React.js. I specialize in
                    building responsive and user-friendly web applications, focusing on optimizing performance and
                    delivering seamless user experiences. I am passionate about continuous learning and enjoy solving
                    complex challenges in software development.
                </p>
                <div className="social">
                    <a href="https://github.com/Ashique64" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon" size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammed-ashique-k-p-9a03b0267/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" size={20} />
                    </a>
                    <a href="https://leetcode.com/u/ashique64/" target="_blank" rel="noopener noreferrer">
                        <FaCode className="icon" size={20} />
                    </a>
                    <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon" size={20} />
                    </a>
                </div>
            </div>

            <div className="profile_pic">
                <div className="pic">
                    <img src="/Screenshot_20230330_111133_Instagram.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;

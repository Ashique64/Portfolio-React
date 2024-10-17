import React from "react";
import "./Services.scss";

const Services = () => {
    return (
        <div id="services">
            <div className="title">
                <h2>Services</h2>
                <p>
                    As a Full Stack Python developer, I offer a range of services to clients who need web application
                    development. Some of the services that I can provide below here
                </p>
            </div>
            <div className="items">
                <div className="item1">
                    <div className="card">
                        <i className="fas fa-server"></i>
                        <h5>Front-end Development</h5>
                        <p>
                            I have expertise in developing responsive and user-friendly front-end interfaces using React,
                            Redux, Bootstrap, and Material UI. I can create engaging and intuitive user experiences that are
                            optimized for different devices and screen sizes.
                        </p>
                    </div>
                </div>
                <div className="item2">
                    <div className="card">
                        <i className="fas fa-laptop-code"></i>
                        <h5>Back-end Development</h5>
                        <p>
                            I have expertise in building scalable and secure back-end applications using Node.js, Express,
                            MongoDB, and Mongoose. I can develop RESTful APIs, integrate with other services, and implement
                            features such as authentication, authorization, and payment gateways
                        </p>
                    </div>
                </div>
                <div className="item3">
                    <div className="card">
                        <i className="fas fa-paint-brush"></i>
                        <h5>Figma Designing</h5>
                        <p>
                            I specialize in UI/UX design using Figma, a powerful tool for creating intuitive and
                            aesthetically pleasing user interfaces. I focus on creating wireframes, prototypes, and
                            interactive design components that align with user needs and business goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;

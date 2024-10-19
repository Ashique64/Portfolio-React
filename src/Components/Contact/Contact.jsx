import React from "react";
import "./Contact.scss";

const Contact = () => {
    return (
        <div id="contact">
            <div className="title">
                <h2>Get in touch</h2>
            </div>

            <div className="section">
                <div className="details">
                    <div className="items">
                        <h3>Let's talk</h3>
                        <p>
                            I'm currently available to take on new projects, so feel free to send me a message about
                            anything that you want me to work on.You can contact anytime.
                        </p>
                        <div className="icon"><i className="fas fa-envelope"></i><span>ashique200899@gmail.com</span></div>
                        <div className="icon"><i className="fas fa-phone"></i><span>+91 8606128064</span></div>
                        <div className="icon"><i className="fas fa-map-marker-alt"></i><span>Malappuram, Kerala, India</span></div>
                    </div>
                </div>
                <div className="form">
                    <div className="items">
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder="Enter your name" />
                        <label htmlFor="">Your Email</label>
                        <input type="email" placeholder="Enter your email" />
                        <label htmlFor="">Enter Your Message Here</label>
                        <textarea name="" rows={7} placeholder="Enter your message" id=""></textarea>
                        <button>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

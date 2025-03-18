import React from "react";
import "./Portfolio.scss";

const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="title">
                <h2>My Latest Work</h2>
            </div>
            <div className="works">
                <div className="work1">
                    <div className="card1">
                        <a target="_blank" href="https://repsking.in/">
                            <img src="/repsking.PNG" alt="" />
                        </a>
                    </div>

                    <div className="card6">
                        <a target="_blank" href="https://insurancebasaar.com/">
                            <img src="/insurancebasaar.PNG" alt="" />
                        </a>
                    </div>

                    <div className="card3">
                        <a target="_blank" href="https://kalabam.vercel.app/">
                            <img src="/kalabam.PNG" alt="" />
                        </a>
                    </div>
                    <div className="card4">
                        <a target="_blank" href="https://mindzen-project-c6ccb86955e5.herokuapp.com/">
                            <img src="/mindzen.PNG" alt="" />
                        </a>
                    </div>
                    <div className="card5">
                        <a target="_blank" href="https://laundry-orcin-one.vercel.app/">
                            <img src="/laundry.PNG" alt="" />
                        </a>
                    </div>
                    <div className="card2">
                        <a target="_blank" href="https://netflix-react-js-ten.vercel.app/">
                            <img src="/netflix-react.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

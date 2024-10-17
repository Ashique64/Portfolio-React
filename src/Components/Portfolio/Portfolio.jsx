import React from 'react'
import './Portfolio.scss'

const Portfolio = () => {
  return (
    <div id="portfolio">
        <div className="title">
            <h2>My Latest Work</h2>
        </div>
        <div className="works">
            <div className="work1">
                <div className="card1">
                    <a target='_blank' href="https://netflix-react-js-ten.vercel.app/">
                        <img src="/netflix-react.png" alt="" />
                    </a>
                </div>
                <div className="card2">
                    <a target='_blank' href="https://to-do-seven-psi.vercel.app/">
                        <img src="/To-Do react.png" alt="" />
                    </a>
                </div>
                <div className="card3">
                    <a target='_blank' href="https://spotify-kqk5.vercel.app/">
                        <img src="/Spotify.png" alt="" />
                    </a>
                </div>
                <div className="card4">
                    <a target='_blank' href="https://olx-react-tau.vercel.app/">
                        <img src="/Olx-react.png" alt="" />
                    </a>
                </div>
                <div className="card5">
                    <a target='_blank' href="https://starbucks-gules-three.vercel.app/">
                        <img src="/Starbucks.png" alt="" />
                    </a>
                </div>
                <div className="card6">
                    <a target='_blank' href="https://acer-x37a.vercel.app/">
                        <img src="/Acer.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
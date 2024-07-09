// DashBoard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import filterImg from './assets/Images/filter.png';
import cartImg from './assets/Images/cart.png';
import helpImg from './assets/Images/help.png';
import profileImg from './assets/Images/profile.jpg';
import menuImg from './assets/Images/menu.png';
import upcomingImg from './assets/Images/upcoming.webp';
import movie1Img from './assets/Images/movie1.jpg';
import movie2Img from './assets/Images/movie2.jpg';
import movie3Img from './assets/Images/movie3.jpg';

const DashBoard = () => {
    return (
        <>
            <section className="top-bar">
                <div className="left-content">
                    <h2 className="title">Dharineesh</h2>
                    <ul className="navigation">
                        <li><a href="#">Home</a></li>
                    </ul>
                </div>
                <div className="right-content">
                    <img src={filterImg} alt="" className="filter" />
                    <img src={cartImg} alt="" className="cart" />
                    <img src={helpImg} alt="" className="help" />
                    <div className="profile-img-box">
                        <img src={profileImg} alt="" />
                    </div>
                    <img src={menuImg} alt="" className="menu" />
                </div>
            </section>
            <section className="main-container">
                <div className="sidebar">
                    <form action="#">
                        <div className="sidebar-groups">
                            <h3 className="sg-title">Categories</h3>
                            <input type="checkbox" id="adventure" name="adventure" value="adventure" />
                            <label htmlFor="adventure">Adventure</label><br />
                            <input type="checkbox" id="action" name="action" value="action" />
                            <label htmlFor="action">Action</label><br />
                            <input type="checkbox" id="animation" name="animation" value="animation" />
                            <label htmlFor="animation">Animation</label><br />
                            <input type="checkbox" id="comedy" name="comedy" value="comedy" />
                            <label htmlFor="comedy">Comedy</label><br />
                            <input type="checkbox" id="science" name="science" value="science" />
                            <label htmlFor="science">Science Fiction</label><br />
                            <input type="checkbox" id="thriller" name="thriller" value="thriller" />
                            <label htmlFor="thriller">Thriller</label><br />
                            <input type="checkbox" id="history" name="history" value="history" />
                            <label htmlFor="history">History</label><br />
                            <input type="checkbox" id="documentary" name="documentary" value="documentary" />
                            <label htmlFor="documentary">Documentary</label><br />
                            <input type="checkbox" id="fantasy" name="fantasy" value="fantasy" />
                            <label htmlFor="fantasy">Fantasy</label><br />
                        </div>
                        {/* <div className="sidebar-groups">
                            <h3 className="sg-title">Language</h3>
                            <input type="checkbox" id="english" name="english" value="english" />
                            <label htmlFor="english">English</label><br />
                            <input type="checkbox" id="spanish" name="spanish" value="spanish" />
                            <label htmlFor="spanish">Spanish</label><br />
                            <input type="checkbox" id="hindi" name="hindi" value="hindi" />
                            <label htmlFor="hindi">Hindi</label><br />
                        </div>
                        <div className="sidebar-groups">
                            <h3 className="sg-title">Time</h3>
                            <input type="radio" id="morning" name="time" value="morning" />
                            <label htmlFor="morning">Morning</label><br />
                            <input type="radio" id="night" name="time" value="night" />
                            <label htmlFor="night">Night</label><br />
                        </div> */}
                    </form>
                </div>
                <div className="movies-container">
                    <div className="upcoming-img-box">
                        <img src={upcomingImg} alt="" />
                        <p className="upcoming-title">Upcoming Movie</p>
                        <div className="buttons">
                            <Link to="/CreateBookingComponent" className="btn">Book Now</Link>
                        </div>
                       
                    </div>
                    <div className="current-movies">
                        <div className="current-movie">
                            <div className="cm-img-box">
                                <img src={movie1Img} alt="" />
                          
                            </div>
                            <h3 className="movie-title">Jurassic World</h3>
                            <p className="screen-name">Screen : Platinum</p>
                            <div className="buttons">
                            <Link to="/ReviewComments" className="btn">Comments</Link>
                        </div>
                        </div>
                        <div className="current-movie">
                            <div className="cm-img-box">
                                <img src={movie2Img} alt="" />
                            </div>
                            <h3 className="movie-title">Vikram</h3>
                            <p className="screen-name">Screen : Gold</p>
                        </div>
                        <div className="current-movie">
                            <div className="cm-img-box">
                                <img src={movie3Img} alt="" />
                            </div>
                            <h3 className="movie-title">Firestarter</h3>
                            <p className="screen-name">Screen : Silver</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DashBoard;

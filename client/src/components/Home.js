import React from "react";
import {Link} from 'react-router-dom';
import "../css/Home.css";
import hero from "../images/heroImg.jpeg";
import infoImgOne from "../images/infoImgOne.jpg";
import infoImgTwo from "../images/infoImgTwo.jpg";
import fullBodyImg from "../images/fullBodyImg.jpeg";
import subscribeImg from "../images/subscribeImg.jpg";




const Home = () => {
  return (
    <div className="container-fluid">

    {/* hero section */}
      <div
        className="container-fluid hero"
        style={{ backgroundImage: `url("${hero}")` }}
      >
        <div className="overlay">
          <div className="container text-start hero headline">
            <h1>Fashion Allows You To Live The Fantasty</h1>
          </div>
        </div>
      </div>

      {/* request a reservation */}
      <div className="container-fluid">
        <div className="reservation text-center">
          <h3>
            Located in Gowanus, Brooklyn, Vance serves Authentic tapas from
            Catalonia in a modern industrial space.
          </h3>
          <p className="lead">We also serve beer, wine and spirits.</p>
          <button className="btn btn-outline-light">Make A Reservation</button>
        </div>
      </div>

      {/* first info section */}
      <div className="container-fluid">
      <div className="row infoSec">
          <div className="col-md-6 col-sm-12 infoText">
          <div className="infoCopy text-center">

          <h3 className="infoH text-center ">Tapas originated in the Catalonian region of Spain and are small plates typically consumed with wine or vermouth.</h3>
          <p className="infoP text-center">We combine traditional preparations with local ingredients for dishes that are authentic to both their Spanish origins and New York setting.</p>
          <Link to="/our-story" style={{paddingTop:"20px", color:"black"}}>Learn more about our story.</Link>
          </div>

          </div>
          <div className="col-md-6 col-sm-12 infoImgDiv topPad">
              <img src={infoImgOne} className="infoImg" alt="Model: Tasha"/>
          </div>
      </div>

      </div>

      {/* Image section */}
      <div className=" imgSec" style={{backgroundImage:`url("${fullBodyImg}")`}}></div>

       {/* second info section */}
       <div className="container-fluid">
      <div className="row infoSec">
          <div className="col-md-6 col-sm-12 infoImgDiv bottomPad">
              <img src={infoImgTwo} className="infoImg" alt="Model: Tasha"/>
          </div>
          <div className="col-md-6 col-sm-12 infoText">
          <div className="infoCopy text-center">

          <h3 className="infoH text-center ">Tapas originated in the Catalonian region of Spain and are small plates typically consumed with wine or vermouth.</h3>
          <p className="infoP text-center">We combine traditional preparations with local ingredients for dishes that are authentic to both their Spanish origins and New York setting.</p>
          </div>

          </div>
      </div>

      </div>

      {/* another blue section */}
      <div className="container-fluid">
        <div className="reservation text-center">
          <h3>
            Located in Gowanus, Brooklyn, Vance serves Authentic tapas from
            Catalonia in a modern industrial space.
          </h3>
          <p className="lead">We also serve beer, wine and spirits.</p>
          <button className="btn btn-outline-light">Make A Reservation</button>
        </div>
      </div>

      {/* subscription */}
      <div  className="container-fluid" style={{ backgroundImage: `url("${subscribeImg}")` }}>
      <div id="subscription">
      <div className="overlay">
        <div className="subscription text-center">
        <div className="container subBorder text-center">
          <h3 className="text-center">
            Subscribe to Our Newsletter
          </h3>
          <p className="lead">Sign up to receive news and updates.</p>
          <div className="row">
            <input type="text"/>
          <button className="btn btn-outline-light">Sign Up</button>
          </div>
          </div>
          </div>
          </div>
          </div>
      </div>


    </div>

    
  );
};

export default Home;

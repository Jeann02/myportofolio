import React from "react";
import "./Hero.css";
import profile_img from "../../assets/idoy.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I`m Ridho Khoer,</span> frontend developer based in ID
      </h1>
      <p>I am a frontend developer from Subang, ID with 1 years </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;

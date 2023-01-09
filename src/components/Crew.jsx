import React, { useEffect } from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import douglasImg from "../assets/crew/image-douglas-hurley.png";
import markImg from "../assets/crew/image-mark-shuttleworth.png";
import victorImg from "../assets/crew/image-victor-glover.png";
import anoushehImg from "../assets/crew/image-anousheh-ansari.png";

export const Crew = () => {
  const Douglas = {role: "COMMANDER", name: "DOUGLAS HURLEY", bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time ascommander of Crew Dragon Demo-2."};
  const Mark = {role: "MISSION SPECIALIST", name: "MARK SHUTTLEWORTH", bio: " Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."};
  const Victor = {role: "PILOT", name: "VICTOR GLOVER", bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the  International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "};
  const Anousheh = {role: "FLIGHT ENGINEER", name: "ANOUSHEH ANSARI", bio: " Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "};
  
  const initialCrewMember = () => JSON.parse(localStorage.getItem("crewMember")) || Douglas;
  const initalCrewImg = () => localStorage.getItem("crewMemberImg") || douglasImg;

  
  const [currentCrewMember, setCurrentCrewMember] = useState(initialCrewMember);
  const [currentCrewImg, setCurrentCrewImg] = useState(initalCrewImg)

  useEffect(() => {
    localStorage.setItem("crewMember", JSON.stringify(currentCrewMember));
    localStorage.setItem("crewMemberImg", currentCrewImg);
  });

  document.body.className = "crew-page";
  return (
    <div className='crew-container'>
      <div className='header-container'>
        <h5 className=' crew-header'><span>02 </span>MEET YOUR CREW</h5>
      </div>
      
      <div className='crew-text-container'>
        <div>
          <h4 className='crew-role'>{currentCrewMember.role}</h4>
        </div>
        <div >
          <h3 className='crew-name'>{currentCrewMember.name}</h3>
        </div>
        <div >
          <p className='crew-bio'>{currentCrewMember.bio}</p>
        </div>
      </div>

      <div className='mobile-wrapper'>
        <div className='crew-nav'>
        
          <FontAwesomeIcon icon={faCircle} 
          className="crew-nav-btn" 
          onClick={() => {setCurrentCrewMember(Douglas); setCurrentCrewImg(douglasImg)}}
          style={currentCrewMember.role === "COMMANDER" ? {opacity: 100} : {opacity: 0.17}}
          />

          <FontAwesomeIcon icon={faCircle} 
          className="crew-nav-btn" 
          onClick={() => {setCurrentCrewMember(Mark); setCurrentCrewImg(markImg)}}
          style={currentCrewMember.role === "MISSION SPECIALIST" ? {opacity: 100} : {opacity: 0.17}}
          />

          <FontAwesomeIcon icon={faCircle} 
          className="crew-nav-btn" 
          onClick={() => {setCurrentCrewMember(Victor); setCurrentCrewImg(victorImg)}}
          style={currentCrewMember.role === "PILOT" ? {opacity: 100} : {opacity: 0.17}}
          />

          <FontAwesomeIcon icon={faCircle} 
          className="crew-nav-btn" 
          onClick={() => {setCurrentCrewMember(Anousheh); setCurrentCrewImg(anoushehImg)}}
          style={currentCrewMember.role === "FLIGHT ENGINEER" ? {opacity: 100} : {opacity: 0.17}}
          />
        </div>
      </div>
    
      <div className='crew-img-container'>
      <img src={currentCrewImg} alt="" className="crew-img"/>
      <hr className='mobile-hr'/>
      </div>
    </div>
  )
}

import React, { useState } from "react";
import NavBar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeroContainer>
        <NavBar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
          <HeroItems>
            <HeroH1>Les meilleurs pizza de votre vie</HeroH1>
            <HeroP>Pêtre en 10 mins</HeroP>
            <HeroBtn>Commander</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;

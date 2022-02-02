import React from "react";
import Nav from "../Navigation";
import HeaderBackground from "../HeaderBackground";
import Typewriter from 'typewriter-effect';

function Header({ currentPage, setCurrentPage }) {
  return (
      <>
      <header className="flex-row space-between align-center px-2">
        <h1>Kyrsten Urbayan</h1>
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}></Nav>
        <HeaderBackground />
        <Typewriter
          options={{
            loop: true,
            delay: 50,
            deleteSpeed: 25
          }}
          onInit={(typewriter) => {
            typewriter.typeString("Hi, I'm Kyrsten!")
              .pauseFor(2500)
              .deleteAll()
              .typeString('I am a full-stack developer!')
              .pauseFor(2500)
              .deleteChars(22)
              .typeString('n artist!')
              .pauseFor(2500)
              .deleteChars(9)
              .typeString(' foodie!')
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
        />
      </header>
      </>
  );
}

export default Header;

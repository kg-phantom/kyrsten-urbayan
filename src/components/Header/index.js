import React from "react";
import Nav from "../Navigation";
import HeaderBackground from "../HeaderBackground";

function Header({ currentPage, setCurrentPage }) {
  return (
      <>
      
      <header className="flex-row space-between align-center px-2">
        <h1>Kyrsten Urbayan</h1>
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}></Nav>
        <HeaderBackground />
      </header>
      </>
  );
}

export default Header;

import React from "react";
import { scroller } from "react-scroll";

function Nav(props) {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];

  const { currentPage, setCurrentPage } = props;

  return (
    <nav>
      <ul className="flex-row space-around">
        {tabs.map((tab) => (
          <li
            className={`mx-2 px-1 ${
              currentPage === tab ? "navActive" : "underline"
            }`}
            key={tab}
            onClick={() => {
                setCurrentPage(tab);
                scroller.scrollTo("main", {
                    smooth: true
                });
            }}
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

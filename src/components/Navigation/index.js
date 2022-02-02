import React from "react";
import { Link } from "react-scroll";

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
          >
            <Link
              className="link"
              onClick={() => setCurrentPage(tab)}
              to={tab.toLowerCase()}
              spy={true}
              smooth={true}
            >
              {tab}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

import React from "react";

function Nav(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

    const { currentPage, setCurrentPage } = props;

    return (
        <nav>
            <ul className='flex-row space-around'>
                {
                    tabs.map(tab => (
                        <li 
                        className={`mx-2 px-1 ${
                            currentPage === tab && 'navActive'
                        }`}
                        key={tab}
                        onClick={() => setCurrentPage(tab)}>
                            {tab}
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Nav;
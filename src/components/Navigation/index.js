import React from "react";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    return (
        <nav>
            {/* <ul className='flex-row'>
                    <li className='mx-2'>
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'
                            }`} key={category.name}>
                          <span
                            onClick={() => {
                              setCurrentCategory(category);
                              setContactSelected(false);
                            }}
                          >
                            {capitalizeFirstLetter(category.name)}
                          </span>
                        </li>
                    ))}
            </ul> */}
        </nav>
    );
}

export default Nav;
import React from 'react';
import Nav from '../Navigation';

function Header() {
    return (
        <header className='flex-row space-between align-center px-2'>
            <h1>Kyrsten Urbayan</h1>
            <Nav></Nav>
        </header>
    );
}

export default Header;
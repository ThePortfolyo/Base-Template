import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div className="flex md:justify-center space-x-10  py-3 font-semibold text-[#ffffff]">
                <Link to="/">HOME</Link>
                <Link to="/">ABOUTME</Link>
                <Link to="/">SKILLS</Link>
                <Link to="/">SERVICES</Link>
                <Link to="/">CONTACT</Link>
            </div>
        </div>
    );
}

export default Header;

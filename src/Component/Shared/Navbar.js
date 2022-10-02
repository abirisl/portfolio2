/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navbar = () => {
    return (
        <div class="navbar">
            <div class="flex-1">
                <a href='' class="cursor-pointer text-upperCase text-2xl text-white font-bold">Portfolio</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0 text-white">
                    <li><a>HOME</a></li>
                    <li><a>ABOUT</a></li>
                    <li><a>SERVICES</a></li>
                    <li><a>PAGES</a></li>
                    <li><a>BLOGS</a></li>
                    <li><a>CONTACTS</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
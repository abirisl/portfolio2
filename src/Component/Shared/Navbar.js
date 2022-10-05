/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navbar = () => {
    return (
        <div class="navbar">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-accent lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>HOME</a></li>
                        <li><a>ABOUT</a></li>
                        <li><a>SERVICES</a></li>
                        <li><a>PAGES</a></li>
                        <li><a>BLOGS</a></li>
                        <li><a>CONTACTS</a></li>
                    </ul>
                </div>
                <a class="cursor-pointer uppercase font-bold text-white text-3xl ml-10 lg:ml-0">portfolio</a>
            </div>
            <div class="navbar-center hidden lg:flex">
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
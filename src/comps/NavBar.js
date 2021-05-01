import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <NavLink
          to="/"
          exact
          className="text-white no-underline hover:text-white hover:no-underline"
        >
          <span class="text-2xl pl-2">
            <i class="em em-grinning" /> Ntuthuko Portfolio
          </span>
        </NavLink>
      </div>

      <div class="block lg:hidden">
        <button
          id="nav-toggle"
          class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <NavLink
              to="/posts"
              activeClassName=" bg-gray-700 text-green-100"
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
            >
              Blog Posts
            </NavLink>
          </li>
          <li class="mr-3">
            <NavLink
              to="/projects"
              activeClassName=" bg-gray-700 text-green-100"
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
            >
              Projects
            </NavLink>
          </li>
          <li class="mr-3">
            <NavLink
              to="/aboutMe"
              activeClassName=" bg-gray-700 text-green-100"
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
            >
              About Me
            </NavLink>
          </li>
         
         
        </ul>
      </div>
    </nav>
  );
}

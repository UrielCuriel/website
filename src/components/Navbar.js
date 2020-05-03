import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "",
            })
          : this.setState({
              navBarActiveClass: "hidden",
            });
      }
    );
  };

  render() {
    return (
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6 fixed w-full bg-translucent  text-white">
        <div class="flex items-center flex-shrink-0 text-white mr-6 opacity-0 lg:hidden">
          <svg
            class="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
        </div>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={this.toggleHamburger}
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
          class={`w-full ${this.state.navBarActiveClass} block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div class="text-sm lg:flex-grow lg:flex lg:justify-center">
            <Link className="px-4 py-2 block lg:inline-block text-neutral-600 border-b border-transparent hover:border-primary-100 hover:text-primary-300 transition-all duration-500 ease-in-out">About </Link>
            <Link className="px-4 py-2 block lg:inline-block text-neutral-600 border-b border-transparent hover:border-primary-100 hover:text-primary-300 transition-all duration-500 ease-in-out">My Work </Link>
            <Link className="px-4 py-2 block lg:inline-block text-neutral-600 border-b border-transparent hover:border-primary-100 hover:text-primary-300 transition-all duration-500 ease-in-out">Blog </Link>
            <Link className="px-4 py-2 block lg:inline-block text-neutral-600 border-b border-transparent hover:border-primary-100 hover:text-primary-300 transition-all duration-500 ease-in-out">Contact </Link>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;

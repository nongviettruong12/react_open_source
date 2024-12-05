import React from "react";
("use client");
import { Link } from "react-router-dom";
import { MegaMenu, Navbar } from "flowbite-react";
import image from "../assets/2029337.png";
const Header = () => {
  return (
    <>
    
      <div className="flex justify-between bg-lime-950 text-[white] p-2">
        <div className="flex ml-[50px]"> +001234567890</div>
        <div>
          Get 50% Off on Selected Items |{" "}
          <Link className="hover:underline">Shop Now</Link>{" "}
        </div>
        <div className="flex mr-[50px]">
          <Link className="mr-[5px] hover:underline">
            Language: <span>ENG</span> |
          </Link>
          <Link className="hover:underline">Location: Vn</Link>
        </div>
      </div>
      <MegaMenu>
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:space-x-8 ">
          <Navbar.Brand href="/">
            <img alt="" src={image} className="mr-3 h-6 sm:h-9 w-[50px]" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite
            </span>
          </Navbar.Brand>
          <div className="order-2 hidden items-center md:flex">
            <Link
              href="#"
              className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5 flex"
            >
              <span className="mr-[5px]">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
              Account
            </Link>
            <Link
              href="#"
              className="mr-[10px] rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5 flex"
            >
              <span className="mr-[5px]">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg>
              </span>
              Cart
            </Link>
          </div>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="#" className='mt-[10px]'>Deals</Navbar.Link>
            <Navbar.Link className='mt-[10px]'>
              <MegaMenu.Dropdown toggle={<>Categories</>} >
                <ul className="grid grid-cols-3">
                  <div className="space-y-4 p-4">
                    <li>
                      <Link
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                       Headphone
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Keyboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Mouse
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Webcam
                      </Link>
                    </li>
                  </div>
                  <div className="space-y-4 p-4">
                    <li>
                      <Link
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Microphones
                      </Link>
                    </li>
                  </div>
                </ul>
              </MegaMenu.Dropdown>
            </Navbar.Link>
            <Navbar.Link href="#" className='mt-[10px]'>What' new</Navbar.Link>
            <Navbar.Link href="#" className='mt-[10px]'>Delivery</Navbar.Link>
            <input type="text" className="rounded-3xl " placeholder="Searching product..."/>
          </Navbar.Collapse>
        </div>
      </MegaMenu>
      <div className="container mx-auto">
      <div className="text-center"><img src="https://www.toyota.com.vn//Resources/Images/251767956485382E3D8EF5D0E1D6D218.png" alt="" /></div>
      </div>
    </>
  );
};

export default Header;

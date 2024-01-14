import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { MdHomeRepairService } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const isClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {/* Navbar------- */}
      <div className="space-y-10">
        <nav className="flex justify-between bg-gray-100 items-center py-2 px-6 fixed top-0 left-0 right-0 z-20">
          <div className="flex md:flex md:items-center space-x-1">
            <img
              className="w-8"
              src="src/assets/images/black rowgrid.png"
              alt=""
            />
            <h3 className="text-lg font-bold tracking-widest uppercase">
              Rowgrid
            </h3>
          </div>
          <div className="hidden tracking-widest font-semibold uppercase md:block md:space-x-5 md:font-medium md:text-sm">
            <Link className="hover:text-gray-500 px-3" to="/">
              Home
            </Link>
            <Link className="hover:text-gray-500 px-3" to="/about">
              About
            </Link>
            <Link className="hover:text-gray-500 px-3" to="/services">
              Services
            </Link>
            <Link className="hover:text-gray-500 px-3" to="/projects">
              Projects
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <IoMoonOutline className="text-xl" />
            <button className="hidden tracking-widest border border-[#3C403D]  md:block px-4 py-1 font-semibold rounded-sm text-xs">
              CONTACT
            </button>
            <button
              onClick={openMenu}
              className="block focus:outline-none md:hidden"
            >
              {isOpen ? <IoClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </nav>
        {/* Navbar end------------ */}
        {/* fone Navbar--------- */}
        {isOpen ? (
          <div>
            <div className="w-[55%] shadow-lg bg-gray-100 px-4 py-20 h-screen text-lg font-medium flex flex-col gap-10 text-left fixed top-0 right-0  md:hidden">
              <div className="flex items-center space-x-4">
                <MdHome />
                <Link onClick={isClose} className="hover:text-gray-500" to="/">
                  Home
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <MdHomeRepairService />
                <Link onClick={isClose} className="hover:text-gray-500" to="/">
                  About
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <MdHomeRepairService />
                <Link onClick={isClose} className="hover:text-gray-500" to="/">
                  Services
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <FaDiagramProject />
                <Link onClick={isClose} className="hover:text-gray-500" to="/">
                  Projects
                </Link>
              </div>
              <div className="fixed bottom-0 right-0 w-[55%]">
                <button className="tracking-widest w-[100%] py-3 font-semibold">
                  Contact
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* fone navbar end------------ */}
        <Outlet />
      </div>
    </>
  );
};
export default Navbar;

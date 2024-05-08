import { AlignJustify, X, Info, Home, EllipsisVertical, Store } from 'lucide-react'; 
import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [showIcons, setShowIcons] = useState(false); 

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
    setShowIcons(false); 
  };

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  const navItems = [
    { label: "HOME", icon: <Home />, href: "#",className: "decoration-4" },
    { label: "MENU", icon: <EllipsisVertical />, href: "#", onClick: toggleIcons }, 
    { label: "ABOUT US", icon: <Info />, href: "#" }, 
    { label: "STORE LOCATOR", icon: <Store />, href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg border-b border-neutral-700/80 bg-white">
      <div className="container px-2 mx-auto text-sm">
        <div className="flex justify-between items-center flex-shrink-0">
          <img className="h-11 w-28 ml-3" src={logo} alt="" />
          <ul className="hidden lg:flex ml-14 space-x-6 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className="text-green-600 text-xl flex items-center duration-300 no-underline hover:underline decoration-yellow-400 decoration-4 underline-offset-8" href={item.href} onClick={item.onClick}>
                  {showIcons && <span className="mr-1">{item.icon}</span>}
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="shadow-lg shadow-black-500/40 ... py-2 px-3 border rounded-md bg-green-700 duration-300 hover:bg-green-800 text-white text-base"
              >
                TALK TO US
              </button>
            </li>
          </ul>
          <div className="lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X className="text-gray-600" /> : <AlignJustify className="text-gray-600" />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-50 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a className="text-white flex items-center" href={item.href}>
                    {item.icon && <span className="mr-1">{item.icon}</span>}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="px-3 py-2 border rounded-md text-white bg-green-700">
                TALK TO US
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

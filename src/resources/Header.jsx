import { useNavigate } from 'react-router-dom';
import darkLogo from '../assets/tomeeto-dark.png';
import lightLogo from '../assets/tomeeto-light.png';
import Toggle from './Toggle';
import { useState, useEffect } from 'react';

export default function Header({ isDarkMode, toggleTheme }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Update screen size state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Initial check on mount
    handleResize();

    // Add event listener to track screen size changes
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="p-4 justify-between w-full p-4">
      <div
        className={`${menuOpen ? 'bg-black bg-opacity-25 absolute top-0 left-0 w-full h-full' : 'absolute top-8 left-8'}`}
      ></div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`absolute top-10 left-8 lg:hidden text-[30px] focus:outline-none z-20 ${isDarkMode ? 'text-white' : 'text-black'}`}
      >
        <div className="w-10 h-10 cursor-pointer flex flex-col items-center justify-center">
          <div
            className={`w-[50%] h-[2px] rounded-sm transition-all duration-300 origin-left translate-y-[0.50rem] ${isDarkMode ? 'bg-white' : 'bg-black'} ${
              menuOpen && 'rotate-[-45deg]'
            }`}
          ></div>
          <div
            className={`w-[50%] h-[2px] rounded-md transition-all duration-300 origin-center ${isDarkMode ? 'bg-white' : 'bg-black'} ${
              menuOpen && 'hidden'
            }`}
          ></div>
          <div
            className={`w-[50%] h-[2px] rounded-md transition-all duration-300 origin-left -translate-y-[0.50rem] ${isDarkMode ? 'bg-white' : 'bg-black'} ${
              menuOpen && 'rotate-[45deg]'
            }`}
          ></div>
        </div>
      </button>

      {menuOpen && (
        <div
          className={`absolute left-0 top-0 w-[65vw] h-[100vh] z-10 ${
            isDarkMode
              ? 'bg-[#3E505B] text-white'
              : 'bg-[#F5F5F5] text-[#3E505B]'
          }`}
        >
          <Toggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

          <ul className="flex flex-col mt-[100px] ml-[22px]">
            <li
              className="px-4 py-2 cursor-pointer hover:underline"
              onClick={() => navigate('/create')}
            >
              Create Event
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:underline"
              onClick={() => navigate('/create')}
            >
              Dashboard
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:underline"
              onClick={() => navigate('/login')}
            >
              Login
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:underline"
              onClick={() => navigate('/signup')}
            >
              Signup
            </li>
          </ul>
        </div>
      )}

      <img
        src={isDarkMode ? darkLogo : lightLogo}
        alt="Logo"
        className="absolute top-10 left-0 right-0 mx-auto w-[25vw] h-auto object-contain cursor-pointer 
                  lg:top-8 lg:left-8 lg:w-[9vw] lg:mx-[0px]"
        onClick={() => navigate('/')}
      />

      {isLargeScreen && (
        <Toggle
          className="hidden sm:block"
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
      )}
    </div>
  );
}
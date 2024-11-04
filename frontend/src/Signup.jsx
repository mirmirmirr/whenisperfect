import { useState } from 'react';
import darkLogo from '../src/assets/tomeeto-dark.png';
import lightLogo from '../src/assets/tomeeto-light.png';
import darkEye from '../src/assets/eye_dark.png';
import lightEye from '../src/assets/eye_light.png';
import darkHidden from '../src/assets/hidden_dark.png';
import lightHidden from '../src/assets/hidden_light.png';

export default function Signup() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [passwordValues, setPasswordValues] = useState({
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleTogglePasswordVisibility = (field) => {
    setPasswordValues((prevValues) => ({
      ...prevValues,
      [field]: !prevValues[field],
    }));
  };

  const handlePasswordChange = (prop) => (event) => {
    setPasswordValues({
      ...passwordValues,
      [prop]: event.target.value,
    });
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-screen p-4 ${isDarkMode ? 'bg-[#3E505B]' : 'bg-[#F5F5F5]'}`}
    >
      <img
        src={isDarkMode ? darkLogo : lightLogo}
        alt="Logo"
        className="absolute top-4 left-4 w-24 h-auto object-contain"
      />
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 bg-gray-300 rounded-full shadow-md hover:bg-gray-400 transition duration-300"
      >
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </button>

      <div className="flex flex-row justify-center items-center mt-[10vh]">
        <div className="flex flex-col items-center justify-center">
          <div className="leading-snug -mt-[10vh]">
            <span
              className={`text-[18vw] font-bold ${isDarkMode ? 'text-white' : 'text-[#3E505B]'}`}
            >
              Signup
            </span>
          </div>
          <div className="leading-snug -mt-[26vh]">
            <span className="text-[18vw] font-bold text-red-500">Signup</span>
          </div>
          <div className="leading-snug -mt-[26vh]">
            <span className="text-[18vw] font-bold text-green-500">Signup</span>
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center space-y-4 p-6">
          <div id="email" className="w-full">
            <label
              className={`block font-bold text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Type email here"
              className={`w-full py-2 bg-transparent border-b-2 focus:outline-none ${isDarkMode ? 'text-white border-white placeholder-white placeholder-opacity-50' : 'text-black border-black placeholder-black placeholder-opacity-50'}`}
            />
          </div>

          <div id="username" className="w-[35vw]">
            <label
              className={`block font-bold text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              Username
            </label>
            <input
              type="text"
              placeholder="enter username here (optional)"
              className={`w-[35vw] py-2 bg-transparent border-b-2 focus:outline-none ${
                isDarkMode
                  ? 'text-white border-white placeholder-white placeholder-opacity-50'
                  : 'text-black border-black placeholder-black placeholder-opacity-50'
              }`}
            />
          </div>

          <div id="password" className="w-[35vw] relative">
            <label
              className={`mt-[30px] block font-bold text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              Password
            </label>
            <input
              type={passwordValues.showPassword ? 'text' : 'password'}
              value={passwordValues.password}
              onChange={handlePasswordChange('password')}
              placeholder="choose a password"
              className={`w-full py-2 pr-10 bg-transparent border-b-2 focus:outline-none ${
                isDarkMode
                  ? 'text-white border-white placeholder-white placeholder-opacity-50'
                  : 'text-black border-black placeholder-black placeholder-opacity-50'
              }`}
            />
            <img
              src={
                passwordValues.showPassword
                  ? isDarkMode
                    ? darkEye
                    : lightEye
                  : isDarkMode
                    ? darkHidden
                    : lightHidden
              }
              alt="Toggle password visibility"
              onClick={() => handleTogglePasswordVisibility('showPassword')}
              className="absolute right-2 top-[70px] w-6 h-6 cursor-pointer"
            />
          </div>

          <div id="confirmPassword" className="w-[35vw] relative">
            <label
              className={`block font-bold text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              Password Again
            </label>
            <input
              type={passwordValues.showConfirmPassword ? 'text' : 'password'}
              placeholder="enter password again"
              value={passwordValues.confirmPassword}
              onChange={handlePasswordChange('confirmPassword')}
              className={`w-full py-2 pr-10 bg-transparent border-b-2 focus:outline-none ${
                isDarkMode
                  ? 'text-white border-white placeholder-white placeholder-opacity-50'
                  : 'text-black border-black placeholder-black placeholder-opacity-50'
              }`}
            />
            <img
              src={
                passwordValues.showConfirmPassword
                  ? isDarkMode
                    ? darkEye
                    : lightEye
                  : isDarkMode
                    ? darkHidden
                    : lightHidden
              }
              alt="Toggle confirm password visibility"
              onClick={() =>
                handleTogglePasswordVisibility('showConfirmPassword')
              }
              className="absolute right-2 top-10 w-6 h-6 cursor-pointer"
            />
          </div>

          <button
            className={`w-[35vw] text-responsive py-3 font-semibold rounded-lg transition duration-300 ${isDarkMode ? 'bg-white text-[#3E505B]' : 'bg-[#3E505B] text-white'}`}
          >
            Create account
          </button>
          <p
            className={`w-[35vw] subtext-responsive text-opacity-70 text-center ${isDarkMode ? 'text-white' : 'text-black'} hover:underline hover:text-opacity-100`}
          >
            But I already have an account!
          </p>
          <div
            className={`w-[35vw] border-t-2 my-4 ${
              isDarkMode ? 'border-gray-300' : 'border-gray-500'
            }`}
          ></div>
          <button
            className={`w-[35vw] mt-[10px] subtext-responsive py-3 rounded-md transition duration-300 hover:bg-red-500 hover:text-white hover:border-transparent ${
              isDarkMode
                ? 'text-white bg-transparent border-2 border-white'
                : 'text-back bg-transparent border-2 border-[#3E505B]'
            }`}
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../resources/ThemeContext';
import Header from '../resources/Header';
import Calendar from '../assets/Calendar';

export default function CreateEvent() {
  const navigate = useNavigate();

  const { isDarkMode, toggleTheme } = useTheme();
  const [intervalDropdownVisible, setIntervalDropdownVisible] = useState(false);
  const [selectedInterval, setSelectedInterval] = useState('');
  const [selectDaysOfWeek, setSelectDaysOfWeek] = useState(false);
  const [selectedStartDay, setSelectedStartDay] = useState('Start Day');
  const [selectedEndDay, setSelectedEndDay] = useState('End Day');
  const [startDayDropdownVisible, setStartDayDropdownVisible] = useState(false);
  const [endDayDropdownVisible, setEndDayDropdownVisible] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false); // State to control calendar visibility
  const [selectedDate, setSelectedDate] = useState(new Date()); // Selected date from the calendar

  // Styling based on the current theme
  const bgColor = isDarkMode ? 'bg-[#3E505B]' : 'bg-[#F5F5F5]';
  const textColor = isDarkMode ? 'text-[#F5F5F5]' : 'text-[#3E505B]';
  const borderColor = isDarkMode ? 'border-[#F5F5F5]' : 'border-[#3E505B]';
  const placeholderColor = isDarkMode
    ? 'placeholder-[#F5F5F5]'
    : 'placeholder-[#3E505B]';

  // Function to handle toggling the calendar
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  // Function to handle selecting a date from the calendar
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false); // Close the calendar after a date is selected
  };

  // Function to handle dropdown visibility for start day
  const toggleStartDayDropdown = () => {
    setStartDayDropdownVisible(!startDayDropdownVisible);
    setEndDayDropdownVisible(false);
    setIntervalDropdownVisible(false);
  };

  // Function to handle dropdown visibility for end day
  const toggleEndDayDropdown = () => {
    setEndDayDropdownVisible(!endDayDropdownVisible);
    setStartDayDropdownVisible(false);
    setIntervalDropdownVisible(false);
  };

  // Function to handle dropdown visibility for time interval
  const toggleIntervalDropdown = () => {
    setIntervalDropdownVisible(!intervalDropdownVisible);
    setStartDayDropdownVisible(false);
    setEndDayDropdownVisible(false);
  };

  // Function to handle selection of start days
  const handleStartDaySelect = (day) => {
    setSelectedStartDay(day);
    setStartDayDropdownVisible(false);
  };

  // Function to handle selection of end days
  const handleEndDaySelect = (day) => {
    setSelectedEndDay(day);
    setEndDayDropdownVisible(false);
  };

  // Function to handle selection of time intervals and end days
  const handleSelectInterval = (interval) => {
    setSelectedInterval(interval);
    setIntervalDropdownVisible(false);
  };

  // Function to toggle the checkbox for selecting days of the week
  const handleSelectDaysOfWeekChange = () => {
    setSelectDaysOfWeek(!selectDaysOfWeek);
  };

  // Effect to reset selections when the days of the week checkbox is unchecked
  useEffect(() => {
    if (!selectDaysOfWeek) {
      setSelectedStartDay('Start Day');
      setSelectedEndDay('End Day');
      setStartDayDropdownVisible(false);
      setEndDayDropdownVisible(false);
    }
  }, [selectDaysOfWeek]);

  // Get current date for default date selection
  const today = new Date().toISOString().split('T')[0];

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <div className={`relative flex flex-col min-h-screen p-4 ${bgColor}`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <div className="flex w-full mt-[4vh] p-4">
        {/* Left Column */}
        <div className="pl-4 flex-shrink-0 w-[60%]">
          {/* Input for event name */}
          <div className="flex items-center pb-5">
            <input
              type="text"
              placeholder="Add Event Name"
              className={`flex-grow px-0 py-2 text-2xl bg-transparent text-left
                border-b-2 focus:outline-none focus:ring-2 focus:ring-blue-500
                ${textColor} ${borderColor} ${placeholderColor}`}
              style={{ fontSize: `min(3vw, 20px)` }}
            />
          </div>

          {/* Date and time selection */}
          <div className="flex items-center gap-4 pb-4">
            {selectDaysOfWeek ? (
              <>
                {/* Start Day Dropdown */}
                <div className="relative w-[25%]">
                  <button
                    onClick={toggleStartDayDropdown}
                    className="p-3 w-full text-lg font-semibold bg-[#FF5C5C]
                      rounded-lg text-[#F5F5F5] focus:outline-none"
                  >
                    {selectedStartDay}
                  </button>
                  {startDayDropdownVisible && (
                    <div
                      className="absolute z-10 mt-1 w-full bg-[#FF5C5C]
                      rounded-md shadow-lg"
                    >
                      <ul className="flex flex-col">
                        {daysOfWeek.map((day) => (
                          <li
                            key={day}
                            onClick={() => handleStartDaySelect(day)}
                            className="p-2 cursor-pointer hover:bg-red-600
                              text-center text-[#F5F5F5]"
                          >
                            {day}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <input
                  type="time"
                  defaultValue="07:00"
                  className="p-3 text-lg rounded-lg bg-[#FF5C5C] text-white
                    text-center focus:outline-none"
                />
                <span className={`${textColor} text-lg`}>to</span>

                {/* End Day Dropdown */}
                <div className="relative w-[25%]">
                  <button
                    onClick={toggleEndDayDropdown}
                    className="p-3 w-full text-lg font-semibold bg-[#FF5C5C]
                      rounded-lg text-[#F5F5F5] focus:outline-none"
                  >
                    {selectedEndDay}
                  </button>
                  {endDayDropdownVisible && (
                    <div
                      className="absolute z-10 mt-1 w-full bg-[#FF5C5C]
                      rounded-md shadow-lg"
                    >
                      <ul className="flex flex-col">
                        {daysOfWeek.map((day) => (
                          <li
                            key={day}
                            onClick={() => handleEndDaySelect(day)}
                            className="p-2 cursor-pointer hover:bg-red-600
                              text-center text-[#F5F5F5]"
                          >
                            {day}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <input
                  type="time"
                  defaultValue="19:00"
                  className="p-3 text-lg rounded-lg bg-[#FF5C5C] text-white
                    text-center focus:outline-none"
                />
              </>
            ) : (
              <>
                {/* Date input for single day selection */}
                <button
                  onClick={toggleCalendar} // Toggle calendar on button click
                  className="w-[25%] p-3 text-lg rounded-lg bg-[#FF5C5C]
                text-white text-center focus:outline-none"
                >
                  {selectedDate
                    ? selectedDate.toLocaleDateString()
                    : 'Select Date'}
                </button>
                <input
                  type="time"
                  defaultValue="07:00"
                  className="p-3 text-lg rounded-lg bg-[#FF5C5C] text-white
                text-center focus:outline-none"
                />
                <span className={`${textColor} text-lg`}>to</span>
                <button
                  onClick={toggleCalendar} // Toggle calendar on button click
                  className="w-[25%] p-3 text-lg rounded-lg bg-[#FF5C5C]
                text-white text-center focus:outline-none"
                >
                  {selectedDate
                    ? selectedDate.toLocaleDateString()
                    : 'Select Date'}
                </button>
                <input
                  type="time"
                  defaultValue="19:00"
                  className="p-3 text-lg rounded-lg bg-[#FF5C5C] text-white
                text-center focus:outline-none"
                />
              </>
            )}
          </div>

          {/* Conditionally render the Calendar */}
          {showCalendar && (
            <div className="absolute z-10 bg-gray-700 rounded-md shadow-md p-4">
              <Calendar onDateSelect={handleDateSelect} />
            </div>
          )}

          {/* Time interval selection dropdown */}
          <div className="relative pb-3">
            <button
              onClick={toggleIntervalDropdown}
              className={`w-[25%] p-3 text-lg font-semibold bg-[#FF5C5C]
                rounded-lg text-[#F5F5F5] focus:outline-none`}
            >
              {selectedInterval || 'Time Interval'}
            </button>
            {intervalDropdownVisible && (
              <div
                className="absolute z-10 mt-1 w-[25%] bg-[#FF5C5C]
                rounded-md shadow-lg"
              >
                <ul className="flex flex-col">
                  <li
                    onClick={() => handleSelectInterval('15 minutes')}
                    className="p-2 cursor-pointer hover:bg-red-600 text-center
                      text-[#F5F5F5]"
                  >
                    15 minutes
                  </li>
                  <li
                    onClick={() => handleSelectInterval('30 minutes')}
                    className="p-2 cursor-pointer hover:bg-red-600 text-center
                      text-[#F5F5F5]"
                  >
                    30 minutes
                  </li>
                  <li
                    onClick={() => handleSelectInterval('60 minutes')}
                    className="p-2 cursor-pointer hover:bg-red-600 text-center
                      text-[#F5F5F5]"
                  >
                    60 minutes
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Event description input */}
          <label className={`block text-lg font-semibold ${textColor} mb-2`}>
            Event Description
          </label>
          <div className={`border-2 ${borderColor} rounded-lg p-2 mb-4`}>
            <textarea
              rows="9"
              className={`w-full p-3 text-lg rounded-lg ${bgColor} ${textColor}
                focus:outline-none resize-none`}
              placeholder="Describe your event here..."
            ></textarea>
          </div>
        </div>

        {/* Right Column */}
        <div className="pl-8 pr-4 flex-shrink-0 w-[40%] flex flex-col items-start">
          {/* Checkbox for selecting days of the week */}
          <label className={`flex items-center mb-4 ${textColor}`}>
            <input
              type="checkbox"
              checked={selectDaysOfWeek}
              onChange={handleSelectDaysOfWeekChange}
              className="mr-2 w-5 h-5 rounded-md focus:outline-none
                bg-transparent"
            />
            <span>Select from days of the week</span>
          </label>

          {/* Invite URL input */}
          <div className="w-full mt-[50vh]">
            <label className={`block text-lg font-semibold ${textColor}`}>
              Invite URL
            </label>
            <input
              type="text"
              className={`w-full px-0 py-2 text-lg bg-transparent text-left
                border-b-2 focus:outline-none focus:ring-2 focus:ring-blue-500
                ${textColor} ${borderColor} ${placeholderColor}`}
            />
          </div>

          {/* Create Event button */}
          <button
            onClick={() => navigate('/confirmCreated')}
            className={`w-full p-3 mt-4 text-lg font-semibold bg-[#FF5C5C]
              rounded-lg text-[#F5F5F5] focus:outline-none`}
          >
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import './style.css';
import GlobalMap from './GlobalMap';

const HeatContainer: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [location, setLocation] = useState<string>('kolkata');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue) {
      setLocation(inputValue.toLowerCase());
    }
  };

  const handleButtonClick = () => {
    if (inputValue) {
      setLocation(inputValue.toLowerCase());
    }
  };

  return (
    <>
      <div className='bg-gray-100 p-2 round-4'>
        {/* location input div */}
        <div style={{ display: "flex", gap: "5px", padding:"10px 0px 0px 10px"}} className='inputDivStyle'>
          <input className='inputFieldStyle'
            type="text"
            placeholder="Search a location"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button type="button" className='searchBtnStyle' onClick={handleButtonClick}>Search</button>
        </div>
        {/* map div */}
        <GlobalMap location={location}/>
      </div>
    </>
  );
};

export default HeatContainer;

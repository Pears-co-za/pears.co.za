import React, { useState, useEffect, useRef } from 'react';
import {
  CustomMobileDropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem
} from '../../../styles/Services.styles';

const CustomSelect = ({ value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  // Set the initial selected option based on the value prop
  useEffect(() => {
    const option = options.find(opt => opt.value === value);
    if (option) {
      setSelectedOption(option);
    }
  }, [value, options]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onChange({ target: { value: option.value } });
    setIsOpen(false);
  };

  if (!selectedOption) return null;

  return (
    <CustomMobileDropdown ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown} isOpen={isOpen}>
        {selectedOption.label}
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M6 9L12 15L18 9" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </DropdownButton>
      <DropdownMenu isOpen={isOpen}>
        {options.map(option => (
          <DropdownItem 
            key={option.value}
            isActive={option.value === selectedOption.value}
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </CustomMobileDropdown>
  );
};

export default CustomSelect;
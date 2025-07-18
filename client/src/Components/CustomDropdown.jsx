import React, { useState, useRef, useEffect } from 'react';
import './CustomDropdown.css';

function CustomDropdown({ value, onChange, options, placeholder, error }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (val) => {
    onChange({ target: { name: 'role', value: val.toLowerCase() } });
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <button
        type="button"
        className={`dropdown-btn${error ? ' error' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <span className={`arrow ${isOpen ? 'open' : ''}`} />
      </button>

      {isOpen && (
        <ul className="dropdown-list" role="listbox" tabIndex={-1}>
          {options.map(({ value: val, label }) => (
            <li
              key={val}
              role="option"
              aria-selected={value === val}
              className={`dropdown-item${value === val ? ' selected' : ''}`}
              onClick={() => handleSelect(val)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSelect(val);
                }
              }}
              tabIndex={0}
            >
              {label}
            </li>
          ))}
        </ul>
      )}

      {error && <div className="error-msg">{error}</div>}
    </div>
  );
}

export default CustomDropdown;

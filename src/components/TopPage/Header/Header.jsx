import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [topAuth, setTopAuth] = useState("Log in");
  const [bottomAuth, setBottomAuth] = useState("Sign up");
  const [isActive, setIsActive] = useState(true);

  function handleAuthType(e) {
    if (e.target.textContent === "Sign up") {
      setBottomAuth("Log in");
      setTopAuth("Sign up");
    } else if (e.target.textContent === "Log in") {
      setBottomAuth("Sign up");
      setTopAuth("Log in");
    }
  }
  function handleHeaderSearch() {
    setIsActive(!isActive);
  }

  return (
    <div className="header">
      <nav className="left-header">
        <ul>
          <li className="mara-logo">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="/MARA.png" alt="mara logo" />
            </a>
          </li>
          <li>
            <a
              href="https://ar.trivago.com/en-145/odr/hotels-ethiopia?search=200-19"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK
            </a>
          </li>
          <li>
            <a
              href="https://absoluteethiopia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PACKAGES
            </a>
          </li>
          <li>
            <a
              href="https://www.booking.com/country/et.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              HOTELS
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      <div className="right-header">
        <div
          className={`header-search ${
            isActive ? `add-search` : `remove-search`
          } `}
        >
          <div className="search-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
              fill="white"
              onClick={handleHeaderSearch}
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </div>

          <input type="text" />
        </div>
        <div className="drop-down">
          {/* use js logic to handle the drop down menu */}
          <button className="top-auth">
            {topAuth}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
              fill="white"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>{" "}
          </button>
          <div className="dropdown-content show">
            <ul>
              <button
                className="bottom-auth"
                onClick={(e) => handleAuthType(e)}
              >
                {bottomAuth}
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

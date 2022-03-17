import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import openSea from "../../Assets/openSea.svg";
import twitter from "../../Assets/twitter.svg";
import discord from "../../Assets/discord.svg";
function Header() {
  // to open navbar in mobile view
  const [open, setOpen] = useState(false);
  // to show the black background when we scroll
  const [show, setShow] = useState(false);
  // scroll to add background color ------------------------
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  // scroll to add background color ------------------------
  return (
    <div className={`header ${open ? "open" : ""} ${show && "black"}`}>
      <a
        style={{ textDecoration: "none", color: "white" }}
        className="header-left"
        href="/"
      >
        <img src={logo} alt="..." />
      </a>

      <div className={`header-right ${open ? "open" : ""}`}>
        <nav>
          <a
            onClick={() => {
              setOpen(false);
              document.querySelector("body").classList.remove("overflow");
            }}
            href="/#hero"
            className="nav-links"
          >
            About Us
          </a>
          <a
            onClick={() => {
              setOpen(false);
              document.querySelector("body").classList.remove("overflow");
            }}
            href="/#bene"
            className="nav-links"
          >
            RoadMap
          </a>
          <a
            onClick={() => {
              setOpen(false);
              document.querySelector("body").classList.remove("overflow");
            }}
            href="/#roadmap"
            className="nav-links"
          >
            Collection
          </a>
          <a
            onClick={() => {
              setOpen(false);
              document.querySelector("body").classList.remove("overflow");
            }}
            href="/"
            className="nav-links"
          >
            Team
          </a>
          <a
            onClick={() => {
              setOpen(false);
              document.querySelector("body").classList.remove("overflow");
            }}
            href="/"
            className="nav-links"
          >
            FAQ
          </a>
        </nav>
        <div className="social-header">
          <img src={discord} alt="" className="header-social" />
          <img src={twitter} alt="" className="header-social" />
          <img src={openSea} alt="" className="header-social" />
        </div>
        <a
          onClick={() => {
            setOpen(false);
            document.querySelector("body").classList.remove("overflow");
          }}
          href="#"
        >
          <button className="btn-header whitepaper">Whitepaper</button>
        </a>

        {/* <i className="fas fa-times mobile"></i> */}
      </div>
      {open ? (
        <FontAwesomeIcon
          onClick={() => {
            document.querySelector("body").classList.toggle("overflow");
            setOpen((prev) => {
              return !prev;
            });
          }}
          className="mobile"
          icon={faXmark}
        />
      ) : (
        <FontAwesomeIcon
          onClick={() => {
            document.querySelector("body").classList.toggle("overflow");
            setOpen((prev) => {
              return !prev;
            });
          }}
          className="mobile"
          icon={faBars}
        />
      )}
    </div>
  );
}

export default Header;

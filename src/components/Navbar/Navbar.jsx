import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";

import "./Navbar.scss";
import Cart from "../Cart/Cart";

const leftOptions = [
  {
    id: "1",
    name: "Women",
  },
  {
    id: "2",
    name: "Men",
  },
  {
    id: "3",
    name: "Childrens",
  },
];
const rightOptions = [
  {
    id: "1",
    name: "Homepage",
    link: "/",
  },
  {
    id: "2",
    name: "About",
  },
  {
    id: "3",
    name: "Contact",
  },
];
const Navbar = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const products = useSelector((state) => state.cart.products);

  const [open, setOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleRightMenu = () => {
    setIsRightMenuOpen(!isRightMenuOpen);
  };

  const closeRightMenu = () => {
    setIsRightMenuOpen(false);
  };

  function getWindowSize() {
    // Determine window size based on window.innerWidth
    if (window.innerWidth < 768) {
      return "small"; // You can define your own thresholds for "medium" and "large"
    } else if (window.innerWidth < 1024) {
      return "medium";
    } else {
      return "large";
    }
  }
  console.log(windowSize);

  useEffect(() => {
    // Update windowSize when the window is resized
    function handleResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          {windowSize != "small" && (
            <div className="left-icons">
              <div className="item">
                <img src="/img/en.png" alt="en.png" />
                <KeyboardArrowDownIcon />
              </div>
              <div className="item">
                <span>USD</span>
                <KeyboardArrowDownIcon />
              </div>
            </div>
          )}

          {windowSize === "medium" || windowSize === "small" ? (
            <div className="cat-btn" onClick={toggleMenu} tabIndex="0">
              <span className="humburgerLeft">Categories</span>
              <KeyboardArrowDownIcon />
            </div>
          ) : null}
          <ul className={`category-list ${isMenuOpen ? "open" : "close "}`}>
            {leftOptions.map((item, idx) => {
              return (
                <li key={idx}>
                  <Link
                    className="link"
                    to={`/products/${item.id}`}
                    onClick={(e) => {
                      // e.preventDefault();
                      closeMenu();
                    }} // Prevent blur when clicking on items
                    onBlur={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="center">
          <Link className="link" to={"/"}>
            FR-Store
          </Link>
        </div>
        <div className="right">
          {windowSize === "medium" || windowSize === "small" ? (
            <div className="menu-btn" onClick={toggleRightMenu} tabIndex="0">
              <span>Menu</span>
              <KeyboardArrowDownIcon />
            </div>
          ) : null}
          <ul className={`category-list ${isRightMenuOpen ? "open" : ""}`}>
            {rightOptions.map((item, idx) => {
              return (
                <li key={idx}>
                  <Link
                    className="link"
                    to={`/`}
                    onClick={(e) => {
                      closeRightMenu();
                    }}
                    onBlur={closeRightMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="icons">
            {windowSize != "small" && (
              <div className="rightIcons">
                <SearchOutlinedIcon />
                <PersonOutlineIcon />
                <FavoriteBorderOutlinedIcon />
              </div>
            )}

            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;

{
  /* <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="en.png" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to={"/products/1"}>
              Women
            </Link>
          </div>
          <div className="item">
            <Link to={"/products/2"}>Men</Link>
          </div>{" "}
          <div className="item">
            <Link className="link" to={"/products/3"}>
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to={"/"}>
            FR-Store
          </Link>
        </div>
        <div className="right">
          
          <div className="item">
            <Link className="link" to={"/products/1"}>
              Homepage
            </Link>
          </div>{" "}
          <div className="item">
            <Link className="link" to={"/products/1"}>
              About
            </Link>
          </div>{" "}
          <div className="item">
            <Link className="link" to={"/products/1"}>
              Contact
            </Link>
          </div>{" "}
          {/* <div className="item">
            <Link className="link" to={"/products/1"}>
              Stores
            </Link>
          </div> */
}
//       <div className="icons">
//         <SearchOutlinedIcon />
//         <PersonOutlineIcon />
//         <FavoriteBorderOutlinedIcon />
//         <div className="cartIcon" onClick={() => setOpen(!open)}>
//           <ShoppingCartOutlinedIcon />
//           <span>{products.length}</span>
//         </div>
//       </div>
//     </div>
//   </div>
//   {open && <Cart />}
// </div> */}

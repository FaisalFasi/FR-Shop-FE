import { useState, useEffect } from "react";
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
    if (window.innerWidth < 768) {
      return "small";
    } else if (window.innerWidth < 1024) {
      return "medium";
    } else {
      return "large";
    }
  }

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          {windowSize !== "small" && (
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
                      closeMenu();
                    }}
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
            {windowSize !== "small" && (
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

import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const redirectTologin = () => {
    window.location.href = "/login";
    // history.push("/page-cta");
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          Cuvette
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/page-one" onClick={menuToggleHandler}>
                My APIs
              </Link>
            </li>
            <li>
              <Link to="/page-two" onClick={menuToggleHandler}>
                My Account
              </Link>
            </li>
          </ul>
          <button onClick={redirectTologin}>Login/Signup</button>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <button onClick={menuToggleHandler}>toggle</button>
          ) : (
            <button onClick={menuToggleHandler}>toggle</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

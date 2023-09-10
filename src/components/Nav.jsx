import { useEffect, useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

    // eslint-disable-next-line
  }, []);

  return (
    <header className={`padding-x py-8 fixed z-20 w-full ${scrolled ? "scrolled" : ""}`}>
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="headerLogo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black hover:font-medium">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamberger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

import { Link } from "@/i18n/navigation";
import classes from "./header.module.sass";

import Logo from "@/assets/images/logo.svg";
import { Button } from "@/common";
import { HeaderLink } from "./components";

export const Header = () => {
  const links = [
    {
      title: "Motocycles",
      path: "/motocycles",
    },
    {
      title: "Accessorii",
      path: "/accessorii",
    },
    {
      title: "Imbracominte",
      path: "/Imbracominte",
    },
    {
      title: "Inside triumph",
      path: "/about-triumph",
    },
  ];

  return (
    <header className={classes.header}>
      <Link href={"/"} className={classes.logo}>
        <Logo />
      </Link>

      <nav className={classes.nav}>
        {links.map((link, i) => (
          <HeaderLink key={i} title={link.title} href={link.path} />
        ))}
      </nav>

      <div className={classes.right}>
        <Button title="Contact" />
      </div>
    </header>
  );
};

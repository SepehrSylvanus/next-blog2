import React from "react";
import styles from "./links.module.css";

import NavLinks from "./navLinks/navLinks";
const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  // Temp
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLinks item={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }} />}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLinks item={{ title: "Login", path: "/login" }} />
      )}
    </div>
  );
};

export default Links;

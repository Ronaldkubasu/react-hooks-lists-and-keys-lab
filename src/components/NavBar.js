import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkItems = links.map((item)=><a key={item}href={'#'+item}>{item}</a>)

  return <nav>{linkItems}</nav>;
}

export default NavBar;

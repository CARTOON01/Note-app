import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Brian Ngugi</p>
    </footer>
  );
}

export default Footer;

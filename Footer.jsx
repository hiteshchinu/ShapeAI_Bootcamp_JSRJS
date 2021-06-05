import React from "react";

function Footer() {
  var cuyear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {cuyear}</p>
    </footer>
  );
}

export default Footer;

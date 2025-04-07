import React from 'react';

function Footer({ footerRef }) {
  return (
    <footer ref={footerRef} className="footer">
      <p>Это футер</p>
    </footer>
  );
}

export default Footer;

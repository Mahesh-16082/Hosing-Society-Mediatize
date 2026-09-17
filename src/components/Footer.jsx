import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Copyright */}
        <div className="footer-left">
          © 2026 | Housingsociety.net — All Rights Reserved.
        </div>

        {/* Powered By */}
        <div className="footer-right">
          <span>Powered by </span>
          <strong>CFO</strong>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
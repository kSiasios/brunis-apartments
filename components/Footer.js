import Link from "next/link";
// import Logo from "./Logo";

export default function Footer() {
  var dt = new Date();
  return (
    <footer>
      <div className="footer-content">
        <div className="license-number">
          Αριθμός γνωστοποίησης: 1148195 (ver. 1)
        </div>
        {/* <Logo /> */}
        {/* <span className="light-text"> */}
        Copyright &copy; {dt.getFullYear()}. All rights reserved. Designed and
        developed by
        {/* </span> */}{" "}
        <Link
          className="link-text"
          href="https://linkedin.com/in/konstantinos-siasios"
        >
          Konstantinos Siasios
        </Link>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  var dt = new Date();
  return (
    <footer>
      <div className="footer-content">
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

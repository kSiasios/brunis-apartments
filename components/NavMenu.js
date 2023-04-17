import Link from "next/link";
import Hamburger from "./Hamburger";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import { MdLanguage } from "react-icons/md";

export default function NavMenu(props) {
  const { formatMessage: f } = useIntl();
  const { locale } = useRouter();
  const router = useRouter();

  // console.log(locale);

  return (
    <div id="menu-container">
      <Link href="/" className="logo-link">
        <div className="logo"></div>
      </Link>
      <div></div>
      <button className="language-selector">
        <MdLanguage />
        <div className="dropdown-content">
          <a href={`/en${router.asPath != "/" ? router.asPath : ""}`}>
            English
          </a>
          <a href={`/el${router.asPath != "/" ? router.asPath : ""}`}>
            Ελληνικά
          </a>
        </div>
      </button>
      <Hamburger menuTogglerFunction={props.menuTogglerFunction} />
      <div id="menu">
        <div className="nav-links">
          <ul>
            <li>
              <Link className="nav-link" href="/">
                {f({ id: "home" })}
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/rooms">
                {f({ id: "rooms" })}
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                href="/#contact"
                onClick={props.menuTogglerFunction}
              >
                {f({ id: "contact" })}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="menu-toggler" onClick={props.menuTogglerFunction}></div>
    </div>
  );
}

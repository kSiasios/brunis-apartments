import Link from "next/link";
import {
  AiFillGithub,
  AiFillCodepenCircle,
  AiOutlineTwitter,
  AiFillTwitterCircle,
  AiOutlineCodepen,
} from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";
import { BsStackOverflow, BsStrava } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import styles from "../styles/Socials.module.css";

export default function Socials() {
  return (
    <section className={styles.socials_section}>
      <div className={styles.socials_header}>Find me on</div>
      <div className={styles.socials}>
        <Link
          className={styles.social_link}
          id={styles.github}
          href="https://github.com/kSiasios"
        >
          <AiFillGithub />
        </Link>
        <Link
          className={styles.social_link}
          id={styles.codepen}
          href="https://codepen.io/ksiasios"
        >
          <AiOutlineCodepen />
        </Link>
        <Link
          className={styles.social_link}
          id={styles.stack_overflow}
          href="https://stackoverflow.com/users/14688065/kostas-siasios"
        >
          <FaStackOverflow />
        </Link>
        <Link
          className={styles.social_link}
          id={styles.twitter}
          href="https://twitter.com/KSiasios"
        >
          <AiOutlineTwitter />
        </Link>
        <Link
          className={styles.social_link}
          id={styles.mail}
          href="mailto:kostassiasios1999@gmail.com"
        >
          <MdEmail />
        </Link>
      </div>
    </section>
  );
}

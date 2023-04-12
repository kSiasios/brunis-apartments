import Head from "next/head";
import Navbar from "../../components/Navbar";
import Socials from "../../components/Socials";
import Image from "next/image";
import Link from "next/link";
import { BsStrava } from "react-icons/bs";
import Footer from "../../components/Footer";

import styles from "../../styles/About.module.css";

export default function About() {
  function scrollHorizontally(e) {
    const cont = document.getElementById("horizontal-scroll");
    cont.scrollLeft += e.deltaY;
  }

  return (
    <div>
      <Head>
        <title>LoopoKrator - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main data-theme="light">
        <div className="page-content">
          <Navbar />
          <Socials />
          <div
            id="horizontal-scroll"
            className={styles.content_container}
            onWheel={scrollHorizontally}
          >
            <section className={styles.page}>
              <div className={styles.left_column}>
                <p className={styles.greet}>Hello! I'm</p>
                <h3 className={styles.name}>Konstantinos Siasios</h3>
                <p className={styles.bio}>
                  I study Computer Science. Obviously, I like programming, but I
                  also like being creative. So, I decided to build this website
                  to expose my ideas to the world, and maybe help some other
                  individuals on the way.
                </p>
                {/* <Socials /> */}
              </div>
              <div
                className={styles.right_column}
                style={{ backgroundImage: "url('/images/profile-image.jpg')" }}
              >
                {/* <img src="/images/profile-image.jpg"></img> */}
              </div>
            </section>
            <section className={styles.page}>
              <div className={styles.left_column}>
                <p className={styles.greet}>These are</p>
                <h3 className={styles.name}>My Hobbies</h3>
                <p className={styles.bio}>
                  My favourite hobby of all is running. I have been running
                  since my teenage years and I have participated in several
                  races and events. Among them is the well known Athens
                  Marathon.
                </p>
                <div className={styles.records}>
                  <h6>My Records</h6>
                  <div className={styles.record}>
                    <span className={styles.event}>Marathon</span> -{" "}
                    <span className={styles.time}>4:52:05</span>
                  </div>
                  <div className={styles.record}>
                    <span className={styles.event}>Half Marathon</span> -{" "}
                    <span className={styles.time}>2:06:58</span>
                  </div>
                  <div className={styles.record}>
                    <span className={styles.event}>10km</span> -{" "}
                    <span className={styles.time}>52:47</span>
                  </div>
                  <div className={styles.record}>
                    <span className={styles.event}>5km</span> -{" "}
                    <span className={styles.time}>22:49</span>
                  </div>
                </div>
                <div>
                  <Link
                    className="strava-link"
                    href="https://www.strava.com/athletes/28537326"
                  >
                    Follow me on Strava
                    <BsStrava />
                  </Link>
                </div>
                {/* <Socials /> */}
              </div>
              <div
                className={styles.right_column}
                style={{ backgroundImage: "url('/images/running.jpeg')" }}
              ></div>
            </section>
            <section className={styles.page} id={styles.projects}>
              <div className={styles.left_column}>
                <p className={styles.greet}>Here are some of</p>
                <h3 className={styles.name}>My Projects</h3>
                <p className={styles.bio}>
                  Over the years, I participated in various projects, either on
                  my own or in a team. This is a collection of a few of them.
                  <br></br>
                  <br></br>
                  Some of them are websites for local businesses, while others
                  are passion projects or university projects.
                </p>
                {/* <Socials /> */}
              </div>
              <div className={styles.right_column}>
                <div className={styles.project}>
                  <Link href="#">
                    <img src="/images/projects/nefelis_rooms_banner.png"></img>
                  </Link>
                </div>
                <div className={styles.project}>
                  <Link href="#">
                    <img src="/images/projects/u_jacka_banner.png"></img>
                  </Link>
                </div>
                <div className={styles.project}>
                  <Link href="#">
                    <img src="/images/projects/orthopaignia_banner.png"></img>
                  </Link>
                </div>
                <div className={styles.project}>
                  <Link href="#">
                    <img src="/images/projects/loopokrator_banner.png"></img>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch("https://loopokrator.com/includes/frontpageInit.php");
  // const data = await res.text();

  const data = [
    {
      id: 0,
      category: "tech",
      title: "Article 1",
      image: "../images/profile-image.jpg",
      author: "Konstantinos Siasios",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
    {
      id: 1,
      category: "tech",
      title: "Article 2",
      image: "../images/profile-image.jpg",
      author: "Anonymous User",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
    {
      id: 2,
      category: "python",
      title: "Article 3",
      image: "../images/profile-image.jpg",
      author: "Konstantinos Siasios",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
    {
      id: 3,
      category: "other",
      title: "Article 4",
      image: "../images/profile-image.jpg",
      author: "Konstantinos Siasios",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
    {
      id: 4,
      title: "Article 5",
      category: "python",
      image: "../images/profile-image.jpg",
      author: "Konstantinos Siasios",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
    {
      id: 5,
      category: "tech",
      title: "Article 6",
      image: "../images/profile-image.jpg",
      author: "Konstantinos Siasios",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
    {
      id: 4,
      title: "Article 5",
      category: "python",
      image: "../images/profile-image.jpg",
      author: "Konstantinos Siasios",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
    {
      id: 5,
      category: "tech",
      title: "Article 6",
      image: "../images/profile-image.jpg",
      author: "Konstantinos Siasios",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
  ];

  // Pass data to the page via props
  return { props: { data } };
}

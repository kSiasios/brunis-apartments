import Head from "next/head";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { AiFillEye, AiFillEdit } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import InputField from "../../components/InputField";
import TabSystem from "../../components/TabSystem";

import styles from "../../styles/Account.module.css";
import Select from "../../components/Select";
import Logo from "../../components/Logo";

export default function Account({ data }) {
  const categories = [...new Set(data.map((article) => article.category))];

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [tab, setTab] = useState("articles");

  const [isConnected, setConnected] = useState();

  useEffect(() => {
    setConnected(sessionStorage.getItem("user"));
  }, []);

  if (isConnected) {
    return (
      <div>
        <Head>
          <title>LoopoKrator - Account</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main data-theme="light">
          <div className="page-content">
            <Navbar />
            <div className="welcome-message">
              <p className="welcome-message-text">
                <span className="important-text">My</span> account
              </p>
            </div>
            <TabSystem
              tabs={[
                {
                  text: "My Articles",
                  isActive: "true",
                },
                {
                  text: "Settings",
                  isActive: "false",
                },
              ]}
              value={setTab}
            />
            {tab == "Settings" ? (
              <div className={styles.settings}>
                <InputField
                  className="loopokrator-text-input"
                  type="text"
                  dataLabel="Author Name"
                />
                <InputField
                  className="loopokrator-text-input"
                  type="password"
                  dataLabel="Password"
                />
                <div className="danger-zone">
                  <p>Danger Zone</p>
                  <button id="del-account" className="loopokrator-btn danger">
                    Delete Account
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="content center">
                  <Select
                    className="category-selector"
                    value={setCategoryFilter}
                    options={categories}
                  />
                </div>
                <div className={styles.content}>
                  {data.map((article, index) => {
                    // article.category === categoryFilter ||
                    // categoryFilter === "All" ?
                    // console.log(categoryFilter);
                    if (categoryFilter === "All") {
                      return (
                        <div
                          className={styles.article_card_container}
                          key={index}
                        >
                          <div
                            className="article-card"
                            style={{ backgroundImage: `url(${article.image})` }}
                          >
                            <div className="text-container">
                              <h3 className="article-title">{article.title}</h3>
                              <p className="article-description">
                                {article.body.substring(3, 100)}
                              </p>
                            </div>
                            <div className={styles.article_functions}>
                              <a
                                className={styles.article_link}
                                href={`/article_${article.id}`}
                              >
                                <AiFillEdit className="article-action-icon" />
                                <p>Edit Article</p>
                              </a>
                              <a
                                className={styles.article_link}
                                href={`/article_${article.id}`}
                              >
                                <BsFillTrashFill className="article-action-icon" />
                                <p>Delete Article</p>
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    if (article.category === categoryFilter) {
                      return (
                        <div
                          className={styles.article_card_container}
                          key={index}
                        >
                          <div
                            className="article-card"
                            style={{ backgroundImage: `url(${article.image})` }}
                          >
                            <div className="text-container">
                              <h3 className="article-title">{article.title}</h3>
                              <p className="article-description">
                                {article.body.substring(3, 100)}
                              </p>
                            </div>
                            <div className={styles.article_functions}>
                              <a
                                className={styles.article_link}
                                href={`/article_${article.id}`}
                              >
                                <AiFillEdit className="article-action-icon" />
                                <p>Edit Article</p>
                              </a>
                              <a
                                className={styles.article_link}
                                href={`/article_${article.id}`}
                              >
                                <BsFillTrashFill className="article-action-icon" />
                                <p>Delete Article</p>
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return "";
                  })}
                </div>
              </>
            )}
            <Footer></Footer>
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <div className="not-connected">
        <h1>
          Access denied!
          <br />
          Try logging in or creating an account.
        </h1>
        <div>
          <p>Click the logo to return home</p>
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>
    );
  }
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
      id: 6,
      title: "Article 7",
      category: "python",
      image: "../images/profile-image.jpg",
      author: "Konstantinos Siasios",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
    {
      id: 7,
      category: "tech",
      title: "Article 8",
      image: "../images/profile-image.jpg",
      author: "Konstantinos Siasios",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
  ];

  // Pass data to the page via props
  return { props: { data } };
}

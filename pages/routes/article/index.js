import Head from "next/head";
import Script from "next/script";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Footer from "../../../components/Footer";
import InputField from "../../../components/InputField";
import TabSystem from "../../../components/TabSystem";

import styles from "../../../styles/Article.module.css";
import Select from "../../../components/Select";
import Logo from "../../../components/Logo";
import TinyEditor from "../../../components/TinyEditor";
import CheckBox from "../../../components/CheckBox";

export default function Article({ data }) {
  console.log(data);

  const authors = [...new Set(data.map((article) => article.author))];

  const [authorAliases, setAuthor] = useState(authors[0]);

  const categories = [...new Set(data.map((article) => article.category))];

  const [categoryFilter, setCategoryFilter] = useState("All");
  // const [tab, setTab] = useState("articles");

  const [isConnected, setConnected] = useState();

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  useEffect(() => {
    setConnected(sessionStorage.getItem("user"));
  }, []);

  function uploadArticle() {
    console.log("Uploading Article");
    setTimeout(() => {
      console.log("Article Uploaded");
    }, 5000);
  }

  if (isConnected) {
    return (
      <div>
        <Head>
          <title>LoopoKrator - Article</title>
          <link rel="icon" href="/favicon.ico" />
          <Script
            src={`https://cdn.tiny.cloud/1/${process.env.NEXT_PUBLIC_TINYMCE_API_KEY}/tinymce/6/tinymce.min.js`}
            referrerPolicy="origin"
          ></Script>
        </Head>

        <main data-theme="light">
          <div className="page-content">
            <Navbar />
          </div>
          <Footer></Footer>
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

import Head from "next/head";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Script from "next/script";

export default function Article({ article }) {
  return (
    <div>
      <Head>
        <title>LoopoKrator - Article</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main data-theme="light">
        <div className="page-content">
          <Navbar />
          <img src={article.image} />
          <p>by {article.author}</p>
          <p>Category: {article.category}</p>
          <p>Article Title: {article.title}</p>
          <p id="article-body">Article Body: </p>
          <Script>
            const articleBody = document.getElementById("article-body");
            console.log(articleBody); articleBody.innerHTML += "{article.body}";
          </Script>
          <Footer></Footer>
        </div>
      </main>
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await getData();
  const data = await res;

  const paths = data.map((article) => {
    return {
      params: { id: article.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await getData();
  const data = res.find((article) => article.id == id);

  return {
    props: { article: data },
  };
};

export async function getData() {
  // Fetch data from external API

  const data = [
    {
      id: 0,
      category: "tech",
      title: "Article 1",
      image: "/images/profile-image.jpg",
      author: "Konstantinos Siasios",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
    {
      id: 1,
      category: "tech",
      title: "Article 2",
      image: "/images/profile-image.jpg",
      author: "Anonymous User",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
    {
      id: 2,
      category: "python",
      title: "Article 3",
      image: "/images/profile-image.jpg",
      author: "Konstantinos Siasios",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
    {
      id: 3,
      category: "other",
      title: "Article 4",
      image: "/images/profile-image.jpg",
      author: "Konstantinos Siasios",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
    {
      id: 4,
      title: "Article 5",
      category: "python",
      image: "/images/profile-image.jpg",
      author: "Konstantinos Siasios",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
    {
      id: 5,
      category: "tech",
      title: "Article 6",
      image: "/images/profile-image.jpg",
      author: "Konstantinos Siasios",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
    {
      id: 6,
      title: "Article 7",
      category: "python",
      image: "/images/profile-image.jpg",
      author: "Konstantinos Siasios",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
    {
      id: 7,
      category: "tech",
      title: "Article 8",
      image: "/images/profile-image.jpg",
      author: "Konstantinos Siasios",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan enim leo, at molestie odio fermentum fermentum. Morbi in suscipit urna. Mauris convallis ante at libero fringilla, in viverra ligula ornare. Fusce consectetur, augue at consequat iaculis, dolor erat sodales lectus, nec vestibulum orci lorem sed nulla. Sed vitae elementum nisi. Fusce efficitur aliquet magna ac facilisis. Aliquam vitae euismod massa. Mauris at hendrerit velit, et luctus ante.</p><p>Nam ligula lectus, iaculis non fermentum at, auctor sit amet enim. Etiam gravida finibus dapibus. Quisque sollicitudin dapibus neque sit amet rutrum. In erat turpis, sollicitudin a pharetra vel, facilisis in turpis. Vestibulum ut risus turpis. Duis euismod erat quis euismod pulvinar. Vestibulum eu sollicitudin sapien. Donec porttitor ante mauris, at rutrum nulla dapibus quis. Maecenas ipsum mi, tincidunt at ante sed, vehicula ornare mi. Nunc eget cursus tortor. Cras sem elit, congue sit amet turpis ac, efficitur iaculis arcu. Aenean vel efficitur mi, vestibulum iaculis nisi. In laoreet ligula quis nibh sollicitudin, eget ullamcorper nisi euismod. Vivamus tincidunt sapien lectus, nec efficitur ligula auctor eu.</p>",
    },
  ];

  // Pass data to the page via props
  return data;
}

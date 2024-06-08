import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const data = require("../../public/rooms_info.json");

export default function Room() {
  const { formatMessage: f } = useIntl();

  const router = useRouter();
  const queryVariable = router.query.room;

  useEffect(() => {
    if (queryVariable == undefined) {
      return;
    }
  }, [queryVariable]);

  const roomID = queryVariable;

  if (
    Object.keys(data.rooms).includes(roomID) ||
    Object.keys(data.rooms)
      .map((key) => key.toLowerCase())
      .includes(roomID)
  ) {
    const room = data.rooms[roomID.toUpperCase()];

    const imagesFolder = `/room_images/room_${roomID.toUpperCase()}`;

    const imageElements = [];

    for (let index = 1; index < 100; index++) {
      imageElements.push(
        <Link
          href={`/${imagesFolder}/${index}.jpg`}
          locale={false}
          target="_blank"
        >
          <img
            src={`${imagesFolder}/${index}.jpg`}
            onError={unloadImage}
            alt=""
            className="gallery-image"
          ></img>
        </Link>
      );
    }

    return (
      <div>
        <Head>
          <title>Brunis Apartments</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main data-theme="light">
          <div className="page-content">
            <Navbar />
            <section className="room-info">
              <div className="welcome-message">
                <span className="important-text">
                  {f({ id: "room" })} {roomID}
                </span>
              </div>
              <div className="content">
                <div className="floor">
                  <div className="feature">{f({ id: "floor" })}</div>
                  <div className="value">{room.floor}</div>
                </div>
                {room["double-beds"] !== "0" ? (
                  <div className="double-beds">
                    <div className="feature">{f({ id: "double-beds" })}</div>
                    <div className="value">{room["double-beds"]}</div>
                  </div>
                ) : (
                  ""
                )}
                {room["normal-beds"] !== "0" ? (
                  <div className="normal-beds">
                    <div className="feature">{f({ id: "normal-beds" })}</div>
                    <div className="value">{room["normal-beds"]}</div>
                  </div>
                ) : (
                  ""
                )}
                {room["bunk-beds"] !== "0" ? (
                  <div className="bunk-beds">
                    <div className="feature">{f({ id: "bunk-beds" })}</div>
                    <div className="value">{room["bunk-beds"]}</div>
                  </div>
                ) : (
                  ""
                )}
                {room["extra-beds"] !== "0" ? (
                  <div className="extra-beds">
                    <div className="feature">{f({ id: "extra-beds" })}</div>
                    <div className="value">{room["extra-beds"]}</div>
                  </div>
                ) : (
                  ""
                )}
                {parseInt(room["subrooms"]) > 1 ? (
                  <div className="subrooms">
                    <div className="feature">{f({ id: "subrooms" })}</div>
                    <div className="value">{room["subrooms"]}</div>
                  </div>
                ) : (
                  ""
                )}
                <div className="view">{f({ id: room["view"] })}</div>

                <div className="images">{imageElements}</div>
              </div>
            </section>
            <Footer></Footer>
          </div>
        </main>
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>Brunis Apartments</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main data-theme="light">
        <div className="page-content">
          <Navbar />
          <div>No such ROOM {roomID} found :(</div>
          <Footer></Footer>
        </div>
      </main>
    </div>
  );
}

function unloadImage(e) {
  e.target.parentNode.removeChild(e.target);
}

// export default Room;

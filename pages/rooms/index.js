import Head from "next/head";
import Link from "next/link";
import { useIntl } from "react-intl";
import Navbar from "../../components/Navbar";

const data = require("../../public/rooms_info.json");

export default function Rooms() {
  const { formatMessage: f } = useIntl();
  // const { locale } = useRouter();

  console.log(data);

  const rooms = [];

  const roomNames = Object.keys(data.rooms);

  for (let index = 0; index < roomNames.length; index++) {
    rooms.push(
      <Link className="link" key={index} href={`/rooms/${roomNames[index]}`}>
        {f({ id: "room" })} {roomNames[index]}
      </Link>
    );
  }

  return (
    <div>
      <Head>
        <title>Brunis Apartments - {f({ id: "rooms" })}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main data-theme="light">
        <div className="page-content">
          <Navbar />
          <section className="rooms">{rooms}</section>
        </div>
      </main>
    </div>
  );
}

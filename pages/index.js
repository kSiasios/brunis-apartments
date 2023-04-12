import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  FaClock,
  FaPaw,
  FaBroom,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import Footer from "../components/Footer";
import { useIntl } from "react-intl";

import enActivities from "../public/lang/en_activities.json";
import elActivities from "../public/lang/el_activities.json";
import enEntertainment from "../public/lang/en_entertainment.json";
import elEntertainment from "../public/lang/el_entertainment.json";
import { useRouter } from "next/router";

const activities = {
  en: enActivities,
  el: elActivities,
};

const entertainment = {
  en: enEntertainment,
  el: elEntertainment,
};

export default function Home() {
  const { locale } = useRouter();
  const { formatMessage: f } = useIntl();

  // console.log(`LOCALE: ${locale}`);

  // console.log(activities[locale]);

  const localizedActivities = activities[locale];
  const localizedEntertainment = entertainment[locale];
  // console.log(localizedActivities);

  return (
    <div>
      <Head>
        <title>Brunis Apartments - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main data-theme="light">
        <div className="page-content">
          <Navbar />
          <section className="cta-section">
            <div className="welcome-message">
              {/* <p className="welcome-message-text"> */}
              <span className="important-text">Brunis</span>
              <span>Apartments</span>
              {/* </p> */}
            </div>
            <div className="content">
              <a className="cta-btn" href="/routes/articles">
                {f({ id: "call-to-action" })}
              </a>
            </div>
          </section>
          <section className="resort">
            <div className="section-title">
              {/* <p> */}
              {f({ id: "resort" })}
              {/* </p> */}
            </div>
            <div className="section-content">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.461088380263!2d22.652553314790065!3d39.97580009026245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a7f53d3a3a8c9d%3A0x640f4079d40f3435!2sBRUNIS%20APARTMENTS!5e0!3m2!1sel!2sgr!4v1680941170726!5m2!1sel!2sgr"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="description">
                {f({ id: "resort-description" })}
              </div>
            </div>
          </section>
          <section className="rooms">
            <div className="section-subtitle">
              {/* <p> */}
              {f({ id: "rooms-title" })}
              {/* </p> */}
            </div>
            <div className="section-content">
              <div className="image">
                <img src="/room.jpg"></img>
              </div>
              <div className="description">
                {f({ id: "rooms-description" })}
              </div>
            </div>
          </section>
          <section className="check-in-out">
            <div className="section-content">
              <div className="check-in">
                <div className="time">{f({ id: "check-in-time" })}</div>
                <div className="title">{f({ id: "check-in-title" })}</div>
                <div className="text">{f({ id: "check-in-text" })}</div>
              </div>
              <div className="check-out">
                <div className="time">{f({ id: "check-out-time" })}</div>
                <div className="title">{f({ id: "check-out-title" })}</div>
                <div className="text">{f({ id: "check-out-text" })}</div>
              </div>
              <FaClock className="watermark center" />
              {/* <div className="description">
                {f({ id: "resort-description" })}
              </div> */}
            </div>
          </section>
          <section className="pets">
            <div className="section-subtitle">{f({ id: "pets" })}</div>
            <div className="section-content">
              <p>{f({ id: "pets-text" })}</p>
              <FaPaw className="watermark left" />
              {/* <div className="description">
                {f({ id: "resort-description" })}
              </div> */}
            </div>
          </section>
          <section className="cleaning">
            <div className="section-subtitle">{f({ id: "cleaning" })}</div>
            <div className="section-content">
              <p>{f({ id: "cleaning-text" })}</p>
              <FaBroom className="watermark right" />
              {/* <div className="description">
                {f({ id: "resort-description" })}
              </div> */}
            </div>
          </section>
          <section className="neoi-poroi">
            <div className="section-title">{f({ id: "neoi-poroi" })}</div>
            <div className="section-content">
              {f({ id: "neoi-poroi-description" })}
            </div>
          </section>
          <section className="activities">
            <div className="section-subtitle">{f({ id: "activities" })}</div>
            <div className="section-content column">
              <div className="activities-container">
                {/* {localizedActivities.map((activity) => (
                <div>{activity}</div>
              ))} */}
                {Object.values(localizedActivities).map((activity, index) => (
                  <div className="activity" key={index}>
                    {activity}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="excursion">
            <div className="section-subtitle">{f({ id: "excursion" })}</div>
            <div className="section-content">
              <p>{f({ id: "excursion-text" })}</p>
              {/* <div className="description">
                {f({ id: "resort-description" })}
              </div> */}
            </div>
          </section>
          <section className="train">
            <div className="section-subtitle">
              {/* <p> */}
              {f({ id: "train-title" })}
              {/* </p> */}
            </div>
            <div className="section-content">
              <div className="image">
                <img src="/train.jpg"></img>
              </div>
              <div className="description">
                {f({ id: "train-description" })}
              </div>
            </div>
          </section>
          <section className="entertainment">
            <div className="section-subtitle">{f({ id: "entertainment" })}</div>
            <div className="section-content column">
              {/* <p>{f({ id: "entertainment-text" })}</p> */}
              {Object.values(localizedEntertainment).map((element) =>
                element.split("<br />").map((paragraph, index) => (
                  <div className="entertainment-paragraph" key={index}>
                    {paragraph
                      .replace("{cinema-link}", "")
                      .replace("{olympus-festival-link}", "")}
                    {paragraph.includes("{cinema-link}") ? (
                      <Link className="link" href={f({ id: "cinema-link" })}>
                        ({f({ id: "cinema-link" })})
                      </Link>
                    ) : (
                      ""
                    )}
                    {paragraph.includes("{olympus-festival-link}") ? (
                      <Link
                        className="link"
                        href={f({ id: "olympus-festival-link" })}
                      >
                        ({f({ id: "olympus-festival-link" })})
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                ))
              )}
            </div>
          </section>
          <section className="how-to-come">
            <div className="section-title">{f({ id: "how-to-come" })}</div>
          </section>
          <section className="plane">
            <div className="section-subtitle">{f({ id: "plane" })}</div>
            <div className="section-content">
              <p>{f({ id: "plane-text" })}</p>
            </div>
          </section>
          <section className="road">
            <div className="section-title">
              {/* <p> */}
              {f({ id: "road" })}
              {/* </p> */}
            </div>
            <div className="section-content">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d15861.07240621993!2d22.620820750398767!3d39.97180764859044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d39.9704135!2d22.6396758!4m5!1s0x14a7f53d3a3a8c9d%3A0x640f4079d40f3435!2sBRUNIS%20APARTMENTS%2C%20Afroditi%208%2C%20Neo%20Pori%20600%2065!3m2!1d39.975795999999995!2d22.654742!5e0!3m2!1sel!2sgr!4v1680970226028!5m2!1sel!2sgr"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="description">{f({ id: "road-text" })}</div>
            </div>
          </section>
          <section className="train-station">
            <div className="section-title">
              {/* <p> */}
              {f({ id: "train-station" })}
              {/* </p> */}
            </div>
            <div className="section-content">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6115.048019290914!2d22.641778024272895!3d39.974393639542065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x14a7f5414dd62ced%3A0x5bae00db266535f4!2zTmVvaSBQb3JvaSwgzpHOvc6xz4TOv867zrnOus-Mz4IgzozOu8-FzrzPgM6_z4I!3m2!1d39.9758804!2d22.6382475!4m5!1s0x14a7f53d3a3a8c9d%3A0x640f4079d40f3435!2sBRUNIS%20APARTMENTS%2C%20Afroditi%208%2C%20Neo%20Pori%20600%2065!3m2!1d39.975795999999995!2d22.654742!5e0!3m2!1sel!2sgr!4v1680970421595!5m2!1sel!2sgr"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="description">
                {f({ id: "train-station-text" })}
              </div>
            </div>
            {/* <div className="section-content"> */}
            <div className="train-link">
              <Link className="link" href={f({ id: "train-station-link" })}>
                {f({ id: "train-station-link-text" })}
              </Link>
            </div>
            {/* </div> */}
          </section>
          <section className="bus">
            <div className="section-title">
              {/* <p> */}
              {f({ id: "bus" })}
              {/* </p> */}
            </div>
            <div className="telephones">
              <div className="tel">
                {f({ id: "bus-text-1" })}
                <Link className="link" href={"tel:" + f({ id: "bus-tel-1" })}>
                  {f({ id: "bus-tel-1" })}
                </Link>
              </div>
              <div className="tel">
                {f({ id: "bus-text-2" })}
                <Link className="link" href={"tel:" + f({ id: "bus-tel-2" })}>
                  {f({ id: "bus-tel-2" })}
                </Link>
              </div>
              <div className="tel">
                {f({ id: "bus-text-3" })}
                <Link className="link" href={"tel:" + f({ id: "bus-tel-3" })}>
                  {f({ id: "bus-tel-3" })}
                </Link>
              </div>
              <div className="tel">
                {f({ id: "bus-text-4" })}
                <Link className="link" href={"tel:" + f({ id: "bus-tel-4" })}>
                  {f({ id: "bus-tel-4" })}
                </Link>
              </div>
              <div className="tel">
                {f({ id: "bus-text-5" })}
                <Link className="link" href={"tel:" + f({ id: "bus-tel-5" })}>
                  {f({ id: "bus-tel-5" })}
                </Link>
              </div>
              <div className="tel">
                {f({ id: "bus-text-6" })}
                <Link className="link" href={"tel:" + f({ id: "bus-tel-6" })}>
                  {f({ id: "bus-tel-6" })}
                </Link>
              </div>
              <div className="tel">
                {f({ id: "bus-text-7" })}
                <Link className="link" href={"tel:" + f({ id: "bus-tel-7" })}>
                  {f({ id: "bus-tel-7" })}
                </Link>
              </div>
              <div className="tel">
                {f({ id: "bus-text-8" })}
                <Link className="link" href={"tel:" + f({ id: "bus-tel-8" })}>
                  {f({ id: "bus-tel-8" })}
                </Link>
              </div>
              <div className="tel">
                {f({ id: "bus-text-9" })}
                <Link className="link" href={"tel:" + f({ id: "bus-tel-9" })}>
                  {f({ id: "bus-tel-9" })}
                </Link>
              </div>
              <div className="tel">
                {f({ id: "bus-text-10" })}
                <Link className="link" href={"tel:" + f({ id: "bus-tel-10" })}>
                  {f({ id: "bus-tel-10" })}
                </Link>
              </div>
            </div>
          </section>
          <section className="find-us" id="contact">
            <div className="section-title">{f({ id: "find-us" })}</div>
            <div className="socials">
              <div className="social telephone">
                <Link href={`tel: ${f({ id: "telephone" })}`}>
                  <BsTelephoneFill />
                </Link>
              </div>
              <div className="social facebook">
                <Link href={f({ id: "facebook" })}>
                  <FaFacebook />
                </Link>
              </div>
              <div className="social email">
                <Link href={`mailto: ${f({ id: "email" })}`}>
                  <FaEnvelope />
                </Link>
              </div>
            </div>
            <div className="socials">{f({ id: "viber-whatsup" })}</div>
          </section>
        </div>
        <Footer></Footer>
      </main>
    </div>
  );
}

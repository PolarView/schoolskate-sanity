import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import About from "./components/About";
import Values from "./components/Values";
import Banner from "./components/Banner";
import Pricing from "./components/Pricing";
import Coaches from "./components/Coaches";
import Bunker from "./components/Bunker";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";

import { client } from "../sanity/client.js";

const FAQS_QUERY = `*[_type == "faq"]{id, question, answer, isOpen} | order(id asc)`;
const COACHES_QUERY = `*[_type == "coach"]{id,name, experience, thumb, video{'videoUrl':asset->url}} | order(id asc)`;
const PRICING_QUERY = `*[_type == "pricing"]{id,currentDuration, trainingType, trainingDescription, duration} | order(id asc)`;

const SANITY_QUERY = `{
  "previewData": *[_type == "preview"] {thumb},
  "faqs": *[_type == "faq"] | order(id asc) {
    id,
    question,
    answer,
    isOpen
  },
  "coaches": *[_type == "coach"] | order(id asc) {
    id,
    name,
    experience,
    thumb,
    "video": video{'videoUrl':asset->url}
  },
  "pricing": *[_type == "pricing"] | order(id asc) {
    id,
    currentDuration,
    trainingType,
    trainingDescription,
    duration
  }
}`;

// const COACHES_QUERY = `*[_type == "coach"]{id,name, experience, thumb{'imageUrl':asset->url}, video{'videoUrl':asset->url}}`;

async function getFaqs() {
  const faq = await client.fetch(
    FAQS_QUERY,
    {}
    // {
    //   next: {
    //     revalidate: 3600 // look for updates to revalidate cache every hour
    //   }
    // }
  );
  console.log(faq);
  return faq;
}

async function getCoaches() {
  const coaches = await client.fetch(
    COACHES_QUERY,
    {}
    // {
    //   next: {
    //     revalidate: 60 // look for updates to revalidate cache every hour
    //   }
    // }
  );
  return coaches;
}

async function getPricies() {
  const pricing = await client.fetch(
    PRICING_QUERY,
    {}
    // {
    //   next: {
    //     revalidate: 3600 // look for updates to revalidate cache every hour
    //   }
    // }
  );
  console.log(pricing);
  return pricing;
}

async function getSanityData() {
  const data = await client.fetch(
    SANITY_QUERY,
    {}
    // {
    //   next: {
    //     revalidate: 3600 // look for updates to revalidate cache every hour
    //   }
    // }
  );
  console.log(data);
  return data;
}

export default async function Home() {
  // const faq = await getFaqs();
  // const coaches = await getCoaches();
  // const pricing = await getPricies();

  const { previewData, faqs: faq, coaches, pricing } = await getSanityData();
  return (
    <div className=" min-h-screen flex max-w-screen overflow-x-hidden flex-col w-screen">
      <Navbar />
      <Preview previewData={previewData} />
      <About />
      <Values />
      <Banner />
      <Suspense>
        <Pricing pricing={pricing} />
      </Suspense>
      <Coaches coaches={coaches} />
      <Bunker />
      <Reviews />
      <Suspense>
        <Faq faq={faq} />
      </Suspense>
      <Footer />
    </div>
  );
}

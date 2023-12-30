import { getDictionary } from "./dictionary.js";
import CarSection from "./components/CarSection.jsx";
import Comments from "./components/Comments.jsx";
import Hero from "./components/Hero.jsx";
import Places from "./components/Places.jsx";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <main className="md:pl-16 md:px-0 px-4">
      <Hero />
      <Places />
      {/* <Work /> */}
      <CarSection />
      <Comments />
      {dict.h1}
    </main>
  );
}

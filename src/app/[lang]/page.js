import CarSection from "./components/CarSection.jsx";
import Comments from "./components/Comments.jsx";
import Hero from "./components/Hero.jsx";
import Places from "./components/Places.jsx";

export default function Home() {
  return (
    <main className="md:pl-16 md:px-0 px-4">
      <Hero />
      <Places />
      {/* <Work /> */}
      <CarSection />
      <Comments />
    </main>
  );
}

import Hero from "./components/Hero.jsx";
import Places from "./components/Places.jsx";
import Work from "./components/Work.jsx";

export default function Home() {
  return (
    <main className="md:pl-16 md:px-0 px-6">
      <Hero />
      <Places />
      <Work />
    </main>
  );
}

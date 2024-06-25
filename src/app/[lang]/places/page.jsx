import { useTranslations } from "next-intl";
import PlaceSection from "./placeSection";
import { placesData } from "../data/places";
import { itineraryData } from "../data/ininerary";

export const metadata = {
  title: "Places to Discover",
};

export default function Home() {
  const t = useTranslations("Places");
  const itineraryList = useTranslations("Places.Itinerary_list");
  const placeList = useTranslations("Places.places_list");

  const h2 = t("h2");
  const h4 = t("h4");
  const habana = t("Habana");
  const central = t("Central");
  //aqui traduzco los itinerarios

  for (let i = 1; i <= 16; i++) {
    let titleKey = `el${i}.title`;
    const detalles = `${itineraryList(`el${i}.detalles`)}`;
    itineraryData[i - 1].title = itineraryList(titleKey);
    itineraryData[i - 1].detalles = detalles;
  }

  //aqui traduzco los lugares
  for (let i = 1; i <= 53; i++) {
    let titleKey = `id${i}.title`;
    let descKey = `id${i}.description`;
    placesData[i - 1].title = placeList(titleKey);
    placesData[i - 1].description = placeList(descKey);
  }

  return (
    <main className="xl:px-16 px-0 sm:mt-32 mt-24">
      <PlaceSection
        itinerario={itineraryData}
        h2={h2}
        h4={h4}
        places={placesData}
        habana={habana}
        central={central}
      />
    </main>
  );
}

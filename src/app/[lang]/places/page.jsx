import { useTranslations } from "next-intl";
import PlaceSection from "./placeSection";
import { placesData } from "../data/palces";

export default function Home() {
  const t = useTranslations("Places");
  const itineraryList = useTranslations("Places.Itinerary_list");
  const placeList = useTranslations("Places.places_list");

  const h2 = t("h2");
  const h4 = t("h4");

  //aqui traduzco los itinerarios
  const itineraryData = [];
  for (let i = 1; i <= 13; i++) {
    let titleKey = `el${i}.title`;

    let details = [];

    for (let j = 1; j < 23; j++) {
      let detailKey = `el${i}.detalles.p${j}`;
      details.push(`${itineraryList(detailKey)}`);
    }
    itineraryData.push({
      title: `${itineraryList(titleKey)}`,
      lugar: `${itineraryList(`el${i}.lugar`)}`,
      detalles: details,
    });
  }

  //aqui traduzco los lugares
  for (let i = 1; i <= 51; i++) {
    let titleKey = `id${i}.title`;
    let descKey = `id${i}.description`;
    placesData[i - 1].title = placeList(titleKey);
    placesData[i - 1].description = placeList(descKey);
  }

  return (
    <main className=" xl:px-16 px-0 sm:mt-32 mt-24">
      <PlaceSection
        itinerario={itineraryData}
        h2={h2}
        h4={h4}
        places={placesData}
      />
    </main>
  );
}

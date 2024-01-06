import { useTranslations } from "next-intl";
import PlaceSection from "./placeSection";

export default function Home() {
  const t = useTranslations("Places");
  const placeList = useTranslations("Places.Places_list");

  const h2 = t("h2");
  const h4 = t("h4");

  const itineraryData = [];

  for (let i = 1; i <= 13; i++) {
    let titleKey = `el${i}.title`;

    let details = [];

    for (let j = 1; j < 23; j++) {
      let detailKey = `el${i}.detalles.p${j}`;
      details.push(`${placeList(detailKey)}`);
    }
    itineraryData.push({
      title: `${placeList(titleKey)}`,
      lugar: `${placeList(`el${i}.lugar`)}`,
      detalles: details,
    });
  }

  return (
    <main className=" xl:px-16 px-0 sm:mt-32 mt-24">
      <PlaceSection itinerario={itineraryData} h2={h2} h4={h4} />
    </main>
  );
}

import { useTranslations } from "next-intl";
import React from "react";

const Otraseccion = () => {
  const t = useTranslations("Places");

  const itineraryData = [
    {
      title: `${t("h4")}`,
      descripcion:
        "Departure time from the hotel ~8:00 Arrival time at the hotel ~17:00-18:00",
      lugar: "Havana",
      detalles: [
        "Departure time from the hotel ~8:00 Arrival time at the hotel ~17:00-18:00",
        "It takes 1.5 to 2 hours to reach Havana. On the way, we will make a stop at the highest bridge in Cuba (Bacunayagua), with views of the Valley of Yumurí and the ocean. They can try the most delicious pineapple cocktail in Cuba (for an additional cost).",
        "Stop near the Morro Castle, which offers impressive panoramic views of Havana. (Entry is paid and optional).",
        "Then, we will take a walk along the Malecón from where a two-hour walk through Old Havana will begin. Among the attractions are the Plaza de San Francisco de Asís, a bell tower from the old Franciscan monastery (with a fee), a rum museum with tasting (paid entry), the Cathedral of Our Lady of Kazán, the Plaza of the Cathedral, the Little Wine Cellar, the Palace of Spanish Governors, the Plaza of Arms, the Castle of the Royal Force (paid entry), the Bishop Street, the Hotel Ambos Mundos, the Plaza Vieja, among others.",
        "Visit to the Plaza of the Revolution, a stroll through the center of Havana, where you will find the Capitol, the Havana Grand Theater, the café Floridita (mentioned by Hemingway) and other points of interest.",
        "We leave Havana at 3:00 pm.",
        "The lunch is not included in the price of the excursion (estimated lunch cost is 15-20 $€).",
      ],
    },
  ];

  return (
    <div>
      {itineraryData.map((e, index) => (
        <p key={index}>{e.title}</p>
      ))}
    </div>
  );
};

export default Otraseccion;

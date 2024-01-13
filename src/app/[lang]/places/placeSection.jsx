"use client";
import { useState, useRef, useEffect } from "react";
import PlaceCard from "./placeCard";
import PlaceTag from "./placeTag";
import ItineraryTag from "./itineraryTag";
import { motion, useInView, AnimatePresence } from "framer-motion";
import ButtonTag from "./ButtonTag";
// import { placesData } from "../data/palces";
// import { itineraryData } from "../data/ininerary";

const PlaceSection = ({ itinerario, h2, h4, places, habana, central }) => {
  const itineraryData = itinerario;
  const placesData = places;
  const [tag, setTag] = useState();
  const [itinerary, setItinerary] = useState();
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const selectedArray = selectedDescription.split("\n");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleChange = (newTag) => {
    setTag(newTag);
    if (tag !== newTag) {
      setSelectedDescription("");
      setItinerary();
    }
    const newMatchingItineraries = itineraryData.filter((item) =>
      item.lugar.includes(newTag)
    );
    if (newMatchingItineraries.length > 0) {
      const firstItinerary = newMatchingItineraries[0];
      handleItinerary(firstItinerary.title, firstItinerary.detalles);
    }
  };
  const handleItinerary = (newItinerary, description) => {
    setItinerary(newItinerary);
    setSelectedDescription(description);
  };

  const matchingItineraries = itineraryData.filter((item) =>
    item.lugar.includes(tag)
  );
  const filteredPlaces = placesData.filter((places) =>
    places.itinerary.includes(itinerary)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const handleClick = (t) => {
    setSelectedId(t);
  };

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedId]);

  // useEffect(() => {
  //   if (matchingItineraries.length === 1) {
  //     const singleItinerary = matchingItineraries[0];
  //     handleItinerary(singleItinerary.title, singleItinerary.detalles);
  //   }
  // }, [matchingItineraries]);

  const closeModal = (e) => {
    if (e.target.id === "close") {
      setSelectedId(null);
    }
  };
  return (
    <section className={` xl:px-0 px-4 sm:mt-32 mt-24 sm:pb-10 pb-32 `}>
      <h2 className="text-center sm:text-4xl text-2xl font-bold  mb-4 text-paleta-blue-900">
        {h2}
      </h2>

      <div className="items-start flex flex-wrap justify-center md:space-x-10 sm:sm:space-x-4 gap-4 sm:gap-0 sm:py-10 py-3">
        <ButtonTag
          onClick={handleChange}
          name={"Pinar del Río"}
          isSelected={tag === "Pinar del Río"}
        />
        <ButtonTag
          onClick={handleChange}
          name={habana}
          isSelected={tag === habana}
        />
        <ButtonTag
          onClick={handleChange}
          name={"Matanzas"}
          isSelected={tag === "Matanzas"}
        />
        <ButtonTag
          onClick={handleChange}
          name={central}
          isSelected={tag === central}
        />
      </div>

      <div className="text-center items-center flex justify-center">
        <svg
          stroke="#ffffff"
          strokeWidth="2"
          viewBox="0 50 600 100"
          className="w-full h-[150px] sm:h-[250px] md:h-[400px] 2xl:h-[550px]"
        >
          <PlaceTag
            onClick={handleChange}
            name={"Pinar del Río"}
            isSelected={tag === "Pinar del Río"}
            d={
              "M128.5 131.2l1.4 0.5 0.2 0.2-1.8 0.1-2.1-0.2-1.4-0.6 0.9-0.5 2.8 0.5z m57.5-102l-0.1 0.6 0.4 3.6 0 0.5-0.3 2 2.3 4.5 0.5 2.4-0.2 0.9-1.7 2.1-0.5 0.4-0.7 0.3-2.2 0.2-0.6 0.4 0.4 0.3 1 0.5 0.8 1 1.5 2.6 1.2 1.5 1.1 0.8 0.6 0.4 0.5 0.8 0.7 1.2 1.9 4.3 0.4 0.8 3 3.4 0.7 1.1 0.3 0.6 0.1 0.4-2.3 0.8-5.6 4.7-1.1 0.7-2 0.2-1.5 0.5-6.1 3.2-3 2-2.6 2.7-5.2 10.2-2.2 2.1-3 0.4-3-0.9-1.3-0.1-1.3 0.4 0 1.6-0.2 0.4-0.8-0.2-0.6 0.3-0.8-0.2-0.1 0.4 0 1.7-3.4 2.2-1.1 1.2-0.5 0.9-0.1 1.2-0.6 1.5-0.5 0.6-0.8 0.7-0.3-0.4-0.2 0.9-0.7 0.7-0.5-1-0.8-0.3-0.8 0.1 0 1.6-1.6 1.7-4.6 0.4-4.7-0.6-4.1-1.7 0.8-0.9-0.3-1-0.7-1.1-0.5-1.2-0.6 0-1.3 2.7-2.3 2.4-2.7 1.8-2.5 0.6 0.5-1.4-10.2 1.5-0.5-0.1-0.3-0.4-0.3-0.7-0.1-0.6 0.1-0.3-1.1 0.3-1 1.4-1.4 0.3-7.2-0.4-2 0.4-3.8 3.8-0.1 0.7-0.7 2.8-0.4 1 0.4 0.6 0.2 0.6 0 1.5-1-0.9-1 0.2-0.6 1.1 0.1 1.6 0.7 1.4 0.9 0.5 1-0.3 1.2-0.9-0.5 2.1-3.2 2.4-0.8 2 0.4 0.5 0.6 0.6 0.4 0.7-0.5 1-0.8 0.8-1 0.8-1.1 0.5-1.1 0.3-1.8-0.5-3.4-1.8-2.1-0.5-2 0.5-3.6 2.2-1.7 0.7-0.9 0.1-1.9-0.1-0.9 0-1.1 0.5-2.1 1.3-2.8 0.9-10.9 9.2-4 2.1-3.9 0.4-1.2-2 3.7-7.8 0.7-3.9-2.1-2.9-3.6-0.7-4.1 0.6-7.4 2.2-3.6 1.7-9.3 6.3-3.7 0.9-4-0.1-3.9-1.2-1.2-1-0.8-1.4-0.2-1.7 0.3-1.6 0.8-1.5 0.6-0.6 0.6-0.3 0.5 0.3 0.8 1.5 0.6 0.6 0.8 0.3 0.8 0.1 0.8-0.1 1.6-0.7 1.1-1.1 0.1-1.3-1.6-1.1 1.6-0.8 1.4 0 0.9 0.9 0 2 7.5-4 6.7-2 7.9-3.6 5-3.7 0.7-0.3 1.2-0.1 1.2 0.1 0.5 0.5-0.4 0.8 2.9 1.3 2.2-0.7 2.1-1.2 2.7-0.7 1.3 0.4 1.6 1 1.3 1.2 0.5 1.1 0.5 0.6 2.5-1.8 1.4 0.2 1.3-5.5-1.1 1.2-1 1.8-1 0.9-1.3-1.1-0.6-1.9 0.2-1.5-0.3-1.2-1.9-0.9 0.9-2.1 0.4-0.7-1.7-0.2-1.8-0.7-1.7-0.9-1.2-0.9-0.7-1.4-0.6-1.7-0.9-1.3-1.5-0.3 0.9-0.9 1.1-1.5 0.8-1.8 0.3-1.7 0.2-2.3 0.4-2.2 1.3-4.4 0.3-0.2 1.3-2.6 0.5-0.2 1-0.1 0.4-0.3 0.4-0.7 0.4-1.2 0.2-0.5 2-2.9 1.3-1.6 1.7-1 0-0.7-1.9 0 1.6-1.3 3.9-0.8 1.8-1 1.1-1.5 1.1-2.2 0.5-2.2-1.1-1.3 0-0.7 0.9 0.3 1 0.4 1.3-1 1.2-0.2 1.1 0.6 0.8 1.2 0.8-3.7 0.5-1 0.9-0.4 2.4-0.2 0.5-0.5 0-1 0.3-1.7 0.7-1.2 1.2 0.5 1.2 0.8 1-0.5 0.9-1.1 1-0.9-0.7-1.2-1-0.7-1.2-0.2-1.5 0.1 0.4-0.8 0.7-0.7 0.8-0.5 0.9-0.2 1.5 0.6 0.7 1.2 0.7 1.2 0.8 0.6 1.3-0.3 1.1-0.5 5.6-4.1 1.3 1.3 0.8-2.1 1.5-1 4-0.3 1.5-0.3 6.4-3.2 3.2-1.2 1.5-0.1 1 0.2 1.2 0.5 1 0 0.6-0.2 1.3-0.8 0.7-0.3 0-0.8-1.4 0.8-0.1-0.7-0.5-0.1 2-1.2 2-0.6 4.6-0.2 0.4-0.6 1.1-3.2 0.6-0.3 3.8-0.1-0.2 0.7-0.4 0.7 1.8 0.4 1.1-1.1 0.7-1.5 0.8-1.2 1.4-0.6 1.1 0.4 1.1 0.9 1.5 0.7-0.6 1 1-0.3 1.4-0.9 0.8-0.8 0.6-1.7 1.3-2.2 1.8-1.9 1.6-0.8 1.3-0.4 4.7-3.1 1.9-0.8 1.7 0 1.5 0.5 1.2 1.1 0 0.6-0.8 0.6-0.4 1.3 0.2 1.4 0.7 1.2 1.1 0.5 1-0.6 0.8-1 0.6-0.7-1.6-1.4 0.1-1.3 1.3-1.1 2.1-0.9 3.8-0.7 0.7-0.4 1.2-0.9 0.6-0.1 0.9 0.2 1.3 0.8 1 0.4 0.5-0.3 0.5-0.6 0.7-0.3 0.9 0.5 0.5 1-0.6 0.3-0.9 0.2-0.4 0.5 0.4 1.1 0.6 0.3 0.7-0.3 0.9-1.1-0.2 2 1.6 0.1 1.8-1.2z"
            }
          />
          <PlaceTag
            onClick={handleChange}
            name={habana}
            isSelected={tag === habana}
            d={
              "M263.9 8.8l0.3 1-0.2 1 0.6 0.9 1.5 2-0.5 0.4-0.8 0-0.3 0.4 0.1 0.6 0.2 0.9 0 0.4-0.8 0.7-0.1 0.5-0.1 1.7-0.9 1.6-3.2-3.8-0.6-0.4-0.8-0.4-0.4 0.1-0.5 0.6-0.1 0.6-0.4 1.2-0.6 0.6-0.6 0.4-0.3-0.1-0.6-0.9-0.5-0.6-0.7 0.2 0.2 0.7 0 1-0.2 0.8-0.1 0.7 0.2 0.8 0.8 1.6 0 0.9-3.1 3.5-0.7 1.3-0.6 0.8-0.8 0.3-1.1 0-0.9-0.1-1-0.5-2.4 0.2-3.6-0.3-0.8 0.8-0.4 0.7-1.2 1.1-0.6 0.3-0.5-0.2-1-1.2-0.7-0.4-0.7 0.2-1.5 0.6-0.8-3.3-0.5-0.5-0.5 0.1-3.4-1.5-0.7-0.5-0.3-0.4 0.1-0.2 1.9-1.6 0.7-1.2-0.1-0.9-0.9-1.3-0.7-0.2-0.7 0.2-0.5 0.4-1.1 0.6-1.6-0.7-0.4-0.7 0.7-0.3 2-0.7 0.5-0.3 0.9-1.4 0.5-0.3 1.1-0.2 0.9-0.3 1.4-0.9 2.8-2.1 1.4-0.9 3.7-0.6 4.2-1.8 6.5-1.1 2.9-1.2 6.4 1.5 2-0.2 2.6-0.7z"
            }
          />
          <PlaceTag
            onClick={handleChange}
            name={"Matanzas"}
            isSelected={tag === "Matanzas"}
            d={
              "M314.7 122l0.2 1.4-0.7 0.1-1-0.6-0.9 0.1-0.6-0.2-0.4-0.6-0.2-0.8 0-0.8 0.6-0.4 1 0.3 1.4 0.8 0.6 0.7z m65.1-112.2l1.5 1.3 0-1.4 0.6 0 0.9 1.5 0.6 0.7 0 0.4-0.8 0.9-1.6 0.9-1.1-0.1-0.9-0.5-1.2-0.3-3 0.3-2.2 0.8-4.6 2.3 1.1-1.2 5.6-3.7 1.6-0.4 1.8 0.1 2 0.5-0.4-0.6-0.5-1-0.4-0.6 0.6-0.6 0.4 0.7z m29.3-1.4l0.8 0 2.4 0 1.1-0.4 0.6 0 0.2 0.7-0.2 0.8-0.5 0.4-0.7 0.3-0.8 0.6-0.9-0.2-1.7-0.7-1.8-0.5-1.6 0.3-0.4-0.6-0.4 0-1.1 0.6 0.3-1.3 0.6-0.9 1-0.4 1.5-0.1 0.4 0.2 0.7 0.9 0.5 0.3z m-12.7-0.9l-0.2 0.7-0.7 0-0.1 0.7-0.5 0.2-1-0.3-0.7 0.4-0.2 0.7-0.3-0.3-0.1-1.3 1-1.1 1.6-0.6 0.8-0.2 0.2 0.3 0.2 0.8z m6.6 13.4l-0.6 0.2-1.5 2.9-0.3 2.3 0.1 1 0 1.7-0.5 0.8-0.7 0.5-0.9 0.3-1 0-0.8-0.6-0.7-0.2-0.9 0.1-1.3 0.5-0.4 0.1-2.3-0.1-0.5 0.3-0.3 0.4-0.3 0.9 0 0.8 0 1.2 0.4 1.5 0.1 0.8-0.2 1.5-0.5 0.7-0.5 0.5-0.7 0.3 0.1 0.7 0.7 0.4 0.1 0.4 0.1 0.6 0.5 1 1 1 0.6 0.9 0.5 0.9 0.4 0.4 1.5 1 1.9 1.6 1.5-0.1 0.6-0.3 1.9-1.3 1.8-0.7 0.9-0.1 0.7 0.4 0.2 0.3 0.9 2.1 0.7 2.1 1.4 2.4 0.2 0.8-0.1 0.5-1.4 0.6-0.5 0.8-0.1 0.6 0.2 0.4 0.6 0.7 0.4 0.7 0.2 0.7 0 0.8-0.4 4.7 0 0.8 0.7 0.9 0.4 0.7 0.2 2 0.3 1 0.4 1 0.6 0.7 1.3 2.3-1.8 1.2-0.4 0.5-2 3.8-0.6 0.8-0.4 0.4-1.7 0.3-0.6 0.3-2.1 0.9-1 0-0.9-0.3-8.5-0.9-2.2 0.2-0.7-0.1-4.6-1.2-1-0.1-0.8 0.2-1.1 0.8-1.1 0.7-2 0.9-0.5 0.4-1.9 1.8-1.1 0.8-0.7 0.9 0.3 0.3 0.8 0.3 0.1 0.6-0.6 1.6-0.3 0.7-1.4 2.4-0.1 0.7 0.6 0 1.1-0.4 0.9 0.3 0.1 0.4-0.1 0.5-0.7 1.1-0.4 1.1 0.4 1.1-0.1 1.3-0.5 1.4-0.3 1.6 0.2 1.4 0.5 0.5 0.3 0.1 1.5-0.1 0.4 0 0.3 0.3 0.3 1.7-0.4 1.8 3.9 2.8 1.1 1.1 1 1.5 2.9 1.7 3.2 1.3 1.3 0.8 0.7 0.3 0.3 0 0.8-0.8 0.3-0.1 1.5-0.1 1.5-0.1 0.5 0.2 0.6 0.6 0.4 0.2 0.9-0.1 1.3-0.3 1.9-0.3 1 0.1 0.6 0.2 0.7 0.8 0.4 0.8 0.1 0.6 0.1 1.7 0.1 1.1 0.2 0.6 0.7 1.1-4.1 0.2-11.3-0.8-13.3 1.5-8.1-0.9-1.8-0.6-3.4-1.8-3.7-0.7-1.4-1-0.9-1.5-2.4-5.1-0.3-1 0-1.6 0.7-4.2-0.5-0.3-2.4-3.8-1.2-0.8-1.3-0.3-1 0.4-0.6 1 0 1.3 1.3 4.2 0 12.1-0.7 3.1-1.9-0.1 1.3-2.2-0.4-3.1-1.3-2.9-0.9-0.7-2.5 0.9-0.6 0.4-0.3 0.9 0.1 1.8-0.4 0.8-1.1 0.5-0.7-0.4-0.6-0.6-0.8-0.2-0.7 0.5-0.1 0.7-0.2 0.6-1.2 0.3-3.3-1.5-2-6.7-3.5-1.5-4.5 0-1-0.3-1.8-1.3-1-0.3-0.7 0.3-1.4 1.3-1.3 0.4-0.4 0.5-0.6 0.1-0.3-0.1-0.2-0.9-0.4-0.3-3.8-1.3-0.5-0.3-1.1-0.5-1.1 0-0.5 1.1-0.9 0.4-2 0.1-2.2-0.2-1.3-0.6-0.5 0-0.3 1.2-0.6 0.3-1.7-0.2 0.4 0.6 0.3 0.7-1 0-4.3-0.5-1.4-0.5-2.3-2.6-0.8-1.4-0.4-1.5-1.6-1.7-13-5.2-1.4-0.8-1.4-1.2-0.8-0.4-1.8-0.2-0.8-0.3-0.5-0.6-1-1.8-0.1-0.4-1.3 0-1.7-0.2-1.5-0.8-0.9-1.7 0.5-1.6 1.1-0.9 1.4-0.6 1.2-0.4 10.6 0.4 3.5-0.9 2.4 0.4 2.8-0.3 1.7-0.3 2.5 0.6 2.1 0.2 4.8-0.7 3.6-1.6 1 0.2 1-0.5 1.8 0 1-0.3 1.3-0.4 2.1-2 0.9-0.4-0.1-2.1 0.3-1-0.2-1.5 0.8-2.8 0-1.1-0.7-0.2 0.2-0.4 1.1-0.8 1.2-1.9 0.8-1.1 0.5-0.9 0.5-1.4 0.7-5.1-0.2-1.5-1.5-1.3-3.5-2.2-0.5-0.9 0-1.5 1-2.6 0-0.6-0.3-0.6-1.2-0.8-1.5-1.4-1.5-2.7 1.2-3.7 0.3-2.9 0.1-0.4-0.2-1-1.1-1.6-1.5-2-1.4-1.2-0.6-0.2-1.1-0.2-0.4-0.5 0.5-1.4 0.5-0.4 1.9-1.3 0.9-1.2 0.3-0.2 0.2-0.6-0.4-0.5-0.8-0.7 0-0.3 0.1-0.5 0.7-1 0.5-0.2 0.4 0 0.9 0.5 0.4 0 0-0.7-0.2-1.2-1.1-5.3 0.9-1.2 0.1-0.9 2.4 0.1 1.4-0.3 1.3-0.6 1 0.6 1.1 0 1 0 1.3 0.2 0.6 0.3 1.6 1.4 2 1.1 0.3 2-0.3 2.3-0.4 1.8-0.6 0.8-0.6 0.4 0 0.3 1.2 0.5 1 0.2 1-0.3 1.4-0.5 0.4-0.6 0.6-2.4 0.3-0.9 0.8-0.7 0.6-0.2 0.9 0 7.7-1.4 1.1-0.4 1-1.1 2.3-0.7 4.3-0.6 1.4-0.5 3.4-1.7 2.2-1.8 4.1-2.4 1.5-0.4 1.8 0.6-1.3 1.2-2.6 1-4.2 1.2-5 3-1.3 1.2 0 0.6 4.1 1.1 5.3 6.2 3.2 1.7 1.9 0.1 0.8-0.5 0.6-1 1.4-1.7 0.5-0.8 0.9-2.5 0.5-0.5 1-0.1 1.9-0.5 0.6-0.1 3.9 0.7 0.6 0 0.4-0.2 0.1 0.3 0.1 1.6 0.7 2.2 1.7 0.6 2-0.4 1.9-0.6 14.5-2.8 2.3-0.1 4.3 0.9 2.3-0.1 1.9-0.8 1.7-1.5 0.6-1.9-1.7-2 1.2-0.5 1.2-0.2 1.2 0.2 0.9 0.5 0 0.7-0.8 0.7-2.4 4.8 2.5 2 0.2 0.2z m-11.1-13.3l0.2 0.3-0.1 0.6-0.6 0.2-0.6-0.4-0.7 0-0.4 0.6-0.4 0.3-1.9-0.9-1.1-0.4-0.7-0.1-1.7 0.2-1-0.1-2.6-0.9-0.9-0.2-0.7-1-0.5-0.2 0.4-0.6 1.8 0.2 2.5 1 3.3 0.7 5.7 0.7z m-18.5-6.6l2.6 1.6 0.6-0.1 0.4 0.2 0.3 0.8-0.7 0.9-1.1-0.2-1-0.3-1.1-0.2-1-0.4-0.5-0.7-0.4-0.5-0.8-0.3 0.6-0.6 2.1-0.2z"
            }
          />

          <path
            d="M210.5 69.8l-1 0.8-0.8-1.3 0.7-0.6 0.4-0.5 0.7 1 0 0.6z m14.8 1.5l-0.4 0.6-0.4-0.4 0.2-6.3-0.3-0.8 0-0.6 0.3 0 0.5 0.4 0.3 0.7 0.5 1.6 0.3 2.4-0.5 1.7-0.5 0.7z m7.6-39.3l-0.1 3.5 0 2.7-1.1 2.4-0.8 3.3 0 3.7 1.9 3.9 1.9 2.7 2.3 1.4 0.4 1.3-0.4 2.1-6.1 0.8-4.8-1.2-1.1 0.2-1.8 1-0.9 0.2-4.3-1-3.3 0.8-9.7-2.6-2 0-1.9 1-0.9 1.7-0.3 1.9-0.1 2-0.5 1.8-1.4 0.9-0.8 0.3-0.1-0.4-0.3-0.6-0.7-1.1-3-3.4-0.4-0.8-1.9-4.3-0.7-1.2-0.5-0.8-0.6-0.4-1.1-0.8-1.2-1.5-1.5-2.6-0.8-1-1-0.5-0.4-0.3 0.6-0.4 2.2-0.2 0.7-0.3 0.5-0.4 1.7-2.1 0.2-0.9-0.5-2.4-2.3-4.5 0.3-2 0-0.5-0.4-3.6 0.1-0.6 0.2-0.1 1-2.5 1.3-2.1 3-0.1 3.3 0.5 2.2-0.3 2-0.8 8.4 0.4 8.5-1.1 2.3-0.9 1.8 0.1 3.4-2 0.4 0.7 1.6 0.7 1.1-0.6 0.5-0.4 0.7-0.2 0.7 0.2 0.9 1.3 0.1 0.9-0.7 1.2-1.9 1.6-0.1 0.2 0.3 0.4 0.7 0.5 3.4 1.5 0.5-0.1 0.5 0.5 0.8 3.3z"
            name="Artemisa"
          ></path>

          <path
            d="M302.3 11.9l-0.1 0.9-0.9 1.2 1.1 5.3 0.2 1.2 0 0.7-0.4 0-0.9-0.5-0.4 0-0.5 0.2-0.7 1-0.1 0.5 0 0.3 0.8 0.7 0.4 0.5-0.2 0.6-0.3 0.2-0.9 1.2-1.9 1.3-0.5 0.4-0.5 1.4 0.4 0.5 1.1 0.2 0.6 0.2 1.4 1.2 1.5 2 1.1 1.6 0.2 1-0.1 0.4-0.3 2.9-1.2 3.7 1.5 2.7 1.5 1.4 1.2 0.8 0.3 0.6 0 0.6-1 2.6 0 1.5 0.5 0.9 3.5 2.2 1.5 1.3 0.2 1.5-0.7 5.1-0.5 1.4-0.5 0.9-0.8 1.1-1.2 1.9-1.1 0.8-0.2 0.4-0.7-0.3-1.4 0-2.5-2.2-1.7-1.4-3.2-2.5-3.2-1.2-8.3-2.9-3.2 0.1-7.4 0.7-9.8 1.7-2.9-1.3-6.3-1.8-7 0-5.9 0.7-2-0.2-2.9-0.8 0.4-2.1-0.4-1.3-2.3-1.4-1.9-2.7-1.9-3.9 0-3.7 0.8-3.3 1.1-2.4 0-2.7 0.1-3.5 1.5-0.6 0.7-0.2 0.7 0.4 1 1.2 0.5 0.2 0.6-0.3 1.2-1.1 0.4-0.7 0.8-0.8 3.6 0.3 2.4-0.2 1 0.5 0.9 0.1 1.1 0 0.8-0.3 0.6-0.8 0.7-1.3 3.1-3.5 0-0.9-0.8-1.6-0.2-0.8 0.1-0.7 0.2-0.8 0-1-0.2-0.7 0.7-0.2 0.5 0.6 0.6 0.9 0.3 0.1 0.6-0.4 0.6-0.6 0.4-1.2 0.1-0.6 0.5-0.6 0.4-0.1 0.8 0.4 0.6 0.4 3.2 3.8 0.9-1.6 0.1-1.7 0.1-0.5 0.8-0.7 0-0.4-0.2-0.9-0.1-0.6 0.3-0.4 0.8 0 0.5-0.4-1.5-2-0.6-0.9 0.2-1-0.3-1 1.1-0.2 2.1-0.2 1-0.3 1-0.4 1-0.1 0.9 0.4 3.5 2.5 2.7 0.8 5.9 0.5 2.7 0.7 2.1-0.6 14.4 0z"
            name="Mayabeque"
          ></path>
          <PlaceTag
            onClick={handleChange}
            name={central}
            isSelected={tag === central}
            d={
              "M497.3 47.4l4.8 5.5 2 1.6 4.3 1.3 3.4 2.9 3.8 1.5 1.9 1.9 1.5 2.3 0.8 1.8-2.1-1.9-1.6-0.4-0.8-0.4-1.2-0.8-1.4-1.2-3.1-3.5-1.7 0.6-1.7-0.2-1.5-0.8-2.1-1.6-0.6-0.2-0.4-0.5-0.1-1.1-0.4-0.4-1.4-1.1-0.5-0.3-0.7-0.6-0.5-1.4-0.8-1.4-1.8-0.7-2.7 1.2-1.2-0.1-0.2-1.8 2.6-0.8 1.9-0.1 1.5 0.7z m-10.1-5.6l1.3 0.8 0.5 0.7-0.9 0.9-1.4 0.2-0.6-0.6 0-0.7-0.7-0.6-0.5 0.1-0.6-0.2-1.8-1.2-0.8-1 0.1-1 1.1-0.3-0.2-0.7 0.1-0.8 0.5-0.4 0.6 1.2-0.2 1.6 0.6 0.2 1.8 0.4 0.6 0.8 0.5 0.6z m-21.3-10.7l1.4 0.7 0.8 0-0.1 1.3-1 1-1.9-1.3-0.9 0.3-1 1.4-0.9 0.4-0.7-2.5 1.3-0.8 1.5-0.5 1.5 0z m7 5.5l-1.1 0.1-1-0.6-0.6-0.9 0.3-0.6 0.5-0.5 0.2-0.5-0.8-0.1-0.8-0.5 0.9-1.5 2.1-0.6 1.1 0.4 0.7 1 0.2 0.7-0.6 0.5-1.1 0.4-0.7 0.7 0.5 0.5 0.7 0.2 0.2 0.5-0.7 0.8z m-38.4-7.5l0.8 0.4 0.6 0.6 0.3 0.7 0.1 1-9.3-1.6-1.4-1.1 0.5-0.5 0.6-0.2 0.6 0.1 0.8 0.6 4.5-2.3 2-0.2 1.7 1.1-0.5 0.3-0.9 0.8-0.4 0.3z m77 51.5l-0.1 0.1 0.1 2.3-1.7 3.2 1 0.9 0.8 1.2 3.1 6.3 2.6 3.6 0.1 0.7-0.4 1.3-0.2 1.2 0.1 1.6-0.3 1.8-2.4-0.4-2.3-1.2-0.9-0.2-1.1 0-1.6 0.6-1.1 0.6-1.7 1.7-0.5 1.8-0.4 1.3-0.7 1.4-0.8 1.1-0.8 0.7-1.1 0.5-1.3 0.1-1.3-0.5-0.8-0.6-1.2-0.5-1.9 0.6-3.8-1.2-0.8 0-1.3 0.1-1.3 0.9-0.7 0.4-0.7 0-1-0.2-1-0.9-0.8-1.3-1-0.9-3.1-0.1-1 0.9-0.2 0.7 0 1 0.6 1.8 1.4 2.6 0.4 1.1 0.3 0.7 0.3 0.3 0.4 0.1 1-0.1 0.4 0.2 0.4 0.6-0.1 1.3-0.5 1.8-1.5 3.1-1.8 3-2.3 2-2.8-0.2-1.3-0.7-0.4-0.4-0.7-0.3-5.4-1.3-0.8 0.2-1 0.4-0.9 1.1-0.3 0.8-0.2 0.9-0.3 0.5-0.5 0.3-1.3-0.1-0.6 0.1-1.8 1.5-3.2 1.5 0-1.4-0.1-0.2-1.9-1.4-0.3-0.9-0.1-0.9 0-1.5-0.1-2.7-0.3-0.8-0.4-0.7-1.8-1.4-0.6-1.3-0.5-1.3-0.9-4-0.1-0.8 0.1-2-0.4-3.8 0.1-0.9 0.7-1.5 1-3.2-2.3-1.1-1.1-1.5-0.8-1.4-0.5-1.2-0.3-0.9-0.3-2.2-0.4-0.6-0.8 0-1.4 0.4-0.7 0.1-0.6-0.1-1.2-0.6-3.3-3.3-0.6-0.8-0.3-0.7 0-1 1.7-2 0.3-1.3-0.6-0.8-0.7-0.4-0.3-0.7-0.1-0.6 0.2-0.7 0.3-0.8-0.2-1.1-1.8-1-0.3-0.5-1.1-2.4 0-1.4 0.2-0.2 1-0.4 0.2-0.5 0.1-0.9 0-1.7-0.1-0.7-0.2-0.3-0.9 0.9-1.2 0.1-1.3-0.1-0.8 0.1-0.7 1-0.7 2.3-0.4 0.4-1.8 0-0.4 0.2-1 0.7-0.6 0.3-1.1 0.4-0.9-0.2-0.2-0.5 0.1-0.4 0.5-1.3 0.1-1 0.1-1.4-0.5-0.6-0.7-0.1-2.3 0.4-2.2-1.8-0.5-0.2-0.8 0-0.4 0.2-1.7 2-3.9 2.3-1.3-2.3-0.6-0.7-0.4-1-0.3-1-0.2-2-0.4-0.7-0.7-0.9 0-0.8 0.4-4.7 0-0.8-0.2-0.7-0.4-0.7-0.6-0.7-0.2-0.4 0.1-0.6 0.5-0.8 1.4-0.6 0.1-0.5-0.2-0.8-1.4-2.4-0.7-2.1-0.9-2.1-0.2-0.3-0.7-0.4-0.9 0.1-1.8 0.7-1.9 1.3-0.6 0.3-1.5 0.1-1.9-1.6-1.5-1-0.4-0.4-0.5-0.9-0.6-0.9-1-1-0.5-1-0.1-0.6-0.1-0.4-0.7-0.4-0.1-0.7 0.7-0.3 0.5-0.5 0.5-0.7 0.2-1.5-0.1-0.8-0.4-1.5 0-1.2 0-0.8 0.3-0.9 0.3-0.4 0.5-0.3 2.3 0.1 0.4-0.1 1.3-0.5 0.9-0.1 0.7 0.2 0.8 0.6 1 0 0.9-0.3 0.7-0.5 0.5-0.8 0-1.7-0.1-1 0.3-2.3 1.5-2.9 0.6-0.2 3.3 6.1 1.9 1.3 1.5 0.1 3.7 0.8 1.4 0.5 0.9 0.8 0.9 1.2 1.3 1 1.6 0.5 5.2 0 1.2 0.3 1.4 1.3 1.5 0.8 1.5 0.6 1.6 0.4 3 0.1 2.9-0.6 5.5-2.2-0.7-2.4 1.5-0.1 4.9 2.5 2.2 0.7 1.9-0.4 0.3-2.4 1 0.6 1 0.7 0.8 0.8 0.3 1 2.1 3.8 0.2 0.7 3.5 2 0.5 0.1 1.6-0.1 0.7 0.3 0.2 0.4 0.1 0.8 1.9-0.6 3-2.9 5.7-1.6 0.8 0.2 0 0.8-0.9 0.8-1.7 1.1-2.1-1-1 0.8-1.3 3.7 1.1 1.5 0.5 0.7 0.9 0.6 1 0.2 3.8 0.4 1.6 0.5 5.4 3.9 0.7 0.9 0.5 0.2 0.5-0.2 0.6-0.5 0.5-0.7 2.1-0.3 0.8 0.5 2.3 10.2 1.4 0.5 1.1 0.6 1 0.8 1.1 1.1 1 1.6 1.3 3.1 0.9 1.5 2.3 2.7 0.5 0.4 1.4 0.3 2.7 0 1 0.3 2.5 3.9 0.5 1.1 0.7 0.6z m-59.8-58.7l0.7 1.6 0.3 1.3-0.2 0.2-0.5-0.7-0.5-0.5-1 0.2-0.7-0.1-0.5-0.5-0.4-0.5 0.4-0.2 0.1-0.6 0.2-1.2 1-0.2 1.1 1.2z m-7.2-1.8l-1.8 0.9-1.9-0.4-3.9-1.9 0.2-1 0.5-0.8 0.6-0.7 0.6-1 0.7 0 0.6 1.3 1 1.1 1.2 0.8 1.3 0.3 1.5 0.1 0.5 0.2-0.3 0.4-0.8 0.7z m-9.4-1l-0.5 0.1-0.6-0.5-0.9-1.4-0.7-0.3-1.8-0.9-0.3-0.7-0.6-0.4-0.2-0.8 0.9-0.6 1.3-0.2 0.8 0.2 0 0.6 0.7 0.7 1.3 1.2 0.8 1.1 0.4 0.7-0.1 0.7-0.5 0.5z m-12.3-6.2l-0.7 0.2-0.8-0.1-2.3 0.3-0.9 0.7-1.4 0.6-1.3 0.4-0.4-0.9 0.4-0.2 0.8 0.1-0.1-0.9 0.4-0.5 1.3-0.2 2.8-0.2 1.1 0 1.3 0.2-0.2 0.5z M556.7 88l-0.4 1.4-0.3 3.1-0.7 0.7-0.8 0.7-1.5 3.2-0.8 3.2-0.9 1.9-1.3 2.4-1.3 2.1-0.8 2.4-1.2 1.1 0.2 2.8-1.4 3.2 0.2 2 1.4 1.3 2.9 2.4 3.2 1.6 0.4 1.7 0 2.3-1.4 2.5-1.6 2.5-0.5 1.1-1.4-0.3-1.4-0.1-1.1 0.7-0.5 2.1-1.1 2.1-1.4 2.6-0.9 2.2-0.9 3.9-2.1 4.4-0.6 1.6 1.5 2.3 0.6 1.6-0.4 2.8-0.5 1.7 0.8 1.2 2.5 0 2.7-1.2 1.1-1.3 0-1.6 1.3-2 2.3 1 2 1.4 0.6 1.3-0.3 2.6 0.3 3.1 0.4 2.1-0.9 0.4-0.7-0.8-1.6 0.9-1.6 0.4-4 0.1-1.8 0.3-4.9 2.4-3.8 1-3.6 0.3-3.8-0.3-7.4-2.2-1.5-0.9-1.7-1.6-1.3-0.2-4.8 0.6-1.8 0-2-0.7-0.9-0.5-0.9-0.9-1.4-2.3-0.8-0.9-0.4 0.8-0.2 1-0.7 0.7-1 0.1-0.9-0.5-0.9-0.8-0.5-0.3-3.9-1.1-0.6-0.2-0.7-0.6-0.6-1-0.4-1.1-0.6-0.9-1.2-0.4-6.5-0.2-6.3-1.8-2.3 0-1.1 1.6-0.6 1.8-1.6-0.3-2-1-2.1-0.8 0-0.7 1.9-0.7 0-0.6-1.4-0.4-0.3-1.1 0.1-1.4-0.3-1.2-1.5 1.1-1.7 0.5-1.8 0.1-2-0.4-1.9-0.7-1.1-0.2-0.8 0.2-0.2 0.7 0.5 0.7 1 0.5 0.7 0.1-1.1 1.3-1.7-0.8-1.6-1.8-0.7-1.7-0.2-2.1-0.6-1.9-1.1-1.3-1.6-0.5-1.5-0.3 0.2-4.1 0.1-0.5 0.9-1.2 2.5-2 3.4-3.5 3.2-1.5 1.8-1.5 0.6-0.1 1.3 0.1 0.5-0.3 0.3-0.5 0.2-0.9 0.3-0.8 0.9-1.1 1-0.4 0.8-0.2 5.4 1.3 0.7 0.3 0.4 0.4 1.3 0.7 2.8 0.2 2.3-2 1.8-3 1.5-3.1 0.5-1.8 0.1-1.3-0.4-0.6-0.4-0.2-1 0.1-0.4-0.1-0.3-0.3-0.3-0.7-0.4-1.1-1.4-2.6-0.6-1.8 0-1 0.2-0.7 1-0.9 3.1 0.1 1 0.9 0.8 1.3 1 0.9 1 0.2 0.7 0 0.7-0.4 1.3-0.9 1.3-0.1 0.8 0 3.8 1.2 1.9-0.6 1.2 0.5 0.8 0.6 1.3 0.5 1.3-0.1 1.1-0.5 0.8-0.7 0.8-1.1 0.7-1.4 0.4-1.3 0.5-1.8 1.7-1.7 1.1-0.6 1.6-0.6 1.1 0 0.9 0.2 2.3 1.2 2.4 0.4 0.3-1.8-0.1-1.6 0.2-1.2 0.4-1.3-0.1-0.7-2.6-3.6-3.1-6.3-0.8-1.2-1-0.9 1.7-3.2-0.1-2.3 0.1-0.1 6.9 6 2.7 1.3 2.5-0.4 0.9 0.9 1.7 1.3 1.7 0.5 0.8-1 1-0.2 4.8 1.1 1.7 0 1-0.7 0.5-1.1 1.1-0.1 0.9 0.2 1.5 0.9 1 0.2 2-0.3 3.5-1.3 1.8-0.4 2.1-0.1 5.1 0.6z m-25.8-22.6l-0.6 0 0-0.7-0.3-0.5-0.8-0.3 0.8-0.3 3.6-0.2-1.2 1-1.5 1z m22.6-2.5l-2.1 1.2-0.5-1.4-1.4-0.5-5.5-0.4-0.9-0.4-1.2-0.7 1.5-0.3 8.7 0.6 1.5 0.8-0.1 1.1z M455.5 134l-3.4 3.5-2.5 2-0.9 1.2-0.1 0.5-0.2 4.1-0.4 0-3.8-1.5-3.9-0.8-2.7-2.3-4.8-1.6-2.9-2.4-10-10.9-0.2-0.4-0.1-1.1-0.4-0.6-0.4 0-1.1 0.1-0.4-0.1-1-0.9-0.2-0.6 0-1.2 1.3 0.3 1.6-0.1 1.6-0.5 1.2-1-1.4 0.3-0.5 0.3 0.3-0.9 0.5-0.8 0.4-0.9 0-0.8-0.7-0.3-1.1 0.3-0.9 0 0.1-1.3-1.8 0-1.1-0.8-0.2-1.2 1.4-1.5-2.2-1.4-0.9-0.8-0.7-1.2-0.7 1-1.1 0.4-1.4-0.2-1.3-0.6-0.5 2.1 0.9 1.4 2.8 2 1.3 1.9 1.2 2.3 0.6 2.4-0.6 2.3-3.9-1.5-7.4 0.2-0.7-1.1-0.2-0.6-0.1-1.1-0.1-1.7-0.1-0.6-0.4-0.8-0.7-0.8-0.6-0.2-1-0.1-1.9 0.3-1.3 0.3-0.9 0.1-0.4-0.2-0.6-0.6-0.5-0.2-1.5 0.1-1.5 0.1-0.3 0.1-0.8 0.8-0.3 0-0.7-0.3-1.3-0.8-3.2-1.3-2.9-1.7-1-1.5-1.1-1.1-3.9-2.8 0.4-1.8-0.3-1.7-0.3-0.3-0.4 0-1.5 0.1-0.3-0.1-0.5-0.5-0.2-1.4 0.3-1.6 0.5-1.4 0.1-1.3-0.4-1.1 0.4-1.1 0.7-1.1 0.1-0.5-0.1-0.4-0.9-0.3-1.1 0.4-0.6 0 0.1-0.7 1.4-2.4 0.3-0.7 0.6-1.6-0.1-0.6-0.8-0.3-0.3-0.3 0.7-0.9 1.1-0.8 1.9-1.8 0.5-0.4 2-0.9 1.1-0.7 1.1-0.8 0.8-0.2 1 0.1 4.6 1.2 0.7 0.1 2.2-0.2 8.5 0.9 0.9 0.3 1 0 2.1-0.9 0.6-0.3 1.7-0.3 0.4-0.4 0.6-0.8 2-3.8 0.4-0.5 1.8-1.2 3.9-2.3 1.7-2 0.4-0.2 0.8 0 0.5 0.2 2.2 1.8 2.3-0.4 0.7 0.1 0.5 0.6-0.1 1.4-0.1 1-0.5 1.3-0.1 0.4 0.2 0.5 0.9 0.2 1.1-0.4 0.6-0.3 1-0.7 0.4-0.2 1.8 0 0.4-0.4 0.7-2.3 0.7-1 0.8-0.1 1.3 0.1 1.2-0.1 0.9-0.9 0.2 0.3 0.1 0.7 0 1.7-0.1 0.9-0.2 0.5-1 0.4-0.2 0.2 0 1.4 1.1 2.4 0.3 0.5 1.8 1 0.2 1.1-0.3 0.8-0.2 0.7 0.1 0.6 0.3 0.7 0.7 0.4 0.6 0.8-0.3 1.3-1.7 2 0 1 0.3 0.7 0.6 0.8 3.3 3.3 1.2 0.6 0.6 0.1 0.7-0.1 1.4-0.4 0.8 0 0.4 0.6 0.3 2.2 0.3 0.9 0.5 1.2 0.8 1.4 1.1 1.5 2.3 1.1-1 3.2-0.7 1.5-0.1 0.9 0.4 3.8-0.1 2 0.1 0.8 0.9 4 0.5 1.3 0.6 1.3 1.8 1.4 0.4 0.7 0.3 0.8 0.1 2.7 0 1.5 0.1 0.9 0.3 0.9 1.9 1.4 0.1 0.2 0 1.4z"
            }
          />
        </svg>
      </div>
      <div>
        <h3
          className="w-full text-center text-3xl font-bold text-paleta-blue-900"
          id="itinerary"
        >
          {h4}:
        </h3>
        <div className="flex sm:flex-row flex-col w-full justify-around pt-10">
          <div className="flex flex-col md:w-[40%] gap-6  mb-5">
            {matchingItineraries.map((item, index) => (
              <div key={index}>
                <ItineraryTag
                  title={item.title}
                  isSelected={itinerary === `${item.title}`}
                  onClick={handleItinerary}
                  desc={item.detalles}
                  itinerario={item.title}
                />
              </div>
            ))}
          </div>
          <div className="sm:w-1/2 w-full flex flex-col sm:mt-0 mt-5 gap-2">
            {selectedArray.map((item) => (
              <p key={item}>- {item}</p>
            ))}
          </div>
        </div>

        <ul
          ref={ref}
          className="grid md:grid-cols-3 gap-8 md:gap-12 relative mt-10"
        >
          <AnimatePresence>
            {filteredPlaces.map((t, index) => (
              <motion.li
                key={t.id}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.div layoutId={t.id} onClick={() => handleClick(t)}>
                  <PlaceCard
                    key={t.id}
                    title={t.title}
                    description={t.description}
                    imgUrl={t.image}
                    tags={t.tag}
                  />
                </motion.div>
                {selectedId && (
                  <motion.div
                    id="close"
                    className=" fixed transition-all duration-75 delay-75  inset-0   cursor-pointer flex items-center justify-center"
                    onClick={closeModal}
                  >
                    <motion.div
                      transition={{ duration: 0.1 }}
                      className="  h-[500px] w-[800px] bg-paleta-blue-900  cursor-default rounded-xl overflow-y-scroll"
                      layoutId={selectedId.id}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${selectedId.image})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "top",
                        }}
                        className="w-full h-[300px] rounded-b-xl "
                      >
                        {" "}
                        <div className="w-full text-end">
                          {" "}
                          <motion.button
                            className=" py-2 px-4 bg-paleta-bond-200 mt-4 mr-4 rounded-full text-paleta-blue-900 text-xl font-bold"
                            id="close"
                            onClick={closeModal}
                          >
                            x
                          </motion.button>
                        </div>
                      </div>
                      <div className="text-paleta-bond-200 sm:px-10 px-4 py-4 space-y-5">
                        <motion.h2 className="font-bold text-2xl">
                          {selectedId.title}
                        </motion.h2>
                        <motion.h5>{selectedId.description}</motion.h5>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
};

export default PlaceSection;

// <h2 className="text-center font-bold text-4xl text-paleta-blue-900 mb-10">
// Popular Places
// </h2>
// <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
// <AnimatePresence>
//   {filteredPlaces.map((t, index) => (
//     <motion.li
//       key={t.id}
//       variants={cardVariants}
//       initial="initial"
//       animate={isInView ? "animate" : "initial"}
//       exit={{ y: 50, opacity: 0 }}
//       transition={{ duration: 0.2, delay: index * 0.1 }}
//     >
//       <motion.div layoutId={t.id} onClick={() => handleClick(t)}>
//         <PlaceCard
//           key={t.id}
//           title={t.title}
//           description={t.description}
//           imgUrl={t.image}
//           tags={t.tag}
//         />
//       </motion.div>
//       {selectedId && (
//         <motion.div
//           id="close"
//           className=" fixed transition-all duration-75 delay-75  inset-0   cursor-pointer flex items-center justify-center"
//           onClick={closeModal}
//         >
//           <motion.div
//             transition={{ duration: 0.1 }}
//             className="  h-[500px] w-[800px] bg-paleta-blue-900  cursor-default rounded-xl overflow-y-scroll"
//             layoutId={selectedId.id}
//           >
//             <div
//               style={{
//                 backgroundImage: `url(${selectedId.image})`,
//                 backgroundSize: "cover",
//                 backgroundRepeat: "no-repeat",
//                 backgroundPosition: "top",
//               }}
//               className="w-full h-[300px] rounded-b-xl "
//             >
//               {" "}
//               <div className="w-full text-end">
//                 {" "}
//                 <motion.button
//                   className=" py-2 px-4 bg-paleta-bond-200 mt-4 mr-4 rounded-full text-paleta-blue-900 text-xl font-bold"
//                   id="close"
//                   onClick={closeModal}
//                 >
//                   x
//                 </motion.button>
//               </div>
//             </div>
//             <div className="text-paleta-bond-200 sm:px-10 px-4 py-4 space-y-5">
//               <motion.h2 className="font-bold text-2xl">
//                 {selectedId.title}
//               </motion.h2>
//               <motion.h5>{selectedId.description}</motion.h5>
//               <h4 className="text-xl font-semibold pt-5">
//                 Tourism Atraction
//               </h4>
//               <ul className="flex flex-col gap-2">
//                 {selectedId.tourism.map((el, index) => (
//                   <li key={index}>
//                     {index + 1}- {el}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </motion.li>
//   ))}
// </AnimatePresence>
// </ul>

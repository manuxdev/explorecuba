"use client";
import { useState, useRef, useEffect } from "react";
import PlaceCard from "./placeCard";
import PlaceTag from "./placeTag";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { placesData } from "../data/palces";

const PlaceSection = () => {
  const [tag, setTag] = useState();
  const [selectedId, setSelectedId] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleChange = (newTag) => {
    setTag(newTag);
  };

  const filteredPlaces = placesData.filter((places) =>
    places.tag.includes(tag)
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

  const closeModal = (e) => {
    if (e.target.id === "close") {
      setSelectedId(null);
    }
  };
  return (
    <section className=" xl:px-0 px-4 sm:mt-32 mt-24 pb-10">
      <h2 className="text-center text-4xl font-bold text-white  mb-4 text-paleta-blue-900">
        Choose a City
      </h2>
      <div className="text-center items-center flex justify-center">
        <svg
          height="200"
          stroke="#ffffff"
          strokeWidth="2"
          version="1.2"
          viewBox="0 0 400 150"
          width="500"
          className="sm:mr-20"
        >
          <PlaceTag
            onClick={handleChange}
            name={"Pinar del Rio"}
            isSelected={tag === "Pinar del Rio"}
            d={
              "M128.5 131.2l1.4 0.5 0.2 0.2-1.8 0.1-2.1-0.2-1.4-0.6 0.9-0.5 2.8 0.5z m57.5-102l-0.1 0.6 0.4 3.6 0 0.5-0.3 2 2.3 4.5 0.5 2.4-0.2 0.9-1.7 2.1-0.5 0.4-0.7 0.3-2.2 0.2-0.6 0.4 0.4 0.3 1 0.5 0.8 1 1.5 2.6 1.2 1.5 1.1 0.8 0.6 0.4 0.5 0.8 0.7 1.2 1.9 4.3 0.4 0.8 3 3.4 0.7 1.1 0.3 0.6 0.1 0.4-2.3 0.8-5.6 4.7-1.1 0.7-2 0.2-1.5 0.5-6.1 3.2-3 2-2.6 2.7-5.2 10.2-2.2 2.1-3 0.4-3-0.9-1.3-0.1-1.3 0.4 0 1.6-0.2 0.4-0.8-0.2-0.6 0.3-0.8-0.2-0.1 0.4 0 1.7-3.4 2.2-1.1 1.2-0.5 0.9-0.1 1.2-0.6 1.5-0.5 0.6-0.8 0.7-0.3-0.4-0.2 0.9-0.7 0.7-0.5-1-0.8-0.3-0.8 0.1 0 1.6-1.6 1.7-4.6 0.4-4.7-0.6-4.1-1.7 0.8-0.9-0.3-1-0.7-1.1-0.5-1.2-0.6 0-1.3 2.7-2.3 2.4-2.7 1.8-2.5 0.6 0.5-1.4-10.2 1.5-0.5-0.1-0.3-0.4-0.3-0.7-0.1-0.6 0.1-0.3-1.1 0.3-1 1.4-1.4 0.3-7.2-0.4-2 0.4-3.8 3.8-0.1 0.7-0.7 2.8-0.4 1 0.4 0.6 0.2 0.6 0 1.5-1-0.9-1 0.2-0.6 1.1 0.1 1.6 0.7 1.4 0.9 0.5 1-0.3 1.2-0.9-0.5 2.1-3.2 2.4-0.8 2 0.4 0.5 0.6 0.6 0.4 0.7-0.5 1-0.8 0.8-1 0.8-1.1 0.5-1.1 0.3-1.8-0.5-3.4-1.8-2.1-0.5-2 0.5-3.6 2.2-1.7 0.7-0.9 0.1-1.9-0.1-0.9 0-1.1 0.5-2.1 1.3-2.8 0.9-10.9 9.2-4 2.1-3.9 0.4-1.2-2 3.7-7.8 0.7-3.9-2.1-2.9-3.6-0.7-4.1 0.6-7.4 2.2-3.6 1.7-9.3 6.3-3.7 0.9-4-0.1-3.9-1.2-1.2-1-0.8-1.4-0.2-1.7 0.3-1.6 0.8-1.5 0.6-0.6 0.6-0.3 0.5 0.3 0.8 1.5 0.6 0.6 0.8 0.3 0.8 0.1 0.8-0.1 1.6-0.7 1.1-1.1 0.1-1.3-1.6-1.1 1.6-0.8 1.4 0 0.9 0.9 0 2 7.5-4 6.7-2 7.9-3.6 5-3.7 0.7-0.3 1.2-0.1 1.2 0.1 0.5 0.5-0.4 0.8 2.9 1.3 2.2-0.7 2.1-1.2 2.7-0.7 1.3 0.4 1.6 1 1.3 1.2 0.5 1.1 0.5 0.6 2.5-1.8 1.4 0.2 1.3-5.5-1.1 1.2-1 1.8-1 0.9-1.3-1.1-0.6-1.9 0.2-1.5-0.3-1.2-1.9-0.9 0.9-2.1 0.4-0.7-1.7-0.2-1.8-0.7-1.7-0.9-1.2-0.9-0.7-1.4-0.6-1.7-0.9-1.3-1.5-0.3 0.9-0.9 1.1-1.5 0.8-1.8 0.3-1.7 0.2-2.3 0.4-2.2 1.3-4.4 0.3-0.2 1.3-2.6 0.5-0.2 1-0.1 0.4-0.3 0.4-0.7 0.4-1.2 0.2-0.5 2-2.9 1.3-1.6 1.7-1 0-0.7-1.9 0 1.6-1.3 3.9-0.8 1.8-1 1.1-1.5 1.1-2.2 0.5-2.2-1.1-1.3 0-0.7 0.9 0.3 1 0.4 1.3-1 1.2-0.2 1.1 0.6 0.8 1.2 0.8-3.7 0.5-1 0.9-0.4 2.4-0.2 0.5-0.5 0-1 0.3-1.7 0.7-1.2 1.2 0.5 1.2 0.8 1-0.5 0.9-1.1 1-0.9-0.7-1.2-1-0.7-1.2-0.2-1.5 0.1 0.4-0.8 0.7-0.7 0.8-0.5 0.9-0.2 1.5 0.6 0.7 1.2 0.7 1.2 0.8 0.6 1.3-0.3 1.1-0.5 5.6-4.1 1.3 1.3 0.8-2.1 1.5-1 4-0.3 1.5-0.3 6.4-3.2 3.2-1.2 1.5-0.1 1 0.2 1.2 0.5 1 0 0.6-0.2 1.3-0.8 0.7-0.3 0-0.8-1.4 0.8-0.1-0.7-0.5-0.1 2-1.2 2-0.6 4.6-0.2 0.4-0.6 1.1-3.2 0.6-0.3 3.8-0.1-0.2 0.7-0.4 0.7 1.8 0.4 1.1-1.1 0.7-1.5 0.8-1.2 1.4-0.6 1.1 0.4 1.1 0.9 1.5 0.7-0.6 1 1-0.3 1.4-0.9 0.8-0.8 0.6-1.7 1.3-2.2 1.8-1.9 1.6-0.8 1.3-0.4 4.7-3.1 1.9-0.8 1.7 0 1.5 0.5 1.2 1.1 0 0.6-0.8 0.6-0.4 1.3 0.2 1.4 0.7 1.2 1.1 0.5 1-0.6 0.8-1 0.6-0.7-1.6-1.4 0.1-1.3 1.3-1.1 2.1-0.9 3.8-0.7 0.7-0.4 1.2-0.9 0.6-0.1 0.9 0.2 1.3 0.8 1 0.4 0.5-0.3 0.5-0.6 0.7-0.3 0.9 0.5 0.5 1-0.6 0.3-0.9 0.2-0.4 0.5 0.4 1.1 0.6 0.3 0.7-0.3 0.9-1.1-0.2 2 1.6 0.1 1.8-1.2z"
            }
            id={"CUB1321"}
          />
          <PlaceTag
            onClick={handleChange}
            name={"Havana"}
            isSelected={tag === "Havana"}
            d={
              "M263.9 8.8l0.3 1-0.2 1 0.6 0.9 1.5 2-0.5 0.4-0.8 0-0.3 0.4 0.1 0.6 0.2 0.9 0 0.4-0.8 0.7-0.1 0.5-0.1 1.7-0.9 1.6-3.2-3.8-0.6-0.4-0.8-0.4-0.4 0.1-0.5 0.6-0.1 0.6-0.4 1.2-0.6 0.6-0.6 0.4-0.3-0.1-0.6-0.9-0.5-0.6-0.7 0.2 0.2 0.7 0 1-0.2 0.8-0.1 0.7 0.2 0.8 0.8 1.6 0 0.9-3.1 3.5-0.7 1.3-0.6 0.8-0.8 0.3-1.1 0-0.9-0.1-1-0.5-2.4 0.2-3.6-0.3-0.8 0.8-0.4 0.7-1.2 1.1-0.6 0.3-0.5-0.2-1-1.2-0.7-0.4-0.7 0.2-1.5 0.6-0.8-3.3-0.5-0.5-0.5 0.1-3.4-1.5-0.7-0.5-0.3-0.4 0.1-0.2 1.9-1.6 0.7-1.2-0.1-0.9-0.9-1.3-0.7-0.2-0.7 0.2-0.5 0.4-1.1 0.6-1.6-0.7-0.4-0.7 0.7-0.3 2-0.7 0.5-0.3 0.9-1.4 0.5-0.3 1.1-0.2 0.9-0.3 1.4-0.9 2.8-2.1 1.4-0.9 3.7-0.6 4.2-1.8 6.5-1.1 2.9-1.2 6.4 1.5 2-0.2 2.6-0.7z"
            }
            id={"CUB1428"}
          />
          <PlaceTag
            onClick={handleChange}
            name={"Matanzas"}
            isSelected={tag === "Matanzas"}
            d={
              "M314.7 122l0.2 1.4-0.7 0.1-1-0.6-0.9 0.1-0.6-0.2-0.4-0.6-0.2-0.8 0-0.8 0.6-0.4 1 0.3 1.4 0.8 0.6 0.7z m65.1-112.2l1.5 1.3 0-1.4 0.6 0 0.9 1.5 0.6 0.7 0 0.4-0.8 0.9-1.6 0.9-1.1-0.1-0.9-0.5-1.2-0.3-3 0.3-2.2 0.8-4.6 2.3 1.1-1.2 5.6-3.7 1.6-0.4 1.8 0.1 2 0.5-0.4-0.6-0.5-1-0.4-0.6 0.6-0.6 0.4 0.7z m29.3-1.4l0.8 0 2.4 0 1.1-0.4 0.6 0 0.2 0.7-0.2 0.8-0.5 0.4-0.7 0.3-0.8 0.6-0.9-0.2-1.7-0.7-1.8-0.5-1.6 0.3-0.4-0.6-0.4 0-1.1 0.6 0.3-1.3 0.6-0.9 1-0.4 1.5-0.1 0.4 0.2 0.7 0.9 0.5 0.3z m-12.7-0.9l-0.2 0.7-0.7 0-0.1 0.7-0.5 0.2-1-0.3-0.7 0.4-0.2 0.7-0.3-0.3-0.1-1.3 1-1.1 1.6-0.6 0.8-0.2 0.2 0.3 0.2 0.8z m6.6 13.4l-0.6 0.2-1.5 2.9-0.3 2.3 0.1 1 0 1.7-0.5 0.8-0.7 0.5-0.9 0.3-1 0-0.8-0.6-0.7-0.2-0.9 0.1-1.3 0.5-0.4 0.1-2.3-0.1-0.5 0.3-0.3 0.4-0.3 0.9 0 0.8 0 1.2 0.4 1.5 0.1 0.8-0.2 1.5-0.5 0.7-0.5 0.5-0.7 0.3 0.1 0.7 0.7 0.4 0.1 0.4 0.1 0.6 0.5 1 1 1 0.6 0.9 0.5 0.9 0.4 0.4 1.5 1 1.9 1.6 1.5-0.1 0.6-0.3 1.9-1.3 1.8-0.7 0.9-0.1 0.7 0.4 0.2 0.3 0.9 2.1 0.7 2.1 1.4 2.4 0.2 0.8-0.1 0.5-1.4 0.6-0.5 0.8-0.1 0.6 0.2 0.4 0.6 0.7 0.4 0.7 0.2 0.7 0 0.8-0.4 4.7 0 0.8 0.7 0.9 0.4 0.7 0.2 2 0.3 1 0.4 1 0.6 0.7 1.3 2.3-1.8 1.2-0.4 0.5-2 3.8-0.6 0.8-0.4 0.4-1.7 0.3-0.6 0.3-2.1 0.9-1 0-0.9-0.3-8.5-0.9-2.2 0.2-0.7-0.1-4.6-1.2-1-0.1-0.8 0.2-1.1 0.8-1.1 0.7-2 0.9-0.5 0.4-1.9 1.8-1.1 0.8-0.7 0.9 0.3 0.3 0.8 0.3 0.1 0.6-0.6 1.6-0.3 0.7-1.4 2.4-0.1 0.7 0.6 0 1.1-0.4 0.9 0.3 0.1 0.4-0.1 0.5-0.7 1.1-0.4 1.1 0.4 1.1-0.1 1.3-0.5 1.4-0.3 1.6 0.2 1.4 0.5 0.5 0.3 0.1 1.5-0.1 0.4 0 0.3 0.3 0.3 1.7-0.4 1.8 3.9 2.8 1.1 1.1 1 1.5 2.9 1.7 3.2 1.3 1.3 0.8 0.7 0.3 0.3 0 0.8-0.8 0.3-0.1 1.5-0.1 1.5-0.1 0.5 0.2 0.6 0.6 0.4 0.2 0.9-0.1 1.3-0.3 1.9-0.3 1 0.1 0.6 0.2 0.7 0.8 0.4 0.8 0.1 0.6 0.1 1.7 0.1 1.1 0.2 0.6 0.7 1.1-4.1 0.2-11.3-0.8-13.3 1.5-8.1-0.9-1.8-0.6-3.4-1.8-3.7-0.7-1.4-1-0.9-1.5-2.4-5.1-0.3-1 0-1.6 0.7-4.2-0.5-0.3-2.4-3.8-1.2-0.8-1.3-0.3-1 0.4-0.6 1 0 1.3 1.3 4.2 0 12.1-0.7 3.1-1.9-0.1 1.3-2.2-0.4-3.1-1.3-2.9-0.9-0.7-2.5 0.9-0.6 0.4-0.3 0.9 0.1 1.8-0.4 0.8-1.1 0.5-0.7-0.4-0.6-0.6-0.8-0.2-0.7 0.5-0.1 0.7-0.2 0.6-1.2 0.3-3.3-1.5-2-6.7-3.5-1.5-4.5 0-1-0.3-1.8-1.3-1-0.3-0.7 0.3-1.4 1.3-1.3 0.4-0.4 0.5-0.6 0.1-0.3-0.1-0.2-0.9-0.4-0.3-3.8-1.3-0.5-0.3-1.1-0.5-1.1 0-0.5 1.1-0.9 0.4-2 0.1-2.2-0.2-1.3-0.6-0.5 0-0.3 1.2-0.6 0.3-1.7-0.2 0.4 0.6 0.3 0.7-1 0-4.3-0.5-1.4-0.5-2.3-2.6-0.8-1.4-0.4-1.5-1.6-1.7-13-5.2-1.4-0.8-1.4-1.2-0.8-0.4-1.8-0.2-0.8-0.3-0.5-0.6-1-1.8-0.1-0.4-1.3 0-1.7-0.2-1.5-0.8-0.9-1.7 0.5-1.6 1.1-0.9 1.4-0.6 1.2-0.4 10.6 0.4 3.5-0.9 2.4 0.4 2.8-0.3 1.7-0.3 2.5 0.6 2.1 0.2 4.8-0.7 3.6-1.6 1 0.2 1-0.5 1.8 0 1-0.3 1.3-0.4 2.1-2 0.9-0.4-0.1-2.1 0.3-1-0.2-1.5 0.8-2.8 0-1.1-0.7-0.2 0.2-0.4 1.1-0.8 1.2-1.9 0.8-1.1 0.5-0.9 0.5-1.4 0.7-5.1-0.2-1.5-1.5-1.3-3.5-2.2-0.5-0.9 0-1.5 1-2.6 0-0.6-0.3-0.6-1.2-0.8-1.5-1.4-1.5-2.7 1.2-3.7 0.3-2.9 0.1-0.4-0.2-1-1.1-1.6-1.5-2-1.4-1.2-0.6-0.2-1.1-0.2-0.4-0.5 0.5-1.4 0.5-0.4 1.9-1.3 0.9-1.2 0.3-0.2 0.2-0.6-0.4-0.5-0.8-0.7 0-0.3 0.1-0.5 0.7-1 0.5-0.2 0.4 0 0.9 0.5 0.4 0 0-0.7-0.2-1.2-1.1-5.3 0.9-1.2 0.1-0.9 2.4 0.1 1.4-0.3 1.3-0.6 1 0.6 1.1 0 1 0 1.3 0.2 0.6 0.3 1.6 1.4 2 1.1 0.3 2-0.3 2.3-0.4 1.8-0.6 0.8-0.6 0.4 0 0.3 1.2 0.5 1 0.2 1-0.3 1.4-0.5 0.4-0.6 0.6-2.4 0.3-0.9 0.8-0.7 0.6-0.2 0.9 0 7.7-1.4 1.1-0.4 1-1.1 2.3-0.7 4.3-0.6 1.4-0.5 3.4-1.7 2.2-1.8 4.1-2.4 1.5-0.4 1.8 0.6-1.3 1.2-2.6 1-4.2 1.2-5 3-1.3 1.2 0 0.6 4.1 1.1 5.3 6.2 3.2 1.7 1.9 0.1 0.8-0.5 0.6-1 1.4-1.7 0.5-0.8 0.9-2.5 0.5-0.5 1-0.1 1.9-0.5 0.6-0.1 3.9 0.7 0.6 0 0.4-0.2 0.1 0.3 0.1 1.6 0.7 2.2 1.7 0.6 2-0.4 1.9-0.6 14.5-2.8 2.3-0.1 4.3 0.9 2.3-0.1 1.9-0.8 1.7-1.5 0.6-1.9-1.7-2 1.2-0.5 1.2-0.2 1.2 0.2 0.9 0.5 0 0.7-0.8 0.7-2.4 4.8 2.5 2 0.2 0.2z m-11.1-13.3l0.2 0.3-0.1 0.6-0.6 0.2-0.6-0.4-0.7 0-0.4 0.6-0.4 0.3-1.9-0.9-1.1-0.4-0.7-0.1-1.7 0.2-1-0.1-2.6-0.9-0.9-0.2-0.7-1-0.5-0.2 0.4-0.6 1.8 0.2 2.5 1 3.3 0.7 5.7 0.7z m-18.5-6.6l2.6 1.6 0.6-0.1 0.4 0.2 0.3 0.8-0.7 0.9-1.1-0.2-1-0.3-1.1-0.2-1-0.4-0.5-0.7-0.4-0.5-0.8-0.3 0.6-0.6 2.1-0.2z"
            }
            id={"CUB1430"}
          />

          <path
            d="M210.5 69.8l-1 0.8-0.8-1.3 0.7-0.6 0.4-0.5 0.7 1 0 0.6z m14.8 1.5l-0.4 0.6-0.4-0.4 0.2-6.3-0.3-0.8 0-0.6 0.3 0 0.5 0.4 0.3 0.7 0.5 1.6 0.3 2.4-0.5 1.7-0.5 0.7z m7.6-39.3l-0.1 3.5 0 2.7-1.1 2.4-0.8 3.3 0 3.7 1.9 3.9 1.9 2.7 2.3 1.4 0.4 1.3-0.4 2.1-6.1 0.8-4.8-1.2-1.1 0.2-1.8 1-0.9 0.2-4.3-1-3.3 0.8-9.7-2.6-2 0-1.9 1-0.9 1.7-0.3 1.9-0.1 2-0.5 1.8-1.4 0.9-0.8 0.3-0.1-0.4-0.3-0.6-0.7-1.1-3-3.4-0.4-0.8-1.9-4.3-0.7-1.2-0.5-0.8-0.6-0.4-1.1-0.8-1.2-1.5-1.5-2.6-0.8-1-1-0.5-0.4-0.3 0.6-0.4 2.2-0.2 0.7-0.3 0.5-0.4 1.7-2.1 0.2-0.9-0.5-2.4-2.3-4.5 0.3-2 0-0.5-0.4-3.6 0.1-0.6 0.2-0.1 1-2.5 1.3-2.1 3-0.1 3.3 0.5 2.2-0.3 2-0.8 8.4 0.4 8.5-1.1 2.3-0.9 1.8 0.1 3.4-2 0.4 0.7 1.6 0.7 1.1-0.6 0.5-0.4 0.7-0.2 0.7 0.2 0.9 1.3 0.1 0.9-0.7 1.2-1.9 1.6-0.1 0.2 0.3 0.4 0.7 0.5 3.4 1.5 0.5-0.1 0.5 0.5 0.8 3.3z"
            id="CUB1429"
            name="Artemisa"
          ></path>

          <path
            d="M302.3 11.9l-0.1 0.9-0.9 1.2 1.1 5.3 0.2 1.2 0 0.7-0.4 0-0.9-0.5-0.4 0-0.5 0.2-0.7 1-0.1 0.5 0 0.3 0.8 0.7 0.4 0.5-0.2 0.6-0.3 0.2-0.9 1.2-1.9 1.3-0.5 0.4-0.5 1.4 0.4 0.5 1.1 0.2 0.6 0.2 1.4 1.2 1.5 2 1.1 1.6 0.2 1-0.1 0.4-0.3 2.9-1.2 3.7 1.5 2.7 1.5 1.4 1.2 0.8 0.3 0.6 0 0.6-1 2.6 0 1.5 0.5 0.9 3.5 2.2 1.5 1.3 0.2 1.5-0.7 5.1-0.5 1.4-0.5 0.9-0.8 1.1-1.2 1.9-1.1 0.8-0.2 0.4-0.7-0.3-1.4 0-2.5-2.2-1.7-1.4-3.2-2.5-3.2-1.2-8.3-2.9-3.2 0.1-7.4 0.7-9.8 1.7-2.9-1.3-6.3-1.8-7 0-5.9 0.7-2-0.2-2.9-0.8 0.4-2.1-0.4-1.3-2.3-1.4-1.9-2.7-1.9-3.9 0-3.7 0.8-3.3 1.1-2.4 0-2.7 0.1-3.5 1.5-0.6 0.7-0.2 0.7 0.4 1 1.2 0.5 0.2 0.6-0.3 1.2-1.1 0.4-0.7 0.8-0.8 3.6 0.3 2.4-0.2 1 0.5 0.9 0.1 1.1 0 0.8-0.3 0.6-0.8 0.7-1.3 3.1-3.5 0-0.9-0.8-1.6-0.2-0.8 0.1-0.7 0.2-0.8 0-1-0.2-0.7 0.7-0.2 0.5 0.6 0.6 0.9 0.3 0.1 0.6-0.4 0.6-0.6 0.4-1.2 0.1-0.6 0.5-0.6 0.4-0.1 0.8 0.4 0.6 0.4 3.2 3.8 0.9-1.6 0.1-1.7 0.1-0.5 0.8-0.7 0-0.4-0.2-0.9-0.1-0.6 0.3-0.4 0.8 0 0.5-0.4-1.5-2-0.6-0.9 0.2-1-0.3-1 1.1-0.2 2.1-0.2 1-0.3 1-0.4 1-0.1 0.9 0.4 3.5 2.5 2.7 0.8 5.9 0.5 2.7 0.7 2.1-0.6 14.4 0z"
            id="CUB5489"
            name="Mayabeque"
          ></path>
        </svg>
      </div>
      <h2 className="text-center font-bold text-4xl text-paleta-blue-900 mb-10">
        Popular Places
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
        <AnimatePresence>
          {filteredPlaces.map((t, index) => (
            <motion.li
              key={t.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
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
                  className=" fixed transition-all duration-75 delay-75  inset-0  backdrop-blur-xs cursor-pointer flex items-center justify-center"
                  onClick={closeModal}
                >
                  <motion.div
                    transition={{ duration: 0.1 }}
                    className="  h-[500px] w-[800px] bg-paleta-blue-500  cursor-default rounded-xl overflow-y-scroll"
                    layoutId={selectedId.id}
                  >
                    <div className="w-full text-end">
                      {" "}
                      <motion.button
                        className=" py-2 px-4 bg-paleta-blue-900 mt-4 mr-4 rounded-full text-paleta-bond-200"
                        id="close"
                        onClick={closeModal}
                      >
                        x
                      </motion.button>
                    </div>

                    <motion.h2>{selectedId.title}</motion.h2>
                    <motion.h5>{selectedId.description}</motion.h5>
                    <p>
                      Dolore aliqua enim dolor laborum anim magna mollit aliqua
                      fugiat. Enim qui excepteur exercitation ea occaecat
                      exercitation officia culpa consectetur et. Ad aliquip ut
                      officia reprehenderit ullamco occaecat. Est esse ea
                      ullamco velit officia Lorem veniam quis culpa et sint do
                      fugiat. Culpa culpa qui pariatur nisi tempor ut. Ea
                      eiusmod amet do anim exercitation fugiat do cillum laborum
                      ipsum. Ut pariatur adipisicing officia elit proident elit
                      sunt velit nostrud amet cupidatat aliquip culpa enim.
                      Aliquip ex eiusmod pariatur eiusmod fugiat. Consectetur
                      proident consectetur in. Sunt Lorem adipisicing enim.
                      Dolor fugiat ullamco officia do irure fugiat excepteur
                      voluptate fugiat pariatur aute aliquip. Tempor tempor
                      veniam laborum esse esse. Eu adipisicing cupidatat ea enim
                      esse ullamco ad incididunt qui id aliquip magna Lorem nisi
                      tempor. Aliquip excepteur mollit Lorem eu. Exercitation
                      magna pariatur aute nulla culpa sint occaecat.
                      Reprehenderit magna irure ex est in sint anim incididunt
                      laborum nisi eu. Velit excepteur nulla aliqua minim in.
                      Minim nostrud fugiat duis eu do occaecat laborum ut esse.
                      Proident mollit aliqua ipsum excepteur commodo et ad
                      laboris laboris culpa. Sit tempor enim reprehenderit elit
                      mollit mollit ut. Quis voluptate dolore cillum consequat
                      duis fugiat ex do labore. In duis ex ad amet aliqua do ut
                      consequat nulla cupidatat duis reprehenderit veniam magna
                      voluptate. Eiusmod sunt dolore ullamco magna elit.
                      Consectetur tempor eiusmod proident nisi officia ad
                      occaecat voluptate. Cillum mollit reprehenderit labore
                      eiusmod irure qui ad laborum id est deserunt. Laborum
                      irure velit id occaecat deserunt qui velit nostrud
                      adipisicing. Elit exercitation deserunt reprehenderit
                      labore officia culpa laborum sit adipisicing occaecat.
                      Aute pariatur incididunt proident non et ad sint aute
                      voluptate ut.
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
};

export default PlaceSection;
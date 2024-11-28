import { useState } from "react";
import { HuntPlaceType } from "@/lib/type";
import { useLocalStorage } from "./useLocalStorage";

export const useHuntCount = () => {
  const { storageItem } = useLocalStorage("place");

  const [huntPlace, setHuntPlace] = useState<HuntPlaceType[]>(
    JSON.parse(storageItem.value ?? "[]"),
  );

  const addPlace = (newPlace: string) => {
    setHuntPlace(prev => [...prev, { name: newPlace, count: 0, jackpot: [] }]);
  };

  const changeHuntPlace = (updatedPlace: HuntPlaceType) => {
    setHuntPlace(prev => {
      const updatedIndex = prev.findIndex(place => place.name === updatedPlace.name);
      return prev.with(updatedIndex, updatedPlace);
    });
  };

  return { huntPlace, addPlace, changeHuntPlace };
};

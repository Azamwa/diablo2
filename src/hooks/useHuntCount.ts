import { useState } from "react";

interface HuntPlaceType {
  name: string;
  count: number;
  jackpot: string[];
}

export const useHuntCount = (initialData: HuntPlaceType[]) => {
  const [huntPlace, setHuntPlace] = useState<HuntPlaceType[]>(initialData);

  const addPlace = (newPlace: string) => {
    setHuntPlace(prev => [...prev, { name: newPlace, count: 0, jackpot: [] }]);
  };

  const changeHuntPlace = (editPlace: HuntPlaceType[]) => {
    setHuntPlace(editPlace);
  };

  return { huntPlace, addPlace, changeHuntPlace };
};

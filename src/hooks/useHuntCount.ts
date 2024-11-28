import { useState } from "react";
import { HuntPlaceType } from "@/lib/type";
import { useLocalStorage } from "./useLocalStorage";

const initialItem = [
  {
    name: "카타콤",
    count: 262,
    jackpot: ["샤코", "교복(21올레)", "네이쳐피스링", "4/5파업주얼", "위습링"],
  },
  { name: "듀리엘", count: 5, jackpot: [] },
  { name: "메피", count: 117, jackpot: ["사종"] },
  { name: "디아", count: 41, jackpot: ["말룬(헬포지)", "에테14증", "쓰레셔"] },
  { name: "바알", count: 15, jackpot: [] },
  { name: "카우", count: 5, jackpot: ["굴룬"] },
  { name: "피트", count: 18, jackpot: ["에테자쓰 4솟"] },
  { name: "바위무덤", count: 12, jackpot: [] },
  { name: "앞마당", count: 9, jackpot: [] },
  { name: "핀들", count: 8, jackpot: [] },
  { name: "트라빈컬", count: 2, jackpot: [] },
];

export const useHuntCount = () => {
  const { storageItem } = useLocalStorage("place");

  const [huntPlace, setHuntPlace] = useState<HuntPlaceType[]>(
    JSON.parse(storageItem.value ?? JSON.stringify(initialItem)),
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

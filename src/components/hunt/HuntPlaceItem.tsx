import { HuntPlaceType } from "@/lib/type";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";

import AddHuntDialog from "./AddHuntDialog";
import { MouseEvent } from "react";

interface HuntPlaceItemType {
  place: HuntPlaceType;
  changeHuntPlace: (editPlace: HuntPlaceType) => void;
}

const HuntPlaceItem = ({ place, changeHuntPlace }: HuntPlaceItemType) => {
  const handleCountPlace = (count: number) => {
    const updatedPlace = { ...place, count: place.count + count };

    changeHuntPlace(updatedPlace);
  };

  const handleDeleteJackpot = (e: MouseEvent<HTMLButtonElement>, jackpot: string) => {
    e.stopPropagation();
    const updateJackpot = place.jackpot.filter(name => name !== jackpot);
    const updatedPlace = { ...place, jackpot: updateJackpot };

    changeHuntPlace(updatedPlace);
  };

  return (
    <TableRow>
      <TableCell className="font-semibold text-xl">{place.name}</TableCell>
      <TableCell className="">
        <Button className="h-10 text-xl bg-slate-900" onClick={() => handleCountPlace(-1)}>
          -
        </Button>
        <span className="inline-block w-14 text-lg">{place.count}</span>
        <Button className="h-10 text-xl bg-slate-900" onClick={() => handleCountPlace(1)}>
          +
        </Button>
      </TableCell>
      <TableCell className="h-20">
        <Dialog>
          <DialogTrigger asChild>
            <div className="w-full h-8 flex gap-2 items-center">
              {place.jackpot.map(jackpot => {
                return (
                  <Button
                    className="h-8 px-2 flex items-center rounded-md bg-blue-950 text-gray-400"
                    key={jackpot}
                    onClick={e => handleDeleteJackpot(e, jackpot)}
                  >
                    {jackpot}
                  </Button>
                );
              })}
            </div>
          </DialogTrigger>
          <AddHuntDialog place={place} changeHuntPlace={changeHuntPlace} />
        </Dialog>
      </TableCell>
    </TableRow>
  );
};

export default HuntPlaceItem;

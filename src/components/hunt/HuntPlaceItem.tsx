import { HuntPlaceType } from "@/lib/type";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";

interface HuntPlaceItemType {
  place: HuntPlaceType;
  changeHuntPlace: (editPlace: HuntPlaceType) => void;
}

const HuntPlaceItem = ({ place, changeHuntPlace }: HuntPlaceItemType) => {
  const handleCountPlace = (place: HuntPlaceType, count: number) => {
    const updatedPlace = { ...place, count: place.count + count };

    changeHuntPlace(updatedPlace);
  };
  return (
    <TableRow>
      <TableCell className="font-semibold text-xl">{place.name}</TableCell>
      <TableCell className="">
        <Button className="text-xl bg-slate-900" onClick={() => handleCountPlace(place, -1)}>
          -
        </Button>
        <span className="inline-block w-14 text-lg">{place.count}</span>
        <Button className="text-xl bg-slate-900" onClick={() => handleCountPlace(place, 1)}>
          +
        </Button>
      </TableCell>
      <TableCell className="flex gap-2">
        {place.jackpot.map(jackpot => {
          return (
            <span className="px-2 rounded-md bg-blue-950 text-gray-400" key={jackpot}>
              {jackpot}
            </span>
          );
        })}
      </TableCell>
    </TableRow>
  );
};

export default HuntPlaceItem;

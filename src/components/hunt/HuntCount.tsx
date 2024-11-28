import { useHuntCount } from "../../hooks/useHuntCount";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../ui/table";
import HuntPlaceItem from "./HuntPlaceItem";

const HuntCount = () => {
  const { huntPlace, changeHuntPlace } = useHuntCount();

  return (
    <div>
      <h2 className="mb-5 text-2xl font-semibold text-gray-300">디아2 사냥 횟수 & 드랍템</h2>
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-700">
            <TableHead className="w-[100px] text-base text-gray-400">장소</TableHead>
            <TableHead className="w-[200px] text-base text-gray-400">카운트</TableHead>
            <TableHead className="w-[1000px] text-base text-gray-400">드랍아이템</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="h-36 overflow-y-auto">
          {huntPlace.map(place => {
            return (
              <HuntPlaceItem place={place} changeHuntPlace={changeHuntPlace} key={place.name} />
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default HuntCount;

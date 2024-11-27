import { useLocalStorage } from "../hooks/useLocalStorage";
import { useHuntCount } from "../hooks/useHuntCount";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

const HuntCount = () => {
  const { storageItem, setLocalStorage } = useLocalStorage("place");
  const { huntPlace } = useHuntCount(JSON.parse(storageItem.value ?? "[]"));

  return (
    <div>
      <h2 className="mb-10 text-4xl font-semibold text-gray-300">디아2 사냥 횟수 & 드랍템</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className=" w-[200px] text-lg text-gray-800">장소</TableHead>
            <TableHead className=" w-[200px] text-lg text-gray-800">카운트</TableHead>
            <TableHead className=" w-[200px] text-lg text-gray-800">드랍아이템</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default HuntCount;

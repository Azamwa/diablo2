import { KeyboardEvent, useRef } from "react";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { HuntPlaceType } from "@/lib/type";

interface AddHuntDialogProps {
  place: HuntPlaceType;
  changeHuntPlace: (editPlace: HuntPlaceType) => void;
}

const AddHuntDialog = ({ place, changeHuntPlace }: AddHuntDialogProps) => {
  const placeRef = useRef<HTMLInputElement>(null);
  const itemRef = useRef<HTMLInputElement>(null);
  const dialogCloseRef = useRef<HTMLButtonElement>(null);
  const handleAddItem = () => {
    if (placeRef.current === null || itemRef.current === null) {
      return;
    }
    if (placeRef.current.value === "" || itemRef.current.value === "") {
      return;
    }

    if (place.jackpot.includes(itemRef.current.value)) {
      alert("이미있음");
      return;
    }

    const updatedPlace = {
      ...place,
      name: placeRef.current.value,
      jackpot: [...place.jackpot, itemRef.current.value],
    };

    changeHuntPlace(updatedPlace);
  };

  const handleSubmitEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && dialogCloseRef.current !== null) {
      dialogCloseRef.current.click();
    }
  };

  return (
    <DialogContent className="sm:max-w-[450px]">
      <DialogHeader>
        <DialogTitle className="text-lg">득템 입력</DialogTitle>
      </DialogHeader>
      <DialogDescription />
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="장소" className="text-slate-400 text-right text-base">
            장소
          </Label>
          <Input
            ref={placeRef}
            id="name"
            defaultValue={place.name}
            disabled
            className="col-span-3 text-lg"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-slate-400 text-right text-base">
            추가할 아이템
          </Label>

          <Input
            ref={itemRef}
            id="username"
            className="col-span-3 text-lg"
            onKeyDown={e => handleSubmitEnter(e)}
          />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="submit" ref={dialogCloseRef} onClick={handleAddItem} tabIndex={0}>
            저장
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddHuntDialog;

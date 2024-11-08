/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

import { iconList } from "@/constants/icons";
import { icons } from "lucide-react";
import { useState } from "react";

function IconList({ selectedIcon }) {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [openDialog, setOpenDialog] = useState(false);
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return <LucidIcon color={color} size={size} />;
  };
  return (
    <div>
      <label>Icon</label>
      <div
        onClick={() => setOpenDialog(true)}
        className="p-3 cursor-pointer bg-gray-400 rounded-md w-[50px] h-[50px]"
      >
        <Icon name={icon} color={"#000"} size={25} />
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pick Your Favourite Icon</DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                {iconList.map((icon, index) => (
                  <div
                    key={index}
                    className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                    onClick={() => {
                      selectedIcon(icon);
                      setOpenDialog(false);
                      setIcon(icon);
                    }}
                  >
                    <Icon name={icon} color={"#000"} size={20} />
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default IconList;

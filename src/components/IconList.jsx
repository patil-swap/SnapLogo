/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { iconList } from "@/constants/icons";
import { icons } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
const BASE_URL = "https://logoexpress.tubeguruji.com/";

function IconList({ selectedIcon }) {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [openDialog, setOpenDialog] = useState(false);
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");
  const [pngIconList, setPngIconList] = useState([]);

  useEffect(() => {
    getPngIcons();
  }, []);

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return <LucidIcon color={color} size={size} />;
  };

  const getPngIcons = () => {
    axios.get(BASE_URL + "getIcons.php").then((resp) => {
      console.log(resp.data);
      setPngIconList(resp.data);
    });
  };
  return (
    <div>
      <label>Icon</label>
      <div
        onClick={() => setOpenDialog(true)}
        className="p-3 cursor-pointer bg-gray-400 rounded-md w-[50px] h-[50px]"
      >
        {icon?.includes(".png") ? (
          <img src={BASE_URL + "png/" + icon} />
        ) : (
          <Icon name={icon} color={"#000"} size={25} />
        )}
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pick Your Favourite Icon</DialogTitle>
            <DialogDescription>
              <Tabs defaultValue="icons">
                <TabsList className="mt-7 grid w-full grid-cols-2">
                  <TabsTrigger value="icons">Icons</TabsTrigger>
                  <TabsTrigger value="colored_icons">Colored Icons</TabsTrigger>
                </TabsList>
                <TabsContent value="icons">
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
                </TabsContent>
                <TabsContent value="colored_icons">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                    {pngIconList.map((icon, index) => (
                      <div
                        key={index}
                        className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                        onClick={() => {
                          selectedIcon(icon);
                          setOpenDialog(false);
                          setIcon(icon);
                        }}
                      >
                        <img src={BASE_URL + "png/" + icon} />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default IconList;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import { useContext, useEffect, useState } from "react";

function LogoPreview({ downloadIcon }) {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      downloadPngLogo();
    }
  }, [downloadIcon]);

  const downloadPngLogo = () => {
    const downloadLogo = document.getElementById("downloadLogoDiv");
    html2canvas(downloadLogo, {
      backgroundColor: null
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "logo.png";
      downloadLink.click();
    });
  };

  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return (
      <LucidIcon
        color={color}
        size={size}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    );
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-300"
        style={{ padding: storageValue?.bgPadding }}
      >
        <div
          id="downloadLogoDiv"
          className="h-full w-full flex items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor
          }}
        >
          <Icon
            name={storageValue?.icon}
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}
          />
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;

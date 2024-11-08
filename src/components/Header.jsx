/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

function Header({ DownloadIcon }) {
  return (
    <div className="flex justify-between items-center p-4 shadow-sm border">
      <img src="./logo.svg" width={40} height={40} />
      <Button
        className="flex gap-2 items-center"
        onClick={() => DownloadIcon(Date.now())}
      >
        <Download className="h-4 w-4" /> Download
      </Button>
    </div>
  );
}

export default Header;

import { ThreesIcon } from "@/assets/icons";
import Link from "next/link";
import React from "react";

type Props = {};

const TopBar = (props: Props) => {
  return (
    <div className="border-b w-full py-2 px-6 border-gray-200 dark:border-gray-800">
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <ThreesIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <span className="font-medium text-xs text-gray-500 dark:text-gray-400">
            Kamp alanında açık havanın tadını çıkarın.
          </span>
        </div>
        <div className=" items-center gap-2 hidden lg:flex">
          <Link
            className="text-gray-500 dark:text-gray-400 hover:underline text-xs hover:text-gray-900"
            href="#"
          >
            Şimdi Keşfedin!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

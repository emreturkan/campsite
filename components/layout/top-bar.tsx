import Link from "next/link";
import React from "react";

type Props = {};

const TopBar = (props: Props) => {
  return (
    <div className="border-b w-full py-2 px-6 border-gray-200 dark:border-gray-800">
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <TreesIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <span className="font-medium text-xs text-gray-500 dark:text-gray-400">
            Kamp alanında açık havanın tadını çıkarın.
          </span>
        </div>
        <div className="flex items-center gap-2">
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

function TreesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </svg>
  );
}

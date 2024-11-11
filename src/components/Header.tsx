"use client";

import { NAVS_MENU, NAVS_MENU_PROPS } from "@/constants/menu";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [active] = useState("services");

  return (
    <div className="grid justify-start items-center px-8 grid-flow-col grid-cols-[auto_1fr] min-h-[80px] mt-4">
      <span className="z-10">Garmentee</span>
      <div className="flex justify-center flex-row">
        <nav className="hidden lg:grid grid-flow-col justify-start bg-stone-950 shadow-sm border-black rounded-full z-10">
          {NAVS_MENU.map((item: NAVS_MENU_PROPS) => {
            const link = item.title.toLocaleLowerCase();
            return (
              <Link
                key={item.title}
                href={`#${link}`}
                className={`h-12 grid place-items-center text-center w-[100px] rounded-full font-medium 
                    hover:bg-white hover:text-black transition-transform	
                    ${active === link ? "bg-white text-black" : ""}`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Header;

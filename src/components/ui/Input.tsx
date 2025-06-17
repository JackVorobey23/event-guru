"use client";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { JSX } from "react";

interface IconInputProps {
  inputElem: JSX.Element;
  icon?: IconProp;
}

export default function IconInput({ icon, inputElem }: IconInputProps) {
  return (
    <div>
      <div className="bg-[#dde9d9] p-2 border rounded-2xl border-[#305423] flex">
        {icon && (
          <div className="flex">
            <FontAwesomeIcon
              icon={icon}
              className="self-center w-8 h-8 p-2"
              color="#7A986D"
            />
            <div className="w-[1px] bg-[#305423] ml-2 mr-1"></div>
            <div className="w-[1px] bg-[#305423] mr-2"></div>
          </div>
        )}
        <div className="*:text-2xl *:text-[#3B5249] flex *:w-full *:flex-1">
          {inputElem}
        </div>
      </div>

      {/* {error && (
        <div>
          <span className="text-red-400">{error}</span>
        </div>
      )} */}
    </div>
  );
}

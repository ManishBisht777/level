"use client";

import useDebounce from "@/hooks/useDebounce";
import useFilter from "@/hooks/useFilter";
import useKeys from "@/hooks/useKeys";
import { useCountryStore } from "@/store/country";
import { Loader2, Search, Zap } from "lucide-react";
import { useState } from "react";

type Props = {};

export default function Filter({}: Props) {
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 500);
  const { loading } = useFilter({ inputValue: debouncedInputValue });
  const { filteredData } = useCountryStore();
  const focusRef = useKeys();

  return (
    <div className="mt-16">
      <div className="p-[1px] rounded-xl focus-within:bg-gradient-to-br focus-within:from-[#ff4d4d]  focus-within:to-[#f9cb28]">
        <div className="flex bg-black py-3 px-2 md:px-4 rounded-xl md:min-w-[30rem] font-medium items-center">
          <div className="w-full flex gap-2 items-center justify-between">
            <Search className="w-5 h-5" />
            <div className="relative flex justify-between items-center  w-full">
              <input
                className="bg-transparent px-2 py-1 focus:outline-none w-3/4"
                type="text"
                placeholder="Search"
                autoFocus
                onChange={(e) => setInputValue(e.target.value)}
                ref={focusRef}
              />
              <div className="pointer-events-none mx-2 px-3  bg-gradient-to-br from-[#ff4d4d] to-[#f9cb28] text-black py-1 rounded-full md:flex items-cente font-medium hidden ">
                ctrl + /
              </div>
              <button
                type="submit"
                className="md:hidden block mx-2 px-2 py-0.5 rounded-full items-centerfont-medium  "
              >
                search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center font-bold mt-6 md:text-3xl text-xl flex justify-center text-primary">
        <h1 className="max-w-sm capitalize">{debouncedInputValue}</h1>
      </div>
      <div className="flex justify-center">
        <p className="text-center flex gap-2 items-center mt-4 font-medium  rounded-full py-3 ">
          <Zap className="text-[#f9cb28] w-6 h-6" />
          Showing {filteredData.length} results
        </p>
      </div>

      {loading && (
        <div className="text-center font-bold mt-6 md:text-3xl text-xl flex justify-center text-primary/80">
          <Loader2 className="w-4 h-4 animate-spin" />
        </div>
      )}
    </div>
  );
}

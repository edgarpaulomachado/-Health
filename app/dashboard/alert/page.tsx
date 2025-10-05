"use client";

import { Bell, Search, UserRound } from "lucide-react";
import BarChart from "./_components/barChart";

export default function AlertPage() {
  return (
    <div className="max-w-[1120px] w-full mx-auto h-screen px-5 py-6">
      {/* Header */}
      <div className="w-full flex justify-between items-center">
        {/* Search box */}
        <div className="flex justify-between items-center bg-[#f1f2f76e] rounded-sm px-2 w-[158px] h-8">
          <input
            type="search"
            className="w-full h-8 rounded-sm px-3 bg-transparent border-none outline-none placeholder:text-gray-500 text-sm"
            placeholder="Search"
          />
          <Search className="cursor-pointer" color="gray" size={16} />
        </div>

        {/* User info */}
        <div className="flex gap-3 items-center">
          <div className="w-8 h-8 rounded-full bg-[#FFE6CC] flex justify-center items-center">
            <UserRound size={20} color="gray" />
          </div>
          <p className="text-[#1F384C] text-xs leading-3">Edgar Machado</p>
          <Bell color={"#B0C3CC"} />
        </div>
      </div>

      {/* Content */}
      <div className="w-full flex justify-between mt-10">
        {/* Left side */}
        <div className="w-[260px]">
          <h1 className="text-4xl text-[#4D3E9D] leading-[2.8rem] font-semibold">
            Mutamba
          </h1>
          <p className="text-[#7C828A] mt-3 text-[15px] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rerum debitis, nostrum cum deserunt ullam officia suscipit nihil consequatur totam quisquam numquam? Sit veniam ullam iusto nostrum quas, laudantium laborum.
          </p>

          <div className="w-full mt-[26px]">
            <BarChart />
          </div>

          <div className="w-[230px] h-[94px] bg-[#5A67BA] mt-4 mx-auto rounded-md"></div>
          <div className="w-[230px] h-[94px] bg-[#5A67BA] mt-2 mx-auto rounded-md"></div>
        </div>

        {/* Map */}
        <div className="flex justify-center">
          
        </div>
      </div>
    </div>
  );
}

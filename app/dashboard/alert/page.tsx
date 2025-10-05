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
            Zona da mutamba esta em risco de possíveis riscos de surtos nos proximos dias. A probabilidade de hover é de 70%. <span className="text-green-600 cursor-pointer hover:underline">Ver dados relacionados</span>
          </p>

          <div className="w-full mt-[26px]">
            <BarChart />
          </div>
          {/* <div className="flex gap-2 flex-col -mt-4">
            <div className="w-[230px] h-[94px] bg-[#5A67BA] mx-auto rounded-md"></div>
            <div className="w-[230px] h-[94px] bg-[#5A67BA] mx-auto rounded-md"></div>
          </div> */}
          
        </div>

        {/* Map */}
        <div className="flex justify-center">
          <iframe
            className="w-[700px] mx-auto h-[535px] rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15855.707553098957!2d13.29584045!3d-8.95024105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a52f2a1d8be2e61%3A0x6e5ddc9c11745e89!2sSal%C3%A3o%20de%20Eventos%20Kissonde!5e0!3m2!1spt-BR!2sao!4v1716902123456!5m2!1spt-BR!2sao"
            // allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
    </div>
  );
}

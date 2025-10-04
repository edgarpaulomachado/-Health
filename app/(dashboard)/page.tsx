'use client';

import { Button } from "@/components/ui/button";
import { ArrowUp, Bell, Search, UserRound } from "lucide-react";
import React from "react";
import { Chart } from "./_components/chart";

export default function Home() {
  return (
    <div className="w-[1120px] h-screen px-5 py-6 ml-60">
      <div className="w-full h-auto flex justify-between items-center">
        <div className="w-158 h-8 flex justify-between bg-[#f1f2f76e] rounded-sm px-2">
          <input type="search" name="" id="" className="w-156 h-8 rounded-sm px-3 bg-transparent border-none outline-none" placeholder="Search"/>
          <Search className="mt-2 cursor-pointer" color="gray" size={16}/>
        </div>

        <div className="w-auto h-8 flex gap-3 items-center">
          <div className="w-8 h-8 rounded-full bg-[#FFE6CC] flex justify-center items-center">
            <UserRound size={20} color="gray"/>
          </div>
          <p className="text-[#1F384C] text-xs leading-3">Edgar Machado</p>
          <Bell color={"#B0C3CC"}/>
        </div>
      </div>

      <div className="w-full h-auto flex justify-between mt-20">
        <div className="w-170 h-81">
          <div className="flex justify-end">
            <button type="button" className="w-auto h-10 text-[#5A6ACF] text-base bg-[#DDE4F0] rounded-sm px-2 text-center">Reportagens</button>
          </div>
          <p className="text-black text-sm leading-5.5 mt-3">Revenue</p>
          <p className="text-black text-sm leading-5.5">Análise de</p>
          <div className="flex gap-1 w-auto h-3 mt-2 items-center">
            <ArrowUp size={14} color={"#149D52"}/>
            <p className="text-xs leading-3 text-[#149D52]">21%<span className="text-[#737B8B]">vs últimas semanas</span></p>
          </div>

          <div className="mt-5">
            <p className="text-sm leading-5 text-black">Dados de 1-12 de 2025</p>
            <Chart />
          </div>
        </div>
      </div>
    </div> 
  );
}

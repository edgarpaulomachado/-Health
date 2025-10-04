'use client';

import { Button } from "@/components/ui/button";
import { ArrowUp, Bell, Search, UserRound } from "lucide-react";
import React from "react";
import { LineChart } from "./_components/lineChart";
import DoughnutChart from "./_components/doughnutChart";

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
            <button type="button" className="w-auto h-10 text-[#5A6ACF] text-base bg-[#DDE4F0] rounded-sm px-2 text-center shadow-xs cursor-pointer">Reportagens</button>
          </div>
          <p className="text-black text-sm leading-5.5 mt-3">Revenue</p>
          <p className="text-black text-sm leading-5.5">Análise de</p>
          <div className="flex gap-1 w-auto h-3 mt-2 items-center">
            <ArrowUp size={14} color={"#149D52"}/>
            <p className="text-xs leading-3 text-[#149D52]">21%<span className="text-[#737B8B]">vs últimas semanas</span></p>
          </div>

          <div className="mt-5">
            <p className="text-sm leading-5 text-[#00000041]">Dados de 1-12 Dez, 2025</p>
            <LineChart />
          </div>
        </div>

        <div className="w-90.5 h-80.5">
          
          <div className="w-full h-auto flex justify-between items-center">
            <p className="text-sm leading-5.5 text-black">Previsões</p>
            <button type="button" className="w-auto h-10 text-[#5A6ACF] text-base bg-[#DDE4F0] rounded-sm px-2 text-center shadow-xs cursor-pointer">Ver reportagens</button>
          </div>

          <p className="text-sm leading-5 text-[#00000041]">Para de 1-12 Dez, 2026</p>

          <div className="flex justify-center items-center">
            <DoughnutChart />
          </div>

        </div>
      </div>

      <div className="w-full h-0.5 rounded-xs bg-[#C8CBD9] mt-24"></div>

    </div> 
  );
}

'use client';

import { Bell, Search, UserRound } from "lucide-react";

export default function AlertPage() {
    return (
        <div className="w-[1120px] h-screen px-5 py-6">
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

            <div className="w-full h-auto flex justify-between"></div>
        </div>
    )
}
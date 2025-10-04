'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function DropDown(){
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="w-30 h-9.5 rounded-sm bg-[#E5E5E5] flex justify-between items-center my-auto px-2">
                    <p className="text-[#7879F1] text-sm">Status</p>
                    <ChevronDown size={14} color={"#7879F1"}/>
                </div>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent className="w-auto" align="end">
                <DropdownMenuGroup>
                    <DropdownMenuItem></DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
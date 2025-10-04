'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Images } from "@/assets/images";

export default function Aside(){
    return(
        <aside className="lg:w-60 h-screen bg-[#F1F2F7] px-5 py-6 fixed z-10">
            <div className="w-auto h-auto flex items-center">
                <Image src={Images.Logo} alt={""} />
            </div>

            <div className="lg:w-50 lg:h-auto mt-20">
                <ul>
                    <Link href={"./"}>
                        <div className="w-50 h-10.5 rounded-sm bg-transparent hover:bg-[#9c9fb3] flex items-center gap-3 px-5 mt-5 text-[#273240] hover:text-[#5A6ACF] text-base leading-4">
                            <Image src={Images.Chart} alt={""} width={20} height={20}/>
                            Zonas
                        </div>
                    </Link>

                    <Link href={"./product"}>
                        <div className="w-50 h-10.5 rounded-sm bg-transparent hover:bg-[#9c9fb3] flex items-center gap-3 px-5 mt-1.5 text-[#273240] hover:text-[#5A6ACF] text-base leading-4">
                            <Image src={Images.People} alt={""} width={20} height={20}/>
                            População
                        </div>
                    </Link>

                    <Link href={""}>
                        <div className="w-50 h-10.5 rounded-sm bg-transparent hover:bg-[#9c9fb3] flex items-center gap-3 px-5 mt-1.5 text-[#273240] hover:text-[#5A6ACF] text-base leading-4">
                            <Image src={Images.Alert} alt={""} width={20} height={20}/>
                            Alertas
                        </div>
                    </Link>

                    <Link href={""}>
                        <div className="w-50 h-10.5 rounded-sm bg-transparent hover:bg-[#9c9fb3] flex items-center gap-3 px-5 mt-1.5 text-[#273240] hover:text-[#5A6ACF] text-base leading-4">
                            <Image src={Images.Report} alt={""} width={20} height={20}/>
                            Reportagens
                        </div>
                    </Link>

                    <p className="text-[#273240] text-base leading-4 mt-8 ml-5">Mais</p>

                    <Link href={""}>
                        <div className="w-50 h-10.5 rounded-sm bg-transparent hover:bg-[#9c9fb3] flex items-center gap-3 px-5 mt-5 text-[#273240] hover:text-[#5A6ACF] text-base leading-4">
                            <Image src={Images.Settings} alt={""} width={20} height={20}/>
                            Definições
                        </div>
                    </Link>

                    <Link href={""}>
                        <div className="w-50 h-10.5 rounded-sm bg-transparent hover:bg-[#9c9fb3] flex items-center gap-3 px-5 mt-1.5 text-[#273240] hover:text-[#5A6ACF] text-base leading-4">
                            <Image src={Images.Profile} alt={""} width={20} height={20}/>
                            Perfil
                        </div>
                    </Link>

                    <Link href={""}>
                        <div className="w-50 h-10.5 rounded-sm bg-transparent hover:bg-[#9c9fb3] flex items-center gap-3 px-5 mt-1.5 text-[#273240] hover:text-[#5A6ACF] text-base leading-4">
                            <Image src={Images.Info} alt={""} width={20} height={20}/>
                            Ajuda
                        </div>
                    </Link>
                </ul>
            </div>
        </aside>
    )
}


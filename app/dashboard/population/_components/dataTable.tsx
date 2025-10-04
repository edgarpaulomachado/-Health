'use client';

import { Button } from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";

export default function DataTable(){
    return (
        <Table className="table-auto border-separate border-spacing-y-1">
            <TableHeader>
                <TableRow>
                    <TableHead>Hospitais/População</TableHead>
                    <TableHead>Data Emissão</TableHead>
                    <TableHead>Localização</TableHead>
                    <TableHead>Formato</TableHead>
                    <TableHead>Nível de risco</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody className="mt-2">
                <TableRow className="w-full h-12.5 bg-[#E9EFF4] border-2 border-[#e9eff467]">
                    <TableCell>Hospital do Prenda</TableCell>
                    <TableCell>04-10-2025</TableCell>
                    <TableCell>Luanda, Prenda</TableCell>
                    <TableCell>PDF</TableCell>
                    <TableCell>59%</TableCell>
                    <TableCell>
                        <div className="w-auto h-auto flex gap-2 items-center justify-center">
                            <Button className="bg-[#5D5FEF] text-white">Enviar</Button>
                            <div className="w-8.5 h-8.5 rounded-full bg-[#dbdbeb] flex items-center justify-center">
                                <Pencil size={14} color="gray"/>
                            </div>
                            <div className="w-8.5 h-8.5 rounded-full bg-[#ee9999] flex items-center justify-center">
                                <Trash size={14} color="red"/>
                            </div>
                        </div>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
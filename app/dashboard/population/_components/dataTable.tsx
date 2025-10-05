'use client';

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";

// Dados dinâmicos
const data = [
  {
    hospital: "Hospital do Prenda",
    dataEmissao: "04-10-2025",
    localizacao: "Luanda, Prenda",
    formato: "PDF",
    risco: "59%",
  },
  {
    hospital: "Clínica Girassol",
    dataEmissao: "02-10-2025",
    localizacao: "Luanda, Ingombotas",
    formato: "Text",
    risco: "72%",
  },
  {
    hospital: "Hospital Josina Machel",
    dataEmissao: "01-10-2025",
    localizacao: "Luanda, Kinaxixi",
    formato: "PDF",
    risco: "45%",
  },
  {
    hospital: "Clínica Girassol",
    dataEmissao: "02-10-2025",
    localizacao: "Luanda, Ingombotas",
    formato: "Text",
    risco: "72%",
  },
];

export default function DataTable() {
  return (
    <Table className="table-auto border-separate border-spacing-y-1 w-full">
      <TableHeader>
        <TableRow>
          <TableHead>Hospitais/População</TableHead>
          <TableHead>Data Emissão</TableHead>
          <TableHead>Localização</TableHead>
          <TableHead>Formato</TableHead>
          <TableHead>Nível de risco</TableHead>
          <TableHead className="text-center">Ações</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((item, index) => (
          <TableRow
            key={index}
            className="w-full h-12 bg-[#E9EFF4] border-2 border-[#abc0d167]"
          >
            <TableCell>{item.hospital}</TableCell>
            <TableCell>{item.dataEmissao}</TableCell>
            <TableCell>{item.localizacao}</TableCell>
            <TableCell>{item.formato}</TableCell>
            <TableCell>{item.risco}</TableCell>
            <TableCell>
              <div className="flex gap-2 items-center justify-center">
                <Button className="bg-[#5D5FEF] text-white hover:bg-[#4a4ce0]">Enviar</Button>
                <div className="w-8.5 h-8.5 rounded-full bg-[#dbdbeb] flex items-center justify-center cursor-pointer">
                  <Pencil size={14} color="gray" />
                </div>
                <div className="w-8.5 h-8.5 rounded-full bg-[#ee9999] flex items-center justify-center cursor-pointer">
                  <Trash size={14} color="red" />
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/Logo.svg";

export default function ConfirmCodePage() {
  const [code, setCode] = useState("");

  return (
    <div className="bg-[url('/pattern.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-[40px]">
          <div className="flex justify-center mb-[24px]">
            <Image src={logo} alt="Logo" width={100} height={100} />
          </div>
          <h1 className={`font-semibold text-[28px] text-gray-800`}>
            Confirmar Código
          </h1>
          <p className={`font-normal text-[16px] text-gray-500`}>
            Digite o código que enviamos para o seu email.
          </p>
        </div>

        <form className={`font-normal p-6 space-y-4`}>
          <div className="flex flex-col gap-2">
            <label className="block text-[14px] font-semibold text-[#171717]">
              Código
            </label>
            <input
              type="text"
              name="code"
              placeholder="123456"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-[12px] text-sm tracking-[5px] text-center focus:ring-2 focus:ring-[#5A67BA] focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#5A67BA] text-white font-medium py-[12px] rounded-md hover:bg-blue-700 transition"
          >
            Confirmar Código
          </button>

          <p className="text-center text-sm text-gray-600">
            Não recebeu o código?{" "}
            <button
              type="button"
              onClick={() => console.log("Reenviar código")}
              className="text-[#5A67BA] hover:underline"
            >
              Reenviar
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

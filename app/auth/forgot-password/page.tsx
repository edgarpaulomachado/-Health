"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/+saude.svg";
import fonts from "../../../config/fonts";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");


  return (
    <div className="bg-[url('/pattern.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-[40px]">
          <div className="flex justify-center mb-[24px]">
            <Image src={logo} alt="Logo" width={100} height={100} />
          </div>
          <h1 className={`${fonts.inter.className} font-semibold text-[28px] text-gray-800`}>
            Recuperar Senha
          </h1>
          <p className={`${fonts.inter.className} font-normal text-[16px] text-gray-500`}>
            Digite o email associado à sua conta e enviaremos um código.
          </p>
        </div>

        <form className={`${fonts.inter.className} font-normal p-6 space-y-4`}>
          <div className="flex flex-col gap-2">
            <label className="block text-[14px] font-semibold text-[#171717]">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="exemplo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-[12px] text-sm focus:ring-2 focus:ring-[#5A67BA] focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#5A67BA] text-white font-medium py-[12px] rounded-md hover:bg-blue-700 transition"
          >
            Enviar Código
          </button>

          <p className="text-center text-sm text-gray-600">
            Lembrou da senha?{" "}
            <Link href="/login" className="text-[#5A67BA] hover:underline">
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
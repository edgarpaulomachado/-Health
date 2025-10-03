"use client";

import logo from "../../assets/+saude.svg";
import fonts from "../../../config/fonts";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <div className="bg-[url('/pattern.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-[40px]">
          <div className="flex justify-center mb-[24px]">
            <Image src={logo} alt="Logo" />
          </div>
          <h1
            className={`${fonts.inter.className} font-semibold text-[28px] text-gray-800`}
          >
            Cria a tua conta
          </h1>
          <p
            className={`${fonts.inter.className} font-normal text-[16px] text-gray-500`}
          >
            Por favor, preencha os campos para registrar-se.
          </p>
        </div>

        <form
          className={`${fonts.inter.className} font-normal p-6 space-y-4`}
        >
          <div className="mb-[20px] flex flex-col gap-2">
            <label className="block text-[14px] font-semibold text-[#171717]">
              Nome
            </label>
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 p-[12px] text-sm focus:ring-2 focus:ring-[#5A67BA] focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-[20px] flex flex-col gap-2">
            <label className="block text-[14px] font-semibold text-[#171717]">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="exemplo@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 p-[12px] text-sm focus:ring-2 focus:ring-[#5A67BA] focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-[20px] flex flex-col gap-2">
            <label className="block text-[14px] font-semibold text-[#171717]">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 p-[12px] text-sm focus:ring-2 focus:ring-[#5A67BA] focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center text-sm">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-[#5A67BA] focus:ring-blue-500"
              required
            />
            <span className="ml-2">
              Aceito os{" "}
              <Link
                href="/termos"
                className="text-[#5A67BA] hover:underline"
              >
                Termos e Condições
              </Link>
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#5A67BA] text-white font-medium py-[12px] rounded-md hover:bg-blue-700 transition"
          >
            Registrar
          </button>

          <p className="text-center text-sm text-gray-600">
            Já tem conta?{" "}
            <Link href="/auth/login" className="text-[#5A67BA] hover:underline">
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
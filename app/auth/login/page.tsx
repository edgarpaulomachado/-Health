"use client";

import logo from "../../assets/+saude.svg";
import fonts from "../../../config/fonts";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div
        // style={{
        //   backgroundImage: "url('/pattern.png')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat"
        // }}
        className="bg-[url('/pattern.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-[57.94px]">
          <div className="flex justify-center mb-[24px]">
            <Image src={logo} alt="Logo" width={100} height={100} />
          </div>
          <h1 className={`${fonts.inter.className} font-semibold text-[28px] text-gray-800`}>Bem-Vindo de volta</h1>
          <p className={`${fonts.inter.className} font-normal text-[16px] text-gray-500`}>
            Por favor, entre na tua conta.
          </p>
        </div>

        <form
          className={`${fonts.inter.className} font-normal p-6 space-y-4`}
        >
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
              className=" w-full rounded-md border border-gray-300 p-[12px] text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="mb-[20px] flex flex-col gap-2">
            <label className="block text-[14px] font-semibold text-[#171717]">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="sua password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 p-[12px] text-sm focus:ring-2 focus:ring-[#5A67BA] focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-[#5A67BA] focus:ring-blue-500"
              />
              <span>Lembrar de mim</span>
            </label>
            <Link href="/forgot-password" className="text-[#5A67BA] hover:underline">
              Esqueceu a tua password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#5A67BA] text-white font-medium py-[12px] rounded-md hover:bg-blue-700 transition"
          >
            Entrar
          </button>

          <p className="text-center text-sm text-gray-600">
            Não tem conta?{" "}
            <Link href="/register" className="text-[#5A67BA] hover:underline">
              Registrar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
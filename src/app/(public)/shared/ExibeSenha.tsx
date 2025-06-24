"use client";

import { IconCopy } from "@tabler/icons-react";
import { useState } from "react";

export default function ExibeSenha({ senha }: { senha: string }) {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const copiar = () => {
    navigator.clipboard.writeText(senha);
    setMostrarSenha(true);
    setTimeout(() => {
      setMostrarSenha(false);
    }, 2000);
  };

  return (
    <div className="flex justify-between mt-4 p-4 bg-slate-800 rounded-md">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Senha Gerada:</h2>
        <p className="text-lg text-indigo-400">{senha}</p>
      </div>
      <div className="flex relative">
        {mostrarSenha && (
        <span
            className={`absolute -top-8 left-0 bg-indigo-400 text-zinc-200 px-2 py-1 rounded-md whitespace-nowrap shadow transition-opacity duration-500 ${
                mostrarSenha ? "opacity-100" : "opacity-0"
            }`}
        >
            Senha copiada!
        </span>
        )}

        <IconCopy size={16} stroke={1} onClick={copiar} />
      </div>
    </div>
  );
}

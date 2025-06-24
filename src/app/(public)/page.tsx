"use client";

import { useEffect, useState } from "react";
import opcoes from "../data/OpcoesCaracteres";
import TipoCaracterInput from "./shared/TipoCaracterInput";
import Senha from "./shared/Senha";
import ExibeSenha from "./shared/ExibeSenha";
import ForcaSenha from "./shared/ForcaSenha";

export default function Home() {
  const [tamanho, setTamanho] = useState<number>(12);
  const [tiposCaracteres, setTiposCaracteres] = useState(opcoes);
  const [senhaGerada, setSenhaGerada] = useState<string>("");
  const [forcaSenha, setForcaSenha] = useState<number>(1);

  useEffect(() => {
    setForcaSenha(Senha.calcularForca(tamanho, tiposCaracteres));
  }, [tamanho, tiposCaracteres]);

  return (
    <main className="flex flex-col h-full items-center justify-center">
      <h1 className="text-4xl font-bold text-zinc-200 mb-4">Gerador de Senhas</h1>
      <div className="flex flex-col w-2/7 bg-slate-700 text-zinc-200 rounded-md justify-center p-8 gap-6">
        <div className="flex gap-3 text-2xl flex-col">
          <label className="flex gap-2">
            <span>Tamanho da senha:</span>
            <span className="font-bold text-indigo-400">{tamanho}</span>
          </label>
          <input
            type="range"
            min={6}
            max={32}
            value={tamanho}
            onChange={(e) => setTamanho(+e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          {tiposCaracteres.map((opcao, index) => (
            <TipoCaracterInput
              key={index}
              opcao={opcao}
              index={index}
              tiposCaracteres={tiposCaracteres}
              setTiposCaracteres={setTiposCaracteres}
            />
          ))}
        </div>
        <ForcaSenha forca={forcaSenha} />
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            return setSenhaGerada(Senha.gerarSenha(tamanho, tiposCaracteres));
          }}
        >
          Gerar Senha
        </button>
        {senhaGerada && <ExibeSenha senha={senhaGerada} />}
      </div>
    </main>
  );
}

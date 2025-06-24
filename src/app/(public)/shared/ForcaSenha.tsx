import Barra from "./Barra";

interface ForcaSenhaProps {
  forca: number;
}

export default function ForcaSenha(props: ForcaSenhaProps) {
  let cor1 = "bg-red-500";
  let cor2 = "bg-gray-500";
  let cor3 = "bg-gray-500";

  if (props.forca === 2) {
    cor1 = "bg-yellow-500";
    cor2 = "bg-yellow-500";
  } else if (props.forca === 3) {
    cor1 = "bg-green-500";
    cor2 = "bg-green-500";
    cor3 = "bg-green-500";
  }
  
  return (
    <div className="flex gap-4 items-center">
      <div className="flex font-bold">Força da senha: </div>
      <div className="flex gap-2">
        <Barra corFundo={cor1} />
        <Barra corFundo={cor2} />
        <Barra corFundo={cor3} />
      </div>
    </div>
  );
}

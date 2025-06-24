interface BarraProps {
  corFundo: string;
}

export default function Barra(props: BarraProps) {
  return <div className={`flex w-3 h-8 p-2 ${props.corFundo} rounded-sm border-gray-100 border-2`}></div>;
}

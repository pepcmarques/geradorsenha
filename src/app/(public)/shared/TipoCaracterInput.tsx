import OpcaoCaractereProps from "../../model/OpcaoCaractere";


interface TipoCaracterInputProps {
  opcao: OpcaoCaractereProps;
  index: number;
  tiposCaracteres: OpcaoCaractereProps[];
  setTiposCaracteres: (tipos: OpcaoCaractereProps[]) => void;
}

function handleCheckboxChange(
  index: number,
  tiposCaracteres: OpcaoCaractereProps[],
  setTiposCaracteres: any
) {
  const newTiposCaracteres = [...tiposCaracteres];
  newTiposCaracteres[index].checked = !newTiposCaracteres[index].checked; // Alterna entre true e false
  setTiposCaracteres(newTiposCaracteres);
}

export default function TipoCaracterInput({ opcao, index, tiposCaracteres, setTiposCaracteres }: TipoCaracterInputProps) {
  return (
    <div key={index} className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={opcao.checked}
        onChange={() => handleCheckboxChange(index, tiposCaracteres, setTiposCaracteres)}
      />
      <label>{opcao.label}</label>
    </div>
  );
}

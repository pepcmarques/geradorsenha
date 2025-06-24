import OpcaoCaractereProps from "../model/OpcaoCaractere";

const opcoes: OpcaoCaractereProps[] = [
  { id: "numeros", label: "Números", checked: false, value: "0123456789" },
  { id: "maiusculas", label: "Maiúsculas", checked: false, value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  { id: "minusculas", label: "Minúsculas", checked: false, value: "abcdefghijklmnopqrstuvwxyz" },
  { id: "simbolos", label: "Símbolos", checked: false, value: "!@#$%^&*()" },
];
export default opcoes;
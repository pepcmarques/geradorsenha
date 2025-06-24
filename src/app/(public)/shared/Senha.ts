import OpcaoCaractereProps from "../../model/OpcaoCaractere";

export default class Senha {
  static gerarSenha(tamanho: number, opcoes: OpcaoCaractereProps[]): string {
    const caracteresPossiveis = opcoes.filter(opcao => opcao.checked).map(opcao => opcao.value).join("");

    console.log("Caracteres possíveis:", caracteresPossiveis);

    if (caracteresPossiveis.length === 0) {
      alert("Pelo menos um tipo de caractere deve ser selecionado.");
      return "";
    }

    let senha = "";
    for (let i = 0; i < tamanho; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresPossiveis.length);
      senha += caracteresPossiveis[indiceAleatorio];
    }

    return senha;
  }

  static calcularForca(tamanho: number, opcoes: OpcaoCaractereProps[]): number {
    const quantidadeTipos = opcoes.filter(opcao => opcao.checked).length;

    if (tamanho < 8 || quantidadeTipos < 2) return 1; // Fraca

    if (quantidadeTipos >= 3 && tamanho > 12) return 3; // Forte

    return 2; // Media
  }
}

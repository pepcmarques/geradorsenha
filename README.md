# Gerador de Senhas 🔐

Um gerador de senhas moderno e seguro desenvolvido com Next.js, React e TypeScript. Permite criar senhas personalizáveis com diferentes tipos de caracteres e indicador de força da senha.

## 🚀 Funcionalidades

- **Geração de senhas customizável**: Crie senhas com tamanho de 6 a 32 caracteres
- **Tipos de caracteres flexíveis**: Escolha entre números, letras maiúsculas, minúsculas e símbolos
- **Indicador de força da senha**: Visualize a força da senha gerada em tempo real
- **Interface moderna**: Design responsivo e intuitivo com Tailwind CSS
- **Cópia fácil**: Copie a senha gerada com um simples clique

## 🛠️ Tecnologias Utilizadas

- **Next.js 15.3.4** - Framework React para aplicações web
- **React 19** - Biblioteca para construção de interfaces de usuário
- **TypeScript 5** - Superset do JavaScript com tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário para estilização
- **Tabler Icons React** - Biblioteca de ícones para React

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm, yarn ou pnpm

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/gerador-senha.git
cd gerador-senha
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📖 Como Usar

1. **Defina o tamanho da senha**: Use o slider para escolher um tamanho entre 6 e 32 caracteres
2. **Selecione os tipos de caracteres**: Marque as opções desejadas:
   - Números (0-9)
   - Letras maiúsculas (A-Z)
   - Letras minúsculas (a-z)
   - Símbolos (!@#$%^&\*())
3. **Visualize a força**: O indicador mostra se a senha é fraca, média ou forte
4. **Gere a senha**: Clique no botão "Gerar Senha"
5. **Copie a senha**: Use o botão de copiar para salvar a senha na área de transferência

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── (public)/
│   │   ├── page.tsx              # Página principal
│   │   └── shared/
│   │       ├── Barra.tsx         # Componente da barra
│   │       ├── ExibeSenha.tsx    # Componente para exibir senha
│   │       ├── ForcaSenha.tsx    # Indicador de força da senha
│   │       ├── Senha.ts          # Lógica de geração de senhas
│   │       └── TipoCaracterInput.tsx # Input para tipos de caracteres
│   ├── data/
│   │   └── OpcoesCaracteres.ts   # Configurações dos tipos de caracteres
│   ├── model/
│   │   └── OpcaoCaractere.ts     # Interface TypeScript
│   ├── globals.css               # Estilos globais
│   └── layout.tsx                # Layout principal
```

## 🔒 Algoritmo de Força da Senha

O algoritmo considera:

- **Fraca**: Menos de 8 caracteres ou menos de 2 tipos diferentes
- **Média**: 8+ caracteres com 2+ tipos de caracteres
- **Forte**: 12+ caracteres com 3+ tipos diferentes de caracteres

## 🎨 Customização

### Adicionando novos tipos de caracteres

Edite o arquivo `src/app/data/OpcoesCaracteres.ts`:

```typescript
const opcoes: OpcaoCaractereProps[] = [
  // Tipos existentes...
  { id: "especiais", label: "Caracteres Especiais", checked: false, value: "[]{}|;:,.<>?" },
];
```

### Modificando o algoritmo de força

Ajuste a lógica em `src/app/(public)/shared/Senha.ts` no método `calcularForca`.

## 📝 Scripts Disponíveis

- `npm run dev` - Executa em modo de desenvolvimento com Turbopack
- `npm run build` - Cria build de produção
- `npm run start` - Executa build de produção
- `npm run lint` - Executa linting do código

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🛡️ Segurança

- As senhas são geradas localmente no seu navegador
- Nenhuma senha é enviada para servidores externos
- Use as senhas geradas de forma responsável
- Recomendamos armazenar senhas em um gerenciador de senhas confiável

## 📞 Suporte

Se você encontrar algum problema ou tiver sugestões, por favor abra uma [issue](https://github.com/seu-usuario/gerador-senha/issues).

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!

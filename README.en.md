# Password Generator 🔐

A modern and secure password generator developed with Next.js, React, and TypeScript. Create customizable passwords with different character types and real-time password strength indicator.

## 🚀 Features

- **Customizable password generation**: Create passwords with 6 to 32 characters
- **Flexible character types**: Choose between numbers, uppercase letters, lowercase letters, and symbols
- **Password strength indicator**: Visualize the generated password strength in real-time
- **Modern interface**: Responsive and intuitive design with Tailwind CSS
- **Easy copy**: Copy the generated password with a simple click

## 🛠️ Technologies Used

- **Next.js 15.3.4** - React framework for web applications
- **React 19** - Library for building user interfaces
- **TypeScript 5** - JavaScript superset with static typing
- **Tailwind CSS 4** - Utility-first CSS framework for styling
- **Tabler Icons React** - Icon library for React

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, or pnpm

## 🔧 Installation

1. Clone the repository:

```bash
git clone git@github.com:pepcmarques/geradorsenha.git
cd geradorsenha
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the project in development mode:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 How to Use

1. **Set password length**: Use the slider to choose a length between 6 and 32 characters
2. **Select character types**: Check the desired options:
   - Numbers (0-9)
   - Uppercase letters (A-Z)
   - Lowercase letters (a-z)
   - Symbols (!@#$%^&*())
3. **View strength**: The indicator shows if the password is weak, medium, or strong
4. **Generate password**: Click the "Gerar Senha" (Generate Password) button
5. **Copy password**: Use the copy button to save the password to clipboard

## 🏗️ Project Structure

```
src/
├── app/
│   ├── (public)/
│   │   ├── page.tsx              # Main page
│   │   └── shared/
│   │       ├── Barra.tsx         # Bar component
│   │       ├── ExibeSenha.tsx    # Password display component
│   │       ├── ForcaSenha.tsx    # Password strength indicator
│   │       ├── Senha.ts          # Password generation logic
│   │       └── TipoCaracterInput.tsx # Character type input
│   ├── data/
│   │   └── OpcoesCaracteres.ts   # Character type configurations
│   ├── model/
│   │   └── OpcaoCaractere.ts     # TypeScript interface
│   ├── globals.css               # Global styles
│   └── layout.tsx                # Main layout
```

## 🔒 Password Strength Algorithm

The algorithm considers:

- **Weak**: Less than 8 characters or less than 2 different types
- **Medium**: 8+ characters with 2+ character types
- **Strong**: 12+ characters with 3+ different character types

## 🎨 Customization

### Adding new character types

Edit the `src/app/data/OpcoesCaracteres.ts` file:

```typescript
const opcoes: OpcaoCaractereProps[] = [
  // Existing types...
  { id: "special", label: "Special Characters", checked: false, value: "[]{}|;:,.<>?" },
];
```

### Modifying the strength algorithm

Adjust the logic in `src/app/(public)/shared/Senha.ts` in the `calcularForca` method.

## 📝 Available Scripts

- `npm run dev` - Run in development mode with Turbopack
- `npm run build` - Create production build
- `npm run start` - Run production build
- `npm run lint` - Run code linting

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## 🛡️ Security

- Passwords are generated locally in your browser
- No passwords are sent to external servers
- Use generated passwords responsibly
- We recommend storing passwords in a trusted password manager

## 📞 Support

If you encounter any issues or have suggestions, please open an [issue](https://github.com/pepcmarques/geradorsenha/issues).

---

⭐ If this project was useful to you, consider giving the repository a star!

## 🌐 Language Versions

- [Português (Portuguese)](README.md)
- [English](README.en.md)

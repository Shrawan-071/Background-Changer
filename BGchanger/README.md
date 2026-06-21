# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Background Changer

A simple React application that changes the background color of the page. Users can either change the color manually or start an automatic color-changing mode with the ability to stop it at any time.

## Features

* 🎨 Change the background color with a button click.
* 🔄 Automatically cycle through colors at a fixed interval.
* ⏹️ Stop the automatic color-changing mode.
* 📱 Responsive and simple user interface.
* ⚛️ Built with React and Vite.

## Technologies Used

* React
* JavaScript
* CSS
* Vite

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd BGchanger
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit:

```
http://localhost:5173
```

## Project Structure

```
background-changer/
│
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## Usage

* Click the **Change** button to change the background color once.
* Click the **Automatic Changer** button to continuously change colors.
* Click the **Stop** button to stop the automatic color-changing process.

## Future Improvements

* Add random color generation.
* Display the current color code.
* Copy color codes to clipboard.
* Add dark mode.
* Add smooth transition effects between colors.
* Allow users to customize the speed of automatic color changes.

## License

This project is open-source and available under the MIT License.

# React + TypeScript + Vite

## Google Sheets submission endpoint

- Front-end form submissions post to a Google Apps Script endpoint. The current default URL is `https://script.google.com/macros/s/AKfycbwSvGM7yHBWljRfUnWR2J7XPojXRjgQqcsDCaAjTMLd84C5uY_f3W3FEH1RkAj8o8eiPw/exec`.
- Override the endpoint locally by creating `.env.local` with `VITE_GOOGLE_SCRIPT_URL=your-script-url`.
- Each form sends a `formSlug` (`landing-contact`, `contact-page`, `request-info`, `participate`) so the Apps Script routes rows to the correct sheet tab.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

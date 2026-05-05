# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


      <div className="flex justify-center gap-4">
        {CardData.map((Card) => (
        <div className="flex bg-amber-50 w-60 h-80 ">
        <h1>{Card.title}</h1>
        <img />
        <h3>{Card.text}</h3>

        </div>

        ))}

          const CardData = () =>{
    const Card =[
    { id: 1, title: 'labobo', text: 'fanan nadi' },
    { id: 2, title: '7med', text: 'ait lfanana' },
    { id: 3, title: 'yasser', text: 'wld-char9i' }
  ];
  }
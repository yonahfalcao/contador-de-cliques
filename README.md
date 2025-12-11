# Contador de Cliques em React

Este projeto é uma aplicação simples desenvolvida em **React** para praticar conceitos básicos como componentes funcionais, estado (`useState`), eventos e estilização.  
A aplicação consiste em um contador que incrementa seu valor a cada clique no botão, com animação suave e estilo personalizado.

---

## 🚀 Funcionalidades

- Exibição do valor atual do contador  
- Botão estilizado para incrementar o contador  
- Animação suave ao atualizar o número  
- Fundo roxo claro para dar destaque ao componente  
- Código totalmente contido em um único arquivo (`App.js`)  
- Renderização do app feita no `index.js` utilizando **React StrictMode**

---

## 📁 Estrutura de Arquivos

src/
├── App.js # Componente principal do contador (inclui estilos)
├── index.js # Ponto de entrada da aplicação
└── index.html # Contém a div root

---

## 🧩 Código do `index.js`

O arquivo `index.js` é responsável por inicializar o React e renderizar o componente `<App />` dentro da div `root`.  
Este projeto usa `createRoot` (React 18+) e `StrictMode` para melhores práticas de desenvolvimento.


🎨 Estilo e Animação

O fundo da página é roxo claro

O botão possui sombras, transição suave e efeito hover

O número do contador aumenta de tamanho rapidamente e muda de cor ao ser incrementado

Todos os estilos estão incluídos diretamente no componente App.js via <style> embutido


🛠 Tecnologias Utilizadas

React 18

JavaScript (ES6+)

JSX

React DOM

Hooks (useState)

📄 Licença

Este projeto é apenas para estudo e prática.
Sinta-se livre para modificar, melhorar e reutilizar como quiser.


Projeto desenvolvido por Yonah Falcão com parceria com a DEVStart SENAI

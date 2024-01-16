import React from 'react';
import './App.css';
import AxiosController from "./yandexApi";

const token = "t1.9euelZrHj4nMncmXyZSLjpOVlJ7OyO3rnpWaj5zGjZuRnJ6Kks-Jl5TJx4zl8_dPXmRS-e8rNw9H_t3z9w8NYlL57ys3D0f-zef1656VmsuJlpKJl5CZz8nNjYyayJHH7_zF656VmsuJlpKJl5CZz8nNjYyayJHH.4ZTm3EQKjDxpsbP720ocH2oAZoBgj2o1uxwzsSJjBX6YjGS7o2jbyudlyUAHD_RcrgDL0OUl4LAtIy6d_YinDA";
const folderId = "b1g6cn40ar2pcb0kg5oo";

// AxiosController.post("/api/foundationModels/v1/completion", {
//   modelUri: `gpt://${folderId}/yandexgpt-lite`,
//   completionOptions: {
//     stream: false,
//     temperature: 0.6,
//     maxTokens: "2000"
//   },
//   messages: [
//     {
//       role: "system",
//       text: "Найди ошибки в тексте и исправь их"
//     },
//     {
//       role: "user",
//       text: "Ламинат подойдет для укладке на кухне или в детской комнате – он не боиться влаги и механических повреждений благодаря защитному слою из облицованных меламиновых пленок толщиной 0,2 мм и обработанным воском замкам."
//     }
//   ]
// }, {
//   headers: {
//     "x-folder-id": folderId,
//     "Content-Type": "application/json",
//     'Authorization': `Bearer ${token}`,
//   },
// });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '@components/Hello';
import LogoIcon from '@icons/logo.svg';

// TODO Можно ли избавиться от пустого html
// TODO Можно ли избавиться от генерации ui.js
// TODO Добавить изображение
// TODO Добавить утилиту
// TODO Добавить emotion
// TODO Проработать список расширений модулей для ts
// TODO Почистить список зависимостей
// TODO Интегрировать дизайн-систему
// TODO Прописать README
// TODO Выкатить релиз

const App = () => {
    return (
        <div>
            <h1>Figma Starter</h1>
            <LogoIcon />
            <Hello />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

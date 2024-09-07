const express = require('express');
const app = express();

// Определяем порт, на котором будет работать сервер
const PORT = process.env.PORT || 3000;

// Главная страница: запрос по адресу "/" вернёт "Hello, World!"
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Запуск сервера на указанном порту
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

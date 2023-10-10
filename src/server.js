import express from 'express';
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    return res.json([{ name: 'Minha primeira API', description: 'Calabresa', price: 100.00, stock: 10}, { nome: 'Calabreso' }]);
})

app.listen(5050, () => console.log('Server ativo'))
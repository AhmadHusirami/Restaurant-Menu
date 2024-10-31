const express = require('express');
const XLSX = require('xlsx');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/api/menu', (req, res) => {
    const filePath = path.join(__dirname, 'Menu.xlsx');
    const workbook = XLSX.readFile(filePath);
    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
    const sheetData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

    res.json(sheetData); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

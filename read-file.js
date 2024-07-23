const fs = require("fs");

const data = fs.readFileSync("nuevo_archivo.txt", "utf8");

console.log("Contenido del archivo:", data);

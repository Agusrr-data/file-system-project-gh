const fs = require("fs");

fs.appendFileSync("nuevo_archivo.txt", "Nueva línea de prueba\n", "utf8");

const contenido = fs.readFileSync("nuevo_archivo.txt", "utf8");
console.log("Contenido del archivo:", "Este es un nuevo archivo");

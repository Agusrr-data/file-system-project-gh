const fs = require("fs");

fs.copyFileSync("nuevo_archivo.txt", "copia_nuevo_archivo.txt");

const contenidoCopia = fs.readFileSync("copia_nuevo_archivo.txt", "utf8");
console.log("Contenido del archivo de destino:", contenidoCopia);

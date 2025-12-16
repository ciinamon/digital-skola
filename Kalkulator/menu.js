import { kalkulator } from "./rumus.js";
import readline from "readline";

const inputUser = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Langkah 1: Minta angka pertama
inputUser.question("Masukkan Angka Pertama: ", (angka1) => {
  // Langkah 2: Minta operator
  inputUser.question("Masukkan Operator (+, -, *, /): ", (operator) => {
    // Langkah 3: Minta angka kedua
    inputUser.question("Masukkan Angka Kedua: ", (angka2) => {
      const num1 = parseFloat(angka1);
      const num2 = parseFloat(angka2);

      // Panggil fungsi kalkulator dari rumus.js
      const hasil = kalkulator(num1, num2, operator);

      console.log("===============================");
      console.log(
        `Hasil dari ${angka1} ${operator} ${angka2} adalah: ${hasil}`
      );
      console.log("===============================");

      inputUser.close(); 
    });
  });
});

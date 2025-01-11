import sharp from "sharp";
import fs from "fs";

const inputPath = "./public/assets/lowtierprojects/todo.webp";
const outputPath = "./public/assets/lowtierprojects/todosmall.webp";

sharp(inputPath)
  .resize(40)
  .toFormat("webp", { quality: 50 })
  .toBuffer()
  .then((data) => {
    fs.writeFileSync(outputPath, data);
    const base64 = data.toString("base64");
    console.log("Base64 placeholder:", `data:image/webp;base64,${base64}`);
  })
  .catch((err) => {
    console.error("Error generating placeholder:", err);
  });

const sharp = require("sharp");
const path = require("path");

const inputPath = path.join(__dirname, "public/images/mina-saad-schluesseldienst-wetzlar-einsatzfahrzeug.jpeg");
const outputPath = path.join(__dirname, "public/images/mina-saad-schluesseldienst-wetzlar-einsatzfahrzeug.webp");

sharp(inputPath)
  .webp({ quality: 80 })
  .toFile(outputPath)
  .then(() => {
    console.log("Image successfully converted to WebP!");
  })
  .catch(err => {
    console.error("Error converting image:", err);
  });

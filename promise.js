const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (output) => {
  return new Promise((marah, tidak_marah) => {
    if (output == 'World of the married' || output == 'Nanti Kita Cerita Tentang Hari Ini') {
      console.log(`marah`);
    } else {
      console.log(`tidak marah`);
    }
  });
};
const promiseOutput = null;

module.exports = {
  promiseOutput,
};

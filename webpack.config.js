module.exports = {
  entry: "./src/main.js",
  mode: "production",
  output: {
    library: {
      type: "commonjs2", //For Espruino ("commonjs" doesn't work when exporting a class)
    },
    filename: "lib.storage.min.js",
  },
}

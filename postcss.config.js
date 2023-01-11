module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        autoprefixer: { grid: "autoplace", add: true, flexbox: true },
      },
    ],
    // ["css-mqpacker"],
    [
      require("postcss-sort-media-queries")({
        // sort: значение по умолчанию 'mobile-first'
        // sort: значение по умолчанию 'desctOOPisprabviti-first'
        // sort: function (a, b) {
        // 	// пользовательская функция сортировки
        // 	return a - b;
        // },
      }),
    ],
  ],
};

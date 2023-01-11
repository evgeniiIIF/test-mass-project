var smartgrid = require("smart-grid");

/* It's principal settings in smart grid project */
var settings = {
  filename: "smart-grid",
  outputStyle: "scss",
  columns: 12,
  offset: "30px",
  mobileFirst: false,
  container: {
    maxWidth: "1046px",
    fields: "30px",
  },
  breakPoints: {
    xxl: {
      width: "1400px",
    },
    xl: {
      width: "1200px",
    },
    lg: {
      width: "992px",
      fields: "15px",
    },
    md: {
      width: "768px",
    },
    sm: {
      width: "576px",
    },
    xs: {
      width: "425px",
    },
  },
  mixinNames: {
    container: "container",
    row: "row-flex",
    rowFloat: "row-float",
    rowInlineBlock: "row-ib",
    rowOffsets: "row-offsets",
    column: "col",
    size: "size",
    columnFloat: "col-float",
    columnInlineBlock: "col-ib",
    columnPadding: "col-padding",
    columnOffsets: "col-offsets",
    shift: "shift",
    from: "from",
    to: "to",
    fromTo: "from-to",
    reset: "reset",
    clearfix: "clearfix",
    debug: "debug",
    uRowFlex: "u-row-flex",
    uColumn: "u-col",
    uSize: "u-size",
  },
  tab: "	",
  defaultMediaDevice: "screen",
  detailedCalc: false,
};

smartgrid("./src/sys/scss/", settings);

webpackHotUpdate("main",{

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar canvas = document.getElementById('drawing-canvas'); // Some flags for grid cells.\n\nvar EMPTY_CELL = 'E';\nvar FULL_CELL = 'F';\n\nvar Grid =\n/*#__PURE__*/\nfunction () {\n  function Grid(_ref) {\n    var width = _ref.width,\n        height = _ref.height,\n        squareLength = _ref.squareLength;\n\n    _classCallCheck(this, Grid);\n\n    this.width = width;\n    this.height = height;\n    this.squareSide = squareLength;\n    this.cells = this.fillEmptyCells();\n  }\n\n  _createClass(Grid, [{\n    key: \"fillEmptyCells\",\n    value: function fillEmptyCells() {\n      var cells = [];\n\n      for (var i = 0; i < this.height; i++) {\n        var line = [];\n\n        for (var j = 0; j < this.width; j++) {\n          line.push(EMPTY_CELL);\n        }\n\n        cells.push(line);\n      }\n\n      return cells;\n    }\n  }, {\n    key: \"drawGrid\",\n    value: function drawGrid(context) {\n      for (var y = 0; y < this.height; y++) {\n        for (var x = 0; x < this.width; x++) {\n          var squareState = this.cells[y][x];\n          context.fillStyle = squareState == FULL_CELL ? '#000000' : '#ffffff';\n          context.fillRect(x * this.squareSide, y * this.squareSide, this.squareSide, this.squareSide);\n        }\n      }\n    }\n  }]);\n\n  return Grid;\n}();\n\nfunction createImageData(cells) {\n  var height = cells.length;\n  var width = cells[0].length;\n  var hiddenCanvas = document.createElement('canvas');\n  var hiddenContext = hiddenCanvas.getContext('2d');\n  hiddenCanvas.width = width;\n  hiddenCanvas.height = height;\n\n  for (var y = 0; y < height; y++) {\n    for (var x = 0; x < width; x++) {\n      var squareState = cells[y][x];\n      hiddenContext.fillStyle = squareState == FULL_CELL ? '#000000' : '#FFFFFF';\n      hiddenContext.fillRect(x, y, 1, 1);\n    }\n  }\n\n  return hiddenContext.getImageData(0, 0, width, height);\n}\n\nfunction parseRealData(realImage) {\n  var data = realImage.data;\n  var resultData = [];\n\n  for (var i = 0; i < data.length; i++) {}\n}\n\nfunction init() {\n  var gridSizeX = 28;\n  var gridSizeY = 28;\n  var squareSize = 20;\n  var grid = new Grid({\n    width: gridSizeX,\n    height: gridSizeY,\n    squareLength: squareSize\n  });\n  canvas.width = gridSizeX * squareSize;\n  canvas.height = gridSizeY * squareSize;\n  grid.drawGrid(canvas.getContext('2d'));\n  var realData = createImageData(grid.cells);\n  console.log(realData);\n}\n\ninit();\n\n//# sourceURL=webpack:///./src/client/index.js?");

/***/ })

})
webpackHotUpdate("main",{

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar canvas = document.getElementById('drawing-canvas'); // Some flags for grid cells.\n\nvar EMPTY_CELL = 'E';\nvar FULL_CELL = 'F';\n\nvar Grid =\n/*#__PURE__*/\nfunction () {\n  function Grid(_ref) {\n    var width = _ref.width,\n        height = _ref.height,\n        squareLength = _ref.squareLength;\n\n    _classCallCheck(this, Grid);\n\n    this.width = width;\n    this.height = height;\n    this.squareSide = squareLength;\n    this.cells = this.fillEmptyCells();\n    this.isDrawing = false;\n    this.isDeleting = false;\n  }\n\n  _createClass(Grid, [{\n    key: \"fillEmptyCells\",\n    value: function fillEmptyCells() {\n      var cells = [];\n\n      for (var i = 0; i < this.height; i++) {\n        var line = [];\n\n        for (var j = 0; j < this.width; j++) {\n          line.push(EMPTY_CELL);\n        }\n\n        cells.push(line);\n      }\n\n      return cells;\n    }\n  }, {\n    key: \"drawGrid\",\n    value: function drawGrid(context) {\n      this.context = context;\n\n      for (var y = 0; y < this.height; y++) {\n        for (var x = 0; x < this.width; x++) {\n          var squareState = this.cells[y][x];\n          context.fillStyle = squareState == FULL_CELL ? '#000000' : '#ffffff';\n          context.fillRect(x * this.squareSide, y * this.squareSide, this.squareSide, this.squareSide);\n        }\n      }\n    }\n  }, {\n    key: \"redraw\",\n    value: function redraw() {\n      this.drawGrid(this.context);\n    }\n  }, {\n    key: \"changeState\",\n    value: function changeState(_ref2, newState) {\n      var x = _ref2.x,\n          y = _ref2.y;\n      this.cells[y][x] = newState;\n    }\n  }]);\n\n  return Grid;\n}();\n\nfunction createImageData(cells) {\n  var height = cells.length;\n  var width = cells[0].length;\n  var hiddenCanvas = document.createElement('canvas');\n  var hiddenContext = hiddenCanvas.getContext('2d');\n  hiddenCanvas.width = width;\n  hiddenCanvas.height = height;\n\n  for (var y = 0; y < height; y++) {\n    for (var x = 0; x < width; x++) {\n      var squareState = cells[y][x];\n      hiddenContext.fillStyle = squareState == FULL_CELL ? '#000000' : '#FFFFFF';\n      hiddenContext.fillRect(x, y, 1, 1);\n    }\n  }\n\n  return hiddenContext.getImageData(0, 0, width, height);\n}\n\nfunction parseRealData(realImage) {\n  var data = realImage.data;\n  var resultData = [];\n\n  for (var i = 0; i < data.length; i++) {\n    if (i % 4 === 0) resultData.push(data[i]);\n  }\n\n  return resultData;\n}\n\nfunction mouseMoveHandler(e, grid) {\n  if (grid.isDrawing) {\n    var mouseX = e.clientX,\n        mouseY = e.clientY;\n\n    var _canvas$getBoundingCl = canvas.getBoundingClientRect(),\n        canvasX = _canvas$getBoundingCl.x,\n        canvasY = _canvas$getBoundingCl.y;\n\n    var realX = mouseX - canvasX;\n    var realY = mouseY - canvasY; // Determine the grid positions.\n\n    var gridX = Math.floor(realX / grid.squareSide);\n    var gridY = Math.floor(realY / grid.squareSide);\n    console.log(\"\".concat(gridX, \", \").concat(gridY));\n    grid.changeState({\n      x: gridX,\n      y: gridY\n    }, FULL_CELL);\n    grid.redraw();\n  }\n}\n\nfunction init() {\n  var gridSizeX = 28;\n  var gridSizeY = 28;\n  var squareSize = 20;\n  var grid = new Grid({\n    width: gridSizeX,\n    height: gridSizeY,\n    squareLength: squareSize\n  });\n  canvas.width = gridSizeX * squareSize;\n  canvas.height = gridSizeY * squareSize;\n  grid.drawGrid(canvas.getContext('2d'));\n  canvas.addEventListener('mousedown', function () {\n    grid.isDrawing = true;\n  });\n  canvas.addEventListener('mouseup', function () {\n    grid.isDrawing = false;\n  });\n  canvas.addEventListener('contextmenu', function (e) {\n    e.preventDefault();\n    grid.isDeleting = true;\n    grid.isDrawing = true;\n  }, false);\n  canvas.addEventListener('mousemove', function (e) {\n    return mouseMoveHandler(e, grid);\n  });\n  var realData = createImageData(grid.cells);\n  console.log(realData);\n  var parsedData = parseRealData(realData);\n  console.log(parsedData);\n}\n\ninit();\n\n//# sourceURL=webpack:///./src/client/index.js?");

/***/ })

})
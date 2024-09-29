import FabricCanvasTool from "./fabrictool";

class Pencil extends FabricCanvasTool {
  configureCanvas(props) {
    console.log("hello");
    this._canvas.isDrawingMode = true;
    this._canvas.freeDrawingBrush.width = props.lineWidth;
    this._canvas.freeDrawingBrush.color = props.lineColor;
  }

  doWindowDoubleClick(e) {}
}

export default Pencil;

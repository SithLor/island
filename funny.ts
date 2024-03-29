//gba
//https://www.copetti.org/writings/consoles/game-boy-advance/

const DISPLAY_WIDTH = 240;
const DISPLAY_HEIGHT = 160;
const HTML_CODE= ` 
<!DOCTYPE html><html><body>

<canvas id="DISPLAY" width="${DISPLAY_WIDTH}" height="${DISPLAY_HEIGHT}" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML canvas tag.</canvas>

</body></html>
`
const DISPLAY: HTMLCanvasElement = document.getElementById("DISPLAY") as HTMLCanvasElement;
const DISPLAY_ctx = DISPLAY.getContext("webgl2");
if (!DISPLAY_ctx) {
    console.error("WebGL2 not supported");
    throw new Error("WebGL2 not supported");
}
DISPLAY_ctx.enable(DISPLAY_ctx);


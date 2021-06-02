// Make it Snow Assignment by Omar Elshimi

initGraphics("canvas", 1000, 800);

let snowflakes = [];

requestAnimationFrame(draw);
function draw() {
  
    // Loop Draw Function
    requestAnimationFrame(draw);
}

function moveSnowflake() {
    for (let i = 0; i < snowflakes.length; i++) {
        if (snowflakes[i] < cnv.height) {
            snowflakes[i] += (0, randomDec(0, cnv.width))
        }
    }
}

function drawSnowflake(snowflake) {
    fill("white");
    circle(snowflake.x, snowflake.y, snowflake.r, "fill");
}
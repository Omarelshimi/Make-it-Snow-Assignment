// Make it Snow Assignment by Omar Elshimi

initGraphics("canvas", 1000, 800);

let snowflakes = createRandomSnowflakeArray(100);

requestAnimationFrame(draw);
function draw() {
    background("black")

    for (let i = 0; i < snowflakes.length; i++) {
        moveSnowflake(snowflakes[i]);
        drawSnowflake(snowflakes[i]);

    }
    // Loop Draw Function
    requestAnimationFrame(draw);
}

function moveSnowflake(snowflake) {
    snowflake.y += 2;
    if (snowflake.y > cnv.height) {
        snowflake.y = 0;
        snowflake.x = randomInt(0, cnv.width);
    }
}

function createRandomSnowflakeArray(total) {
    let all = [];
    for (let i = 0; i < total; i++) {
        all.push(newRandomSnowflake());
    }
    return all;
}

function drawSnowflake(snowflake) {
    fill("white");
    circle(snowflake.x, snowflake.y, snowflake.r, "fill");
}

function newRandomSnowflake() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(1, 7)
    };
}

document.addEventListener("click", moreSnowflakes);

function moreSnowflakes(event) {
    if (event.keyCode === 39) {
        newSnowflake();
    }
}

function newSnowflake() {
    snowflakes.push(newSnowflakes());
}

function newSnowflakes(initX, initY, initR, initColor) {
    return {
        x: initX,
        y: initY,
        r: initR,
        color: initColor
    };
}
const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.arc(250, 100, 50, 0, 1.5 * Math.PI);
ctx.stroke();
const canvas = document.getElementById("C1");
if (canvas) {
  const ctx = canvas.getContext("2d");
  const pi = Math.PI;
  ctx.beginPath();
  ctx.font = "700 24px Arial";
  ctx.fillStyle = "#BC9CFF";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText("260", canvas.width / 2, 55);

  ctx.beginPath();
  ctx.font = "700 12px Arial";
  ctx.fillStyle = "#BC9CFF";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  const text = ctx.measureText("голосов");
  text.width = 70;
  ctx.fillText("голосов", canvas.width / 2, 75);

  ctx.beginPath();
  ctx.lineWidth = "4";
  const gradOne = ctx.createLinearGradient(60, 60, 120, 40);
  gradOne.addColorStop(0, "#6FCF97");
  gradOne.addColorStop(1, "#66D2EA");
  ctx.strokeStyle = gradOne;
  ctx.arc(60, 60, 58, 0.01 * pi, pi * 0.49, false);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = "4";
  const gradTwo = ctx.createLinearGradient(30, 20, 60, 90);
  gradTwo.addColorStop(0, "#FFE39C");
  gradTwo.addColorStop(1, "#FFBA9C");
  ctx.strokeStyle = gradTwo;
  ctx.arc(60, 60, 58, pi * 0.51, pi * 1.49, false);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = "4";
  const gradThree = ctx.createLinearGradient(30, 20, 60, 90);
  gradThree.addColorStop(0, "#BC9CFF");
  gradThree.addColorStop(1, "#8BA4F9");
  ctx.strokeStyle = gradThree;
  ctx.arc(60, 60, 58, pi * 1.51, pi * 1.99, false);
  ctx.stroke();
}

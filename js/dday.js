const today = new Date();
const Dday = new Date("2024-08-22");

const dayDiff = Math.ceil((Dday - today) / (24 * 60 * 60 * 1000));
const element = document.getElementById("DdayCounter");

element.textContent = `${dayDiff}`;

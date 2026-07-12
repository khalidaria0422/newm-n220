'use strict';

/**************************************************
 * DATING
 **************************************************/
const ticketCount = 2;
const ticketPrice = 14;
const totalPrice = ticketCount * ticketPrice;

document.getElementById('ticketNum').textContent += ticketCount;
document.getElementById('ticketCost').textContent += ticketPrice;
document.getElementById('ttCost').textContent += totalPrice;

/**************************************************
 * SHOPPING
 **************************************************/
let bankBalance = 235.87;

const jacket = 70;
const sweater = 55;
const shirt = 35;
const pants = 75;
const skirt = 49;
const sandals = 30;
const shoes = 60;

const outfitCost = shirt + pants + shoes;
bankBalance -= outfitCost;

document.getElementById('bank').textContent =
  `Bank balance after purchase: ${bankBalance}`;
document.getElementById('addJacket').textContent =
  `Enough funds to buy jacket: ${bankBalance >= jacket}`;

/**************************************************
 * PIZZA
 **************************************************/
const pizzaCount = 5;
const sliceCount = 8;
const totalSlice = pizzaCount * sliceCount;

const slicePerPerson = 2.5;
const totalFed = totalSlice / slicePerPerson;

const totalFedBatch = Math.floor(sliceCount / slicePerPerson) * pizzaCount;
const leftover = totalSlice - totalFedBatch * slicePerPerson;

document.getElementById('profPizza').innerHTML =
  `Total students fed: ${totalFed}.<br>
  If all 16 are given the pizza, professor Rector would get no pizza slices.<br><br>
  Total students fed if 1 pizza was assigned per batch: ${totalFedBatch}<br>
  Leftover for Professor: ${leftover} slices`;

/**************************************************
 * MONTY'S MEGA BAR
 **************************************************/
const adultPrice = 12;
const childPrice = 6;
const drinkPrice = 1.5;

const adultCount = 2;
const childCount = 1;
const drinkCount = 3;

const totalAdultPrice = adultCount * adultPrice;
const totalChildPrice = childCount * childPrice;
const totalDrinkPrice = drinkCount * drinkPrice;
const totalPriceMonty = totalAdultPrice + totalChildPrice + totalDrinkPrice;

document.getElementById('Monty').innerHTML =
  `Adult Buffet Price: $${totalAdultPrice}<br>
Child Buffet Price: $${totalChildPrice}<br>
Drinks Price: $${totalDrinkPrice}<br>
Total Price: $${totalPriceMonty}`;

/**************************************************
 * AVERAGE EARNED TIPS
 **************************************************/
const tipsWeek1 = 202.45;
const tipsWeek2 = 134.97;
const tipsWeek3 = 256.63;
const tipsWeek4 = 178.22;

const averageTipAmount = (tipsWeek1 + tipsWeek2 + tipsWeek3 + tipsWeek4) / 4;

document.getElementById('tips').textContent =
  `Average weekly tips: $${averageTipAmount.toFixed(2)}`;

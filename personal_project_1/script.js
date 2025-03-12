/* variables */
let xp = 0;
let currentClass = 0;

let health = 100;
let fish = 8;

//weapons
let currentWeapon = 0;
let inventory = ["Pebble"];

let day = 1;

/* Connecting the background image */
const backgroundImage = document.querySelector("#backgroundImg");

/* connecting every button into one var */
const buttons = document.querySelectorAll("#controls button");

/* Connecting the buttons */
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");

/* Connecting the changing text*/
//personal stats
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const classText = document.querySelector("#classText");
const healthText = document.querySelector("#healthText");
const fishText = document.querySelector("#fishText");
const dayText = document.querySelector("#dayText");

//monster stats
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealth = document.querySelector("#monsterHealth");

/* initializing the buttons*/
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = goInfirmary;
button4.onclick = goLodge;
button5.onclick = goCombatTrial;
button6.onclick = goStats;

/* total stats */
const totalStats = {
  totalFish: 8,
  totalXP: 0,
  "current equipment": inventory[currentWeapon],
  "total enemy1 killed": 0,
  "total enemy2 killed": 0,
  "total enemy3 killed": 0,
  "total enemy4 killed": 0,
  "total enemy5 killed": 0,
};

/* different locations taken based on button */
const locations = [
  {
    name: "town square",
    "num of buttons": 6,
    "button text": [
      "Go to Store",
      "Go to cave",
      "Go to Infirmary",
      "Go to Lodge",
      "Go to Combat Trial",
      "Check Status",
    ],
    "button functions": [
      goStore,
      goCave,
      goInfirmary,
      goLodge,
      goCombatTrial,
      goStats,
    ],
    text: ">It's daytime. You find yourself at the town square, what will you do?",
    "background image": ["./backgrounds/maplestory/village.jpeg"],
  },
  {
    name: "store",
    "num of buttons": 3,
    "button text": ["Buy Item", "Sell Weapon", "Return"],
    "button functions": [buyItem, sellItem, goTown],
    text:
      ">You step into the cozy little shop, the scent of fresh fish and polished gear filling the air. Shelves weapons, and trinkets glisten under the lantern light." +
      "\n>The shopkeeper, a stout puffin with a monocle, greets you with a nod." +
      '\n>"Looking to stock up before your big battle? I\'ve got just the thing for a determined penguin like you!"',
    "background image": ["./backgrounds/maplestory/tavern.jpg"],
  },
  {
    name: "buy menu",
    "num of buttons": 4,
    "button text": [
      "Look at Weapons",
      "Buy Bread (2 fish)",
      "Buy Glowing Fish (4 fish)",
      "Return",
    ],
    "button functions": [buyWeapon, buyBread, buyGlowFish, goStore],
    text:
      ">You scan the store’s shelves, stocked with useful supplies for a penguin preparing for battle. The shopkeeper flaps over, eager to make a sale." +
      '\n>"Everything here will help you on your journey. What’ll it be?"',
    "background image": ["./backgrounds/maplestory/tavern.jpg"],
  },
  {
    name: "stats menu",
    "num of buttons": 1,
    "button text": ["Return"],
    "button functions": [goTown],
    text: ">Here are your current stats:",
    "background image": ["./backgrounds/maplestory/retro.jpg"],
  },
];

/* transport screen function*/
function update(location) {
  //first we change the background
  backgroundImage.src = location["background image"];

  //first we hide every button
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.style.display = "none";
  }

  // then we show only the buttons needed for the current location
  for (let i = 0; i < location["num of buttons"]; i++) {
    let current_button = buttons[i];
    current_button.style.display = "inline-block";
    current_button.innerText = location["button text"][i];
    current_button.onclick = location["button functions"][i];
  }

  text.innerText = location.text;
}

/* button functions*/
function goStore() {
  update(locations[1]);
}

function goCave() {
  // ...existing code...
}

function goInfirmary() {
  // ...existing code...
}

function goLodge() {
  // ...existing code...
}

function goCombatTrial() {
  // ...existing code...
}

function goStats() {
  update(locations[3]);
  text.innerText += "\n>Total fish earned: " + totalStats["totalFish"];
  text.innerText += "\n>Total XP earned: " + totalStats["totalXP"];
  text.innerText += "\n>Current Equipment: " + totalStats["current equipment"];
  text.innerText +=
    "\n>Total " + " enemy 1 " + "killed: " + totalStats["total enemy1 killed"];
  text.innerText +=
    "\n>Total " + " enemy 2 " + "killed: " + totalStats["total enemy2 killed"];
  text.innerText +=
    "\n>Total " + " enemy 3 " + "killed: " + totalStats["total enemy3 killed"];
}

function goTown() {
  update(locations[0]);
}

function buyItem() {
  update(locations[2]);
}

function sellItem() {}

function buyWeapon() {}

function buyBread() {}

function buyGlowFish() {}

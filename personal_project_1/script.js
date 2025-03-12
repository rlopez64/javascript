/* variables */
let xp = 0;
let currentClass = 0;

let health = 100;
let fish = 15;

//weapons
let currentWeapon = 0;
let inventory = [
  {
    name: "Pebble",
    power: 2,
    cost: 0,
    description:
      "A small, smooth stone that fits perfectly in your flipper." +
      "It’s not much, but with enough determination (or a good throw), it might just leave a mark.",
  },
];
let storeInventory = [
  {
    name: "Driftwood Club",
    power: 4,
    cost: 5,
    description:
      "A sturdy piece of driftwood. Not fancy, but it gets the job done.",
  },
  {
    name: "Icicle Dagger",
    power: 8,
    cost: 10,
    description: "A lightweight dagger with a chilling edge. Fast but fragile.",
  },
];

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

/* list of all weapons*/
const weapons_available = [
  {
    name: "Driftwood Club",
    power: 2,
    cost: 5,
    description:
      "A sturdy piece of driftwood. Not fancy, but it gets the job done.",
  },
];

/* Connecting the changing text*/
//personal stats
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const classText = document.querySelector("#classText");
const weaponText = document.querySelector("#weaponText");
const healthText = document.querySelector("#healthText");
const fishText = document.querySelector("#fishText");
const dayText = document.querySelector("#dayText");

/* updating personal stats based off variables */
fishText.innerText = fish;

//monster stats
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealth = document.querySelector("#monsterHealth");

/* initializing the buttons*/
button1.onclick = enterTown;

/* total stats */
const totalStats = {
  totalFish: 8,
  totalXP: 0,
  "total enemy1 killed": 0,
  "total enemy2 killed": 0,
  "total enemy3 killed": 0,
  "total enemy4 killed": 0,
  "total enemy5 killed": 0,
};

/* different locations taken based on button */
const locations = [
  {
    name: "go to town square",
    "num of buttons": 3,
    "button text": ["Go to Store", "Go to cave", "Check Status"],
    "button functions": [goStore, goCave, goStats],
    text:
      ">You waddle into the bustling heart of town, where penguins of all kinds gather. " +
      "\n>A faint chill lingers in the air, but the warmth of lively chatter and flickering lanterns makes it feel welcoming",
    "background image": ["./backgrounds/maplestory/village.jpeg"],
  },
  {
    name: "town square",
    "num of buttons": 3,
    "button text": ["Go to Store", "Go to cave", "Check Status"],
    "button functions": [goStore, goCave, goStats],
    text: ">It's daytime. You find yourself at the town square, what will you do?",
    "background image": ["./backgrounds/maplestory/village.jpeg"],
  },
  {
    name: "store",
    "num of buttons": 3,
    "button text": ["Buy Item", "Sell Weapon", "Exit Store"],
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
    name: "weapons menu",
    "num of buttons": 3,
    "button text": ["Driftwood Club", "Icicle Dagger", "Return"],
    "button functions": [buyweapon1, buyweapon2, buyItem],
    text:
      ">The shopkeeper waddles over to a sturdy wooden rack, displaying an assortment of finely crafted weapons. " +
      '\n>"Ah, looking to pack a punch, are we? Choose wisely—your next battle may depend on it!"' +
      "\n\n[Available Weapons]",
    "background image": ["./backgrounds/maplestory/smithery.jpeg"],
  },
  {
    name: "stats menu",
    "num of buttons": 2,
    "button text": ["Return", "Change Equipment"],
    "button functions": [goTown, changeEquipment],
    text: ">Here are your current stats:",
    "background image": ["./backgrounds/maplestory/retro.jpg"],
  },
  {
    name: "equipment menu",
    "num of buttons": 4,
    "button text": ["<---", "Select", "--->", "Return"],
    "button functions": [left, select, right, goStats],
    text: "",
    "background image": ["./backgrounds/maplestory/retro2.jpg"],
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
  update(locations[2]);
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
  update(locations[5]);
  text.innerText += "\n>Total fish earned: " + totalStats["totalFish"];
  text.innerText += "\n>Total XP earned: " + totalStats["totalXP"];
  text.innerText +=
    "\n>Total " + " enemy 1 " + "killed: " + totalStats["total enemy1 killed"];
  text.innerText +=
    "\n>Total " + " enemy 2 " + "killed: " + totalStats["total enemy2 killed"];
  text.innerText +=
    "\n>Total " + " enemy 3 " + "killed: " + totalStats["total enemy3 killed"];
}

function enterTown() {
  update(locations[0]);
}

function goTown() {
  update(locations[1]);
}

function buyItem() {
  update(locations[3]);
}

function sellItem() {}

/* function for weapons menu*/
function buyWeapon() {
  update(locations[4]);
  displayWeapons();
}

/* function to display every weapon available*/
function displayWeapons() {
  for (let i = 0; i < storeInventory.length; i++) {
    text.innerText +=
      "\n>" +
      storeInventory[i].name +
      "(Cost: " +
      storeInventory[i].cost +
      " Gold" +
      ", Damage: " +
      storeInventory[i].power +
      ")" +
      " - " +
      storeInventory[i].description;
  }
}

function buyBread() {}

function buyGlowFish() {}

function buyweapon1() {
  let weapon1 = storeInventory[0];
  buyingWeapon(weapon1);
}

function buyweapon2() {
  let weapon2 = storeInventory[1];
  buyingWeapon(weapon2);
}

function buyingWeapon(weapon) {
  const duplicate = inventory.includes(weapon);
  console.log(duplicate);
  // inventory.some((weapon) => storeInventory.includes(weapon));
  if (duplicate === false) {
    if (fish >= weapon.cost) {
      inventory.push(weapon);
      currentWeapon++;
      fish -= weapon.cost;
      fishText.innerText = fish;
      weaponText.innerText = weapon.name;
      text.innerText += '\n"Thank you for your purchase."';
      console.log(currentWeapon);
    } else {
      text.innerText += '\n>"Man your bum ahh too broke for that"';
    }
  } else {
    text.innerText += '\n"You already have this weapon in your inventory"';
  }
}

function changeEquipment() {
  update(locations[6]);
  /* displays current equipment*/
  text.innerText +=
    ">Current Equipment: " +
    inventory[currentWeapon].name +
    "(Damage: " +
    inventory[currentWeapon].power +
    ")" +
    "\n(" +
    inventory[currentWeapon].description +
    ")";
}

function select() {}

function left() {}

function right() {}

"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

let canvasBreedte = context.canvas.width;
let canvasHoogte = context.canvas.height;

// afbeelding totebag
let toteAfbeelding = new Image();
toteAfbeelding.src = "../../afbeeldingen/totebag.jpg";

// totebag scalen
let schaalFactor = 0.5;

// wacht totdat de afbeelding is geladen en bepaal de afmetingen
toteAfbeelding.onload = function () {
  context.canvas.width = canvasBreedte;
  context.canvas.height = canvasHoogte;

  // bereken de afmetingen van de totebag op basis van de schaalfactor
  let toteBreedte = toteAfbeelding.width * schaalFactor;
  let toteHoogte = toteAfbeelding.height * schaalFactor;

  // positie van de totebag zodat het gecentreerd is
  let toteX = (canvasBreedte - toteBreedte) / 2;
  let toteY = (canvasHoogte - toteHoogte) / 2;

  // teken de afbeelding van de totebag gecentreerd en op de juiste schaal
  context.drawImage(toteAfbeelding, toteX, toteY, toteBreedte, toteHoogte);
};

// instellen kleur
let basisKleur = Utils.randomNumber(0, 360);
let verzadiging = 70;
let lichtheid = 50;

// marges instellen voor ontwerpgebied binnen de totebag
let ontwerpStartX = toteX + toteBreedte * 0.3; // 30% marge van links
let ontwerpEindX = toteX + toteBreedte * 0.7; // 30% marge van rechts
let ontwerpStartY = toteY + toteHoogte * 0.5; // 50% marge van de bovenkant
let ontwerpEindY = toteY + toteHoogte * 0.8; // 20% marge van de onderkant

/**
 * teken een cirkel met opgegeven parameters
 * @param {number} x
 * @param {number} y
 * @param {number} straal
 * @param {string} kleur
 */
function tekenCirkel(x, y, straal, kleur) {
  context.fillStyle = kleur;
  context.strokeStyle = "black";
  Utils.fillAndStrokeCircle(x, y, straal);
}

/**
 * teken een vierkant met opgegeven parameters
 * @param {number} x
 * @param {number} y
 * @param {number} grootte
 * @param {string} kleur
 */
function tekenVierkant(x, y, grootte, kleur) {
  context.fillStyle = kleur;
  context.strokeStyle = "black";
  context.fillRect(x, y, grootte, grootte);
  context.strokeRect(x, y, grootte, grootte);
}

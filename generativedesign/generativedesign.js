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

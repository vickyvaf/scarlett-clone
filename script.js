//BODY CARE
const bodyLotion = document.getElementById("body-lotion");
const bodyScrub = document.getElementById("body-scrub");
const bodyShower = document.getElementById("body-shower");
//FACE CARE
const faceMask = document.getElementById("face-mask");
const facialCream = document.getElementById("facial-cream");
const facialEssenceToner = document.getElementById("facial-essence-toner");
const facialSerum = document.getElementById("facial-serum");
const facialWash = document.getElementById("facial-wash");
//HAIR CARE
const shampoo = document.getElementById("shampoo");

//BODY CARE DISPLAY
const bodyLotionDisplay = document.getElementById("body-lotion-display");
const bodyScrubDisplay = document.getElementById("body-scrub-display");
const bodyShowerDisplay = document.getElementById("body-shower-display");
//FACE CARE DISPLAY
const faceMaskDisplay = document.getElementById("face-mask-display");
const facialCreamDisplay = document.getElementById("facial-cream-display");
const facialEssenceTonerDisplay = document.getElementById(
  "facial-essence-toner-display"
);
const facialSerumDisplay = document.getElementById("facial-serum-display");
const facialWashDisplay = document.getElementById("facial-wash-display");
//HAIR CARE DISPLAY
const shampooDisplay = document.getElementById("shampoo-display");

bodyScrubDisplay.style.display = "none";
bodyShowerDisplay.style.display = "none";

faceMaskDisplay.style.display = "none";
facialCreamDisplay.style.display = "none";
facialEssenceTonerDisplay.style.display = "none";
facialSerumDisplay.style.display = "none";
facialWashDisplay.style.display = "none";

shampooDisplay.style.display = "none";

//BODY CARE
bodyLotion.addEventListener("click", function () {
  bodyLotionDisplay.style.display = "flex";
  bodyScrubDisplay.style.display = "none";
  bodyShowerDisplay.style.display = "none";
  //
  faceMaskDisplay.style.display = "none";
  facialCreamDisplay.style.display = "none";
  facialEssenceTonerDisplay.style.display = "none";
  facialSerumDisplay.style.display = "none";
  facialWashDisplay.style.display = "none";
  //
  shampooDisplay.style.display = "none";
});

bodyScrub.addEventListener("click", function () {
  bodyLotionDisplay.style.display = "none";
  bodyScrubDisplay.style.display = "flex";
  bodyShowerDisplay.style.display = "none";
  //
  faceMaskDisplay.style.display = "none";
  facialCreamDisplay.style.display = "none";
  facialEssenceTonerDisplay.style.display = "none";
  facialSerumDisplay.style.display = "none";
  facialWashDisplay.style.display = "none";
  //
  shampooDisplay.style.display = "none";
});

bodyShower.addEventListener("click", function () {
  bodyScrubDisplay.style.display = "none";
  bodyLotionDisplay.style.display = "none";
  bodyShowerDisplay.style.display = "flex";
  //
  faceMaskDisplay.style.display = "none";
  facialCreamDisplay.style.display = "none";
  facialEssenceTonerDisplay.style.display = "none";
  facialSerumDisplay.style.display = "none";
  facialWashDisplay.style.display = "none";
  //
  shampooDisplay.style.display = "none";
});

//FACE CARE
faceMask.addEventListener("click", function () {
  bodyLotionDisplay.style.display = "none";
  bodyScrubDisplay.style.display = "none";
  bodyShowerDisplay.style.display = "none";
  //
  faceMaskDisplay.style.display = "flex";
  facialCreamDisplay.style.display = "none";
  facialEssenceTonerDisplay.style.display = "none";
  facialSerumDisplay.style.display = "none";
  facialWashDisplay.style.display = "none";
  //
  shampooDisplay.style.display = "none";
});

facialCream.addEventListener("click", function () {
  bodyLotionDisplay.style.display = "none";
  bodyScrubDisplay.style.display = "none";
  bodyShowerDisplay.style.display = "none";
  //
  faceMaskDisplay.style.display = "none";
  facialCreamDisplay.style.display = "flex";
  facialEssenceTonerDisplay.style.display = "none";
  facialSerumDisplay.style.display = "none";
  facialWashDisplay.style.display = "none";
  //
  shampooDisplay.style.display = "none";
});
facialEssenceToner.addEventListener("click", function () {
  bodyLotionDisplay.style.display = "none";
  bodyScrubDisplay.style.display = "none";
  bodyShowerDisplay.style.display = "none";
  //
  faceMaskDisplay.style.display = "none";
  facialCreamDisplay.style.display = "none";
  facialEssenceTonerDisplay.style.display = "flex";
  facialSerumDisplay.style.display = "none";
  facialWashDisplay.style.display = "none";
  //
  shampooDisplay.style.display = "none";
});

facialSerum.addEventListener("click", function () {
  bodyLotionDisplay.style.display = "none";
  bodyScrubDisplay.style.display = "none";
  bodyShowerDisplay.style.display = "none";
  //
  faceMaskDisplay.style.display = "none";
  facialCreamDisplay.style.display = "none";
  facialEssenceTonerDisplay.style.display = "none";
  facialSerumDisplay.style.display = "flex";
  facialWashDisplay.style.display = "none";
  //
  shampooDisplay.style.display = "none";
});

facialWash.addEventListener("click", function () {
  bodyLotionDisplay.style.display = "none";
  bodyScrubDisplay.style.display = "none";
  bodyShowerDisplay.style.display = "none";
  //
  faceMaskDisplay.style.display = "none";
  facialCreamDisplay.style.display = "none";
  facialEssenceTonerDisplay.style.display = "none";
  facialSerumDisplay.style.display = "none";
  facialWashDisplay.style.display = "flex";
  //
  shampooDisplay.style.display = "none";
});

//HAIR CARE
shampoo.addEventListener("click", function () {
  bodyLotionDisplay.style.display = "none";
  bodyScrubDisplay.style.display = "none";
  bodyShowerDisplay.style.display = "none";
  //
  faceMaskDisplay.style.display = "none";
  facialCreamDisplay.style.display = "none";
  facialEssenceTonerDisplay.style.display = "none";
  facialSerumDisplay.style.display = "none";
  facialWashDisplay.style.display = "none";
  //
  shampooDisplay.style.display = "flex";
});

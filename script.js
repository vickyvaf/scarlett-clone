document.getElementById("year").innerHTML = new Date().getFullYear(year);

const footer = document.getElementById("footer");
footer.style.position = "absolute";
footer.style.bottom = "-900px";

function wa() {
  const message = "Halo Admin, saya mau beli";
  open(`https://wa.me/+6282340182744?text=${message}`, "_blank");
}

function cart() {
  alert(
    "Mohon maaf 🙏, fitur keranjang masih dalam tahap pengembangan. Untuk pertanyaan & pembelian via WhatsApp ya kak 😁"
  );
}

function user() {
  alert(
    "Mohon maaf 🙏, fitur pengguna masih dalam tahap pengembangan. Untuk pertanyaan & pembelian via WhatsApp ya kak 😁"
  );
}

function buy(product_name, product_price) {
  const message = "Halo Admin, saya mau beli";
  open(
    `https://wa.me/+6282340182744?text=${message} ${product_name} - ${product_price}`,
    "_blank"
  );
}

function contact(contact_name) {
  open(contact_name, "_blank");
}

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

//SIDE BAR
const barsIcon = document.getElementById("bars-icon");
const barsIconX = document.getElementById("bars-icon-x");
const category = document.getElementById("category");

barsIconX.style.display = "none";

barsIcon.addEventListener("click", function () {
  category.style.transform = "translateX(0)";
  barsIcon.style.transform = "translateX(-9999px)";
  barsIconX.style.display = "flex";
});

barsIconX.addEventListener("click", function () {
  category.style.transform = "translateX(-300px)";
  barsIcon.style.transform = "translateX(0)";
  barsIconX.style.display = "none";
});

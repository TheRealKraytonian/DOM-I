const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// const newPara = document.createElement("p"); //
// newPara.innerText = "Hello how are you!";

// const nav = document.querySelector("nav");
// nav.prepend(newPara);

const nav = document.querySelector("nav");
nav.prepend("Lambda");
nav.append("Whos Your Daddy");

// select all the anchors under nav
const navAnchors = document.querySelectorAll("nav a");

// Change all the elements using data from the siteContent
navAnchors.forEach(
  (anchor, index) =>
    (anchor.innerText = siteContent.nav[`nav-item-${index + 1}`])
);

const h1 = document.querySelector("h1");
const newH1 = document.querySelectorAll("h1");
h1.append(siteContent["cta"]["h1"]);
h1.append(newH1);

const button = document.querySelector("button");

button.append(siteContent.cta["button"]);

const img = document.getElementById("cta-img");
img.setAttribute("src", siteContent["cta"]["img-src"]);

// Headings
const hOne = document.querySelectorAll("h4")[0];
hOne.append(siteContent["main-content"]["features-h4"]);

const hTwo = document.querySelectorAll("h4")[1];
hTwo.append(siteContent["main-content"]["about-h4"]);

const hThree = document.querySelectorAll("h4")[2];
hThree.append(siteContent["main-content"]["services-h4"]);

const hFour = document.querySelectorAll("h4")[3];
hFour.append(siteContent["main-content"]["product-h4"]);

const hFive = document.querySelectorAll("h4")[4];
hFive.append(siteContent["main-content"]["vision-h4"]);

// paragraphs
const pOne = document.querySelectorAll("p")[0];
pOne.append(siteContent["main-content"]["features-content"]);

const pTwo = document.querySelectorAll("p")[1];
pTwo.append(siteContent["main-content"]["about-content"]);

const pThree = document.querySelectorAll("p")[2];
pThree.append(siteContent["main-content"]["services-content"]);

const pFour = document.querySelectorAll("p")[3];
pFour.append(siteContent["main-content"]["product-content"]);

const pFive = document.querySelectorAll("p")[4];
pFive.append(siteContent["main-content"]["vision-content"]);

// middle img
const midImg = document.querySelectorAll("img")[2];
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// contact
const contactHeader = document.querySelector(".contact h4");
contactHeader.append(siteContent["contact"]["contact-h4"]);

const addy = document.querySelectorAll(".contact p")[0];
addy.append(siteContent["contact"]["address"]);

const number = document.querySelectorAll(".contact p")[1];
number.append(siteContent["contact"]["phone"]);

const email = document.querySelectorAll(".contact p")[2];
email.append(siteContent["contact"]["email"]);

// footer
const footer = document.querySelector("footer p");
footer.append(siteContent["footer"]["copyright"]);

let a = document.querySelectorAll("a");
nav.style.color = "green";

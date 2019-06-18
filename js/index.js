const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
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
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Navigation

const navLinks = document.querySelectorAll("nav a"); //for some reason this needs to be done first and not after the nav selector

const nav = document.querySelector("nav");

const cats = document.createElement("a");
nav.appendChild(cats);
cats.textContent = "Cats";

const dogs = document.createElement("a"); //specify what kind of element you're creating
nav.prepend(dogs);
dogs.textContent = "Dogs";

navLinks.forEach((link, index) => {
  //parameter keeps track of where you're at, setting index as parameter to parse through links
  index += 1;
  link.textContent = siteContent["nav"]["nav-item-" + index];
});

const updatedNavLinks = document.querySelectorAll("nav a");  //updates the query selector to include the new nav items added

updatedNavLinks.forEach(link => {
  link.setAttribute("style", "color: green");
});


// <-------- End Navigation

//CTA Section
const ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

const ctah1 = document.querySelector(".cta h1");
ctah1.innerHTML = siteContent["cta"]["h1"].split(" ").join("<br>");

//textcontent instead of innerHTML doesn't work
//beware innerHTML is not great for security
// "\n" also does not work 

const ctabtn = document.querySelector(".cta button");
ctabtn.textContent = siteContent["cta"]["button"];



// <-------- End CTA

// Main Content
const midImg = document.querySelector("#middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// const featuresH4 = document.querySelector(".top-content .text-content h4");
// featuresH4.textContent = siteContent["main-content"]["features-h4"];  //how to target individually

const mainH4 = document.querySelectorAll(".main-content h4"); //get all main content h4's

const mainP = document.querySelectorAll(".main-content p"); //get all main content paragraphs

for (let i = 0; i < 5; i++) {
  let section = "";
  switch (i) {
    case 0:
      section = "features";
      break;
    case 1:
      section = "about";
      break;
    case 2:
      section = "services";
      break;
    case 3:
      section = "product";
      break;
    case 4:
      section = "vision";
      break;
  }

  mainH4[i].textContent = siteContent["main-content"][`${section}-h4`];
  mainP[i].textContent = siteContent["main-content"][`${section}-content`];
}

// <-------- End Main Content

// Contact 

const btmh4 = document.querySelector(".contact h4");
btmh4.textContent = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll(".contact p");


for (let i = 0; i < 3; i++) {
  let section = "";
  switch (i) {
    case 0:
      section = "address";
      break;
    case 1:
      section = "phone";
      break;
    case 2:
      section = "email";
      break;
  }

  contactP[i].textContent = siteContent["contact"][`${section}`];
};

// <-------- End Contact

// Footer

const copyright = document.querySelector("footer p");
copyright.textContent = siteContent["footer"]["copyright"];

// <-------- Footer
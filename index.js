// SIDBAR

const menuItems = document.querySelectorAll(".menu-item");

// MESSAGES
const messageNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");


// THEME

const theme = document.querySelector("#theme");
const themeModel = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");



// Remove Active Class from menu items

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    })
}

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        if (item.id !== "notifications") {
            document.querySelector(".notifications-popup").style.display = "none";
        } else {
            document.querySelector(".notifications-popup").style.display = "block";
            document.querySelector("#notifications .notification-count").style.display = "none"
        }
    })
})

// ----------------------- MESSAGES -----------------------------

// Search Chat

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector("h5").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = "flex";
        }
        else {
            user.style.display = "none";
        }
    })
}
messageSearch.addEventListener("keyup", searchMessage);


// Highlight message chat when clicked of messages

messageNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messageNotification.querySelector(".notification-count").style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
})

// THEME CUSTOMIZATION

//Opens Card
const openThemeModel = () => {
    themeModel.style.display = "grid"
}

// Close Card
const closeThemeModel = (e) => {
    if (e.target.classList.contains("customize-theme")) {
        themeModel.style.display = "none"
    }
}
themeModel.addEventListener("click", closeThemeModel);
theme.addEventListener("click", openThemeModel);

// FONTS

// remove active class span or font size selector

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}

fontSizes.forEach(size => {

    size.addEventListener("click", () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle("active");

        if (size.classList.contains("font-size-1")) {
            fontSize = "10px";
            root.style.setProperty("----sticky-top-left", "5.4rem");
            root.style.setProperty("----sticky-top-right", "5.4rem");
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "13px";
            root.style.setProperty("----sticky-top-left", "5.4rem");
            root.style.setProperty("----sticky-top-right", "-7rem");
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "16px";
            root.style.setProperty("----sticky-top-left", "-2rem");
            root.style.setProperty("----sticky-top-right", "-17rem");
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "19px";
            root.style.setProperty("----sticky-top-left", "-5rem");
            root.style.setProperty("----sticky-top-right", "-25rem");
        } else if (size.classList.contains("font-size-5")) {
            fontSize = "22px";
            root.style.setProperty("----sticky-top-left", "-12rem");
            root.style.setProperty("----sticky-top-right", "-35rem");
        }
        // change font size of the root html element
        document.querySelector("html").style.fontSize = fontSize
    })
})

// Remove active class from colors

const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove("active");
    })
}
// Change Primary Colors

colorPalette.forEach(color => {
    color.addEventListener("click", () => {
        // Remove active class from colors

        changeActiveColorClass();
        let primaryHue;

        if (color.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52;
        } else if (color.classList.contains("color-3")) {
            primaryHue = 352;
        } else if (color.classList.contains("color-4")) {
            primaryHue = 152;
        } else if (color.classList.contains("color-5")) {
            primaryHue = 202;
        }
        color.classList.add("active");
        root.style.setProperty("--primary-color-hue", primaryHue)
    })
})


// THEME BACKGROUND

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Changes Background color

const changeBG = () => {
    root.style.styleProperty("--light-color-lightness", lightColorLightness);
    root.style.styleProperty("--white-color-lightness", whiteColorLightness);
    root.style.styleProperty("--dark-color-lightness", darkColorLightness);
}

bg1.addEventListener("click", () => {
    // Add Active Class
    bg1.classList.add("active");
    // remove active class from the others
    bg2.classList.remove("active");
    bg3.classList.remove("active");
    // remove customized changes from local storage
    window.location.reload();
})

bg2.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    // Add Active Class
    bg2.classList.add("active");
    // remove active class from the others
    bg1.classList.remove("active");
    bg3.classList.remove("active");
    changeBG()
})

bg3.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";

    // Add Active Class
    bg3.classList.add("active");
    // remove active class from the others
    bg1.classList.remove("active");
    bg2.classList.remove("active");
    changeBG();
})
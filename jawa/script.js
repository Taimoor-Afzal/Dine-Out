

//------------- Toggle navbar ----------

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

//-----close navbar when clicking on nav item ----------

document.addEventListener("click", function (e) {
    if (e.target.closest(".nav-items")) {
        toggleNav();
    }
})

//------------- Sticky header ----------

window.addEventListener("scroll", function () {
    if (this.scrollY > 150) {
        document.querySelector(".header").classList.add("sticky");
    }
    else {
        document.querySelector(".header").classList.remove("sticky");
    }
});

//------------- Menu Tabs ----------

const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function (e) {
    if (e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")) {
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
    }
});



/* =====================================================
   ENSLEY RAY FIRST BIRTHDAY
   SCRIPT.JS
===================================================== */

const RSVP_URL =
"https://script.google.com/macros/s/AKfycbxfsAwuC3AdGPlNROEocxFGZNQM819WMaWlr-RpE4373kWyO-hfOIh1cBpTYvLhv3s/exec";

/* ELEMENTS */
const openingScreen = document.getElementById("openingScreen");
const mainInvitation = document.getElementById("mainInvitation");
const tapToOpen = document.getElementById("tapToOpen");
const startButton = document.getElementById("startButton");
const musicButton = document.getElementById("musicButton");
const birthdayMusic = document.getElementById("birthdayMusic");

let invitationOpened = false;

/* =====================================================
   OPEN INVITATION
===================================================== */

function openInvitation(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    if (invitationOpened) return;

    if (!openingScreen || !mainInvitation) {
        console.error("Opening screen or main invitation element is missing.");
        return;
    }

    invitationOpened = true;

    openingScreen.classList.add("opened");
    mainInvitation.classList.add("show");

    playMusic();

    setTimeout(() => {
        openingScreen.style.display = "none";
    }, 950);
}

/* Direct button event */
if (tapToOpen) {
    tapToOpen.addEventListener("click", openInvitation);
}

/* Backup event delegation */
document.addEventListener("click", function(event) {
    const button = event.target.closest("#tapToOpen");

    if (button) {
        openInvitation(event);
    }
});

/* =====================================================
   START BUTTON
===================================================== */

if (startButton) {
    startButton.addEventListener("click", () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    });
}

/* =====================================================
   MUSIC
===================================================== */

function playMusic() {
    if (!birthdayMusic) return;

    birthdayMusic.volume = 0.6;

    const playPromise = birthdayMusic.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            if (musicButton) {
                musicButton.textContent = "PAUSE MUSIC";
            }
        }).catch(error => {
            console.warn("Music playback was blocked:", error);

            if (musicButton) {
                musicButton.textContent = "PLAY MUSIC";
            }
        });
    }
}

function pauseMusic() {
    if (!birthdayMusic) return;

    birthdayMusic.pause();

    if (musicButton) {
        musicButton.textContent = "PLAY MUSIC";
    }
}

if (musicButton) {
    musicButton.addEventListener("click", () => {
        if (!birthdayMusic) return;

        if (birthdayMusic.paused) {
            playMusic();
        } else {
            pauseMusic();
        }
    });
}

/* =====================================================
   COUNTDOWN
===================================================== */

const birthdayDate = new Date("December 5, 2026 20:00:00").getTime();

function updateCountdown() {
    const now = Date.now();
    const distance = birthdayDate - now;

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (distance <= 0) {
        if (daysElement) daysElement.textContent = "0";
        if (hoursElement) hoursElement.textContent = "00";
        if (minutesElement) minutesElement.textContent = "00";
        if (secondsElement) secondsElement.textContent = "00";
        return;
    }

    const days = Math.floor(distance / 86400000);
    const hours = Math.floor((distance % 86400000) / 3600000);
    const minutes = Math.floor((distance % 3600000) / 60000);
    const seconds = Math.floor((distance % 60000) / 1000);

    if (daysElement) daysElement.textContent = days;
    if (hoursElement) hoursElement.textContent = String(hours).padStart(2, "0");
    if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, "0");
    if (secondsElement) secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* =====================================================
   SCROLL REVEAL
===================================================== */

const animatedElements = document.querySelectorAll(
    ".event-card, .gift-card, .reminder-item, .section-title, .welcome-content"
);

function revealOnScroll() {
    animatedElements.forEach(element => {
        const rect = element.getBoundingClientRect();

        if (rect.top < window.innerHeight - 80) {
            element.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll, { passive: true });
window.addEventListener("load", revealOnScroll);
revealOnScroll();

/* =====================================================
   RSVP
===================================================== */

const openRsvp = document.getElementById("openRsvp");
const rsvpForm = document.getElementById("rsvpForm");
const submitRsvp = document.getElementById("submitRsvp");
const guestName = document.getElementById("guestName");
const attendance = document.getElementById("attendance");
const guestCount = document.getElementById("guestCount");

if (openRsvp && rsvpForm) {
    openRsvp.addEventListener("click", () => {
        rsvpForm.classList.toggle("show");

        if (rsvpForm.classList.contains("show")) {
            setTimeout(() => {
                rsvpForm.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }, 100);
        }
    });
}

if (submitRsvp) {
    submitRsvp.addEventListener("click", async () => {
        const name = guestName ? guestName.value.trim() : "";
        const selectedAttendance = attendance ? attendance.value : "";
        const guests = guestCount ? guestCount.value : "1";

        if (!name) {
            alert("Please enter your name.");
            if (guestName) guestName.focus();
            return;
        }

        if (!selectedAttendance) {
            alert("Please select your attendance.");
            if (attendance) attendance.focus();
            return;
        }

        if (!guests || !Number.isInteger(Number(guests)) || Number(guests) < 1) {
            alert("Please enter a valid number of guests.");
            if (guestCount) guestCount.focus();
            return;
        }

        const originalText = submitRsvp.textContent;
        submitRsvp.disabled = true;
        submitRsvp.textContent = "SUBMITTING...";

        const data = {
            name: name,
            attendance: selectedAttendance,
            guests: Number(guests)
        };

        try {
            await fetch(RSVP_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(data)
            });

            alert(
                "Your RSVP request was sent. Thank you, " +
                name + "!"
            );

            if (guestName) guestName.value = "";
            if (attendance) attendance.value = "";
            if (guestCount) guestCount.value = "1";
            if (rsvpForm) rsvpForm.classList.remove("show");

        } catch (error) {
            console.error("RSVP Error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            submitRsvp.disabled = false;
            submitRsvp.textContent = originalText;
        }
    });
}

/* =====================================================
   LITTLE RACER CAROUSEL
===================================================== */

const carousel = document.querySelector(".racer-carousel");
const carouselTrack = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".racer-slide");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
const dots = document.querySelectorAll(".carousel-dot");

let currentSlide = 0;

function updateCarousel() {
    if (!carouselTrack || slides.length === 0) return;

    currentSlide = (currentSlide + slides.length) % slides.length;

    carouselTrack.style.transform =
        `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

function nextSlide() {
    if (slides.length === 0) return;
    currentSlide++;
    updateCarousel();
}

function previousSlide() {
    if (slides.length === 0) return;
    currentSlide--;
    updateCarousel();
}

if (nextButton) {
    nextButton.addEventListener("click", nextSlide);
}

if (prevButton) {
    prevButton.addEventListener("click", previousSlide);
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        if (index < slides.length) {
            currentSlide = index;
            updateCarousel();
        }
    });
});

updateCarousel();

/* =====================================================
   MOBILE SWIPE
===================================================== */

let touchStartX = 0;
let touchEndX = 0;

if (carousel) {
    carousel.addEventListener("touchstart", event => {
        touchStartX = event.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener("touchend", event => {
        touchEndX = event.changedTouches[0].screenX;

        const swipeDistance = touchStartX - touchEndX;

        if (swipeDistance > 50) nextSlide();
        if (swipeDistance < -50) previousSlide();
    }, { passive: true });
}

/* =====================================================
   KEYBOARD NAVIGATION
===================================================== */

document.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") nextSlide();
    if (event.key === "ArrowLeft") previousSlide();
});

/* =====================================================
   PREVENT IMAGE DRAGGING
===================================================== */

document.querySelectorAll("img").forEach(image => {
    image.addEventListener("dragstart", event => {
        event.preventDefault();
    });
});

/* =====================================================
   RSVP ENTER KEY
===================================================== */

if (guestName && attendance) {
    guestName.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            attendance.focus();
        }
    });
}

/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener("load", () => {
    updateCarousel();
    revealOnScroll();
});

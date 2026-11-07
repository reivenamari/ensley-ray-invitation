
/* =====================================================
   ENSLEY RAY - FIRST BIRTHDAY
   COMPLETE JAVASCRIPT
===================================================== */

const RSVP_URL = "https://script.google.com/macros/s/AKfycbxfsAwuC3AdGPlNROEocxFGZNQM819WMaWlr-RpE4373kWyO-hfOIh1cBpTYvLhv3s/exec";

let invitationOpened = false;
let currentSlide = 0;
let musicStarted = false;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* =====================================================
   OPEN INVITATION
===================================================== */

window.openInvitation = function (event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    if (invitationOpened) return;

    const opening = $("#openingScreen");
    const main = $("#mainInvitation");

    if (!opening || !main) {
        console.error("Opening screen or main invitation was not found.");
        return;
    }

    invitationOpened = true;

    main.classList.add("show");
    opening.classList.add("opened");

    startMusic();

    window.setTimeout(() => {
        opening.style.display = "none";
    }, 1000);
};

/* =====================================================
   BACKGROUND MUSIC
===================================================== */

function startMusic() {
    const music = $("#backgroundMusic");

    if (!music) return;

    music.volume = 0.5;

    music.play()
        .then(() => {
            musicStarted = true;
            updateMusicButton();
        })
        .catch((error) => {
            console.log("Music could not start:", error);
        });
}

function updateMusicButton() {
    const music = $("#backgroundMusic");
    const button = $("#musicToggle");

    if (!music || !button) return;

    button.textContent = music.paused ? "🔇" : "🔊";
}

const musicButton = $("#musicToggle");

if (musicButton) {
    musicButton.addEventListener("click", () => {
        const music = $("#backgroundMusic");

        if (!music) return;

        if (music.paused) {
            music.play()
                .then(() => {
                    musicStarted = true;
                    updateMusicButton();
                })
                .catch((error) => console.log(error));
        } else {
            music.pause();
            updateMusicButton();
        }
    });
}

/* =====================================================
   START BUTTON
===================================================== */

const startButton = $("#startButton");

if (startButton) {
    startButton.addEventListener("click", () => {
        const destination = $("#eventDetails");

        if (destination) {
            destination.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
}

/* =====================================================
   COUNTDOWN
===================================================== */

function updateCountdown() {
    const targetDate = new Date("December 5, 2026 20:00:00").getTime();
    const now = Date.now();
    const difference = targetDate - now;

    const days = $("#days");
    const hours = $("#hours");
    const minutes = $("#minutes");
    const seconds = $("#seconds");

    if (!days || !hours || !minutes || !seconds) return;

    if (difference <= 0) {
        days.textContent = "0";
        hours.textContent = "0";
        minutes.textContent = "0";
        seconds.textContent = "0";
        return;
    }

    days.textContent = Math.floor(difference / 86400000);
    hours.textContent = Math.floor((difference / 3600000) % 24);
    minutes.textContent = Math.floor((difference / 60000) % 60);
    seconds.textContent = Math.floor((difference / 1000) % 60);
}

updateCountdown();
window.setInterval(updateCountdown, 1000);

/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealItems = $$(
    ".reveal, .section-title, .event-card, .gift-card, " +
    ".reminder-item, .dress-card, .rsvp-card, " +
    ".hero-content, .closing-content"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealItems.forEach((item) => {
        item.classList.add("reveal");
        observer.observe(item);
    });
} else {
    revealItems.forEach((item) => item.classList.add("active"));
}

/* =====================================================
   GALLERY CAROUSEL
===================================================== */

const galleryTrack = $(".gallery-track");
const gallerySlides = $$(".gallery-slide");
const previousButton = $("#prevSlide");
const nextButton = $("#nextSlide");
const galleryDots = $$(".gallery-dot");

function showSlide(index) {
    if (!galleryTrack || gallerySlides.length === 0) return;

    if (index < 0) {
        currentSlide = gallerySlides.length - 1;
    } else if (index >= gallerySlides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    galleryTrack.style.transform =
        `translateX(-${currentSlide * 100}%)`;

    gallerySlides.forEach((slide, position) => {
        slide.classList.toggle("active", position === currentSlide);
    });

    galleryDots.forEach((dot, position) => {
        dot.classList.toggle("active", position === currentSlide);
    });
}

if (previousButton) {
    previousButton.addEventListener("click", () => {
        showSlide(currentSlide - 1);
    });
}

if (nextButton) {
    nextButton.addEventListener("click", () => {
        showSlide(currentSlide + 1);
    });
}

galleryDots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
});

/* =====================================================
   TOUCH SWIPE
===================================================== */

let touchStartX = 0;

if (galleryTrack) {
    galleryTrack.addEventListener("touchstart", (event) => {
        touchStartX = event.changedTouches[0].screenX;
    }, { passive: true });

    galleryTrack.addEventListener("touchend", (event) => {
        const touchEndX = event.changedTouches[0].screenX;
        const distance = touchStartX - touchEndX;

        if (distance > 50) showSlide(currentSlide + 1);
        if (distance < -50) showSlide(currentSlide - 1);
    }, { passive: true });
}

showSlide(0);

/* =====================================================
   KEYBOARD GALLERY
===================================================== */

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        showSlide(currentSlide + 1);
    }

    if (event.key === "ArrowLeft") {
        showSlide(currentSlide - 1);
    }
});

/* =====================================================
   RSVP FORM
===================================================== */

const rsvpForm = $("#rsvpForm");
const rsvpMessage = $("#rsvpMessage");

if (rsvpForm) {
    rsvpForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const submitButton = rsvpForm.querySelector(
            'button[type="submit"]'
        );

        const formData = new FormData(rsvpForm);

        const name = formData.get("name");
        const attendance = formData.get("attendance");

        if (!name || !attendance) {
            if (rsvpMessage) {
                rsvpMessage.textContent =
                    "Please enter your name and attendance.";
            }
            return;
        }

        const data = new URLSearchParams();

        data.append("name", name);
        data.append("attendance", attendance);
        data.append("guests", formData.get("guests") || "1");
        data.append("message", formData.get("message") || "");

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "SENDING...";
        }

        if (rsvpMessage) {
            rsvpMessage.textContent = "Submitting your RSVP...";
        }

        try {
            await fetch(RSVP_URL, {
                method: "POST",
                mode: "no-cors",
                body: data
            });

            if (rsvpMessage) {
                rsvpMessage.textContent =
                    "Thank you! Your RSVP has been submitted.";
            }

            rsvpForm.reset();

        } catch (error) {
            console.error("RSVP error:", error);

            if (rsvpMessage) {
                rsvpMessage.textContent =
                    "Unable to submit. Please try again.";
            }
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = "SUBMIT RSVP";
            }
        }
    });
}

/* =====================================================
   ANIMATION DELAYS FOR DECORATIONS
===================================================== */

$$(".emoji, .racing-emoji, .floating-emoji, .decoration").forEach(
    (element, index) => {
        element.style.animationDelay = `${(index % 6) * 0.25}s`;
    }
);

console.log("Ensley Ray invitation loaded successfully.");

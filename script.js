
/* =====================================================
   ENSLEY RAY - FIRST BIRTHDAY
   COMPLETE SCRIPT.JS
===================================================== */

const RSVP_URL =
"https://script.google.com/macros/s/AKfycbxfsAwuC3AdGPlNROEocxFGZNQM819WMaWlr-RpE4373kWyO-hfOIh1cBpTYvLhv3s/exec";

/* =====================================================
   ELEMENTS
===================================================== */

const openingScreen = document.getElementById("openingScreen");
const mainInvitation = document.getElementById("mainInvitation");
const tapToOpen = document.getElementById("tapToOpen");

const backgroundMusic = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");

let invitationOpened = false;
let musicStarted = false;

/* =====================================================
   OPEN INVITATION
   IMPORTANT: This function is global for inline onclick
===================================================== */

window.openInvitation = function (event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    if (invitationOpened) return;

    invitationOpened = true;

    if (openingScreen) {
        openingScreen.classList.add("opened");
    }

    if (mainInvitation) {
        mainInvitation.classList.add("show");
    }

    startMusic();

    setTimeout(function () {
        if (openingScreen) {
            openingScreen.style.display = "none";
        }
    }, 1000);
};

/* =====================================================
   BACKGROUND MUSIC
===================================================== */

function startMusic() {
    if (!backgroundMusic || musicStarted) return;

    backgroundMusic.volume = 0.5;

    const playPromise = backgroundMusic.play();

    if (playPromise !== undefined) {
        playPromise
            .then(function () {
                musicStarted = true;
                updateMusicButton();
            })
            .catch(function (error) {
                console.log("Music playback blocked:", error);
            });
    }
}

function updateMusicButton() {
    if (!musicToggle || !backgroundMusic) return;

    musicToggle.textContent = backgroundMusic.paused ? "🔇" : "🔊";
}

if (musicToggle && backgroundMusic) {
    musicToggle.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (backgroundMusic.paused) {
            backgroundMusic.play()
                .then(function () {
                    musicStarted = true;
                    updateMusicButton();
                })
                .catch(function (error) {
                    console.log("Music playback error:", error);
                });
        } else {
            backgroundMusic.pause();
            updateMusicButton();
        }
    });
}

/* =====================================================
   START BUTTON
===================================================== */

const startButton = document.getElementById("startButton");

if (startButton) {
    startButton.addEventListener("click", function () {
        const eventSection = document.getElementById("eventDetails");

        if (eventSection) {
            eventSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

/* =====================================================
   COUNTDOWN
===================================================== */

function updateCountdown() {
    const countdownDate = new Date("December 5, 2026 20:00:00").getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
        return;
    }

    if (distance <= 0) {
        daysElement.textContent = "0";
        hoursElement.textContent = "0";
        minutesElement.textContent = "0";
        secondsElement.textContent = "0";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(
    ".reveal, .section, .section-title, .event-card, .gift-card, " +
    ".reminder-item, .dress-card, .gallery-item, .rsvp-card, " +
    ".closing-content, .hero-content"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach(function (element) {
        element.classList.add("active");
    });
}

/* =====================================================
   RSVP FORM
===================================================== */

const rsvpForm = document.getElementById("rsvpForm");
const rsvpMessage = document.getElementById("rsvpMessage");

if (rsvpForm) {
    rsvpForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const submitButton = rsvpForm.querySelector(
            'button[type="submit"]'
        );

        const formData = new FormData(rsvpForm);

        const name = formData.get("name");
        const attendance = formData.get("attendance");
        const guests = formData.get("guests");
        const message = formData.get("message");

        if (!name || !attendance) {
            if (rsvpMessage) {
                rsvpMessage.textContent =
                    "Please complete the required fields.";
            }
            return;
        }

        const data = new URLSearchParams();

        data.append("name", name);
        data.append("attendance", attendance);
        data.append("guests", guests || "1");
        data.append("message", message || "");

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "SENDING...";
        }

        if (rsvpMessage) {
            rsvpMessage.textContent = "Sending your RSVP...";
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
            console.error("RSVP Error:", error);

            if (rsvpMessage) {
                rsvpMessage.textContent =
                    "Something went wrong. Please try again.";
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
   GALLERY CAROUSEL
===================================================== */

const galleryTrack = document.querySelector(".gallery-track");
const gallerySlides = document.querySelectorAll(".gallery-slide");

const prevButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");

const galleryDots = document.querySelectorAll(".gallery-dot");

let currentSlide = 0;

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
        "translateX(-" + (currentSlide * 100) + "%)";

    gallerySlides.forEach(function (slide, i) {
        slide.classList.toggle("active", i === currentSlide);
    });

    galleryDots.forEach(function (dot, i) {
        dot.classList.toggle("active", i === currentSlide);
    });
}

if (prevButton) {
    prevButton.addEventListener("click", function () {
        showSlide(currentSlide - 1);
    });
}

if (nextButton) {
    nextButton.addEventListener("click", function () {
        showSlide(currentSlide + 1);
    });
}

galleryDots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        showSlide(index);
    });
});

/* =====================================================
   GALLERY SWIPE SUPPORT
===================================================== */

let touchStartX = 0;
let touchEndX = 0;

if (galleryTrack) {
    galleryTrack.addEventListener("touchstart", function (event) {
        touchStartX = event.changedTouches[0].screenX;
    }, { passive: true });

    galleryTrack.addEventListener("touchend", function (event) {
        touchEndX = event.changedTouches[0].screenX;

        const swipeDistance = touchStartX - touchEndX;

        if (swipeDistance > 50) {
            showSlide(currentSlide + 1);
        } else if (swipeDistance < -50) {
            showSlide(currentSlide - 1);
        }
    }, { passive: true });
}

showSlide(0);

/* =====================================================
   KEYBOARD GALLERY CONTROLS
===================================================== */

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        showSlide(currentSlide + 1);
    }

    if (event.key === "ArrowLeft") {
        showSlide(currentSlide - 1);
    }
});

/* =====================================================
   ANIMATED ELEMENTS
===================================================== */

document.querySelectorAll(
    ".emoji, .racing-emoji, .floating-emoji, .decoration"
).forEach(function (element, index) {
    element.style.animationDelay = (index * 0.15) + "s";
});

/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log("Ensley Ray Birthday Invitation loaded successfully!");

// =========================================================
// ENSLEY RAY - INTERACTIVE FIRST BIRTHDAY INVITATION
// =========================================================


// =========================================================
// GOOGLE SHEETS RSVP
// =========================================================

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxfsAwuC3AdGPlNROEocxFGZNQM819WMaWlr-RpE4373kWyO-hfOIh1cBpTYvLhv3s/exec";


// =========================================================
// ELEMENTS
// =========================================================

const birthdayMusic =
    document.getElementById("birthdayMusic");

const musicButton =
    document.getElementById("musicButton");

const startButton =
    document.getElementById("startButton");

const tapToOpen =
    document.getElementById("tapToOpen");

const openingScreen =
    document.getElementById("openingScreen");

const mainInvitation =
    document.getElementById("mainInvitation");


// =========================================================
// MUSIC
// =========================================================

function playMusic() {

    if (!birthdayMusic) {
        return;
    }

    birthdayMusic.play()
        .then(function () {

            if (musicButton) {

                musicButton.textContent =
                    "PAUSE MUSIC";

            }

        })
        .catch(function (error) {

            console.log(
                "Music could not start:",
                error
            );

        });
}


function pauseMusic() {

    if (!birthdayMusic) {
        return;
    }

    birthdayMusic.pause();

    if (musicButton) {

        musicButton.textContent =
            "PLAY MUSIC";

    }
}


// =========================================================
// MUSIC BUTTON
// =========================================================

if (musicButton) {

    musicButton.addEventListener(
        "click",
        function () {

            if (birthdayMusic.paused) {

                playMusic();

            } else {

                pauseMusic();

            }

        }
    );

}


// =========================================================
// OPEN INVITATION
// =========================================================

if (tapToOpen) {

    tapToOpen.addEventListener(
        "click",
        function () {

            // Start music
            playMusic();


            // Close opening screen
            if (openingScreen) {

                openingScreen.classList.add(
                    "opened"
                );

            }


            // Show invitation
            if (mainInvitation) {

                setTimeout(
                    function () {

                        mainInvitation.classList.add(
                            "visible"
                        );

                    },
                    400
                );

            }


            // Enable scrolling
            document.body.style.overflow =
                "auto";


            // Scroll to hero
            setTimeout(
                function () {

                    const hero =
                        document.querySelector(
                            ".hero"
                        );

                    if (hero) {

                        hero.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                },
                900
            );

        }
    );

}


// =========================================================
// START BUTTON
// =========================================================

if (startButton) {

    startButton.addEventListener(
        "click",
        function () {

            playMusic();

            const welcomeSection =
                document.querySelector(
                    ".welcome"
                );

            if (welcomeSection) {

                welcomeSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

}


// =========================================================
// COUNTDOWN
// =========================================================

const birthdayDate =
    new Date(
        "December 5, 2026 12:00:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        birthdayDate - now;


    const days =
        document.getElementById("days");

    const hours =
        document.getElementById("hours");

    const minutes =
        document.getElementById("minutes");

    const seconds =
        document.getElementById("seconds");


    if (
        !days ||
        !hours ||
        !minutes ||
        !seconds
    ) {

        return;

    }


    // Birthday has arrived
    if (difference <= 0) {

        days.textContent = "0";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;

    }


    // DAYS

    const dayValue =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    // HOURS

    const hourValue =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    // MINUTES

    const minuteValue =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    // SECONDS

    const secondValue =
        Math.floor(
            (
                difference %
                (1000 * 60)
            ) /
            1000
        );


    days.textContent =
        dayValue;

    hours.textContent =
        String(hourValue)
            .padStart(2, "0");

    minutes.textContent =
        String(minuteValue)
            .padStart(2, "0");

    seconds.textContent =
        String(secondValue)
            .padStart(2, "0");

}


// Start countdown
updateCountdown();

setInterval(
    updateCountdown,
    1000
);


// =========================================================
// SCROLL ANIMATIONS
// =========================================================

const animatedElements =
    document.querySelectorAll(
        ".welcome, " +
        ".event-section, " +
        ".photo-section, " +
        ".dress-section, " +
        ".gift-section, " +
        ".reminder-section, " +
        ".rsvp-section, " +
        ".closing-section"
    );


const animationObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "section-visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(
    function (element) {

        animationObserver.observe(
            element
        );

    }
);


// =========================================================
// RSVP OPEN
// =========================================================

const openRsvp =
    document.getElementById(
        "openRsvp"
    );

const rsvpForm =
    document.getElementById(
        "rsvpForm"
    );


if (
    openRsvp &&
    rsvpForm
) {

    openRsvp.addEventListener(
        "click",
        function () {

            rsvpForm.classList.add(
                "show"
            );

            rsvpForm.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );

}


// =========================================================
// SUBMIT RSVP
// =========================================================

const submitRsvp =
    document.getElementById(
        "submitRsvp"
    );


if (submitRsvp) {

    submitRsvp.addEventListener(
        "click",
        async function () {


            const nameInput =
                document.getElementById(
                    "guestName"
                );


            const attendanceInput =
                document.getElementById(
                    "attendance"
                );


            const guestCountInput =
                document.getElementById(
                    "guestCount"
                );


            const name =
                nameInput.value.trim();


            const attendance =
                attendanceInput.value;


            const guestCount =
                guestCountInput.value;


            // CHECK NAME

            if (name === "") {

                alert(
                    "Please enter your name."
                );

                nameInput.focus();

                return;

            }


            // CHECK ATTENDANCE

            if (attendance === "") {

                alert(
                    "Please select whether you will attend."
                );

                attendanceInput.focus();

                return;

            }


            // CHECK GUEST COUNT

            if (
                guestCount === "" ||
                Number(guestCount) < 1
            ) {

                alert(
                    "Please enter the number of guests."
                );

                guestCountInput.focus();

                return;

            }


            // DISABLE BUTTON

            submitRsvp.disabled = true;

            submitRsvp.textContent =
                "SUBMITTING...";


            // RSVP DATA

            const rsvpData = {

                name: name,

                attendance:
                    attendance,

                guests:
                    guestCount

            };


            try {

                await fetch(
                    GOOGLE_SCRIPT_URL,
                    {
                        method: "POST",

                        mode: "no-cors",

                        headers: {
                            "Content-Type":
                                "text/plain;charset=utf-8"
                        },

                        body:
                            JSON.stringify(
                                rsvpData
                            )
                    }
                );


                // SUCCESS MESSAGE

                alert(
                    "RSVP RECEIVED!\n\n" +

                    "Thank you, " +
                    name +
                    "!\n\n" +

                    "Status: " +
                    attendance +
                    "\n" +

                    "Guests: " +
                    guestCount
                );


                // CLEAR FORM

                nameInput.value = "";

                attendanceInput.value = "";

                guestCountInput.value = "1";


            } catch (error) {

                console.error(
                    "RSVP Error:",
                    error
                );


                alert(
                    "Sorry, there was a problem sending your RSVP."
                );

            }


            // ENABLE BUTTON AGAIN

            submitRsvp.disabled =
                false;

            submitRsvp.textContent =
                "SUBMIT RSVP";

        }
    );

}
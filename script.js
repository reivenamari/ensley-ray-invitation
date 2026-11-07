/* =====================================================
   ENSLEY RAY FIRST BIRTHDAY
   COMPLETE RACING THEME + ANIMATIONS
===================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #111;
    color: #111;
    overflow-x: hidden;
}

button,
a,
input,
select {
    font: inherit;
}

button {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}

img {
    max-width: 100%;
    display: block;
}

:root {
    --red: #d71920;
    --dark-red: #a90008;
    --black: #111;
    --white: #fff;
}

/* =====================================================
   GLOBAL ANIMATIONS
===================================================== */

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(35px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale(.75);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-9px); }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.07); }
}

@keyframes wiggle {
    0%, 100% { transform: rotate(0); }
    25% { transform: rotate(-7deg); }
    75% { transform: rotate(7deg); }
}

@keyframes shine {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
}

@keyframes flagWave {
    0%, 100% { transform: skewY(0deg); }
    50% { transform: skewY(4deg); }
}

@keyframes racingMove {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

@keyframes borderGlow {
    0%, 100% { box-shadow: 0 0 5px rgba(215, 25, 32, .3); }
    50% { box-shadow: 0 0 22px rgba(215, 25, 32, .8); }
}

@keyframes rotateSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes buttonBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

@keyframes slideLeft {
    from { opacity: 0; transform: translateX(-35px); }
    to { opacity: 1; transform: translateX(0); }
}

@keyframes slideRight {
    from { opacity: 0; transform: translateX(35px); }
    to { opacity: 1; transform: translateX(0); }
}

/* =====================================================
   OPENING SCREEN
===================================================== */

.opening-screen {
    position: fixed;
    inset: 0;
    z-index: 999999;
    width: 100%;
    min-height: 100vh;
    min-height: 100dvh;
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
    transition: transform .9s ease, opacity .9s ease;
    pointer-events: auto;
    isolation: isolate;
}

.opening-screen.opened {
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
}

.checkered-top,
.checkered-bottom {
    width: 100%;
    height: 35px;
    flex-shrink: 0;
    background-color: #fff;
    background-image:
        linear-gradient(45deg, #111 25%, transparent 25%),
        linear-gradient(-45deg, #111 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #111 75%),
        linear-gradient(-45deg, transparent 75%, #111 75%);
    background-size: 28px 28px;
    background-position: 0 0, 0 14px, 14px -14px, -14px 0;
    pointer-events: none;
}

.opening-content {
    position: relative;
    z-index: 5;
    width: min(92%, 550px);
    margin: auto;
    padding: 35px 15px;
    text-align: center;
    pointer-events: auto;
    animation: fadeUp 1s ease both;
}

.racing-flags {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 35px;
}

.flag {
    width: 65px;
    height: 45px;
    background-color: #fff;
    background-image:
        linear-gradient(45deg, #111 25%, transparent 25%),
        linear-gradient(-45deg, #111 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #111 75%),
        linear-gradient(-45deg, transparent 75%, #111 75%);
    background-size: 18px 18px;
    background-position: 0 0, 0 9px, 9px -9px, -9px 0;
    animation: flagWave 1.5s ease-in-out infinite;
}

.flag-left {
    transform-origin: right center;
}

.flag-right {
    transform-origin: left center;
    animation-delay: .3s;
}

.flag-title {
    display: flex;
    flex-direction: column;
    line-height: 1;
    animation: pulse 2s ease-in-out infinite;
}

.flag-title span {
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 4px;
}

.flag-title strong {
    color: var(--red);
    font-size: clamp(32px, 8vw, 48px);
    font-weight: 1000;
    letter-spacing: 2px;
}

.opening-small {
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 4px;
    margin-bottom: 12px;
    animation: fadeUp 1s .2s both;
}

.opening-name {
    color: var(--red);
    font-size: clamp(42px, 10vw, 68px);
    font-weight: 1000;
    letter-spacing: 2px;
    text-shadow: 3px 4px 0 #111;
    margin-bottom: 12px;
    animation: zoomIn 1s .3s both, pulse 3s 1.5s infinite;
}

.opening-birthday {
    font-size: 22px;
    font-weight: 900;
    letter-spacing: 7px;
    margin-bottom: 12px;
    animation: fadeUp 1s .4s both;
}

.opening-date {
    display: inline-block;
    background: var(--black);
    color: #fff;
    padding: 12px 25px;
    font-size: 16px;
    font-weight: 900;
    letter-spacing: 2px;
    transform: skew(-7deg);
    animation: fadeUp 1s .5s both;
}

.racing-button {
    position: relative;
    z-index: 1000000;
    display: block;
    margin: 38px auto 0;
    padding: 17px 38px;
    border: 3px solid #111;
    border-radius: 4px;
    background: var(--red);
    color: #fff;
    font-size: 17px;
    font-weight: 1000;
    letter-spacing: 2px;
    box-shadow: 5px 5px 0 #111;
    cursor: pointer;
    pointer-events: auto !important;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    animation: buttonBounce 1.5s ease-in-out infinite;
    transition: background .2s, box-shadow .2s;
}

.racing-button:hover {
    background: var(--dark-red);
    box-shadow: 2px 2px 0 #111;
}

.racing-button:active {
    transform: scale(.95);
}

/* =====================================================
   MUSIC BUTTON
===================================================== */

.music-button {
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 1000001;
    padding: 11px 16px;
    border: 2px solid #fff;
    border-radius: 30px;
    background: var(--red);
    color: #fff;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 1px;
    box-shadow: 0 3px 12px rgba(0,0,0,.3);
    animation: pulse 2s infinite;
}

/* =====================================================
   MAIN INVITATION
===================================================== */

.main-invitation {
    display: none;
    width: 100%;
    opacity: 0;
    overflow: hidden;
    background: #fff;
}

.main-invitation.show {
    display: block;
    opacity: 1;
    animation: fadeIn 1s ease forwards;
}

/* =====================================================
   HERO SECTION
===================================================== */

.hero {
    position: relative;
    min-height: 100vh;
    padding: 85px 20px 65px;
    overflow: hidden;
    color: #fff;
    text-align: center;
    background:
        radial-gradient(circle at 50% 20%, #444 0, transparent 35%),
        linear-gradient(135deg, #111, #252525 55%, #111);
}

.hero::before,
.hero::after {
    content: "";
    position: absolute;
    width: 250px;
    height: 250px;
    border: 30px solid rgba(215,25,32,.15);
    border-radius: 50%;
    pointer-events: none;
}

.hero::before {
    top: -100px;
    left: -100px;
}

.hero::after {
    right: -100px;
    bottom: -100px;
}

.hero-speed-lines {
    position: absolute;
    inset: 0;
    opacity: .2;
    pointer-events: none;
    background: repeating-linear-gradient(
        165deg,
        transparent 0,
        transparent 35px,
        #fff 36px,
        transparent 38px
    );
    animation: fadeIn 2s ease both;
}

.hero-content {
    position: relative;
    z-index: 2;
    width: min(100%, 650px);
    margin: auto;
}

.hero-top-label {
    display: inline-block;
    padding: 8px 20px;
    background: var(--red);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 4px;
    transform: skew(-8deg);
    animation: slideLeft 1s both;
}

.hero-flags {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin: 30px 0 15px;
}

.hero-flag {
    width: 65px;
    height: 48px;
    background-color: #fff;
    background-image:
        linear-gradient(45deg, #111 25%, transparent 25%),
        linear-gradient(-45deg, #111 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #111 75%),
        linear-gradient(-45deg, transparent 75%, #111 75%);
    background-size: 18px 18px;
    background-position: 0 0, 0 9px, 9px -9px, -9px 0;
    animation: flagWave 1.4s infinite;
}

.hero-title {
    display: flex;
    flex-direction: column;
    line-height: .9;
}

.hero-title span {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 5px;
}

.hero-title strong {
    color: var(--red);
    font-size: clamp(45px, 12vw, 75px);
    font-weight: 1000;
    text-shadow: 4px 4px 0 #fff;
}

.hero-name {
    color: #fff;
    font-size: clamp(40px, 10vw, 70px);
    font-weight: 1000;
    letter-spacing: 2px;
    text-shadow: 4px 5px 0 var(--red);
    margin: 20px 0 8px;
    animation: pulse 3s infinite;
}

.hero-age {
    color: #ff3038;
    font-size: clamp(19px, 5vw, 29px);
    font-weight: 1000;
    letter-spacing: 4px;
    margin-bottom: 25px;
    animation: fadeUp 1s both;
}

.hero-photo-frame {
    position: relative;
    width: min(78%, 340px);
    margin: 0 auto 28px;
    padding: 9px;
    border: 5px solid #fff;
    background: var(--red);
    box-shadow: 0 0 0 5px var(--red), 0 12px 30px rgba(0,0,0,.5);
    animation: zoomIn 1s both, borderGlow 3s infinite;
}

.hero-photo-frame img {
    width: 100%;
    max-height: 390px;
    object-fit: cover;
    border: 3px solid #111;
}

.photo-speed-line {
    position: absolute;
    top: 20%;
    left: -30px;
    width: 35px;
    height: 5px;
    background: #fff;
    box-shadow: 0 12px 0 var(--red), 0 24px 0 #fff;
    animation: racingMove 2s linear infinite;
}

.hero-event-info {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 25px auto;
}

.hero-event-info div {
    padding: 12px 15px;
    background: var(--red);
    border: 2px solid #fff;
    font-size: 12px;
    letter-spacing: 1px;
    animation: fadeUp .8s both;
}

.hero-event-info div:nth-child(2) { animation-delay: .15s; }
.hero-event-info div:nth-child(3) { animation-delay: .3s; }

.countdown {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 30px auto;
}

.countdown-box {
    min-width: 65px;
    padding: 12px 8px;
    background: #fff;
    color: #111;
    border-bottom: 5px solid var(--red);
    animation: float 2s ease-in-out infinite;
}

.countdown-box:nth-child(2) { animation-delay: .2s; }
.countdown-box:nth-child(3) { animation-delay: .4s; }
.countdown-box:nth-child(4) { animation-delay: .6s; }

.countdown-box span {
    display: block;
    color: var(--red);
    font-size: 25px;
    font-weight: 1000;
}

.countdown-box small {
    display: block;
    margin-top: 4px;
    font-size: 9px;
    font-weight: 900;
}

.start-button {
    padding: 14px 45px;
    border: 3px solid #fff;
    background: var(--red);
    color: #fff;
    font-weight: 1000;
    letter-spacing: 3px;
    box-shadow: 5px 5px 0 #fff;
    animation: buttonBounce 1.5s infinite;
}

/* =====================================================
   WELCOME
===================================================== */

.welcome {
    position: relative;
    padding: 75px 22px;
    background: #f7f7f7;
    text-align: center;
    overflow: hidden;
}

.racing-line {
    width: 100%;
    height: 12px;
    background: repeating-linear-gradient(
        90deg,
        #111 0 20px,
        #fff 20px 40px
    );
}

.welcome-content {
    max-width: 700px;
    margin: 35px auto;
}

.welcome-badge {
    display: inline-block;
    padding: 9px 18px;
    background: var(--red);
    color: #fff;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 2px;
    transform: skew(-7deg);
    animation: pulse 2s infinite;
}

.welcome h2 {
    margin-top: 25px;
    font-size: 19px;
    letter-spacing: 5px;
}

.welcome h1 {
    margin: 12px 0;
    color: var(--red);
    font-size: clamp(35px, 8vw, 55px);
    font-weight: 1000;
    line-height: 1.1;
    text-shadow: 2px 3px 0 #111;
    animation: pulse 3s infinite;
}

.red-divider {
    width: 120px;
    height: 5px;
    margin: 25px auto;
    background: #111;
}

.red-divider span {
    display: block;
    width: 50%;
    height: 100%;
    margin: auto;
    background: var(--red);
    animation: pulse 1.5s infinite;
}

.greeting-text {
    margin: 17px auto;
    max-width: 580px;
    font-size: 16px;
    line-height: 1.8;
}

.greeting-text strong {
    color: var(--red);
    animation: pulse 2s infinite;
}

.birthday-message {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin: 30px 0;
    color: var(--red);
    font-size: 19px;
    font-weight: 1000;
    letter-spacing: 2px;
}

.birthday-message span {
    width: 35px;
    height: 3px;
    background: #111;
}

.thank-you {
    font-style: italic;
    line-height: 1.7;
}

/* =====================================================
   SHARED SECTION TITLES
===================================================== */

.event-section,
.photo-section,
.dress-section,
.gift-section,
.reminder-section,
.rsvp-section {
    position: relative;
    padding: 75px 20px;
    text-align: center;
}

.section-title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin: 0 auto 38px;
    animation: fadeUp .8s both;
}

.section-number {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    background: var(--red);
    color: #fff;
    font-size: 14px;
    font-weight: 1000;
    transform: skew(-8deg);
}

.section-title h2 {
    font-size: clamp(20px, 5vw, 30px);
    font-weight: 1000;
    letter-spacing: 1px;
}

/* =====================================================
   EVENT DETAILS
===================================================== */

.event-section {
    background: #eee;
}

.section-racing-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 12px;
    background: repeating-linear-gradient(90deg, #111 0 20px, #fff 20px 40px);
}

.event-cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    max-width: 900px;
    margin: auto;
}

.event-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 28px 15px;
    background: #fff;
    border-bottom: 6px solid var(--red);
    box-shadow: 0 6px 18px rgba(0,0,0,.1);
    transition: transform .3s, box-shadow .3s;
}

.event-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 25px rgba(0,0,0,.18);
}

.event-icon {
    font-size: 35px;
    animation: float 2s infinite;
}

.event-card h3 {
    color: var(--red);
    font-size: 16px;
    font-weight: 1000;
}

.event-card p {
    font-size: 14px;
    line-height: 1.6;
}

.map-button {
    display: inline-block;
    margin-top: 30px;
    padding: 14px 25px;
    background: var(--red);
    color: #fff;
    text-decoration: none;
    font-weight: 900;
    border: 2px solid #111;
    box-shadow: 4px 4px 0 #111;
    transition: transform .2s;
}

.map-button:hover {
    transform: translateY(-4px);
}

/* =====================================================
   PHOTO CAROUSEL
===================================================== */

.photo-section {
    background: #171717;
    color: #fff;
    overflow: hidden;
}

.photo-section .section-title h2 {
    color: #fff;
}

.photo-content {
    position: relative;
    z-index: 2;
    max-width: 700px;
    margin: auto;
}

.photo-decoration {
    position: absolute;
    top: 45%;
    width: 120px;
    height: 120px;
    border: 18px solid rgba(215,25,32,.3);
    border-radius: 50%;
    animation: rotateSlow 12s linear infinite;
}

.photo-decoration.left { left: -60px; }
.photo-decoration.right { right: -60px; }

.racer-carousel {
    position: relative;
    max-width: 440px;
    margin: auto;
    overflow: hidden;
    border: 7px solid #fff;
    background: #111;
    box-shadow: 0 0 0 5px var(--red), 0 10px 30px rgba(0,0,0,.4);
}

.carousel-track {
    display: flex;
    transition: transform .5s ease;
    will-change: transform;
}

.racer-slide {
    min-width: 100%;
    height: 480px;
    background: #222;
}

.racer-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    -webkit-user-drag: none;
}

.carousel-button {
    position: absolute;
    top: 50%;
    z-index: 5;
    width: 42px;
    height: 42px;
    border: 2px solid #fff;
    border-radius: 50%;
    background: var(--red);
    color: #fff;
    font-size: 18px;
    transform: translateY(-50%);
    transition: background .2s, transform .2s;
}

.carousel-button:hover {
    background: #111;
    transform: translateY(-50%) scale(1.1);
}

.carousel-prev { left: 10px; }
.carousel-next { right: 10px; }

.carousel-dots {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 9px;
    margin: 25px auto 15px;
}

.carousel-dot {
    width: 11px;
    height: 11px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: #888;
    transition: transform .2s, background .2s;
}

.carousel-dot.active {
    background: var(--red);
    transform: scale(1.4);
}

.swipe-text {
    margin-top: 18px;
    color: #ddd;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 2px;
    animation: pulse 2s infinite;
}

/* =====================================================
   DRESS CODE
===================================================== */

.dress-section {
    background: #f5f5f5;
}

.dress-intro {
    margin-bottom: 25px;
    font-size: 16px;
}

.dress-colors {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 18px;
}

.dress-color {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 105px;
    height: 105px;
    border: 4px solid #111;
    border-radius: 50%;
    box-shadow: 0 5px 12px rgba(0,0,0,.15);
    animation: float 2.5s ease-in-out infinite;
}

.dress-color:nth-child(2) { animation-delay: .3s; }
.dress-color:nth-child(3) { animation-delay: .6s; }

.dress-color span {
    font-size: 13px;
    font-weight: 1000;
}

.dress-color.red {
    background: #d71920;
    color: #fff;
}

.dress-color.white {
    background: #fff;
    color: #111;
}

.dress-color.black {
    background: #111;
    color: #fff;
}

.dress-note {
    margin-top: 28px;
    font-size: 14px;
    font-weight: 900;
}

/* =====================================================
   GIFT GUIDE
===================================================== */

.gift-section {
    background: #fff;
}

.gift-intro {
    max-width: 600px;
    margin: -10px auto 35px;
    font-size: 15px;
    line-height: 1.8;
}

.gift-cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
    max-width: 800px;
    margin: auto;
}

.gift-card {
    padding: 28px 20px;
    background: #f5f5f5;
    border: 2px solid #111;
    border-bottom: 6px solid var(--red);
    box-shadow: 4px 5px 0 rgba(0,0,0,.12);
    transition: transform .3s;
}

.gift-card:hover {
    transform: translateY(-8px) rotate(-1deg);
}

.gift-icon {
    margin-bottom: 12px;
    font-size: 38px;
    animation: float 2s infinite;
}

.gift-card h3 {
    margin-bottom: 12px;
    color: var(--red);
    font-size: 16px;
    font-weight: 1000;
}

.gift-card p {
    font-size: 14px;
    line-height: 1.7;
}

/* =====================================================
   REMINDERS
===================================================== */

.reminder-section {
    background: #f0f0f0;
}

.reminder-list {
    display: grid;
    gap: 14px;
    max-width: 700px;
    margin: auto;
    text-align: left;
}

.reminder-item {
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 20px;
    background: #fff;
    border-left: 6px solid var(--red);
    box-shadow: 0 4px 12px rgba(0,0,0,.08);
    transition: transform .3s;
}

.reminder-item:hover {
    transform: translateX(8px);
}

.reminder-icon {
    flex-shrink: 0;
    font-size: 32px;
    animation: wiggle 2.5s infinite;
}

.reminder-item strong {
    font-size: 14px;
    font-weight: 1000;
}

.reminder-item p {
    margin-top: 6px;
    color: #555;
    font-size: 13px;
    line-height: 1.5;
}

/* =====================================================
   RSVP
===================================================== */

.rsvp-section {
    background: #191919;
    color: #fff;
}

.rsvp-section .section-title h2 {
    color: #fff;
}

.rsvp-finish-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 12px;
    background: repeating-linear-gradient(90deg, #fff 0 20px, #111 20px 40px);
}

.rsvp-text {
    margin: -10px auto 25px;
    line-height: 1.7;
}

.rsvp-button,
.submit-rsvp {
    padding: 15px 28px;
    border: 2px solid #fff;
    background: var(--red);
    color: #fff;
    font-weight: 1000;
    letter-spacing: 1px;
    box-shadow: 4px 4px 0 #fff;
    transition: transform .2s, background .2s;
}

.rsvp-button:hover,
.submit-rsvp:hover {
    background: var(--dark-red);
    transform: translateY(-3px);
}

.rsvp-form {
    display: none;
    max-width: 480px;
    margin: 30px auto 0;
    padding: 25px;
    background: #fff;
    color: #111;
    text-align: left;
    border-top: 6px solid var(--red);
    box-shadow: 0 8px 25px rgba(0,0,0,.3);
}

.rsvp-form.show {
    display: block;
    animation: fadeUp .5s ease both;
}

.form-group {
    margin-bottom: 18px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 1000;
}

.form-group input,
.form-group select {
    width: 100%;
    min-height: 45px;
    padding: 11px;
    border: 2px solid #ddd;
    border-radius: 3px;
    background: #fff;
    color: #111;
    outline: none;
}

.form-group input:focus,
.form-group select:focus {
    border-color: var(--red);
}

.submit-rsvp {
    width: 100%;
}

/* =====================================================
   CLOSING
===================================================== */

.closing-section {
    position: relative;
    min-height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 75px 20px;
    overflow: hidden;
    background:
        radial-gradient(circle, #444, #111 70%);
    color: #fff;
    text-align: center;
}

.closing-overlay {
    position: absolute;
    inset: 0;
    opacity: .15;
    background: repeating-linear-gradient(
        135deg,
        transparent 0 30px,
        #fff 31px 33px
    );
    pointer-events: none;
}

.closing-content {
    position: relative;
    z-index: 2;
    width: min(100%, 550px);
}

.closing-checkered {
    width: 180px;
    height: 25px;
    margin: 0 auto 30px;
    background-color: #fff;
    background-image:
        linear-gradient(45deg, #111 25%, transparent 25%),
        linear-gradient(-45deg, #111 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #111 75%),
        linear-gradient(-45deg, transparent 75%, #111 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0;
    animation: slideLeft 1s both;
}

.closing-content > p:first-of-type {
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 3px;
}

.closing-content h2 {
    margin: 15px 0 5px;
    color: var(--red);
    font-size: clamp(38px, 9vw, 60px);
    font-weight: 1000;
    text-shadow: 3px 4px 0 #fff;
    animation: pulse 3s infinite;
}

.closing-content h3 {
    margin-bottom: 25px;
    font-size: 22px;
    letter-spacing: 4px;
}

.closing-photo {
    width: min(75%, 300px);
    margin: 0 auto;
    padding: 8px;
    border: 5px solid #fff;
    background: var(--red);
    box-shadow: 0 0 0 5px var(--red);
    animation: zoomIn 1s both, borderGlow 3s infinite;
}

.closing-photo img {
    width: 100%;
    max-height: 340px;
    object-fit: cover;
}

.closing-message {
    margin-top: 30px;
    color: #fff;
    font-size: 18px;
    font-weight: 900;
    animation: float 2s infinite;
}

/* =====================================================
   FOOTER
===================================================== */

footer {
    padding: 25px 15px;
    background: #080808;
    color: #fff;
    text-align: center;
}

.footer-checkered {
    width: 100%;
    max-width: 250px;
    height: 18px;
    margin: 0 auto 18px;
    background-color: #fff;
    background-image:
        linear-gradient(45deg, #111 25%, transparent 25%),
        linear-gradient(-45deg, #111 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #111 75%),
        linear-gradient(-45deg, transparent 75%, #111 75%);
    background-size: 16px 16px;
    background-position: 0 0, 0 8px, 8px -8px, -8px 0;
}

footer p {
    font-size: 13px;
    font-weight: 1000;
    letter-spacing: 2px;
}

footer small {
    display: block;
    margin-top: 8px;
    color: #aaa;
    font-size: 10px;
    letter-spacing: 2px;
}

/* =====================================================
   SCROLL ANIMATIONS
===================================================== */

.reveal {
    opacity: 0;
    transform: translateY(35px);
    transition: opacity .8s ease, transform .8s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

.reveal-left {
    opacity: 0;
    transform: translateX(-35px);
    transition: opacity .8s ease, transform .8s ease;
}

.reveal-right {
    opacity: 0;
    transform: translateX(35px);
    transition: opacity .8s ease, transform .8s ease;
}

.reveal-left.visible,
.reveal-right.visible {
    opacity: 1;
    transform: translateX(0);
}

/* Animate text and emojis without hiding them */
.section-title h2,
.event-card h3,
.event-card p,
.gift-card h3,
.gift-card p,
.reminder-item strong,
.reminder-item p,
.dress-intro,
.dress-note,
.gift-intro,
.rsvp-text,
.closing-message {
    animation: fadeUp .9s both;
}

.event-icon,
.gift-icon,
.reminder-icon {
    transform-origin: center;
}

/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 700px) {
    .hero {
        padding: 80px 15px 55px;
    }

    .event-cards {
        grid-template-columns: 1fr;
        max-width: 420px;
    }

    .event-card {
        flex-direction: row;
        justify-content: flex-start;
        text-align: left;
        padding: 20px;
    }

    .event-icon {
        width: 55px;
        text-align: center;
    }

    .gift-cards {
        grid-template-columns: 1fr;
        max-width: 430px;
    }

    .racer-slide {
        height: 420px;
    }

    .countdown {
        gap: 6px;
    }

    .countdown-box {
        min-width: 58px;
        padding: 10px 5px;
    }

    .countdown-box span {
        font-size: 22px;
    }

    .hero-event-info {
        gap: 7px;
    }

    .hero-event-info div {
        font-size: 10px;
        padding: 10px;
    }
}

@media (max-width: 420px) {
    .opening-content {
        padding: 25px 10px;
    }

    .flag {
        width: 45px;
        height: 35px;
        background-size: 14px 14px;
    }

    .racing-flags {
        gap: 8px;
    }

    .opening-small {
        font-size: 10px;
        letter-spacing: 2px;
    }

    .opening-date {
        font-size: 13px;
    }

    .racer-slide {
        height: 350px;
    }

    .section-title {
        gap: 8px;
    }

    .section-title h2 {
        font-size: 19px;
    }

    .reminder-item {
        gap: 12px;
        padding: 15px;
    }

    .reminder-item strong {
        font-size: 12px;
    }

    .reminder-icon {
        font-size: 27px;
    }
}

/* =====================================================
   REDUCED MOTION ACCESSIBILITY
===================================================== */

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
    }
}

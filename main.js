import './style.css'
import cupcake from '/images/cupcake.jpg'



document.querySelector('#app').innerHTML = `
    <div class="header">
        <h1>Today is YOUR birthday 🎉</h1>
        <img class="cupcake-img" src=${cupcake} alt="Cupcake with yellow background">
        <h2 class="bday-age">29 years old</h2>
    </div>

    <div class="birthday-section-wrapper">

        <div class="birthday-section">
            <div class="birthday-song-wrapper"><iframe allow="fullscreen" frameBorder="0" height="270" src="https://giphy.com/embed/M0gcghOJqXI5rqyoIA/video" width="480"></iframe></div>
        </div>

        <div class="gift-section">
            <h2 class="gift-title">Birthday celebration activies for you to do</h2>
            <h2 class="gift-hint">(Hover over the gift)</h2>
            <h3 class"h3-title">Go for a nice drive 🚗</h3>
            <div class="gift-img" id="gift-img-drive"></div>
        </div>

        <div class="gift-section">
            <h3 class"h3-title">Have a spa day 🧖‍♀️</h3>
            <div class="gift-img" id="gift-img-spa"></div>
        </div>

        <div class="gift-section">
            <h3 class"h3-title">Treat yo self 💰</h3>
            <div class="gift-img" id="gift-img-money"></div>
        </div>

        <div class="gift-section">
            <h3 class"h3-title">However you celebrate, have a good one! 🥂</h3>
            <div class="gift-img" id="gift-img-celebrate"></div>
        </div>
        
    </div>
`

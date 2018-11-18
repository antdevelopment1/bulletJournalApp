// const { header, footer } = require('./helper')

function page(content) {
    
    return `    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css">
        <link rel="stylesheet" href="/stylesheets/styles.css">
    </head>
    <body>
    
    <header class="nav-container">
        <h2><a href="#">Intent Manifesto</a></h2>
        <nav class="nav">
                
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Inspiration</a></li>
            <li><a href="#">Contact</a></li>
        </nav>
    </header>
    <section class="hero-section">
        <div class="hero-title">
            <h1 class="title">Intent Manifesto</h1>
            <p class="hero-message">Script your dreams into reality.</p>
            <div class="button-container">
                <a href="#" class="button">Sign Up</a>
                <a href="#" class="button">Learn More</a>
            </div>
        </div> 
    </section>

    <section class="about-section">
        <div class="about-image">
            <img src="/images/journal6.jpg" alt="">
        </div>
        <div class="about-p">
            <p>Journals are cool. The dog is brown. I made rice but April isn't eating it. Watercolors are fun.
                April likes to play the guitar, and the drums. Journals are cool. The dog is brown. I made rice but April isn't eating it. Watercolors are fun.
                April likes to play the guitar, and the drums.Journals are cool. The dog is brown. I made rice but April isn't eating it. Watercolors are fun.
                April likes to play the guitar, and the drums.Journals are cool. 
            </p>
            <p>Journals are cool. The dog is brown. I made rice but April isn't eating it. Watercolors are fun.
                April likes to play the guitar, and the drums. Journals are cool. The dog is brown. I made rice but April isn't eating it. Watercolors are fun.
                April likes to play the guitar, and the drums.Journals are cool. The dog is brown. I made rice but April isn't eating it. Watercolors are fun.
                April likes to play the guitar, and the drums.
            </p>
            <a href="" class="about-button">Join Now</a>
        </div>
    </section>


    ${content}
     
    </body>
    </html>  
    `;
}

module.exports = page;
// const { header, footer, logoutButton, login_registerButton } = require('./helper')

function homePage(content) {
    
    return `    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
        <link rel="stylesheet" href="/stylesheets/styles.css">
    </head>
    <body>

    <section class="hero-section" id="home">
        <div class="nav-container" id="nav-container">
            <header>
                <!-- <div class="header-h2">
                <h2><a href="#">Intent Manifesto</a></h2>
                </div> -->
                <nav class="nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#inspiration">Inspiration</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="/login">Login</a></li>
                </nav>
            </header>
        </div>
        <div class="hero-title-content">
            <div class="hero-title">
                <h1 class="title">Intent Manifesto</h1>
                <div class="hero-hr">
                    <hr>
                </div>
            </div>
            <div class="hero-message">
                <p>Pour your thoughts out</p>
                <p>and script your dreams into reality.</p>
            </div>
            <div class="button-container">
                <a href="/register" class="button button1">Sign Up</a>
                <a href="/register" class="button button2">Learn More</a>
            </div>
        </div> 
        <!-- <p id="about"></p> -->
    </section>
    <section class="about-section" id="about">
        <div class="about-title">
            <h1>About Intent Manifesto</h1>
            <!-- <p id="about">!</p> -->
        </div>
        <div class="about-hr">
            <hr>
        </div>
        <div class="about-content">
            <div class="about-image">
                <!-- <img src="../public/images/journal20.jpg" alt=""> -->
            </div>
            <div class="about-p">
            <p>Intent Manifesto is an app that focuses on helping users actualize their goals and dreams into reality. 
                By treating their thoughts as more than just a task to be crossed off a list, the user can now store all those amazing ideas in a place that is just for them. Intent Manifesto is a personal collection of a user's most intimate thoughts and ideas. Though it can be used for any purpose the user deems fit, the app was created with goal-oriented 
                people in mind.
            </p>

            <p>This fullstack application was built by April Copes and Lauren Wilkerson with the intention of creating a space 
                for others that influence those to go after their goals and dreams. The technologies used to build this app were HTML, CSS, 
                JavaScript, Node.js, Express, and SQL. Intent Manifesto is currently viewable on GitHub and feedback and contributions are welcomed and encouraged.
            </p>
                <a href="#" class="about-button">Join Now</a>
            </div>
        </div>
    </section>

    <section class="gallery-section" id="inspiration">
            <div class="gallery-title">
                <h1>Inspiration Gallery</h1>
            </div>
            <div class="hrgallery">
                <hr>
            </div>
            <div class="gallery-p">
                <p>Words are but pictures of our thoughts...
                    <br>
                   Explore the thoughts of others.
                </p>
            </div>
            <div class="gallery-container">
                <div class="image img1"><img src="/images/journal2.jpg" alt=""></div>
                <div class="image img2"><img src="/images/journal9.jpg" alt=""></div>
                <div class="image img3"><img src="/images/journal11.jpg" alt=""></div>
                <div class="image img4"><img src="/images/journal12.jpg" alt=""></div>
                <div class="image img4"><img src="/images/journal13.jpg" alt=""></div>
                <div class="image img5"><img src="/images/journal14.jpg" alt=""></div>
            </div>
    </section>

    <section class="contact-section" id="contact">
        <div class="contact-container">
            <div class="contact-title">
                <h1>Join Our Mailing List</h1>
            </div>
            <div class="hrcontact">
                <hr>
            </div>
        </div>
        <div class="contact-content">
            <div class="contact-p">
                <p>
                    If you would like to become a member of the Intent Manifesto community or have an questions on where to get started, feel free to drop us a line.
                    The jounery to your new reality begins with you. Get started now and find out more.
                </p>
            </div>
            <div class="contact-form">
                <form action="/register" method="GET" class="form">
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="" required>
                
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="" required>

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="" required>
                    </select>
                  
                    <input type="submit" value="Submit" class="submit">
                  </form>
            </div>
        </div>
            <div class="footer-section">
                <footer>
                    <div class="footer-links">
                        <div class="thanks-container">
                            <p class="thanks">Images Courtesy Of <span>Unsplash</span></p>
                        </div>
                        <div class="footer-li">
                            <li><a href="https://github.com/antdevelopment1" title="April-Github"><i class="fab fa-github"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/april-copes/" title="April-LinkedIn"><i class="fab fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/laurenalyn" title="Lauren-Github"><i class="fab fa-github"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/laurenalyn/" title="Lauren-LinkedIn"><i class="fab fa-linkedin"></i></a></li>
                        </div>
                        <div class="learn-more">
                            <p class="learn">Built With <i class="fas fa-heart"></i>, <i class="fas fa-coffee"></i>, & <i class="fas fa-grin-tears"></i></p>
                        </div>
                        
                    </div>
                    <div class="footer-p">
                        <p class="copyright">
                            &copy Copyright 2018 Locksley Logic
                        </p>
                    </div>
                </footer>
            </div>
    </section>
    <script src="/scripts/slider.js"></script>
    </body>
    </html>          
    `;
}

module.exports = homePage;
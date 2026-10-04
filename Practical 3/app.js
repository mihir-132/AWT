function Home() {
    return (
        <element-card title="Home" icon="🏠" theme="fire">

            <p>Welcome to the Student Dashboard.</p>
            <p>This is the central home section of the application.</p>

        </element-card>
    );
}

function Profile() {
    return (
        <element-card title="Student Profile" icon="👤" theme="earth">

            <p>Name: Mihir</p>
            <p>Course: B.Tech CSE</p>
            <p>Semester: 3</p>

        </element-card>
    );
}

function Courses() {
    return (
        <element-card title="Courses" icon=" 📚 " theme="wind">

            <ul>
                <li>Advance Web Technology</li>
                <li>Database Management</li>
                <li>Internet of Things</li>
                <li>Data Structures</li>
            </ul>
        </element-card>
    );
}

function Contact() {
    return (
        <element-card title="Contact" icon=" 📞" theme="water">

            <p>Email: student@example.com</p>
            <p>Phone: 9876543210</p>
            <p>College: GSFC</p>
        </element-card>
    );
}

function Navbar({ setPage }) {
    return (
        <nav>
            <button onClick={() => setPage("home")}>Home</button>

            <button onClick={() => setPage("profile")}>Profile</button>

            <button onClick={() => setPage("courses")}>Courses</button>

            <button onClick={() => setPage("contact")}>Contact</button>
        </nav>
    );
}


function App() {

    const [page, setPage] = React.useState("home");

    function renderPage() {

        if (page === "home") {
            return <Home />;
        }

        if (page === "profile") {
            return <Profile />;
        }

        if (page === "courses") {
            return <Courses />;
        }

        if (page === "contact") {
            return <Contact />;
        }
    }


   return (
    <div className="container">

        <h1>Student Dashboard</h1>

        <Navbar setPage={setPage} />

        <div className="content">
            {renderPage()}
        </div>

    </div>
);
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

/* =========================================
   ❄ SNOWFALL JAVASCRIPT
   ========================================= */

const snowContainer = document.getElementById("snow-container");


function createSnowflake() {

    const snowflake = document.createElement("div");

    snowflake.className = "snowflake";

    snowflake.innerHTML = "❄";


    /*
       Random horizontal position
       0 to 100 means 0% to 100% of screen width
    */

    snowflake.style.left = Math.random() * 100 + "vw";


    /*
       Random size
       Between 12px and 30px
    */

    const size = 12 + Math.random() * 18;

    snowflake.style.fontSize = size + "px";


    /*
       Random opacity
       Between 0.3 and 1
    */

    const opacity = 0.3 + Math.random() * 0.7;

    snowflake.style.opacity = opacity;


    /*
       Random falling speed
       Between 5 and 11 seconds
    */

    const duration = 5 + Math.random() * 6;

    snowflake.style.animationDuration = duration + "s";


    /*
       Add snowflake to the page
    */

    snowContainer.appendChild(snowflake);


    /*
       Remove snowflake after animation finishes
    */

    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}


/*
   Create a new snowflake every 300 milliseconds
*/

setInterval(createSnowflake, 300);

/* =========================================
   ✦ NIGHT SKY SPARKLES
   ========================================= */

const sparkleContainer =
    document.getElementById("sparkle-container");


function createSparkles() {

    for (let i = 0; i < 25; i++) {

        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.innerHTML = "✦";


        /*
           Random position
        */

        sparkle.style.left =
            Math.random() * 100 + "vw";

        sparkle.style.top =
            Math.random() * 100 + "vh";


        /*
           Random size
        */

        const size =
            5 + Math.random() * 9;

        sparkle.style.fontSize =
            size + "px";


        /*
           Random animation delay

           This prevents all stars
           from blinking together.
        */

        sparkle.style.animationDelay =
            Math.random() * 3 + "s";


        sparkleContainer.appendChild(sparkle);
    }
}


createSparkles();
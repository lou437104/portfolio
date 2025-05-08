<>
    <script src="index.js" defer></script>
    <div>
        <div>
            <div id="month-name"></div>
            <div id="day-name"></div>
            <div id="date-number"></div>
            <div id="year-number"></div>
        </div>
    </div>
</>

const monthNameE1 = document.getElementById("month-name");
const dayNameE1 = document.getElementById("day-name");
const dateNumberE1 = document.getElementById("date-number");
const yearNumberE1 = document.getElementById("year-number");

function updateCalendar() {
    const date = new Date();
    console.log("Updating calendar:", date); // Debugging line
    monthNameE1.innerText = date.toLocaleString("en", { month: "long" });
    dayNameE1.innerText = date.toLocaleString("en", { weekday: "long" });
    dateNumberE1.innerText = date.getDate();
    yearNumberE1.innerText = date.getFullYear();
}

// Update the calendar every second
setInterval(updateCalendar, 1000);

// Initial call to display the current date immediately
updateCalendar();
// Rotating country names
const places = ["India", "France", "United States", "Germany"];
let index = 0;
const placeElement = document.getElementById("places");

function rotatePlaces() {
  placeElement.textContent = places[index];
  index = (index + 1) % places.length;
}
setInterval(rotatePlaces, 200);
rotatePlaces();

// Booking form validation
const form = document.getElementById("bookingForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const destination = document.getElementById("destination").value;
  const persons = document.getElementById("persons").value;
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);
  const desc = document.getElementById("description").value.trim();
  const today = new Date();

  if (!destination || !persons || !startDate || !endDate || !desc) {
    alert("Please fill all fields!");
    return;
  }

  if (startDate <= today) {
    alert("Start date must be a future date!");
    return;
  }

  if (endDate <= startDate) {
    alert("End date must be after start date!");
    return;
  }

  if (desc.length < 50 || desc.length > 500) {
    alert("Description must be between 50 and 500 characters!");
    return;
  }

  alert("Booking successful!");
  form.reset();
});

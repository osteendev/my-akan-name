
const form = document.getElementById('akanForm');
const resultDiv = document.getElementById('result');

const maleNames = ["omolo", "ochieng", "mark", "osteen", "mark", "victor", "brandson"];
const femaleNames = ["stacy", "Atieno", "samantha", "mary", "sheryyl", "jasmine", "precious"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const birthdate = document.getElementById('birthdate').value;
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!birthdate || !gender) {
    resultDiv.textContent = "Please fill in all fields.";
    return;
  }

  const date = new Date(birthdate);
  const day = date.getDay();

  const akanName = gender.value === 'male' ? maleNames[day] : femaleNames[day];
  const dayName = daysOfWeek[day];

  resultDiv.innerHTML = `You were born on a <strong>${dayName}</strong> and your Akan name is <strong>${akanName}</strong>.`;
});

function calculateAge() {
    let dobInput = document.getElementById("dob").value;

    if (!dobInput) {
        alert("Please select your date of birth");
        return;
    }

    let dob = new Date(dobInput);
    let now = new Date();

    let diff = now - dob;

    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let weeks = Math.floor(days / 7);

    let years = now.getFullYear() - dob.getFullYear();
    let months = (years * 12) + (now.getMonth() - dob.getMonth());

    document.getElementById("result").innerHTML = `
        <h3>Your Age:</h3>
        <p><b>Years:</b> ${years}</p>
        <p><b>Months:</b> ${months}</p>
        <p><b>Weeks:</b> ${weeks}</p>
        <p><b>Days:</b> ${days}</p>
        <p><b>Hours:</b> ${hours}</p>
        <p><b>Minutes:</b> ${minutes}</p>
        <p><b>Seconds:</b> ${seconds}</p>
    `;
}
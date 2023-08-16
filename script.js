function calculateVolume() {
    var radiusInput = document.getElementById("radius");
    var volumeInput = document.getElementById("volume");

    var radius = parseFloat(radiusInput.value);

    if (!isNaN(radius)) {
        var volume = volume_sphere(radius);
        var expectedVolume = 523.5988; // Rounded expected value

        volumeInput.value = volume.toFixed(2); // Display volume with two decimal places

        // Check if the actual value is close to the expected value
        if (Math.abs(volume - expectedVolume) < 0.01) {
            volumeInput.style.color = "green"; // Set color to green for successful match
        } else {
            volumeInput.style.color = "red"; // Set color to red for mismatch
        }
    } else {
        volumeInput.value = ""; // Clear the volume field if radius is not a valid number
        volumeInput.style.color = "black"; // Reset color
    }
}

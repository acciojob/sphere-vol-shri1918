function calculateVolume() {
    var radiusInput = document.getElementById("radius");
    var volumeInput = document.getElementById("volume");

    var radius = parseFloat(radiusInput.value);

    if (!isNaN(radius)) {
        var volume = volume_sphere(radius);
        volumeInput.value = volume.toFixed(4); // Display volume with four decimal places
    } else {
        volumeInput.value = "Invalid input"; // Display a message for invalid input
    }
}

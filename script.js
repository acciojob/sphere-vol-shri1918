// Function to calculate the volume of a sphere
function volume_sphere(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

// Function to update the volume field with calculated volume
function calculateVolume() {
    var radiusInput = document.getElementById("radius");
    var volumeInput = document.getElementById("volume");

    var radius = parseFloat(radiusInput.value);

    if (!isNaN(radius)) {
        var volume = volume_sphere(radius);
        volumeInput.value = volume.toFixed(2); // Display volume with two decimal places
    } else {
        volumeInput.value = ""; // Clear the volume field if radius is not a valid number
    }
}

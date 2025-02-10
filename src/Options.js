class initOptions {
    throughWallsInput = document.getElementById('through-walls');
    accelerationInput = document.getElementById('acceleration');

    constructor() {
        throughWalls = Number(localStorage.getItem('snakeThroughWalls') ?? 0);
        throughWallsInput.checked = !!throughWalls;
    }
}
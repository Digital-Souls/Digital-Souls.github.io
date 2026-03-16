// let proj = document.getElementById("projects");
// proj.addEventListener("focus", dropDown);

let dock = document.querySelector(".dock");
let toggleBtn = document.querySelector(".dock-toggle");

function showDock() {
    dock.classList.add("active");
    toggleBtn.style.display = "none";
}

function hideDock() {
    dock.classList.remove("active");
    toggleBtn.style.display = "block";
}

// shows dock when the mouse hovers over the arrow
toggleBtn.addEventListener("mouseenter", showDock);

document.addEventListener("click", closeDock);

document.addEventListener("mouseout", closeDock);

// Closes the dock if focus is taken off of the dock
function closeDock(event) {
    if (dock.classList.contains("active") && 
        !dock.contains(event.target) &&
        event.target !== toggleBtn) hideDock();
}

// Aligns the dock toggle to the middle of the dock
function positionToggle() {
    const dockRect = dock.getBoundingClientRect();
    toggleBtn.style.top = `${dockRect.top + dockRect.height / 2 - toggleBtn.offsetHeight /2}px`;
}

positionToggle();

// Making sure the dock toggle is aligned even after resizing
window.addEventListener("resize", positionToggle);
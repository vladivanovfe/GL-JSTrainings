var field = document.querySelector("input");

addEventListener("keypress", function(e) {
    if (e.key === "x", "X", "q", "Q", "w", "W") {
        field.disabled = true;
    }
});
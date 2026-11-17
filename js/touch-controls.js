
(function () {

    var buttons = document.querySelectorAll("#touch_controls button");

    buttons.forEach(function (button) {

        var direction = button.getAttribute("data-dir");

        function stopMoving() {
            if (window.Key) {
                window.Key[direction] = false;
            }
        }

        button.addEventListener("pointerdown", function (event) {
            event.preventDefault();

            if (!window.Key) return;

            window.Key[direction] = true;
            button.setPointerCapture(event.pointerId);
        });

        button.addEventListener("pointerup", stopMoving);
        button.addEventListener("pointercancel", stopMoving);
        button.addEventListener("lostpointercapture", stopMoving);

    });

    window.addEventListener("blur", function () {
        ["up", "down", "left", "right"].forEach(function (direction) {
            if (window.Key) {
                window.Key[direction] = false;
            }
        });
    });

})();
          

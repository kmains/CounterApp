"use strict";

var count = 0;
var addOne = function addOne() {
    count++;
    renderCountApp();
};
var minusOne = function minusOne() {
    count--;
    renderCountApp();
};
var resetCount = function resetCount() {
    count = 0;
    renderCountApp();
};

var appRoot = document.getElementById('app');

var renderCountApp = function renderCountApp() {
    var template2 = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { id: "counterAdd", className: "btn", onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { id: "counterSub", className: "btn", onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { id: "counterRest", className: "btn", onClick: resetCount },
            "Reset"
        )
    );
    ReactDOM.render(template2, appRoot);
};
renderCountApp();

const console = require("node:console");

function launchBrowser(browserName) {
    if (browserName === "Chrome") {
        console.log("Launching Chrome");
    } else {
        console.log("Launching " + browserName);
    }
}

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running smoke tests");
            break;
        case "sanity":
            console.log("Running sanity tests");
            break;
        case "regression":
            console.log("Running regression tests");
            break;
        default:
            console.log("Running smoke tests");
            break;
    }
}

// Call the functions
launchBrowser("Chrome");
runTests("smoke");
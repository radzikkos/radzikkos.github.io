function showTheory() {
    var theoryCore = document.getElementById("theoryCore");
    if (theoryCore.style.display === "block") {
        var moreTheory = document.getElementById("moreTheory");
        theoryCore.style.display = "none";
        moreTheory.style.display = "none";
        document.getElementById("button1").innerHTML = "Więcej informacji";
    } else {
        theoryCore.style.display = "block";
        theoryCore.style.whiteSpace = "pre-line";
    }
}

function showMoreInformation() {
    var moreTheory = document.getElementById("moreTheory");
    if (moreTheory.style.display === "block") {
        moreTheory.style.display = "none";
        document.getElementById("button1").innerHTML = "Więcej informacji";
    } else {
        moreTheory.style.display = "block";
        moreTheory.style.whiteSpace = "pre-line";
        document.getElementById("button1").innerHTML = "Mniej informacji";
    }
}

function showPlot() {
    var moreTheory = document.getElementById("plot");
    if (moreTheory.style.display === "block") {
        moreTheory.style.display = "none";
    } else {
        moreTheory.style.display = "block";
        moreTheory.style.whiteSpace = "inline";
    }
}


function mouseOverShowPlot() {
    document.getElementById("showPlot").style.background = "#eebfbf";
}

function mouseOutShowPlot() {
    document.getElementById("showPlot").style.background = "#52C3F0";
}

function mouseOverTheory() {
    document.getElementById("theory").style.background = "#eebfbf";
}

function mouseOutTheory() {
    document.getElementById("theory").style.background = "#52C3F0";
}

function mouseOver() {
    document.getElementById("canvas").style.background = "#eebfbf";
}

function mouseOut() {
    document.getElementById("canvas").style.background = "#ffffff";
}
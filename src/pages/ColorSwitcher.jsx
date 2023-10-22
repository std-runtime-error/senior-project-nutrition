import React from "react";

const ColorOptionA = () => {
    document.documentElement.style.setProperty("--screenBackground1", "#6b796c");
    document.documentElement.style.setProperty("--screenBackground2", "#525e52");
    document.documentElement.style.setProperty("--screenBackground3", "#475347");
    document.documentElement.style.setProperty("--screenBackground4", "#414a41");
    document.documentElement.style.setProperty("--screenBackground5", "#414a41");
    document.documentElement.style.setProperty("--windowBackground", "#ffffff");
    document.documentElement.style.setProperty("--windowBorder", "#525252");
    document.documentElement.style.setProperty("--textColor", "#15001d");
    document.documentElement.style.setProperty("--buttonBackground", "#c1d3c2");
    document.documentElement.style.setProperty("--buttonBorder", "#56695b");
    document.documentElement.style.setProperty("--buttonHighlight", "#39bb18");
    document.documentElement.style.setProperty("--correctAnswer", "#6de198");
    document.documentElement.style.setProperty("--incorrectAnswer", "#bc6262");

};
const ColorOptionB = () => {
    document.documentElement.style.setProperty("--screenBackground1", "black");
    document.documentElement.style.setProperty("--screenBackground2", "black");
    document.documentElement.style.setProperty("--screenBackground3", "black");
    document.documentElement.style.setProperty("--screenBackground4", "black");
    document.documentElement.style.setProperty("--screenBackground5", "black");
    document.documentElement.style.setProperty("--windowBackground", "black");
    document.documentElement.style.setProperty("--windowBorder", "#333333");
    document.documentElement.style.setProperty("--textColor", "#ffffff");
    document.documentElement.style.setProperty("--buttonBackground", " #333333");
    document.documentElement.style.setProperty("--buttonBorder", "black");
    document.documentElement.style.setProperty("--buttonHighlight", "#ffffff");
    document.documentElement.style.setProperty("--correctAnswer", "#287746");
    document.documentElement.style.setProperty("--incorrectAnswer", "#771d1d");
};
const ColorOptionC = () => {
    document.documentElement.style.setProperty("--screenBackground1", "grey");
    document.documentElement.style.setProperty("--screenBackground2", "grey");
    document.documentElement.style.setProperty("--screenBackground3", "grey");
    document.documentElement.style.setProperty("--screenBackground4", "grey");
    document.documentElement.style.setProperty("--screenBackground5", "grey");
    document.documentElement.style.setProperty("--windowBackground", "white");
    document.documentElement.style.setProperty("--windowBorder", "black");
    document.documentElement.style.setProperty("--textColor", "black");
    document.documentElement.style.setProperty("--buttonBackground", "#cccccc");
    document.documentElement.style.setProperty("--buttonBorder", "black");
    document.documentElement.style.setProperty("--buttonHighlight", "yellow");
    document.documentElement.style.setProperty("--correctAnswer", "yellow");
    document.documentElement.style.setProperty("--incorrectAnswer", "grey");
};

function ColorSwitcher() {  

    return (
    <div className="ColorSwitcher">
        <p><i class="fa-solid fa-palette fa-sm"></i>Color Switcher</p>
        <button onClick={() => ColorOptionA()}>Original</button>
        <button onClick={() => ColorOptionB()}>Dark</button>
        <button onClick={() => ColorOptionC()}>High Contrast</button>
    </div>
    ); 
};

export default ColorSwitcher; 
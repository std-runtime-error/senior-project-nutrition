import React from "react";

const ColorOptionA = () => {
    document.documentElement.style.setProperty("--screenBackground1", "#6b796c");
    document.documentElement.style.setProperty("--screenBackground2", "#525e52");
    document.documentElement.style.setProperty("--screenBackground3", "#475347");
    document.documentElement.style.setProperty("--screenBackground4", "#414a41");
    document.documentElement.style.setProperty("--screenBackground5", "#414a41");
    document.documentElement.style.setProperty("--windowBackground", "#ffffff");
    document.documentElement.style.setProperty("--windowBorder", "#525252");
    document.documentElement.style.setProperty("--textColor", "black");
    document.documentElement.style.setProperty("--buttonBackground", "#c1d3c2");
    document.documentElement.style.setProperty("--buttonBorder", "#56695b");
    document.documentElement.style.setProperty("--buttonHighlight", "#39bb18");
    document.documentElement.style.setProperty("--correctAnswer", "#4FD781");
    document.documentElement.style.setProperty("--incorrectAnswer", "#D15555");
    document.documentElement.style.setProperty("--accent", "#c1d3c2");
	document.body.style.backgroundImage = "url('img/background3.jpg')";
	document.body.style.backgroundSize = "104%";
	document.body.style.backgroundRepeat = "no-repeat";
};
const ColorOptionB = () => {
    document.documentElement.style.setProperty("--screenBackground1", "#111111");
    document.documentElement.style.setProperty("--screenBackground2", "#111111");
    document.documentElement.style.setProperty("--screenBackground3", "#111111");
    document.documentElement.style.setProperty("--screenBackground4", "#111111");
    document.documentElement.style.setProperty("--screenBackground5", "#111111");
    document.documentElement.style.setProperty("--windowBackground", "#111111");
    document.documentElement.style.setProperty("--windowBorder", "#444444");
    document.documentElement.style.setProperty("--textColor", "#eeeeee");
    document.documentElement.style.setProperty("--buttonBackground", " #1e1e1e");
    document.documentElement.style.setProperty("--buttonBorder", "grey");
    document.documentElement.style.setProperty("--buttonHighlight", "#ffffff");
    document.documentElement.style.setProperty("--correctAnswer", "#287746");
    document.documentElement.style.setProperty("--incorrectAnswer", "#771d1d");
	document.documentElement.style.setProperty("--accent", "white");
	document.body.style.backgroundImage = "url('img/background2.png')";
	document.body.style.backgroundSize = "104%";
	document.body.style.backgroundRepeat = "no-repeat";
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
	document.documentElement.style.setProperty("--accent", "black");
	document.body.style.backgroundImage = "url('img/background3.jpg')";
	document.body.style.backgroundSize = "104%";
	document.body.style.backgroundRepeat = "no-repeat";
};

function ColorSwitcher() {  

    return (
    <div className="ColorSwitcher">
			<p><i class="fa-solid fa-palette fa-sm"></i>&nbsp;Theme</p>
			
        <button onClick={() => ColorOptionA()}>Original</button>
        <button onClick={() => ColorOptionB()}>Dark</button>
        <button onClick={() => ColorOptionC()}>High Contrast</button>
    </div>
    ); 
};

export default ColorSwitcher; 
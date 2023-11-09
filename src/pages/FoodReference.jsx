import React from "react";

function FoodReference(props){
    // INPUT: props.game
    //      props.game determines which set of information to show, based on which game is being played.
    //      Possible values: {CalorieGameFruit}

    if (props.game === "CalorieGameFruit"){
        return (
            <div>
                <div className="foodReference">
                    <div className="foodReferenceHeader">
                        &nbsp;&nbsp;&nbsp; Food Reference Sheet &nbsp;&nbsp;&nbsp; <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div className="foodReferenceContents">
                        <i class="fa-solid fa-circle-info"></i> Use the following information to help you make an educated guess! 
                        <ul>
                            <li> Apple: 52 kcal </li>
                            <li> Banana: 89 kcal </li>
                            <li> Orange: 47 kcal </li>
                            <li> Grape: 62 kcal </li>
                            <li> Spaghetti: 221 kcal </li>
                            <li> McDonalds Burger: 250 kcal </li>
                        </ul>
                    </div>          
                </div>
            </div>
        ); 
    }
    else if (props.game === "CalorieGameJunk"){
        return (
            <div>
                <div className="foodReference">
                    <div className="foodReferenceHeader">
                        &nbsp;&nbsp;&nbsp; Food Reference Sheet &nbsp;&nbsp;&nbsp; <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div className="foodReferenceContents">
                        <i class="fa-solid fa-circle-info"></i> Use the following information to help you make an educated guess! 
                        <ul>
                            <li> Test: 52 kcal </li>
                            <li> Test: 89 kcal </li>
                            <li> Test: 47 kcal </li>
                            <li> Test: 62 kcal </li>
                            <li> Test: 221 kcal </li>
                            <li> Test : 250 kcal </li>
                        </ul>
                    </div>          
                </div>
            </div>
        ); 
    
    }
    //add more reference sheets here


    else { //if incorrect props.game value is passed
        return (
            <div>
                <div className="foodReference">
                    <div className="foodReferenceHeader">
                        Error (from Thomas): you need to pass a valid property to &lt;FoodReference/&gt;
                        Example: &lt;FoodReference game="CalorieGameFruit"/&gt;

                    </div>         
                </div>
            </div>
        );
    }
} 
export default FoodReference; 
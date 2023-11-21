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

    else if (props.game === "CalorieGameVegetable"){
        return (
            <div>
                <div className="foodReference">
                    <div className="foodReferenceHeader">
                        &nbsp;&nbsp;&nbsp; Food Reference Sheet &nbsp;&nbsp;&nbsp; <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div className="foodReferenceContents">
                        <i class="fa-solid fa-circle-info"></i> Use the following information to help you make an educated guess! 
                        <ul>
                            <li> Lettuce, 1 Cup: 8 kcal </li>
                            <li> Green Beans, 1 Cup: 44 kcal </li>
                            <li> Tomatoe, 1 Medium: 22 kcal </li>
                            <li> Zucchini, 1 Medium: 30 kcal </li>
                            <li> Artichoke, 1 Medium: 64 kcal </li>
                            <li> Cauliflower, 1 Cup: 25 kcal </li>
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
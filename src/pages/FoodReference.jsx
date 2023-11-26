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
                            <li> BigMac: 570 kcal </li>
                            <li> Chick-fil-A: 440 kcal </li>
                            <li> Large McFlurry: 803 kcal </li>
                            <li> Chocolate Chip Clif Bar: 260 kcal </li>
                            <li> Sausage McMuffin w/ Cheese: 400 kcal</li>
                            <li> Dunkin Glazed Jelly Stick: 540 kcal</li>
                            <li> Gordita Crunch Taco Bell: 500 kcal</li>
                        </ul>
                    </div>          
                </div>
            </div>
        ); 
    
    }

    else if (props.game === "CalorieGameCarbohydrate"){
        return (
            <div>
                <div className="foodReference">
                    <div className="foodReferenceHeader">
                        &nbsp;&nbsp;&nbsp; Food Reference Sheet &nbsp;&nbsp;&nbsp; <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div className="foodReferenceContents">
                        <i class="fa-solid fa-circle-info"></i> Use the following information to help you make an educated guess! 
                        <ul>
                            <li> White rice, 1/4 Cup: 160 kcal </li>
                            <li> Sweet potato, 1 Medium: 110 kcal </li>
                            <li> Potato, 1 Potato(148g): 110 kcal </li>
                            <li> White bread, 1 Slice: 98 kcal </li>
                            <li> Doughnut, 1 Medium: 190 kcal </li>
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
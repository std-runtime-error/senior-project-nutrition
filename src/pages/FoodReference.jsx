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
                            <li> Blueberries: 80 cal / cup </li>
                            <li> Kiwi:  42 cal / 2 fruit </li>
                            <li> Melon: 45 cal / cup </li>
                            <li> Pineapple: 43 cal / cup </li>
                            <li> Lime: 40 cal / 2 fruit </li>
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
                            <li> Lettuce, 1 Cup: 8 cal </li>
                            <li> Green Beans, 1 Cup: 44 cal </li>
                            <li> Tomatoe, 1 Medium: 22 cal </li>
                            <li> Zucchini, 1 Medium: 30 cal </li>
                            <li> Artichoke, 1 Medium: 64 cal </li>
                            <li> Cauliflower, 1 Cup: 25 cal </li>
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
                            <li> BigMac: 570 cal </li>
                            <li> Chick-fil-A: 440 cal </li>
                            <li> Large McFlurry: 803 cal </li>
                            <li> Chocolate Chip Clif Bar: 260 cal </li>
                            <li> Sausage McMuffin w/ Cheese: 400 cal</li>
                            <li> Dunkin Glazed Jelly Stick: 540 cal</li>
                            <li> Gordita Crunch Taco Bell: 500 cal</li>
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
                            <li> Oatmeal, 1 Cup: 166 cal </li>
                            <li> flour, 1 Cup: 455 cal </li>
                            <li> Fried rice, 1 cup: 238 cal </li>
                            <li> Mash potato, 1 Cup: 237 cal </li>
                            <li> Foot long sandwich: 910 cal </li>
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

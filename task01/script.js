/*
    Tucker Kent
    script.js
    19SP_INFO_2134_WW Online - JavaScript II
    Thoendel
    8 April 2020
*/

window.addEventListener("load", (event) => { //window event listener set to run this code on load event

    const firstName = document.getElementById("firstName"); //setting firstName input field location to constant
    const lastName = document.getElementById("lastName");//setting lastName input field location to constant
    const phoneNum = document.getElementById("telephoneNumber");//setting telephoneNumber input field location to constant

    document.addEventListener("submit", (e) => { //event listener on submit event
        let firstBool = false; //boolean variable for first name validation
        let lastBool = false; //boolean variable for last name validation
        let phoneBool = false; //boolean variable for phone number validation
        if(firstName.value === ""){ //checking value of first name -- if blank
            e.preventDefault(); // preventing submit action
            firstBool = true; //setting boolean to true for error message
        };
        if(lastName.value === ""){ // checking value of last name -- if blank
            e.preventDefault(); // preventing submit action
            lastBool = true; //setting boolean to true for error message
        };
        if (checkNum(phoneNum.value) === false){
            e.preventDefault(); // preventing submit action
            phoneBool = true; //setting boolean to true for error message
        };
        let errorMessage = errorGenerator(firstBool, lastBool, phoneBool); //generating error message with errorGenerator function
        if(errorMessage != ""){ //checks if the error message is blank
            alert(errorMessage); //alerts user of the errors
        };
        
    });

    function checkNum(phoneNumber) { //function to check if the phone number is valid against the RegExp 
        const pattern = new RegExp(/^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}$/); //this is the closest I could find on the site -- there is an error
                                                                                                         //if you place only one parenthesis. 
        if(pattern.test(phoneNumber)){ //if the pattern matches the regexp
            return true; //returns true
        }else { //if the pattern does not match the input number
            return false; //returns false
        }
    }

    function errorGenerator(first, last, phone){ //function to generate error message -- accepts the 3 boolean variables
        let errorString = ""; //setting the errorString to blank to keep from repeating on multiple submits
        if(first){ //if firstBool was true
            let firstMessage = "Error. First name cannot be left blank\n"; //creates error message
            errorString += firstMessage; //appends error message to string
        } 
        if(last){ //if lastBool was true
            let lastMessage = "Error. Last name cannot be left blank\n"; //creates error message
            errorString += lastMessage; //appends error message to string
        }
        if(phone){ //if phoneBool was true
            let phoneMessage = "Error. Phone number must be entered and have one of the following formats:\n1234567891\n(123) 456-7891\n123-456-7891"; //creates error message
            errorString += phoneMessage; //appends error message to string
        }
        return errorString; //returns the errorString
    }

});





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
function calculateTax (amount){ let taxValue=amount*0.1;
    return taxValue;
}

function convertToUpperCase (text) { return text.toUpperCase();}

function findMaximum (num1, num2) { if(num1>num2) {return num1;}
                                    else if (num2>num1) {return num2;}
                                    else { return num1;}
                                }


function isPalindrome (word) {  if (typeof word !=="string") {
                                    return false;
                                } else if (word.length===0 ||word.length===1){
                                    return true;
                                } else {
                                    let characters= word.split("");
                                    let reversedCharacters= characters.reverse();
                                    let reversedWord= reversedCharacters.join("");
                                    if(word === reversedWord){return true;}
                                        else {return false;}
                                }
                                

}

function calculateDiscountedPrice (originalPrice, discountPercentage) { if (discountPercentage <=0){return originalPrice;}
                                                                        else {let currentPrice= originalPrice- (discountPercentage*originalPrice/100);
                                                                            return currentPrice;
                                                                        }
}

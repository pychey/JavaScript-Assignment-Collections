// 10/10

/**
 * Check Palindrome using Recursion
 *
 * Task:
 * Convert the function to recursive function that checks if a given string is a palindrome.
 * A palindrome is a word that reads the same backward as forward.
 *
 *
 * Example:
 * Input:  "racecar"
 * Output: "Yes"
 *
 * Input:  "seyha"
 * Output: "No"
 */

function checkPalindrome(word , left = 0 , right = word.length-1){
    if (word[left] != word[right]){
        return 'NO';
    } else if (left >= right){
        return 'Yes';
    } else {
        left++;
        right--;
        return checkPalindrome(word,left,right);
    } 
}


// Test cases
console.log(checkPalindrome("racecar")); // Yes
console.log(checkPalindrome("seyha"));   // No

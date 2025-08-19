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

function checkPalindrome(word) {
    let isPalindrome = true;
    let left = 0;
    let right = word.length - 1;
    
    while(left <= right) {
        if (word[left] != word[right]) isPalindrome = false
        left ++;
        right --;
    }

    if (isPalindrome == true) return "Yes"
    else return "No"
}

function checkPalindromeRecursive(word, left = 0, right = word.length - 1) {
    if (left <= right) {
        if (word[left] != word[right]) return 'No'
        return checkPalindromeRecursive(word, left + 1, right -1);
    }

   return 'Yes';
}

// Test cases
console.log(checkPalindrome("racecar")); // Yes
console.log(checkPalindrome("seyha"));   // No

console.log(checkPalindromeRecursive("racecar")); // Yes
console.log(checkPalindromeRecursive("seyha"));   // No

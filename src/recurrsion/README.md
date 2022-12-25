Recursion

1. Multiply two numbers m & n using only addition & subtraction. Use Recursion.

2. Count number of zeros in an integer. Use Recursion.

3. Write a function that returns the sum of the digits of an integer.

4. Write a function that returns sum of all elements of an array.

5. Given k find the geometric Sum i.e. 1+1/2+1/4+1/8+...+1/(2^k)

6. Use recursion to check if a given String is palindrome or not.

7. Given a string, compute recursively(no loops) a new string where all
appearances of “pi” have been replaced by “3.14”. 

Eg :
changePi("xpix") → "x3.14x" 
changePi("pipi") → "3.143.14" 
changePi("pip")  →  "3.14p"

8. Given a string, compute recursively a new string where all the 'x'chars have been removed.

Eg :
a. noX("xaxb")→ "ab" 
b. noX("abc") → "abc"
c. noX("xx")  → ""

9. Write a recursive function to convert a String into the number it represents.

e.g. for input “1231” you should return integer 1231.

10. Given two Strings check if one is reverse of the other.

11. Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "#".

Eg :
a) pairStar("hello") →"hel#lo"
b) pairStar("xxyy") → "x#xy#y"
c) pairStar("aaaa")→"a#a#a#a"


12. Find a recursive solution to the towers of hanoi puzzle. You don’t have to write code for this. Read about towers of hanoi on wikipedia.


13. Find GCD of two numbers recursively.

14. Reverse a string

15. Write a recursive function – public String replace(String str, char ch1, char ch2) - that changes all occurrences of ch1 in str to ch2. For example, if str - "abcbad", and ch1 == 'a' and to == 'e', s would become "ebcbed".

16. Take a String input from user and return the String without the consecutive duplicates. For example, for input "aabccba" print "abcba". Use Recursion.

17. Given a string that contains a single pair of parenthesis, compute recursively a new string made of only of the parenthesis and their contents, so "xyz(abc)12345" yields "(abc)".

18. Given a string, return true if it is a nesting of zero or more pairs of parenthesis, like "(())" or "((()))".

nestParen("(a+(b+c))") → true 
nestParen("((()))")    → true 
nestParen("(((x))")    → false

19. Given a number find number of numbers greater than the given number with same digits.

- When all digits are distinct. Eg number - 1342 
- Duplicates can be there. Eg number – 15215


20. Print numbers from 1 to n in dictionary order. Eg for n = 1000 order will be

1,10,100,1000,101,102...109,11,110,111,112....119,12,120,121 and so on.

21. Return an array of all possible strings of length k that can be formed from a set of n characters.
Function prototype –returnStrings(String charSet, int k)

Eg : Input - returnStrings(“xyz”, 2)
Output – {“xx”, “xy”, “xz”, “yy”, “yz”, “yx”, “zz”, “zy”, “zx”}



22. Implement Binary Search.

23. Implement Merge Sort.

24. Given a String return all the subsequences.

a. Instead of returning print these i.e void printSubsequences
(String input,....).
For e.g. Input : “abc” Output : “”, a, b, c, ab, ac, bc, abc

25. Using the phone keypad, return all possible words that can be produced given input digits. For e.g. 23 --> “ad, ae, af, bd, be, bf, cd, ce, cf”

a. Instead of returning print all these

26. Return all permutations of a given string. 

a. Instead of returning print these.
For Eg – Input – “abc” , Output – “abc”, “bac”,”bca”,“acb”,”cab”,”cba”

27. Assume that value of a=1,b=2,c=3,d=4,....z=26. You are given a numeric string S. Write a program to find and print list of all possible codes that can be generated from the given string.

For e.g. Input : “1123”
Output : aabc, kbc, alc, aaw, kw

28. Return all subsets of an array
a. Instead of returning print all these

29. Given an array find all subsets of A, which sum to K. 
a. Instead of returning print all these

30. Suppose you have a string made up of only the letters 'a'and'b'.

Write a recursive function that checks if the string was generated using the following rules -

a. the string begins with an 'a'
b. each 'a' is followed by nothing or an 'a' or "bb" 
c. each "bb" is followed by nothing or an 'a'

31. A child is running up a staircase with n steps, and can hop either 1 step, 2 steps or 3 steps at a time. Implement a method to count how many possible ways the child can run up to the stairs.


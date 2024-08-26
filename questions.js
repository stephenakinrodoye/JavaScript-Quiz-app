const questions = [{
  number: 1,
  question: 'What is a data structure?',
  options: [
    'A programming language',
    'A collection of algorithms',
    'A way to store and organize data',
    'A type of computer hardware',
  ],
  answer: 'A way to store and organize data',
},
{
  number: 2,
  question: 'What are the disadvantages of arrays?',
  options: [
    'Index value of an array can be negative',
    'Elements are sequentially accessed',
    'Data structure like queue or stack cannot be implemented',
    'There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size',
  ],
  answer: 'There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size',
},
{
  number: 3,
  question: 'Which data structure is used for implementing recursion?',
  options: [
    'Stack',
    'Queue',
    'List',
    'Array',
  ],
  answer: 'Stack',
},
{
  number: 4,
  question: 'The data structure required to check whether an expression contains a balanced parenthesis is?',
  options: [
    'Queue',
    'Stack',
    'Tree',
    'Array',
  ],
  answer: 'Stack',
},
{
  number: 5,
  question: 'Which of the following is not the application of stack?',
  options: [
    'Data Transfer between two asynchronous process',
    'Compiler Syntax Analyzer',
    'Tracking of local variables at run time',
    'A parentheses balancing program',
  ],
  answer: 'Data Transfer between two asynchronous process',
}
]

/*


6. Which data structure is needed to convert infix notation to postfix notation?
a) Tree
b) Branch
c) Stack
d) Queue
View Answer: Stack

7. What is the value of the postfix expression 6 3 2 4 + – *?
a) 74
b) -18
c) 22
d) 40
View Answer: -18

8. What data structure would you mostly likely see in non recursive implementation of a recursive algorithm?
a) Stack
b) Linked List
c) Tree
d) Queue
View Answer: Stack

9. Which of the following statement(s) about stack data structure is/are NOT correct?
a) Top of the Stack always contain the new node
b) Stack is the FIFO data structure
c) Null link is present in the last node at the bottom of the stack
d) Linked List are used for implementing Stacks
View Answer: Stack is the FIFO data structure

10. The data structure required for Breadth First Traversal on a graph is?
a) Array
b) Stack
c) Tree
d) Queue
View Answer: Queue

11. The prefix form of A-B/ (C * D ^ E) is?
a) -A/B*C^DE
b) -A/BC*^DE
c) -ABCD*^DE
d) -/*^ACBDE
View Answer: a) -A/B*C^DE


12. Which of the following points is/are not true about Linked List data structure when it is compared with an array?
a) Random access is not allowed in a typical implementation of Linked Lists
b) Access of elements in linked list takes less time than compared to arrays
c) Arrays have better cache locality that can make them better in terms of performance
d) It is easy to insert and delete elements in Linked List
View Answer: b) Access of elements in linked list takes less time than compared to arrays


13. Which data structure is based on the Last In First Out (LIFO) principle?
a) Tree
b) Linked List
c) Stack
d) Queue
View Answer: Stack

14. Which of the following application makes use of a circular linked list?
a) Recursive function calls
b) Undo operation in a text editor
c) Implement Hash Tables
d) Allocating CPU to resources
View Answer: d) Allocating CPU to resources


15. What is a bit array?
a) Data structure that compactly stores bits
b) Data structure for representing arrays of records
c) Array in which elements are not present in continuous locations
d) An array in which most of the elements have the same value
View Answer: a) Data structure that compactly stores bits


16. Which of the following tree data structures is not a balanced binary tree?
a) Splay tree
b) B-tree
c) AVL tree
d) Red-black tree
View Answer: a) Data structure that compactly stores bits


17. Which of the following is not the type of queue?
a) Priority queue
b) Circular queue
c) Single ended queue
d) Ordinary queue
View Answer: b) Circular queue


18. Which of the following data structures can be used for parentheses matching?
a) n-ary tree
b) queue
c) priority queue
d) stack
View Answer: d) stack


19. Which algorithm is used in the top tree data structure?
a) Backtracking
b) Divide and Conquer
c) Branch
d) Greedy
View Answer: b) Divide and Conquer


20. What is the need for a circular queue?
a) easier computations
b) implement LIFO principle in queues
c) effective usage of memory
d) to delete elements based on priority
View Answer: c) effective usage of memory


21. Which of the following is the most widely used external memory data structure?
a) B-tree
b) Red-black tree
c) AVL tree
d) Both AVL tree and Red-black tree
View Answer: a) B-tree


22. Which of the following is also known as Rope data structure?
a) Linked List
b) Array
c) String
d) Cord
View Answer: Cord

23. What will be the output of the following program?

main()  
{  
   char str[]="san foundry";  
   int len = strlen(str);  
   int i;  
 
   for(i=0;i<len;i++)  
        push(str[i]);  // pushes an element into stack
 
   for(i=0;i<len;i++)  
      pop();  //pops an element from the stack
}
a) yrdnuof nas
b) foundry nas
c) sanfoundry
d) san foundry
View Answer: a) yrdnuof nas


24. Which of the following data structure can provide efficient searching of the elements?
a) binary search tree
b) unordered lists
c) 2-3 tree
d) treap
View Answer: c) 2-3 tree


25. What is an AVL tree?
a) a tree which is unbalanced and is a height balanced tree
b) a tree which is balanced and is a height balanced tree
c) a tree with atmost 3 children
d) a tree with three children
View Answer: b) a tree which is balanced and is a height balanced tree


26. What is the time complexity for searching a key or integer in Van Emde Boas data structure?
a) O (M!)
b) O (log M!)
c) O (log (log M))
d) O (M2)
View Answer: c) O (log (log M))


27. The optimal data structure used to solve Tower of Hanoi is _________
a) Tree
b) Heap
c) Priority queue
d) Stack
View Answer: Stack

28. What is the use of the bin data structure?
a) to have efficient traversal
b) to have efficient region query
c) to have efficient deletion
d) to have efficient insertion
View Answer: b) to have efficient region query


29. Which is the most appropriate data structure for reversing a word?
a) stack
b) queue
c) graph
d) tree
View Answer: stack

30. What is the functionality of the following piece of code?

public void display() 
{
	if(size == 0)
		System.out.println("underflow");
	else
	{
		Node current = first;
		while(current != null)
		{
			System.out.println(current.getEle());
			current = current.getNext();
		}
	}
}
a) display the list
b) reverse the list
c) reverse the list excluding top-of-the-stack-element
d) display the list excluding top-of-the-stack-element
View Answer: a) display the list


31. Which of the following is the simplest data structure that supports range searching?
a) AA-trees
b) K-d trees
c) Heaps
d) binary search trees
View Answer: b) K-d trees


32. What is the advantage of a hash table as a data structure?
a) easy to implement
b) faster access of data
c) exhibit good locality of reference
d) very efficient for less number of entries
View Answer: b) faster access of data


33. Which type of data structure is a ternary heap?
a) Hash
b) Array
c) Priority Stack
d) Priority Queue
View Answer: d) Priority Queue


34. What is a dequeue?
a) A queue implemented with both singly and doubly linked lists
b) A queue with insert/delete defined for front side of the queue
c) A queue with insert/delete defined for both front and rear ends of the queue
d) A queue implemented with a doubly linked list
View Answer: c) A queue with insert/delete defined for both front and rear ends of the queue


35. A data structure in which elements can be inserted or deleted at/from both ends but not in the middle is?
a) Priority queue
b) Dequeue
c) Circular queue
d) Queue
View Answer: Dequeue

36. What is the output of the following Java code?

public class array
{
	public static void main(String args[])
	{
		int []arr = {1,2,3,4,5};
		System.out.println(arr[2]);
		System.out.println(arr[4]);
	}
}
a) 4 and 2
b) 2 and 4
c) 5 and 3
d) 3 and 5
View Answer: d) 3 and 5


37. In simple chaining, what data structure is appropriate?
a) Doubly linked list
b) Circular linked list
c) Singly linked list
d) Binary trees
View Answer: a) Doubly linked list


38. Javascript has a built-in multiway decision statement known as   __________ 
a. condition 
b.switch* 
c. break 
d. continue 

39. ….refers to the execution of statement or a group  of statement or a group of statements of code for a fixed number of times. 
a. statement 
b. .function 
c. Method 
d. Iteration*

40……statement is used to jump out of loop.  
a. Break *
b. Respond 
c. continue 
d. react 

41. What it is necessary to skip statement block and take the control at the beginning for next iteration ……statement is used. 
a. break 
b. react 
c. response 
d. continue*  

42. The……keyword is used to create new object in Javascript. a. Next 
b.New *
c.Wend 
d. Loop 

43. An….can group data together with together with functions needed to manipulate it. 
a.Method 
b.Function 
c. Object* 
d.Response 

44.  All tangible things are known as 
a.Objects* 
b.Method 
c.function 
d.variable 

45…..property of DOM object returns URL of the HTML document 
a.SRC 
b. HREF 
c. LINK 
d. URL* 

46.Using ……method id property is useful for getting html element and changing its content. 
a.write 
b.URL 
c.innerHTML*
d.writeln 

47………object represents an open window in browser  
a.Window*
b.Math 
c.Array 
d.String 

48…….method of window object sets focus to the current window. 
a.open() 
b.blur() 
c.close() 
d.focus() *

49…….event occurs when user leaves or looses focus of   an element. 
a)onblur *
b)onchage 
c)onfocus 
d)onchange 

50……event occurs when user clicks submit button. 
a)onblur 
b)onchange  
c)onfocus 
d)onsubmit *

51……event occurs when page/image has been loaded 
a)onblur 
b)onload *
c)onsubmit 
d) onunload 

1. What is JavaScript?
a) JavaScript is a scripting language used to make the website interactive
b) JavaScript is an assembly language used to make the website interactive
c) JavaScript is a compiled language used to make the website interactive
d) None of the mentioned
View Answer: a) JavaScript is a scripting language used to make the website interactive


2. Which of the following is correct about JavaScript?
a) JavaScript is an Object-Based language
b) JavaScript is Assembly-language
c) JavaScript is an Object-Oriented language
d) JavaScript is a High-level language
View Answer: a) JavaScript is an Object-Based language


3. Among the given statements, which statement defines closures in JavaScript?
a) JavaScript is a function that is enclosed with references to its inner function scope
b) JavaScript is a function that is enclosed with references to its lexical environment
c) JavaScript is a function that is enclosed with the object to its inner function scope
d) None of the mentioned
View Answer: b) JavaScript is a function that is enclosed with references to its lexical environment


4. What will be the output of the following JavaScript code snippet?

<p id="demo"></p>
var txt1 = "Sanfoundry_";
var txt2 = "Javascriptmcq";
document.getElementById("demo").innerHTML = txt1 + txt2;
a) error
b) Sanfoundry_ Javascriptmcq
c) undefined
d) Sanfoundry_Javascriptmcq
View Answer: d) Sanfoundry_Javascriptmcq


5. What will be the output of the following JavaScript code?


<p id="demo"></p>
<script>
var js = 10;
js *= 5;
document.getElementById("demo").innerHTML = js;
</script>
a) 10
b) 50
c) 5
d) Error
View Answer: 50

6. Arrays in JavaScript are defined by which of the following statements?
a) It is an ordered list of values
b) It is an ordered list of objects
c) It is an ordered list of string
d) It is an ordered list of functions
View Answer: a) It is an ordered list of values



7. What will be the output of the following JavaScript code?

// JavaScript Comparison Operators
function compare()
{
    let a=2;
    let b=2.0;
    if(a==b)
        return true;
    else
        return false;
}
a) false
b) true
c) compilation error
d) runtime error
View Answer: true


8. What will be the output of the following JavaScript code snippet?

// JavaScript Equalto Operators
function equalto()
{
    let num=10;
    if(num==="10")
        return true;
    else
        return false;
}
a) false
b) true
c) compilation error
d) runtime error
View Answer: false


9. Will the following JavaScript code work?

var js = (function(x) {return x*x;}(10));
a) Exception will be thrown
b) Memory leak
c) Error
d) Yes, perfectly
View Answer: d) Yes, perfectly


10. Which of the following is not javascript data types?
a) Null type
b) Undefined type
c) Number type
d) All of the mentioned
View Answer: d) All of the mentioned



11. Where is Client-side JavaScript code is embedded within HTML documents?
a) A URL that uses the special javascript:code
b) A URL that uses the special javascript:protocol
c) A URL that uses the special javascript:encoding
d) A URL that uses the special javascript:stack
View Answer: b) A URL that uses the special javascript:protocol


12. What will be the output of the following JavaScript code snippet?

int a=1;
if(a!=null) // JavaScript not equal to Operators
    return 1;
else
    return 0;
a) 0
b) 1
c) compiler error
d) runtime error
View Answer: 1


13. Which of the following object is the main entry point to all client-side JavaScript features and APIs?
a) Position
b) Window
c) Standard
d) Location
View Answer: Window

14. What will be the output of the following JavaScript program?

function sanfoundry(javascript)
{
	return (javascript ?  “yes” :  “no”);
}
	bool ans=true;
console.log(sanfoundry(ans));
a) Compilation error
b) Runtime error
c) Yes
d) No
View Answer: Yes


15. What will be the output of the following JavaScript code?

// Javascript code snippet to compare the height
function height()
{	
    var  height = 123.56;
    var type = (height>=190) ? "tall" : "short";
    return type;
}
a) short
b) 123.56
c) tall
d) 190
View Answer: short


16. Which of the following can be used to call a JavaScript Code Snippet?
a) Function/Method
b) Preprocessor
c) Triggering Event
d) RMI
View Answer: a) Function/Method


17. What will be the output of the following JavaScript function?

<p id="demo"></p>
<script>
function javascript() 
{
// javacript abs() method
    document.getElementById("demo").innerHTML = Math.abs(-7.25);
}
</script>
a) -7.25
b) 7.25
c) -7
d) 7
View Answer: 7.25


18. What will be the output of the following JavaScript code?

var a=5 , b=1
var obj = { a : 10 }
// with keyword in JavaScript
with(obj)
{
      alert(b)
}
a) 1
b) 10
c) 5
d) Error
View Answer: 1


19. Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?
a) will work perfectly well on a Windows Machine
b) will be displayed as JavaScript text on the browser
c) will throw errors and exceptions
d) must be restricted to a Unix Machine only
View Answer: a) will work perfectly well on a Windows Machine


20. Which is a more efficient JavaScript code snippet?
Code 1 :

// for loop in javascript
for(var num=10;num>=1;num--)
{
           document.writeln(num);
}
Code 2 :

var num=10;
while(num>=1)
{
       document.writeln(num);
       num++;
}
a) Code 1
b) Code 2
c) Both Code 1 and Code 2
d) Cannot Compare
View Answer: a) Code 1


21. What will be the output of the following JavaScript code?

function printArray(a) 
{
     var len = a.length, i = 0;
     if (len == 0)
        console.log("Empty Array");
     else 
     {
// do-while loop in javascript
         do 
         {
             console.log(a[i]);
         } while (++i < len);
     }
}
a) Prints “Empty Array”
b) Prints 0 to the length of the array
c) Prints the numbers in the array in order
d) Prints the numbers in the array in the reverse order
View Answer: c) Prints the numbers in the array in order

22. What happens in the following JavaScript code snippet?

var js = 0;
while (js < 10) 
{
     console.log(js);
     js++;
}
a) An exception is thrown
b) The values of js are logged or stored in a particular location or storage
c) The value of js from 0 to 9 is displayed in the console
d) An error is displayed
View Answer: c) The value of js from 0 to 9 is displayed in the console


23. What will be the output of the following JavaScript code?

function range(int javascript)
{
	int a=5;
	for(int i=0;i<javascript;i++)
	{
		console.log(a);
	} 
}
range(3);
a) 2
b) 5
c) 555
d) error
View Answer: 555

24. Which of the following scoping type does JavaScript use?
a) Sequential
b) Segmental
c) Lexical
d) Literal
View Answer: Lexical

25. What is the basic difference between JavaScript and Java?
a) Functions are considered as fields
b) Functions are values, and there is no hard distinction between methods and fields
c) Variables are specific
d) There is no difference
View Answer: b) Functions are values, and there is no hard distinction between methods and fields


26. What will be the output of the following JavaScript code?

var quiz=[1,2,3];  
var js=[6,7,8];  
var result=quiz.concat(js);  
document.writeln(result);
a) 1, 2, 3, 6, 7, 8
b) 123
c) 1, 2, 3
d) Error
View Answer: a) 1, 2, 3, 6, 7, 8


27. Why JavaScript Engine is needed?
a) Both Compiling & Interpreting the JavaScript
b) Parsing the javascript
c) Interpreting the JavaScript
d) Compiling the JavaScript
View Answer: c) Interpreting the JavaScript


28. What will be the function of the following JavaScript program?

var scope = "js scope";
function checkscope() 
{
    var scope = "javascript scope"; 
    function f() 
    { 
         return scope; 
    }
    return f;
}
a) Returns the value in scope
b) Returns value null
c) Shows an error message
d) Returns exception
View Answer: a) Returns the value in scope


29. What will be the output of the following JavaScript code?

int a=0;
for(a;a<5;a++);
console.log(a);
a) 4
b) 5
c) 0
d) error
View Answer: 5

30. Which of the following methods/operation does javascript use instead of == and !=?
a) JavaScript uses equalto()
b) JavaScript uses equals() and notequals() instead
c) JavaScript uses bitwise checking
d) JavaScript uses === and !== instead
View Answer: d) JavaScript uses === and !== instead


31. What will be the result or type of error if p is not defined in the following JavaScript code snippet?

console.log(p)
a) Value not found Error
b) Reference Error
c) Null
d) Zero
View Answer: b) Reference Error


32. What is the prototype represents in the following JavaScript code snippet?

function javascript() {};
a) Not valid
b) Prototype of a function
c) Function javascript
d) A custom constructor
View Answer: d) A custom constructor


33. Why event handlers is needed in JS?
a) Allows JavaScript code to alter the behaviour of windows
b) Adds innerHTML page to the code
c) Change the server location
d) Performs handling of exceptions and occurrences
View Answer: a) Allows JavaScript code to alter the behaviour of windows


34. Which of the following is not a framework?
a) JavaScript .NET
b) JavaScript
c) Cocoa JS
d) jQuery
View Answer: JavaScript

35. Which of the following is the property that is triggered in response to JS errors?
a) onclick
b) onerror
c) onmessage
d) onexception
View Answer: onerror

36. What will be the output of the following JavaScript code?

function compare()
{
    let sanfoundry=1;
    let javascript="1";
    if(sanfoundry.toString()===javascript)
        return true;
    else 
        return false;
}
a) runtime error
b) logical error
c) true
d) false
View Answer: true

37. What will be the firstname and surname of the following JavaScript program?

var book = {
              "main title": "JavaScript", 
              'sub-title': "The Definitive Guide", 
              "for": "all audiences", 
              author: { 
                         firstname: "David", 
                         surname: "Flanagan" 
                      }
           };
a) objects
b) property names
c) properties
d) property values
View Answer: b) property names


38. Which of the following is not an error in JavaScript?
a) Missing of Bracket
b) Division by zero
c) Syntax error
d) Missing of semicolons
View Answer: b) Division by zero


39. Consider the following JavaScript statement containing regular expressions and check if the pattern matches.

var text = "testing: 1, 2, 3"; 
var pattern = /d+/g;
a) text.check(pattern)
b) pattern.test(text)
c) text==pattern
d) text.equals(pattern)
View Answer: b) pattern.test(text)


11. What will be the output of the following JavaScript code?

<p id="demo"></p>
var txt1 = "good";
var txt2 = "day";
document.getElementById("demo").innerHTML = txt1 + txt2;
a) good day
b) goodday
c) error
d) undefined
View Answer: goodday

12. What will be the output of the following JavaScript code?

<p id="demo"></p>
<script>
var x = 5;
var y = 2;
var z = x % y;
document.getElementById("demo").innerHTML = z;
</script>
a) 0
b) 1
c) 2
d) 5
View Answer: 1

13. What will be the output of the following JavaScript code?

<p id="demo"></p>
<script>
var x = 10;
x *= 5;
document.getElementById("demo").innerHTML = x;
</script>
a) 5
b) 10
c) 50
d) Error
View Answer: 50

14. What will be the output of the following JavaScript code?
<p id="demo"></p>
<script>
txt1 = “ one”;
txt1 += “two”;
document.getElementById("demo").innerHTML = txt1;
</script>
a) onetwo
b) one two
c) error
d) undefined
View Answer: onetwo

15. What will be the output of the following JavaScript code?
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = typeof "John" 
</script>
a) integer
b) number
c) string
d) error
View Answer: string

1. The web development environment (JavaScript) offers which standard construct for data validation of the input entered by the user.
a) Controlled loop constructs
b) Server page access
c) Client side Event
d) Permit server-side
View Answer: Controlled loop constructs

2. The main purpose of a “Live Wire” in NetScape is to ________
a) Create linkage between client side and server side
b) Permit server side, JavaScript code, to connect to RDBMS
c) Support only non relational database
d) To interpret JavaScript code
View Answer: Permit server side, JavaScript code, to connect to RDBMS

3. The script tag must be placed in __________
a) the head tag
b) the head or body
c) the title or head
d) after the body tag
View Answer: the head or body

4. A JavaScript program developed on a Unix Machine ________
a) will throw errors and exceptions
b) must be restricted to a Unix Machine only
c) will work perfectly well on a Windows Machine
d) will be displayed as a JavaScript text on the browser
View Answer: will work perfectly well on a Windows Machine

5. JavaScript is ideal to ________
a) make computations in HTML simpler
b) minimize storage requirements on the web server
c) increase the download time for the client
d) increase the loading time of the website
View Answer: minimize storage requirements on the web server
*/
# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## My Runtime Analysis

For my analysis, $n =$ the vertices of the input, and $m =$ the edges of the
input.  

First we iterate over all of the edges of the input to determine the vertices
of our input: $\Theta(m)$.  

Using the spread operator, and fill, we prep our vertexArray and vertexStatus.
Both of those take $\Theta(n)$  

Then we add $n$ empty arrays to our adjacency array: $\Theta(n)$.  

After that we build our adjacency array. For each edge, we perform two indexOf,
resulting in $\Theta(m \cdot 2n$.  

Which brings us to the BFS loop. For each node, $n$, we perform a handful of
constant time operations. Within the while loop, we use shift on our queue,
which requires all elements to be shifted left in the array, taking $\Theta(n).
Then we work through our edges, to find neighbors to our current node, taking
$\Theta(m). Multiplying these nested time complexities gives us $\Theta(n \cdot
n \cdot m)$ or $\Theta(n^2 \cdot m)$.  

Not accounting for lower order terms, or constants, our final time complexity
is $\Theta(n^2 \cdot m)$.  

## Sources

I watched the following video just as a refresher on minimum spanning trees:  
https://www.youtube.com/watch?v=ivcbaIhrcsE  

I watched the following video to help me conceptually, and with the pseudo
code of BFS for detecting cycles:  
https://www.youtube.com/watch?v=vXrv3kruvwE  

For time complexity of javascript array methods:  
https://dev.to/lukocastillo/time-complexity-big-0-for-javascript-array-methods-and-examples-mlg  
https://stackoverflow.com/questions/57032373/whats-the-time-complexity-of-javascript-spread-syntax-in-arrays  

## Handwritten Test Cases

![Notes_250420_125540](https://github.com/user-attachments/assets/c73955e7-2290-45db-b24c-8d973e6720b9)

## Plagiarism Notice

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

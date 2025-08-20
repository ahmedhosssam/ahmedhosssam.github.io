+++
title = 'The Tiger Book: 1 Introduction'
date = 2025-08-20T06:26:55+03:00
+++

A compiler is built from many modules (lexical analysis, parsing, semantic analysis, IR translation, optimization, code generation, etc). Each module does a specific job, but they must work together. The interfaces between them are just as critical as the algorithms inside the modules.

Any large software system is much easier to understand and implement if the designer takes care with the fundamental abstractions and interfaces.

For a compiler, it's better to break it to many pieces (modules). This allows for reuse of the components. For example, to change the target-machine for which the compiler generates machine code, you just need to change Frame Layout and Instruction Selection modules.

I finished implementing the interpreter of this chatper, it was very easy and straightforward once I figured out what he wanted exactly.

What he wants is to just traverse on the provided tree and evaluate every node based on its type.
There are two types of structures that you need to implement, statements and expressions. A statement doesn't return a value, it updates the environment (by assigning the value of an expression for a variable for example) or prints the value of a provided expression.
An expression returns a value, in this simple interpreter it only returns integers. And expression has many shapes, may be an expression will just return the value of a variable `A_IdExp("a")`, may be it literally returns an integer `A_NumExp(1)`, may be it evaluates two expressions and then performs a mathematical operation on them:
```cpp
A_OpExp(A_IdExp("a"), A_minus, A_NumExp(1))
```
, and then it returns the value of the whole expression.

And here comes the recursion. When you evaluate an expression, it could contains another expressions, so you will find yourself building a tree and traversing it until you reach a leaf, which should be a non-composite value (an integer), and goes up while returning values until you finish evaluating all of the expressions and executing all of the statements.

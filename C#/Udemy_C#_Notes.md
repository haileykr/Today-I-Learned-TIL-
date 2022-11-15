# C# Basics for Beginners: Learn C# Fundamentals by Coding

## Udemy
## Mosh Hamedani

## 1. Introduction
### 5. Before you get started
1. Learning paths    
   * This course is part of a series of courses that help you master C#. Once you're proficient in C#, then you can focus on specific areas such as web, mobile and game development depending on what your goals and interests are. 
   * Here is the learning path that I recommend to you to get the most out of my courses: 

2. Essentials
   * These courses are absolutely essential and you should take them in the following order. Do not skip any of them! 
   * C# Basics for Beginners (this course) 
   * C# Intermediate: Classes, Interfaces and Object-oriented Programming
   * C# Advanced

3. Mobile Development 
   * Once you master C#, if you'd like to learn how to build mobile apps with C#, you can take the following course: 
   * Xamarin Forms 

4. Web (Back-end) Development 
   * Alternatively, if you'd like to focus on web application development and become a back-end developer, take the following courses:

   * Entity Framework 6
   * ASP.NET MVC 5

5. Optional but Recommended
   * If you'd like to become a serious developer, I highly encourage you to take the following courses too. These courses help you become a better developer and write better code and in less time: 

   * Double Your Coding Speed
   * Clean Code: The Art of Writing Beautiful C# Code
   * Unit Testing C# Code 

## 2. Introduction to C# and .NET Framework
### 7. C# vs. .NET
   * C# is a programming language
   * .NET is a framework for building applications on Windows

   * .NET
   : CLR (common language runtime)
   : class library

### 8. What is CLR?
   * before C#...
       * C/C++ => (compile) => Native COde
       * native code compiled on (A) OS will not run on (B) OS
   * to overcome this..
       * ex. Java => (compile) => ByteCode  (intermediate code)
       * C# => (compile) => IL Code (Intermediate Language Code)
           * independent of the computer where it's running
       
       * IL Code => (CLR) => Native Code
           * CLR is essentially an application that is sitting in the memory, whose job is to translate the IL Code into machien code
           * this process is called "Just-In-Time Compilation (JIT) -  the compilation of IL code to native machine code at runtime"

### 9. Architecture of .NET Applications
   * An application consists of building blocks called Classes
   * Classes collaborate with each other at runtime 
   * as a result the application provides some functionality

   * Class : Data + Methods

       * ex. class Car : Make, Model, Color + Start (), Move ()

   * Namespace - A container for related classes
   * Assembly (DLL or EXE) - container for namespaces, a single unit of deployment of .NET applications, a file in the form of a executable or a dll which contains one or more namespaces and classes

   * Application consists of several assemblies

### 10. Getting Visual Studio
   * Community / Express edition should be good enough

### 11. Our First C# App
   * Console App : without GUI, simple

```c#
using System; // importing other namespaces -  system is in .NET fw
using System.Collections.Generic; // generic, used to work with list collections
using System.Linq; // data
using System.Text; // text, coding
using System.Threading.Tasks; // for multitherad apps

namespace hello_world
{
    class Program  // default
    {
        static void Main(string[] args) // entrypoint
        {
        }
    }
}
```
   * case-sensitive

   * ctrl+x to remove a line OR alt+enter to clean up
   * ctrl+F5 to run

### 12. What is ReSharper?
   * ReSharper is a commercial plug-in for Visual Studio that you see I use in my courses all the time. You don't need to have ReSharper to take my courses, but having it installed, helps you write code a lot faster with less work.

   * You can get a free 30-day trial version of ReSharper if you like to use it while watching my courses. Based on Udemy's policies, I'm not allowed to add the link to ReSharper here. So I leave it to you to download and install it


### 13. Summary
1. C# vs .NET
   * C# is a programming language, while .NET is a framework. It consists of a run-time environment (CLR) and a class library that we use for building applications.

2. CLR
   * When you compile an application, C# compiler compiles your code to IL (Intermediate Language) code. IL code is platform agnostics, which makes it possible to a take a C# program on a different computer with different hardware architecture and operating system and run it. For this to happen, we need CLR. When you run a C# application, CLR compiles the IL code into the native machine code for the computer on which it is running. This process is called Just-in-time Compilation (JIT).

3. Architecture of .NET Applications
   * In terms of architecture, an application written with C# consists of building blocks called classes. A class is a container for data (attributes) and methods (functions). Attributes represent the state of the application. Methods include code. They have logic. That's where we implement our algorithms and write code.

   * A namespace is a container for related classes. So as your application grows in size, you may want to group the related classes into various namespaces for better maintainability.

   * As the number of classes and namespaces even grow further, you may want to physically separate related namespaces into separate assemblies. An assembly is a file (DLL or EXE) that contains one or more namespaces and classes. An EXE file represents a program that can be executed. A DLL is a file that includes code that can be re-used across different programs

## 3. Primitive Types and Expressions
### 15. Variables and Constants
   * Variable : a name given to a storage location in memory
   * Constant: an immutable value

```c#
int number;
int Number = 1;
const float Pi = 3.14f;
```
   * Identifiers: cannot start with numbers, white space, reserved words
   * Naming Conventions
       1. Camel Case: firstName
       2. Pascal Case: FirstName
       3. Hungarian Case: strFirstName (not recommended)

       * preferred - Camel Case for Local Variables and Pascal Case for Constants

   * Primitive Types (besides few that are hardly ever used)
   1. Integral Numbers
      * byte | Byte | 1byte | 0 to 255
      * short | Int16 | 2bytes | -32768 to 32767
      * int | Int32 | 4bytes | -2.1B to 2.1B
      * long | Int64 | 8bytes | ...
   2. Real Numbers
      * float | Single | 4bytes | -3.4 x 10^38 to 3.4 x 10^38
      * double | Double | 8bytes | ...
      * decimal | Decimal | 16bytes | -7.9 x 10^28 to 7.9 x 10^28
      1. Character 
      * char | Char | 2bytes | Unicode Characters
   3. Boolean
      * bool | Boolean | 1byte | True/False

      * Note. For Real Numbers
          * double is default
          * `float number = 1.2f; // gotta specify`
          * `decimal number =1.2m; // gotta specify`

   * Non-primitive types
       * String | Array | Enum | Class

### 16. Overflowing
```c#
byte number = 255;
number = number + 1; //0
```
* C# does not automatically prevent overflow
```c#
checked 
{
    byte number = 255;
    number = number + 1;
}
```

### 17. Scope
* Scope - where a variable/constant has meaning
```c#
{
    byte a = 1;
    {
        byte b = 2;
        {
            byte c = 3;
        }
    }
}
```

### 18. Demo: Variables and Constants
* ctrl + shift +B to compile
* ctrl + F5 to run
```c#
using System;

namespace Variables
{
    class Program
    {
        static void Main(string[] args)
        {
            byte number = 2;
            int count = 10;
            float totalPrice = 20.95f;
            char character = 'A';
            string firstName = "Mosh";
            bool isWorking = false;
            const float Pi = 3.14f;
            var variableTest = 1;

            Console.WriteLine(number);
            Console.WriteLine(count);
            Console.WriteLine(totalPrice);
            Console.WriteLine(character);
            Console.WriteLine(firstName);
            Console.WriteLine(isWorking);
            Console.WriteLine(Pi);
            Console.WriteLine(variableTest);
            Console.WriteLine("{0}{1}", byte.MinValue,  byte.MaxValue);
        }
    }
}
```
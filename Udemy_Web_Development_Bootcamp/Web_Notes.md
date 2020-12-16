# 1. Course Orientation
#### 5.Course Change Log
- https://www.notion.so/Web-Developer-Bootcamp-ChangeLog-45e3eab6be724c5f9a4b83c01044e126

<br>

#### 7. Accessing Resources
- Resources: Codes, Slides, and Others

<br>

#### 8. Joining the Community Chat & Groups
- Use the discussion boards on Udemy, participate both as an "asker" and "answerer"
- Join the discord chat - https://discord.com/invite/CUga7jX
- Join the fb group - https://www.facebook.com/groups/officialwebdeveloperbootcamp/
- Youtube Channel of Colt - https://www.youtube.com/channel/UCrqAGUPPMOdo0jfQ6grikZw

<br>

## 2. An Introduction to Web Development
#### 11. What Matters in this Section?
- Crucial
: How The Internet works (in 5 minutes)
: Understanding roles of HTML, CSS, and JS

- Important
: Intro to Web
: HTTP Request / Response Cycle
: How the Internet would work (in 5 mins)

- Nice to Have
: VSCode Theme

<br>


#### 12. The Internet in 5 Minutes
: the global network of networks
: The Internet is the infra that carries stuff like - email, the web, file sharing, online gaming, streaming services

<br>

#### 13. Intro to the Web
- The Internet: Global network of interconnected computers which communicate via TCP / IP. Network of networks
- The Web: The World Wide Web is an information system where documents and other resources are available over the Internet. Documents are transferred via HTTP.

- HTTP : Foundation of communication on the WWW
: "Hyper Text Transfer Protocol"
: Request ~> I would like this information please
: Response ~> Ok, here you go!

- Web Server
: a computer* that can satisfy requests on the Web
: * "server" is also used to refer to the software running on the computer

- Client
: The computer that accesses a server

<br>

#### 15. Front-End and Back-End
- Front-end: what's shown to the user
- Back-End: more of background, server-stuff

<br>

#### 16. What do HTML / CSS / JS do?
- ex. "The Purple Dino Danced"
- Purple: CSS - adjectives
- Dino: HTML - nouns
- Danced: JS - verbs

<br>

#### 17. Setting Up Our Developer Environment
- Chrome
- VS Code
- Spectacle for MAC (for screen split)

<br>

#### 18. OPTIONAL VSCode Theme
- Settings
- Extensions

<br>

## 3. HTML: The Essentials
#### 19. What Matters in This Section
- Crucial
: Paragraph Elements
: HTML Headings
: HTML Lists
: HTML Anchor Tags
: HTML Images
: (yellow) HTML Boilerplate

- Important
: Using MDN as a Resource
: The Chrome Inspector (may use Firefox)

- Nice To Have
: VSCode Formatting On Save

<br>

#### 20. Introduction to HTML
- "MARKUP LANGUAGE"!
: describing the paper's structure to someone over the phone so that they could reproduce it?
: ex. "Make this part bold / a link / a paragrph !"

- HTML ELEMENTS
: To write HTML, we pick from a set of standardized Elements that all browsers recognize
: Common Elements include:
~> <p> element - represents a paragraph of text
~> <h1> element - represents the main header on a page
~> <img> element - embeds an image
~> <form> element - represents a form

- HTML TAGS
: we create elements by writing *tags*
: Most (but not all) elements consist of an opening and closing tag

<br>

#### 21. Our Very First HTML Page
- ex. "chickens.html"

<br>

#### 22. TIP: Mozilla Developer Network
- https://developer.mozilla.org/en-US/
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element
- Open forum developed by developers

- ex. google 'html form mdn'

<br>

#### 23. Paragraph Elements
- <p></p>

<br>

#### 24. Heading Elements
- h1 to h6
- <hn>, </hn>
- Some Rules **
: We should *only* have *one h1* at most per page
: never have ex. h4 without having h3

- note. lorem then tab can give you some Lorem Ipsum

<br>

#### 25. Chrome Inspector
- Ctrl + Shift + I or Right-Click

<br>


#### 26. HTML BoilerPlate
- HTML Boilerplate or Skeleton: "standard"
: <!DOCTYPE html>
  <html>
  <head>
     <title>My First page</title>
  </head>
  <body>
     <!--Content Goes Here -->
  </body>
  </html>
: <!DOCTYPE html>~> 'wanna use the latest HTML!'
: <html> ~> this element represents the root (HTML)
~> thus also called as the *root element* and all other elements must be descendants of this
~> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html

: <head> ~> the document Metadata (Header) element
~> contains the machine-readable info (metadata)about the document, like its title, scrips, and style sheets!!

: <title> ~> defines the doc's title that is shown in a browser's title bar or a pages tab

: <body> ~> represents all the contents of the doc

: ! then tab ~> provides the boilerplate

<br>

#### 27. VSCode Tip: Auto-format
- In VSCode, launch the command palette (ctrl + shift + p)
- search for "format document" or
- use shift + alt + f
~> then automatically formatted!

<br>

#### 28. List Elements
- ul: unordered list
  ol: ordered list
  li: list item
- TIP: ctrl + alt + down ~> can copy & paste

<br>

#### 29. Anchor Tags
- <a href = "URL"></a>
: href = attribute here

<br>

#### 30. Images
- <img src = "" alt = "">

<br>


## 4. HTML: Next Steps and Semantics
#### 32. What Matters In This Section
- Crucial
: Understanding what HTML5 Actually is
: Block vs. Inline Elements
: <span> and <div> elements
: Semantic Elements (yellow)

- Nice To Have
: VSCode Tip: Emmet
: <sub> elements
: <hr> elements
: <sup> elements
: <br> elements

<br>

#### 33. What Exactly is HTML5?
- HTML Specification : https://html.spec.whatwg.org/
- "HTML5 MDN" : https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5
> HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications. This set is sometimes called HTML5 & friends and often shortened to just HTML5.
- it is not just a version! you "don't" disable HTML5.
- <!DOCTYPE html> specifies that we are implementing HTML5, although a different tag won't do much neither ~> still will implement HTML5 with different tags!

<br>

#### 34. Block vs. Inline Elements - Divs and Spans
- Inline elements ift in alongside other elements
- Block level elements take up a whole "block" of space
- ex. <p>: block elements
  ex. <a>: inline elements

- divs and spans: generic containers
- **<div>**: The Content Division Element
> The HTML Content Division element (<div>) is the generic container for flow content. It has no effect on the content or layout until styled using __CSS__
: generic container that holds things and group them together
: *block-level* ele.
- **<span>**: another generic container
: *in-line* ele.
> The HTML <span> element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline element

<br>

#### 35. An Odd Assortment of Elements: HR, BR, SUp, & Sub
- **<hr>**: The Thematic Break (Hozirontal Rule) Element
- **<br>**: The line break
- **<sup>**: The Superscript Element
- **<sub>**: The Subscript Element

<br>

#### 36. Entity Codes
- HTML Entities: Special code or sequence we can use INSIDE the HTML, that will result in different characters
- Start with an ampersand and end with a semicolon
- Used to display reserved characters, that normally would be invalid
- Also used in place of difficult-to-type characters!
- The browser interprets them and renders the correct character instead.
- https://dev.w3.org/html5/html-author/charref
- ex. html entity less than: %lt;
                        or &#60;
  ~> < and > are not recommended to be typed directly as they can confuse syntax
- either entity name or entity number

<br>


#### 37. Semantic Markup
- Semantic: "relating to meaning"
: 'what purpose or role does that HTML element have?'
- a bunch of <div>s vs. <main>/<header>/<section>...
~> serve the same functions but the latter is a lot easier to figure out
- no semantics: crawling is hard, less friendlier to other apps, less accessible, and easier to work on together

<br>


#### 38. Playing with Semantic Elements
- Instead of DIVs... Use more specific elements like
: <section>
: <article>
: <nav>
: <main>
: <header>
: <footer>
: <aside>
: <summary>
: <details>

- **<main>** : dominant content of the <body> of a document 
: should be unique to the document. doens't affect the formatting and is strictly informative
: content that is repeated (ex. sidebars, nav links, copyright info, site logos, and search forms)shouldn't be included unless search form is the main function

- **<section>**: a standalone section - which doens't have a more specific semantic element to represent it
: when it seems more reasonable to use section than div

- **<article>**: a self-contained composition in a document, page, application, or site, which is intended to be independently distributale or reusable (E.g. in syndication)
: ex. forum post, magazine, newspaper article, and blog entity

- **<aside>**: a portion of a document whose content is only indirectly related to the document's main content
: ex. sidebars, or call-out boxes

- **<header>**: introductory content
: ex. nav

- **<footer>**: footer for its nearest sectioning content or sectioning root element

- **<time>**: specific period in time
: wrapping around date or time

- **<figure>**: Figure With Optional Caption, self-contained content
: <figcaption> ~> optional caption
: ex. <figure>
        <img src = "" alt="">
        <figcaption>Optional Caption</figcaption>
      </figure>

- **<abbr>**: an abbreviation or an acronym
: optional *title* element to provide an expansion or description for the abbreviation
: ex. <abbr title = "Cascading Style Sheets">CSS</abbr>

- **<data>**: links a given content with a machine-readable translation
: ex. <data value = "398">Mini Hotdog</data>

<br>

#### 39. Screen Reader Demonstration
- Windows Narrator: Windows + Ctrl + Enter

<br>

#### 40. VSCode Emmet
- Emmet: A plugin which helps write HTML and CSS very quickly
- Emmet Documentation - docs.emmet.io/cheat-sheet
- Built-in to VSCode!!

- ex. ul>li*2

<br>



## 5. HTML: Forms & Tables
#### 41. What Matters In This Section
- Crucial
: Table Basics - <table>, <tr>, <td>, and <th>
: Form Element Basics
: Button Elements
: Labels
: Common Input Types

- Important
: Table Sections - <thead>, <tfoot>, <tbody>
: Range & Text Areas
: Form Validations

- Nice To Have
: Table Colspan and Rowspan

<br>

#### 43. Introducing to HTML Tables
- What are tables?
: Tables are structured set of data, made up of rows and columns. They can be a great way of displaying data clearly.

- Early Usage
: In the early days of the web, tables were commonly used to create page layouts. Today, you should only use the table elem. only when you're creating an actual data table!

- Lots of Elements
: To create a table, 5 - 10 elements are needed!

<br>

#### 44. Tables - TR, TD, and TH Elements
- <td>: The Table Data Cell element, defines a single cell
- <tr>: Table Row
- <th>: Table Header 
- ex. <table>
        <caption>Heaviest Birds</caption>
        <tr>
          <th>Species</th>
          <th>Weight</th>
          <th>Walk?</th>
        </tr>
        <tr>
          <th>Ostrich</td>
          <td>104kg (230 lb)</td>
          <td>Yes.</td>
        </tr>
      </table>




<br>


#### 45. Tables - Thead, Tbody, and Tfoot Elements
- **<tbody>**: encapsulates a set of table rows, indicating that they comprise the body of the table
- **<thead>**: Table Head
- **<tfoot>**: Table Footer
- wrap around

<br>

#### 46. Tables - Colspan and Rowspan
- columns and rows spanning multiple 
- ex. <th rowspan="2">
  ex. <tr colspan="5">
  
<br>


#### 47. Form Element
- The <form> element itself is a shell or a container that doesn't have any visual impact
- We then fill the from with a collection of inputs, checkboxes, buttons, etc.
: "represents a document section containing interactive controls for submitting information"
: *action* attribute specifies WHERE the form data should be sent
: *method* attribute specifies which HTTP method should be used

- <form action="/tacos"></form>
- once form is submitted, an HTTP request is sent as well
- form groups together input

<br>




#### 48. Common Input Types
- **<input>**
: The input element is used to create a *variety of different form controls*
: We have 20+ possible types of  inputs, ranging from date pickers to checkboxes
: The *type*attribute is where the magic happens. Changing *type* dramatically alters the input's behavior and appearance.

: ex. <input type = "text" placeholder = "username">
: ex. <input type = "password"  placeholder = "password">
: ex. <input type = "color">
: ex. <input type = "number">
: ex. <input type = "time">

<br>

#### 49. All-Important Label
- Label is directly linked to the input
- not only good for screen reader and relevant purposes, but also easily selectable by being click-able!

- Use *id* and *for*
: give an *id* to the input, and use the same name at *for* attribute of the label
: Note - *id* should be unique

- it is also possible to nest the input inside a lable and linking using for and id attributes is not required

<br>

#### 50. HTML Buttons
- ex. <button>Submit</button>

- if the button is INSIDE the form, the default behavior will be  to SUBMIT the form!

- ex. <button type="button">###</button>
~> won't do anything
- ex. <button type = "submit">###</button>
~> default and submits something

- <input type="submit" value = "Submit!!!"> also creates the submit button.

<br>


#### 51. The Name Attribute
- attribute to input
: ex. <form action = "/tacos">
          <input name = "username" type="Text">
      </form>
      ~> Typing "Username" will result in "~/tacos?username=Username"

: ex. "~/baemins?username=Username&password=qwerty5"

<br>

#### 52. Hijacking Google & Reddit's Search
- If we follow the same search pattern with the website, we can hijack the search page!
: ex. <form action = "https://www.youtube.com/results">
        <input type = "text" name="search_query">
        <button>Click Me!</button>
      </form>

    
<br>

#### 53. Radio Buttons, Checkboxes & Selects
- ex. <div>
        <input type = "checkbox" id = "scales" name = "scales" checked>
        <label for = "scales">Scales</labe>
      </div>

- Radio Button: can only check one option
: ex. <label for="xs">XS:</label>
      <input type="radio" name="size" id="xs" value="xs">
      <label for="s">S:</label>
      <input type="radio" name="size" id="s" value = "s">
      <label for="m">M:</label>
      <input type="radio" name="size" id="m" value = "m"

- Select: drop-down
: select and option elements
: ex. <div>
        <label for="meal">Please Select an Entree</label>
            <select name="meal" id="meal">
                <option value="fish">Fish</option>
                <option value="veg">Vegetarian</option>
                <option value="steak">Steak</option>
            </select>


<br>

#### 54. Range & Text Area
- Two more types
- Range
: ex. <p>
          <label for="cheese">Amount of Cheese</label>
          <input type="range" id = "cheese" min="1" max = "10" value="1.5"step = "0.5" name="cheese_level">
      </p>

- Text Area: Multi-line Textbox
: ex. <label for="requests">Any Special Requests?</label>
      <textarea id="requests" rows = "10" name = "requests" cols = "25" placeholder = "Type something"></textarea>

<br>

#### 55. HTML5 Form Validations
- giving some constraints!
- lots of validations are enabled using JS
- but there is something called 'server-side validation' (built-in validation)

- **required** : the boolean *required* attribute which, if present, indicates that the user must specify a value for the input before the owning form can be submitted
: ex. <h2>Validations Demo</h2>
      <form action="/demo">
          <label for="first">Enter the first name</label>
          <input type="text" id = "first" required name = "first">
          <button>Submit!!</button>
      </form>
  
- setting min(length), max(length)
: ex. <label for="email">Email</label>
      <input type="text" id = "email" name= "email" minlength = "5" maxlength = "20" required>

- pattern: for regular expressions

- type: email, url, tel (telephone) and so on

- NOTE: id cannot start with a number!!

<br>

## 6. CSS: The Very Basics
#### 58. What Matters In This Section
- Crucial
: Conceptual Overview of CSS
: Basic CSS Syntax
: Including Styles Correctly
: Color Systems: RGB, Hex, etc.
: font-family property

- Important
: Common Text Properties

<br>


#### 59. What is CSS?
- What is it? : CSS is a lanaguage for describing how documents are presented visually - how they are arranged and styled
- What does it stand for? : 'Cascading Style Sheets'


- CSS Rules
: (almost) everything you do in CSS follows this basic pattern
ex. selector {
      property: value;
    }
ex. h1 {
      color: purple;
    }
ex. img {
      width: 100px;
      height: 200px;
    }
ex. # select every other text input
    input[type = "text"]: nth-of-type(2n){
      border: 2px solid  red;
    }


- MDN: CSS Reference!
: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

<br>


#### 61. Including Styles Correctly
- Including Styles
1. Inline Styles : You can write your styles directly inline on each element, but this is **NOT A GOOD IDEA** for most of the time (hard to edit and share the styles)
2. The <STYLE> Element: You can write your styles inside of a <style> element, this is easy, but it makes it impossible to share styles between documents. **Not recommended either**
3. External StyleSheet: Write your styles in a .css file then include it using a <link> in the head of the html doc. **Recommended!**


- ex. <head>
        <title>Forms Demo</title>
        <link rel = "stylesheet" href = "my_styles.css">
      </head>

- Refer to *including_styles.html* and *app1.css*

<br>

#### 62. Color & Background - Color Properties
- different ways of representing colors!

<br>

#### 63. Color Systems: RGB & Named Colors!
- Named Colors : https://htmlcolorcodes.com/color-names/

- NOTE: a typical computer can display ~16,000,000 different colors

- RGB: Red, Green, and Blue Channel. Each Channel ranges from 0 to 255
ex. rgb (255,0,0) ~> red
ex. rgb (0,0,255) ~> blue
ex. rgb (173,20,0) ~> purple
ex. rgb (0,0,0) ~> black

- NOTE: color picker : https://htmlcolorcodes.com/color-picker/

<br>

#### 64. Color System: Hexadecimal
- still red, green, blue channels
- each ranges from 0 - 255 BUT represented with hexadecimal!

- Decimal: 0,1,2,3,4,5,6,7,8,9
- Hexadecimal: 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F

- ex. #ffff00 (red{2}, green{2}, blue{2})
      = rgb (255, 255, 0)
      ~> yellow
  ex. #000000 <=> #000
  ex. #cc55ee<=> #c5e
  


- there are other ways of representing colors too! Youtube if interested

<br>

#### 65. A Reminder On Semicolons & CSS
- omitting semicolons will result in errors, but the computer doesn't tell us ~> keep in mind to include them!!

<br>


#### 66. Common Text Properties
- ex. text-align, font-weight, text-decoration, line-height, letter-spacing

- font-weight: text or number. Usually 400 is normal and 700 is bold

- text-decoration: underline, overline, etc.
- ex. text-decoration: underline wavy #f2367f
  ex. text-decoration: none

<br>

#### 67. Font Size Basics With Pixels
- Relative: em, rem, vh, vw, %, and more!
- Absolute: px, pt, cm, in, mm!

- PX (Pixel)
  : by far the most commonly used absolute unit
  : 1px does not necessarily correspond to exactly one pixel, depends on machines and manythings
  : not recommended for responsiveness

  <br>

  #### 68. The Font Family Propert
  - built-in fonts:  https://www.cssfontstack.com/
    ~> as some fonts are not installed on every machine, your users may see different fonts

  - because of that, you usually specify a "font stack"
    ex. font family: Gill Sans Bold, sans-serif;
    ~> Gill Sans Bold as the first choice, if there's not, any other sans-serif family as the Second choice!


<br>

## 7. The World of CSS Selectors
#### 69. What Matters in this Section
- Crucial
: Element Selector
: Class Selector
: ID Selector
: Descendent Selector
: CSS Specificity


- Important
: Adjacent Selector
: Direct Descendent Selector
: Attribute Selector
: Pseudo Elements
: Pseudo Classes

<br>


#### 70. Element & Universal Selectors
- Universal Selector : Select everything!
ex. * {
      color: black;
    }
~> not very commonly used

- Element Selector
ex. button {
      font-size: 30px;
    }

- Selector List: more than one
ex. h1, h2 {
      color: magenta;
    }

<br>

#### 71. ID Selector
- ID Selector: ex. select the element with id of 'logout'
ex. #logout {
      color: orange;
      height: 200px;
    }
- note that id is unique
~> change properties of ONE thing

- cf. color palette website: https://coolors.co/palettes/trending

- no space between # and the id name

<br>

#### 72. The Class Selector
- ex. .complete{
        color: green;
      }
- a way of grouping things

<br>

#### 73. The Descendent Selector
- ex. Select all <a>'s that are nested inside an <li>
ex. li a {
      color: teal;
    }

<br>

#### 74. The Adjacent & Direct-Descendent Selectors
- Adjacent Selectors [Combinators]: Select only the paragraphs that are immediately preceded -**not nested**- by an <h1>
ex. h1 + p {
      color: red;
    }


- Direct Child
: Select only the <li>'s that are direct children of a <div> element
ex. div > li {
      color: white;
    }

<br>

#### 75. The Attribute Selector
- Attribute Selector: Select all input elements where the type attribute is set to "text"
- ex. input[type = "text"]  {
        width: 300px;
        color: yellow;
      }

  ~> common example - input elements

ex. section.post {
      }
    is the same as

    section[class="post"] {
    }

- more info: https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors

- other ways : ex. *= ~> "including", $= ~> "ending with"

<br>


#### 76. Pseudo Classes
- keyword added to a selector that specifies a special **state** of selected element(s)
: ex. :active
: ex. :checked
: ex. :first
: ex. :first-child
: ex. :hover
: ex. :not()
: ex. :nth-child()
: ex. :nth-of-type()

- ex. button:hover{
        background-color: magenta;
        color: white;
      }

- ex. post button:hover{
        background-color: magenta;
        color: yellow;
      }


- ex. a:hover {
        text-decoration: none;
      }

- ex. button:active {
        background-color: #02c39a;
      }



- ex. .post:nth-of-type(3n){
          background-color: #8f38ec;
      }

<br>




#### 77. Pseudo Elements
- Keywords added to a selector that lets you style a particular part of selected element(s)
- ex. ::after
ex. ::before
ex. ::first-letter
ex. ::first-line
ex. ::selection

cf. pseudo-classes:  specifies a special state of selected element(s)

- ex. flask symbol ~> in experiment, should not be used in production

ex. :: selection {}: the style applies to  wherever you select



<br>

#### 78. The CSS Cascade
- cascading ~> the order matters!
- the order of styles in a css file and the order of the css files matter

<br>

#### 79. WTF is 'Specificity'

- What happens when conflicting styles target the same elements?

- Specificity is how the browser decides which rules to apply, when multiple rules could apply to the same element

- It is a measure of how specific given selectors are. The more specific selector 'wins'

- General formula
: ID  >>  Class  >> Element

- Actual Formula
: ID selectors  x100
: Class, Attribute, & Pseudo-Class Selectors x10
: Element and Pseudo-Element Selectors - x1 (cf. tho it is not decimal // 10x1 != 10)

:https://specificity.keegan.st/

<br>

#### 80. TIP:  Chrome Dev Tool & CSS
- Can explore CSS 

<br>

#### 81. Inline Styles & Important
- More specific! x 1000 Most specific among all
~> nobody really recommends using it anyways

- ex. <button style="background-color:green">Register Now!!</button>


- **The !important exception**
: _important_ rule on a style declaration overrides any other declarations.
: it is a bad practice and not recommended

ex. p {
      color: blue !important;
    }

: has nothing to do with specificity but still interacts with it ~> overrides ALL

<br>


#### 82. CSS Inheritance
- ex. when body is set to purple, h1 inside the body gets purple too
~> in Chrome Dev Tool, you can see that the property is 'inherited from body'

- but some elements don't inherit automatically
~> there's a workaround (though not that commonly used)
~> ex. button {
        color: inherit;
       }

<br>

## 8. The CSS BoxModel
#### 83. What Matters in This Section
- Crucial
: Border
: Padding
: Margin
: Width and Height
: Display Property
: CSS Units - Percentages, EMS, and REMS

- Nice To Have
: Border Radius

<br>


#### 84. Box Model: Width & Height
- Content (Width and Height) < Padding < Border < Margin

<br>

#### 85. Box Model: Border & Border-Radius
- Border Properties (the important ones)
1. Border-Width
: Controls the thickness of the border
2. Border-Color
: Controls the coloer of the border
3. Border-Style
: Controls the line style

- for border, **pixel** is commonly used, as border is small/thin

- note - cf. box-sizing: border-box;
~> now the width of the element is *from border to border*

- can change top, right, bottom, and left separately

- *border* ~> can change all props at once
~> width, style, color [order]

- then border radius ~> a good way to make a circle too

<br>

#### 86. Box Model: Padding
- Individual Properties
: padding-left
: padding-right
: padding-bottom
: padding-top

- Shorthand Properties
: set all four  sides at once!
ex. apply to all four sides
~> padding: 10px;
ex. vertical | horizontal
~> padding: 5px 10px;
ex. top | horizontal | bottom
~> padding: 1px 2px 2px;
ex. top | right | bottom | left
~> padding: 5px 1px 0 2px;

<br>

#### 87. Box Model: Margin
- Spacing outside the Border
- Setting the body margin to be zero
~> pretty common


<br>


#### 88. The Display Property
- "Display" Property
1. Inline
: width & height are ignored
: margin & padding push elements away horizontally, but not vertically
2. Block
: block elements break the flow of a document.
: Width, height, margin, and padding are respected

3. Inline-Block
: Behave like an inline element except Width, Height, Margin, and Padding are respected

4. None
: to hide

ex. h1: block element, and span: inline element
~> by adding display: inline; property or whatsoever, you can change their behaviors

<br>

#### 84. CSS Unit
- Absolute Units
: px - by far the most commonly used absolute unit
: 1px does not necessarily equal the width of exactly one pixel!
: not recommended for responsive websites

- Relative Units
: percentages - percentages are always relative to some other value
: sometimes, it's a value from the parent and other times it's a value from the element itself
: width: 50% - half the width of the parent
: line-height: 50% - half the font-size of the element itself

<br>

#### 90. CSS Units: ems
- EM's are relative units
: with font-size, 1em equals the font-size of the parent. 2ems is twice the font-size of the parent, etc.
: with other properties, 1em = the computed font-size of the element itself.

<br>


#### 91. CSS Units: rems
- problem with em ~> depending on the parent element's size
~> ex. nested list: fonts get larger and larger or smaller and smaller

- ROOT EMS
: [rem]. relative to the **root html element**'s font size.
: ex. root font-size: 20px, 1em is always 20px, 2rem is always 40px,etc.

- and root html here can be changed with
ex. html {
      font-size: 10px;
    }



<br>


## 9. Other Assorted Useful CSS Properties
#### 92. What Matters in This Section
- Crucial
: Transition
: Position Property

- Important
: Google Fonts
: Opacity & Alpha Channel
: The Full Stor On The Background Property

- Nice To Have
: Transforms

<br>

#### 93. Opacity & The Alpha Channel
- rgba(red, green, blue, alpha)
~> alpha: governs the transparency (0 - 1)
~> for hex color, add two letters at the end (00 -FF)

- note: alpha only affects background

- Opacity: will change the transparency of all the elements(0-1)

<br>

#### 94. The Position Property
- Values
1. **static**
: default. element is positioned according to the normal flow of the document. *top, right, bottom, left, and z-index* have *no effect*!!

2. **relative**
: element is positioned according to the normal flow of the document, and then offset *relative to itself* based on the values of *top, right, bottom, and left*. 

3. **absolute**
: element is removed from the  normal flow of the document. 
: ex. the next element can be overlapped by it
: No space is created for the element in the page layout. 
: It is positioned relative to its closest positional ancestor or it is placed relative to the initial containing block otherwise.
: cf. when it's static, considered "not positioned"
~> once the ancestor is positioned relative, the child element's absolute position will take effect

4. Fixed
: element is removed from the normal flow of the document, and no space is created for the element in the page layout.
: positioned relative to the initial *containing block* established by the *vieport*, except for some cases
: kinda like *Absolute* while *Fixed* has nothing to do its ancestors' positional status
: ex. how you make a nav bar

5. Sticky
: like *Fixed*, but until the screen gets to its original position, it does not move
: ex. position: -webkit-sticky;
      position: sticky;
      top: 20px;

<br>

#### 95. CSS Transitions
- SO COOL!
- ex. transition: 1s;
  ex. transition: background-color 1s;
  ex. transition: all 1s 0.5s;
  ex. transition: background color 1s, border-radius 2s;
- PROPERTY NAME | DURATION | TIMING FUNCTION | DELAY 

- timing functions
: how the intermediate values r calculated
: https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
: can define it separately too
: ex. transition-timing-function: ease-out;

: reference - easings.net

- best practice: single-out each transition, rather than transitioning all in one code ~> better for updating Codes!

<br>

#### 96. The Power of CSS Transforms
- cf. centering block-level elements like h1 ~> setting left & right margin to be auto ~> will make it centered

- lets you rotate, scale, skew, or translate an element // modifies the coordinate space of the CSS visual form

- very useful when you wanna make, for example, animations

<br>

#### 97. Fancy Button Hover Effect CodeAlong
- refer to the code
- ex. background: none;
  ex. box-shadow: 0 0.5em 0.5em -0.4em #f1ff5c;

<br>

#### 98. The Truth About Background
- there are a lot of functions related to background
ex. background-image: url(~);
ex. background-size: cover;
ex. background-position: bottom;

ex. background: url(~) no-repeat;

- free images - https://unsplash.com/

- make sure that the order is correct
- you can have multiples images for background too



<br>



#### 99. Google Fonts Is Amazing
- https://fonts.google.com/
- download only what you need
- provides you with the link and CSS rule
- loads from the link then displays the font

<br>

#### 100. Photo Blog CodeAlong 

- calc()
- note. when you add elements in different lines, **"white space"** kicks in and it can be a problem!
- with Flexbox it won't be a problem!

<br>

#### 102. What Matters In This Section

- Crucial
: Media Queries
: FOCUS ON CONCEPTS, NOT MEMORIZING THE PROPERTIES!
: Flex Shortand
: Flex-basis, grow, and shrink
: Flex-wrap
: Align-Items
: Align-content and align-self
: Justify-Content
: Flex-Direction

<br>

#### 103. What on Earth is Flexbox?
- What is it?
: Flexbox is a one-dimensional layout method for laying out items in rows or columns
- It's New(ish)
: Flexbox is a recent addition to CSS, included to address common layout frustrations
- Why 'Flex'?
: Flexbox allows us to distribute space dynamically across elements of an unknown size, hence the term "flex"

<br>

#### 104. Flex-Direction
- display: flex;
~> turn on the flexbox properties

- main axis (x) and cross axis (y)


- flex-direction ~> lets you change the main axis direction
ex. flex-direction: row; is the default
ex. flex-direction: row-reverse;
ex. flex-direction: column;
ex. flex-direction: column-reverse;

- controls how the flow is controlled

<br>

#### 105. Justify-Content
- determines how the elements are distributed along the **main axis**

- justfiy-conetent: flex-start; ~> is the default

- ex. justify-content: flex-end; ~> the opposite
ex. justify-content: center;
ex. justify-content: space-between;
ex. justify-content: space-around;
ex. justify-content: space-evenly;

<br>

#### 106. Flex-Wrap
- sets whether flex items are forced onto one line or can wrap onto multiple lines. if wrapping is allowed, it sets the direction that lines are stacked.
- wrap-reverse: cross axis is reversed

- nowrap / wrap / wrap-reverse!

<br>


#### 107. Align Items
- How to align itmes along the cross axis
- align-items: flex-start/flex-end/center/baseline
: note. baseline ~> aligning to the base line of texts

<br>

#### 108. Align-Content & Align-Self
- Note: Align-Content is activated ONLY when *wrap* property is set

- Align-self: a property to individual items.
: applied not to the flex container itself, but to individual items!

<br>

#### 109. Flex-Basis, Grow, & Shrink
1. Flex-Basis
: defines the initial size of an element before additional space is distributed
~> initial dimension of elements along the __main axis__


2. Flex-Grow
: controls the amount of available space an element should take up. Accepts a unit-less number value.
~> take up the empty space with numbers as ratios among the elements

3. Flex-Shrink
: if items are larger than the container, they shrink according to flex-shrink.
~> governs the amount the elements shrink, *when* there is no enough space

<br>

#### 110. Flex Shorthand
- flex
- developer.mozilla.org/en-US/docs/Web/CSS/flex 

<br>

#### 111. Responsive Design & Media Queries

1. The Problem
: as mobile devices and tablets became wildly available, developers had a problem...
: how do we create websites that look good on all screen sizes?

2. One Approach
: early on, it was common to create separate stylesheets for different devices, or completely different websites for each size





3. Enter Responsive
: these days, we typically create ONE website and stylesheet that is able to respond to different device sizes and features

- One Solution: Media Queries
~> media queries allow us to modify our styles depending on particular parameters like screen width or device type

- note: 'developer tools' -  "toggle device toolbar"

<br>

#### 112. The Power of Media Queries
- ex. @media (max-width: 800px) {
        # at <= 800px, apply the following styles
        .sidebar {
            display: none;
        }

        .main {
            width: 80%;
        }
      }

      @media (min-width: 30em) and (orientation: landscape) {
          #container {
              flex-direction: column;
              justify-content: center;
          }
      }


<br>


#### 113. Building a Responsive Nav
- no standard px size for different media, but there are references




<br>




## 11. Pricing Panel Project
#### 114. Pricing Panel CodeAlong Pt.1
- CodePen!


- CSS Rest: meyerweb.com/eric/tools/css/reset/
~> copy and paste in the css file for the starting point!
~> you don't have to do it but lots of ppl prefer doing it

- building mobile version first then desktop version


<br>


## 12. CSS Framework: Bootstrap

#### 120. What Matters In This Section
- Crucial
: WTF is Bootstrap
: Working with CSS Frameworks
: Including 3rd Party CSS & CDNS

- Important
: Bootstrap Grid
: Responsive Bootstrap Grid
: Bootstrap Navbars

- Nice to Have
: Icons
: Typography and Utilities
: Bootstrap Forms
: Bootstrap Buttons

<br>

#### 121. Bootstrap!
- Bootstrap: "The World's Most Popular CSS Framework"
- Bootstrap helps us quickly build responsive websites - Components and Grid Systems
1. Components
: Bootstrap gives us access to a bunch of  pre-built components that we can incorporate into our own websites









2. Grid System
: Bootstrap also comes with a Grid System, which helps us construct our own custom, responsive layouts.

- getbootstrap.com

- don't rely on Bootstrap only (you can def make the same thing by coding on your own), but know that it's out there, and others too (ex. foundation, semanticUI)

<br>

#### 122. Including Bootstrap & Containers
- Either (1) download the whole bootstrap package or (2) use the CDN (Content Delivery Network)
: CDN - a hosted version of the stylesheet

- https://getbootstrap.com/docs/5.0/getting-started/introduction/

- as of now, version is v.4.5


- some components require JS
~> include at the end of body

- in the real application, downloading the css file is recommended ~> to make sure that the file is pristine


- mostly we access Bootstrap by classes

- First thing to focus on
: Layout - Container

- Containers are the most basic layout element in BS and are required to use their default grid system
: used to contain, pad, and (often) cetner the content within them

- ex. Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply max-widths for each of the higher breakpoints. For example, .container-sm is 100% wide to start until the sm breakpoint is reached, where it will scale up with md, lg, xl, and xxl
: once it hits the breakpoint, then the layout works as a regular container

<br>

#### 123. Bootstrap Buttons

- using btn classes


- "semantic"colors
: any website will have different color palette for their own primary, secondary, info, ... uses!

<br>

#### 124. Bootstrap Typography & Utilities
- Content - Typography
- display headings ~> larger than typical h's
- lead class ~> makes a paragraph stand out
- block quotes ~> <blockquote></blockquote>
~> class="blockquote", <footer class="blockquote-footer">
~> "class = mb-0": margin-bottom is zero

- Utilities - Colors
: "text-primary" ~> primary color
: "bg-info" ~> background color

<br>




#### 125. Badges, Alerts, & Button Groups
- More components!
- Badges: typically used for counts, labels, etc.
~> span class = "badge bg-colorname"

- Button Groups
~> group multiple buttons together into a group!
~> .btn-group

- Alert
~> div class = "alert alert-colorname"

~> to have the close button,
ex. <button aria-label="Close" class="btn-close" data-bs-dismiss="alert">
        <span aria-hidden="true">&times;</span>
    </button>

~> the span doesn't need to be there actually with Bootstrap v5.0 now
~> aria-label is what the screen-reader will read
~> class of btn-close to make it pretttier
~> data-bs-dismissible = "alert" to make it work

~> role = "alert" is crucial for screenreaders
: makes sure that the alert message is not ignored

- note. aria-hidden = "True": the screen-reader doesn't have to see this

- if you add "alert-dismissible fade show" class to the div, it fades out and the x goes to top right.


<br>



#### 126. Intro to BS Grid

- NOTE ~> works ONLY in a container!
- you have to create a row, using the class of row ~> typically div, but could be section or something else

- assuming 12 units wide
- if wanting equal widths, you can just assign class="col", instead of specifying the no.
~> <div class="row">


- every row in BS has 12 units in space






<br>




#### 127. Responsive Bootstrap Grids
- ex. col-md-6: after md breakpoint and up, the column should take 6 units. Everything below, the column takes 12 units

- new class for **responsive images** ~> "img-fluid"

- class="g-0" will eliminate the spacing

<br>

#### 128. Useful Grid Utilities

- Bootstrap uses Flexbox
~> can check by inspecting, and see that the class="row" already has a setting of display:flex

- .align-itmes-start/center/end
- .align-self-start/center/end
   ~> vertical alignment

- .justify-content-start/center/end/between/around
- .justify-content-sm-center
   ~> horizontal alignment

<br>

#### 129. Bootstrap &  Forms
- Several Components!
1. Form Controls
: this class is on the input itself

: .form-group ~>useful
: .form-control ~> Bootstrap class for formatting

- changing radio buttons and checkboxes is harder
~> you can use .form-check
~> or .custom-control .custom-checkbox for diff. effects

- radio buttons, switches, etc.

- form layout: can edit by using columns and rows

- .form-row : very similar to .row, and it just has a different gutter size so that the forms look more compact
~> not in the v5

<br>

#### 130. Bootstrap Navbars
- don't feel pressured to remember the navbar syntax!
- wrap things with .navbar-collapse for collapsable navbar, and expand with .navbar-expand-size
- and .navbar-toggler to show the hamburger icon
- connect that icon with the data, by data-bs-toggle="collapse" and data-bs-target="#id_name"

- cf. ml-auto: margin left is 

- placemnet ~> .fixed-top / .sticky-top / others

<br>

#### 131. Bootstrap Icons!
- new feature!
- svg
: Scalable Vector Graphics

- .input-group

- there are other icon websites!
~> most popular - fontawesome.com/start

<br>

#### 132. Other Bootstrap Utilities
- quick way to apply css properties
- many

- Border
: note. cannot change the width


- Spacing
: Margin (m) and Padding (p)
: sides - t, b, l, r, x, y, blank
: size - 0, 1, 2, 3, 4, 5, auto

: {property}{sides} - {breakpoint} - {size}

- display: inline, block, flex, none, etc.
~> d-none can hide something
~> supports responsivity

<br>

#### 133. A Mixed Bag of Other Bootstrap Stuff

- Cards: pretty commonly used
: can mix-and-match

: a container with some special features

- Carousel
: slider

- Dropdowns


- Spinner

- Progress

- Modal
: popup


<br>

## 13. OPTIONAL Museum of Candy Project
- finished code available

- order-{number}

<br>

## 14. JavaScript BASICS!
~> a week of full-time content!

<br>

#### 141. What Matters In This Section

- Crucial
: Understanding the role of JavaScript
: JavaScript Numbers
: Variables & Let
: Const
: Booleans
: Variable Naming


<br>

#### 142. Why JavaScript is Awesome
- reference - https://codepen.io/ste-vg/details/GRooLza



<br>




#### 143. Primitives & The Console
- Steps
: Step 1 - Learn JS on its own. No HTML / CSS.
: Step 2 - Use JS to manipulate HTML / CSS.

- Primitive Types (any language has primitive types)
: The Basic Building Blocks
1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. xTechnically there are two others ~> Symbol and BigInt

- Running Code in The Console
: The easiest place to start
1. Early on, we will run our code using the Chrome developer tools console
~> definitely not the professional choice
2. Then we will learn how to write external scripts

- In Chrome, Inspect -> Console
: JavaScript
: or ctrl + shift + J
: you can 'undock' it as we are using it to learn only

- Some keywords
: clear() to clear the console

- "REPL"
: Read, Evaluate, Print, and Loop
: Loop means that the console does not stop and rather loops
: REPL(read-eval-print loop) 또는 인터랙티브 톱레벨(interactive toplevel), 랭기지 셸(language shell)은 단일 사용자의 입력(예: 단일 식)을 취하고 이를 평가(실행)하고 결과를 사용자에게 반환시키는 단순한 상호작용 컴퓨터 프로그래밍 환경이다. REPL 환경으로 작성된 프로그램은 구간마다 실행된다


<br>


#### 144. JavaScript Numbers
- JS has one number type
- Positive numbers
- Negative numbers

- Whole numbers (integers)
- Decimal numbers

- Math Operations
: addition, subtraction, multiplication, division, modulo, exponents, etc

- // creates a comment

- order of operation
: PEMDAS (Parentheses, Exponents, Multiplication, Division, Addition, and Subtraction)

<br>



#### 145. WTF is NaN
- Nan: Not A Number, and is a numeric value that represents something that is... not a number

- ex. 0/0 //NaN
- ex. 1 + NaN //NaN

- typeof NaN ~>  "number"

<br>

#### 147. Variables & Let
- Variables: are like labels for values
: We can store a value and give it a name so that we can
~> Refer back to it later
~> Use that value to do... stuff

- Basic Syntax
: let someName = value;

- ex. let year = 1652;

- ex. let numHens = 5;
  ex. let numRoosters = 1;
  ex. let totalChickens = numHens + numRoosters ~> 6

~> however, totalChickens does not change with the change in numHens or numRoosters
~> it is just a snapshot in time



<br>



#### 148. Updating Numbers
- ex. let score = 0;
  ex. score += 5; ~> score == 5
  ex. score++; ~> score == 6

<br>

#### 149. Const & Var
- there are two other ways to assign variables
1. const
~> const works just like let, except you CAN'T change the value
ex. const hens = 4;
ex. hens = 20; ~> ERROR!

ex. const pi = 3.14159;
ex. const daysInWeek = 7;
ex. const minHeightForRide = 60;
~> Once we cover Arrays & Objects, we will see other situations where const makes sense over let

2. var
: the old variable keyword
: before let & const, var was the only way of declaring variables
: these days there is not a reason to use it really

<br>

#### 150. Booleans
- true or false
ex. let isLoggedIn = true;
ex. let gameOver = false;


- Variables can change types!!

ex. let numPuppies = 23; // Number
ex. numPuppies = false; // Now a Boolean
ex. numPuppies = 100; // Back to Number


<br>

#### 151. Variable Naming and Conventions

- Hard Rules
: no space
: no start with number
: case-sensitive
: $, _, digits are possible
: Reference ~> MDN, identifier
~> An identifier is a sequence of characters in the code that identifies a variable, function, or property
~> In JavaScript, identifiers are case-sensitive and can contain Unicode letters, $, _, and digits (0-9), but may not start with a digit

- Conventions
: Camel-case
ex. current_date ~> snake-case
ex. currentDate ~> camel-case
~> starts with lowercase

: be clear with the variable name
ex. isLoggedIn is better than
ex. userLogIn
ex. isGameOver is better than
ex. Game


<br>


## 15. JavaScript Strings and More

#### 152. What Matters in This Section
- Crucial
: String Basics
: Indices and Length
: Undefined & Null
: String Methods
: String Template Literals

- Important
: Random Numbers & the Math Object

<br>


#### 153. Introduction to Strings
- Strings: 'strings' of characters
: Strings are another primitive type in JavaScript. They represent text, and must be wrapped in quotes

ex. let firstName = "Ziggy"; //Double quotes work
ex. let msg = "Please do not feed the chimps!";
ex. let animal = 'Dumbo Octopus'; //Single quotes too

: fine to use either single or double quotes, but be consistent

: mix them only when a string need to wrap another


<br>


#### 154. Indices & Length
- ex. let animal = "Dumbo Octopus"
  ex. animal[0] ~> "D"

- ex. animal.length  ~>  13
  ex. "lol".length ~> 3
  ex. 'abcd' + 'efg' ~> 'abcdefg'
  ex. 'abc'[0] ~> 'a'

<br>

#### 155. String Methods

- Methods are built-in actions we can perform with individual strings
- they help us do things like:
~> searching within a string
~> replacing part of a string
~> changing the casing of a string

- Reference -  developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/

- Syntax
: thing.method()

cf. "asdf".length
~> no parentheses => accessing property, not 'executing' something

- ex. let msg = "meoww";
  ex. msg.toUpperCase();
      ~> "MEOWW"
      ~> does not change the original variable



- ex. '     he    '.trim() ~> 'he'

- you can also chain methods!

ex. '     hello again!!!!!     '.trim().toUpperCase() ~>'hello again!!!!!!'
: the order does not matter

<br>




#### 156. String Methods w/Arguments
- Syntax
: thing.method(arg)

~> some methods accept **arguments** that modify their behavior. Think of them as inputs that we can pass in, we pass these args inside of the parentheses


- ex. indexOf
  ex. let tvShow = 'catdog';
  ex. tvShow.indexOf('cat'); // 0
  ex. tvShow.indexOf('dog'); // 3
  ex. tvShow.indexOf('bird'); // -1
  ~> gives the first index of the arg

- ex. slice
  ~> accepts 1+ args

  ex. let str = 'abcdefg';
  ex. str.slice(0,5); // 'abcde'
  ex. str.slice(5); // 'fg'
  ex. str.slice(-1); // 'g'
  ex. str.slice(-5); // 'cdefg'

- ex. replace
  ~> replaces only the first matching instance
  ex. let greetings = 'hello world!';
  ex. greetings.replace('hello','hiiii');
  ex. greetings.replaceAll('hello','hiiii')
  ~> **NOTE:** replaceAll() is not compatible with all the browser, check the Browser compatibility section of the MDN guide

- ex. repeat
  ex. 'lol'.repeat(3) // 'lollollol'
  ex. 'lol'.repeat(0) // empty string


<br>


#### 157. String Template Liters - SUPER USEFUL
- Template Literal
: Template Literal is strings that allow embedded expressions, which will be evaluated and then turned into a resulting string!

ex. `I counted ${3+4} sheep`; //  "I counted 7 sheeps"  


: we use back-ticks (usually above tab), NOT single quotes!

<br>

#### 158. Undefined & Null
- Null
: "Intentional absence of any value"
: Must be assigned

ex. //No one is logged in yet
ex. let loggedInUser = null; //value is explicitly yet nothing
ex. //A user logs in...
ex. loggedInUser = 'Christopher Hemsworth';  //LoggedIn

- Undefined
: Variables that do not have an assigned value are undefined

- note. typeof null ~> "objet"
  note. typeof undefined ~> "undefined"

<br>

#### 159. Random Numbers & The Math Object
- Math Object: collections of properties and methods related to mathematical constants&functions

ex. Math.PI //3.141592653589793...

ex. Math.round(4.9) //5

ex. Math.abs(-456) //456

ex. Math.pow(2,5) //32

ex. Math.floor(3.999)//3

ex. Math.ceil(3.99)//4

- in Console, you can type Math and can see properties and methods contained in that


- Random Numbers: Math.random() gives a random decimal b/w 0 and 1 (non-inclusive:  not including 1)

- Random Integers
: let's generate random numbers b/w 1 and 10
ex. const step1 = Math.random();
// 0.5961104892810127
ex. const step2 = step1 * 10;
// 5.9611...
ex. const step3 = Math.floor(step2)+ 1;
// 6

~> Math.floor(Math.random() *10) + 1;

~> can manipulate numbers to get ranges needed


<br>


## 16. JavaScript Decision Making

#### 160. What Matters In This Section

- Crucial
: Comparison Operators
: Running JavaScript From a File
: Conditionals: If, Else-If, and Else
: Truth-y and False-y Values
: Logical AND
: Logical OR
: Logical NOT

<br>

#### 161. Decision Making With Code??

- Boolean Logic: making decision w/code


<br>


#### 162. Comparison Operators

: > //greater than
: < // less than
: >= // greater than or equal to
: <= // less than or equal to

: == // equality
: != // not equal

: === // strict equality
: !== // strict non-equality  

ex. 'a' < 'b'; ~>true
~> comparison based on unicode
ex. 'A' < 'b'; ~>true

<br>



#### 163. Equality: Triple vs. Double Equals
- == (double equal)
: checks for equality of values, but not equality of type
: it coerces both values to the same type and then compares them
: this can lead to some unexpected results

ex. 0 == ''; //true

ex. null == undefined; //true

ex. '1' == 1 //true

- === (triple equal)
: checks for equality of values and types

ex. 0 === ''; //false

- So try to use *triple equals* until you become a professional software engineer



<br>

#### 164. Console, Alert, & Prompt


- console.log()
: prints arguments to the console
: (we need this if we're going to start working with files!)

ex. console.log("HELLO")
~>  HELLO

: similar to print function

- ex. alert("Hi There!")
~> pop-up


- ex. prompt("please enter a number")
~> also a pop-up

- ex.parseInt('101')
~> 101 //converts string to integer

<br>

#### 165. Running JavaScript From A Script!
- you gotta connect the JS script file to the HTML file
: include your script in .html
: ex. ~
      <script src="app.js"></script>
      </body>

~> if you connect them, you can see the JS query in the Console

~> you want to place the js link at the end of body so that all the elements are loaded in first and then js can manipulate them

<br>


#### 166. If Statements
- Conditional Statements: making decisions with codes


1. If Statement
: only runs code if given condition is met

ex. let rating = 3;
ex. if (rating === 3) {
      console.log ("You are a Superstar!");
}

<br>

#### 167. Else-If
- Else-If: If not the first thing, maybe this other thing?!

ex. let rating = 2;
ex. if (rating ===3) {
      console.log("You are a Superstar!");
    }
    else if (rating ===2) {
      console.log("Meets expectations");
    }

<br>

#### 168. Else
- Else: if nothing else was true,do this...
ex. if
ex. else if
ex. else if
ex. else if
ex. else

<br>

#### 169. Nesting Conditionals
- ex. const password = prompt("please enter a new password");
  ex. if (password.length >=6) {
        if (password.indexOf(' ')===-1) {
          console.log("GOOD JOB! NO SPACE");
        }
        else {
          console.log("PASSWORD CANNOT CONTAIN SPACES");
        }
      else {
        console.log("PASSWORD TOO SHORT! MUST BE 6+ CHARACTERS!"));
      }  



<br>

#### 170. Truth-y and False-y Values
- Truthy and Falsy Values
: All JS values have an inherent truthyness or falsyness about them
: Falsey values
~> false
~> 0
~> "" (empty string)
~> null
~> undefined
~> NaN

: Everything else is truthy

<br>

#### 171. Logical AND
- Logical Operators
: combining expressions



- AND: must be true on both sides, for the entire thing to be true
ex. 1<=4 && 'a' === 'a' ~> true


<br>




#### 172. Logical OR
- OR: if one side it true the entire thing is true

<br>

#### 173. Logical NOT
- NOT: expression returns true if expression is false
ex. !('a' === 'b') ~> true

<br>



## 17. JavaScript Arrays
#### 174. What Matters In This Section
- Crucial
: Array Basics - Creating and Updating

: Push & Pop

: Shift & Unshif

- Important
: Cocat, IndexOf
: Slice & Splice

: Multi Dimensional Arrays


<br>


#### 175. JS Arrays
- Arrays: Ordered collection of values
ex. list of comments on IG post
ex. collection of levels in a game

- Creating Arrays
ex. let students = [];
ex. let colors = ['red', 'orange', 'yellow'];
ex. let combo = ['anchovies', 1];

<br>

#### 176. Array RandomAccess
- Arrays are Indexed
: each element has a corresponding index

- Modification to Arrays
: ex. let sample = [5, 2, 3, 4, 5];
  ex. sample[0] = 1;
  ex. sample ~> [1,2,3,4,5]

: vs. for strings modification to one element is not possible

<br>

#### 177. Push AND Pop

#### 178. Shift AND Unshift
- Push: add to end
- Pop: remove from end
- Shift: remove from start
- Unshift: add to start

<br>


#### 179. Concat, indexOf, includes & reverse
- More Methods

: concat - merge arrays
ex. const array1 = ['a','b','c']
ex. const array2 = ['d','e','f']
ex. const array3 = array1.concat(array2);
~> array3 => ['a','b','c','d','e','f']

: includes - look for a value
ex. array1.includes('a') ~> true

: indexOf - just like string.indexOf
ex. array1.indexOf('b') ~> 1

: join - creates a string from an array
: reverse - reverses an array
ex. array1.reverse() ~> ['c','b','a']

: slice - copies a portion on an array
ex. array1.slice() ~> ['a','b','c']
ex. array1.slice(1) ~> ['b','c']
ex. array1.slice(1,2) ~> ['b']
ex. array1.slice(-2) ~> ['b','c']

: splice - removes/replaces elements
~> changes the contents of an array by removing or replacing elements and/or adding new elements in place
ex. array1.splice(1,0,'sss'); ~> ['a','sss','b','c']
ex. array1.splice(1,1) ~> ['a','b','c']
ex. array1.splice(1,2,'eee','www') ~> ['a','b','eee','www']

~> not recommended to use to insert elements at the middle of the array though
: sort - sorts an array

<br>

#### 181. Reference Types & Equality Testing
- ex. [1] === [1] ~> false
  ex. [1] == [1] ~> false
  ex. [] == [] ~> false

  ~> in JS, array comparison considers the reference in the memory

  ex. let nums = [1,2]
  ex. let numsCopy = nums;
  ex. nums.push(4)
  ex. nums ~> [1,2, 4]
  ex. numsCopy ~> [1,2, 4]
  
  ~> because both are referring to the same thing in the memory
  ~> same in Python

  ~> thus comparing the elements in the arrays take more work

- cf. [1] == [1] ~> True in Python

<br>

#### 182. Arrays + Const

- defining arrays with const is pretty common
~> cuz we can still change the contents, as long as "the reference" remains the same

ex. const myEggs = ['brown', 'brown'];
ex. myEggs.push('purple']);

ex. myEggs = ['blue','pink'] // NO! as the reference is being forced to be changed


<br>




#### 183. Multi-Dimensional Arrays
- Nested Arrays
: we can store arrays inside other arrays!
ex. const boar = [
      ['O',null,'X'],
      [null,'X','O'],
      ['X','O',null]
    ]

<br>

## 18. JS Object Literals
#### 184. What Matters In This Section
- Crucial

: Creating and Working with Object Literals


: Nesting Arrays and Objects

<br>


#### 185. Introducing Object Literals
- JS Objects: our second data structure

- Objects: are collections of **properties**
: properties are a **key-value pair**
: rather than accessing data using an index, we use custom keys

ex. const fitbitData = {
        totalSteps: 308727,
        totalMiles: 211.7,
        avgCalorieBurn: 5755,
        workoutsThisWeek: '5 of 7 dys',
        avgGoodSleep: '2h 13m'}
: no order!

<br>

#### 186. Creating Object Literals
- ex. const chicken = {species: 'Silkie', name:'Albert'}

- also points at the memory like arrays


<br>


#### 187. Accessing Data Out of Objects
- ex. chicken['species'] ~> 'Silkie'
  ex. chicken.species ~>  'Silkie'

- NOTE: *VALID KEYS*~> All keys are converted to strings, except for symbols which we haven't covered yet
~> cf. you had to explicity say {'a':1} for dictionaries in Python

- perks of using the square bracket notation...
~> ex. let curious = 'species'
   ex. chicken[curious] ~> 'Silkie'

<br>

#### 188. Modifying Objects

- ex. chicken.lastName = 'Hemsworth';

<br>

#### 189. Nesting Arrays & Objects 
- Arrays + Objects : Combination is Powerful!
- ex. const shoppingCartStatus = [
        {
            product: 'Jenga Classic',
            price: 6.88,
            quantity: 1
        },

        {
            proudct: 'Eggs',
            price: 3.99,
            quantity: 1
        },

        {
            product: 'Egg Basket',
            price: 10.12,
            quantity: 1
        }
    ]

- ex. const student = {
          firstName: 'David',
          lastName: 'Jones',
          strengths: ['Music','Art'],
          exams: {
              midterm: 92,
              final: 88
          }
      }




<br>




## 19. Repeating Stuff With Loops

#### 190. What Matters In This Section
- Crucial
: For Loops
: While Loops
: The Break Keyword
: For...Of Loop

: Iterating Arrays


- Important
: Nested Loops

- Nice To Have

: Iterating Objects




























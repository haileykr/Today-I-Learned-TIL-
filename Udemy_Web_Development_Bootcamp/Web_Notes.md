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
: ex. 







  


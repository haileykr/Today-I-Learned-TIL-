# Next.js



* https://nextjs.org/learn/basics/create-nextjs-app/setup

### Create a Next.js
* Install Node.js
* Create a Next.js app
`npx create-next-app nextjs-blog --use-npm --example  'https://github.com/vercel/next-learn-starter/tree/master/learn-starter'

* Run the development server
`cd nextjs-blog`
`npm run dev`


* Open `pages/index.js` and change the starter page

### Navigate Between  Pages
* In Next.js, a page is a React Component exported from a file in the pages directory

* Create the posts directory under pages

* pages/posts/first-page.js ->`posts/first-page`Route

* __Link Component__
  - In Next.js, you use the `Link` Component from `next/link` to wrap the `<a>` tag. `<Link>` allows you to do client-side navigation

  `import Link from 'next/link'`
  
* __Client-Side Navigation__ means that page transition happens *using JavaScript* which is faster than the default navigation done by the browser vs. <a href=" ">

* __Code Splitting__ AND  __prefetching__






  * Next does code splitting automatically, so each page loads what is necessary for that page! Which means that when the homepage is rendered the code for other pages is not served initially

  - Only loading the code for the page you request also means that pages become isolated - if certain page throws an error the rest of the app still works fine

  - Furthermore, in a production build of Next.js whenever `Link` appears in the browser's viewport, Next automatically prefetches the code for the linked page in the background

  - Use <a href=" "> tag instead if a link to an external web or adding an attribute is needed!

* __Next.js automatically optimizes app by code-splitting, client-side navigation, and in production, prefetching__


### Assets, MetaData, CSS

* Next.js has built-in support for CSS & Sass!

* Next.js can serve **static assets** under top-level `public`

* `next/image` is an extension of `<img>` element - provides image optimizationby default [WebP]

* images are lazy loaded by default
* images are rendered in a way to prevent **CUmulative Layout Shift**

```javascript
import Image from 'next/image'

const YourComponentImage= () => {
  <Image
    src="/images/profile.jpeg" // Route of the file
    height = {144} // Size you want with the original aspect ratio
    width = {144} // Size you want with the original aspect ratio
    
    />
}
```

* __Metadata__ - <Head> is a React component and you can import from `next/head`

* Next.js has a built-in support for **styled-jsx**, one of the "CSS-IN-JS" but others can be used too

* **CSS Modules**allows you to use the same CSS class names in different files because they locally scope CSS by automatically creating a unique class name


* CSS Moduless work on Next.js's code splitting as well -  CSS Modules are extracted from the JS bundle at build time and generate .css files that are loaded automatically by Next

* To load global CSS files, make a file named `pages/_app.js`
: you can  only import global.css here!


* using 'classnames' libary to toggle classes easily
```javascript
npm install classnames
```


  * let. you want to make an `Alert` component which accepts `type` - `success` or `error`

  * CSS module with .sucess & .error
  
  * then add them like it

  ```javascript
  import styles from './alert.module.css'
  import cn from 'classnames'

  export default function Alert({children, type}){
    return (
      <div
      className = {cn({
        [styles.success]: type === 'success',
        [styles.error]:type==='error'
      })}
      >
      {children}
      </div>
    )
  }
  ```




* Customizing PostCSS
: out of the box, next.js compiles CSS using PostCSS without any config
: to customize, use libraries like TailwindCSS

* Using Sass
: install sass library



### Pre-Rendering and Data Fetching
* Pre-Rendering
: by default, Next.js pre-renders every page
: i.e.Next.js creates HTML for each page in advance, instead of having it all done by client-side JS, resulting in better performance and SEO
: Each generated HTML is associated with minimal JS code necessary for that page. WHen a page is loaded by the browser, its JS code runs and makes the page fully interactive (process called hydration)

<br/>

1. Pre-Rendering (Next.js)
* (1)Initial Load: pre-rendered html is displayed
* (2)JS Loads
* (3)Hydration: React components are initialized and App  becomes interactive -> if you have interactive components like link, they'll be active after the JS loads

2. No Pre-Rendering(Planin React)
* (1)Initial Load: App is not rendered

* (2)JS Loads

* (3)Hydration: React components are initialized and App becomes interactive

* Two Forms of Pre-Rendering
  * (1) Static Generation
    * generates HTML at build time. the pre-rendered HTML is then reused on each request
  * (2) Server-side Rendering
    * generates HTML on each request
    * In the development mode, this is used even for the pages using Static Generation
  * Next.js lets you choose which to use for each page

  * Static Generation is recommended as much as possible, as your pages can be built once and served by CDN, which will make the app much faster than the other choice

  * Ask your self:
    * Can I pre-render this page **ahead** of a user's request?
    * Does this page change frequenty?
      * If this is the case, use SSR as it will serve the most updated version of the page though it's slow, or skip using pre-rendering and use client-side JS to populate frequently updated data instead

* Static Generation with Data Fetched Externally
  * You can export an `async` function named `getStaticProps` when you export a page component
    * the function runs at build time in production and
    * inside the function you can fetch external data and send it as props to the page
    * tells Next.js - 'Hey, this page has dependencies - so when you prerender this page at build time, make sure to resolve them'
    * in the development mode, `getStaticProps` runs on each request

* __YAML Front Matter__ (YAML Ain't Markup Language) : human-readable data-serialization language. COmmonly used for configuration files and in applications where data is being stores or transmitted
  * Libraries like gray-matter parse them




* Parsing the Blog Data on `getStaticProps`
  * Parse each markdown file and get `title`, `date`, and file name (which will be used as `id` for the post URL)
  * List the data on the index page, sorted by date


* The function `getStaticProps` only works on server-side, so you can fetch data from API or database without it being sent to the browser
  * Can only  be exported from a page


* If you need to fetch info at **request time** instead of at build time, you can try **Server-Side Rendering**
  * Fetch data at every reqeust
  

  * export `getServerSideProps` from your page
    * starter code:
    ```javascript
    export async function getServerSideProps(context){
      return {
        props: {
          // props for your component
        }
      }
    }
    ```
    * You should use SSR only if you need to prerender a page whose data must be fetched at request time
    * TTFB (Time To First Byte) will be slower than `getStaticProps` because the server must compute the result on every page, and the result cannot be cached by a CDN without extra config


* Client-Side Rendering
* SWR


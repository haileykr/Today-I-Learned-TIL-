# Master Microservices with Spring Boot and Spring Cloud


## 1. Intro
- curriculum

## 2. Intro to WEB SERVICE
- What is a web service?
1. Designed for machine-to-machine (or app-to-app) interaction
2. Should be interoperable - not platform dependent
3. Should allow communication over a network

- platform-independent formats
: XML ~> node & closing node
: JSON

- Service Definition
: specifies...
1. Request / Response Format
2. Request Structure
3. Response Structure
4. Endpoint
: what url's are exposed. how can these service consumers call this service which is exposed by providers

- Key Terminology
1. Request and Response (Input and Output)
2. Message Exchange Format (XML and JSON)
3. Service Provider / Consumer
~> Service Provider or Server: the one which hosts web services
~> Service Consumer or Client: the one consuming the service
4. Service Definition
~> the contract b/w service provider and service consumer

5. Transport
~> HTTP and MQ
: how a service is called
: exposed over Internet so that a URL can be given for access?
: or exposed over a Queue (for web services!)

- Web Services Groups
: SOAP and REST are not really comparable
1. SOAP-based
: poses restrictions on the format of XML, which is exchanged b/w your service provider and consumer
: Simple Object Access Protocol
: defines a specific way of building web services
: uses XML as the request exchange format
: defines a specific XML request and response structure => SOAP-ENV: Envelope contains SOAP-ENV: Header[optional] and SOAP-ENV: Body
: Header ~> contains meta info (i.e. authentication, authorization, signatures, ...)
: Body ~> real content of request/response

: Format - SOAP XML Request/Response
: Transport - SOAP over MQ / HTTP
: Service Def - WSDL (Web Service Definition Language) ~> defines the endpoint, all operations, request and response structures

2. REST-based
: defines an 'architectural approach'

: REpresentational State Transfer
: make best use of HTTP
~> HTTP methods (GET, POST, etc.)
~> HTTP Status Codes

: RESTful web services try to define services using the different concepts already present
: "Resource" ~> anything you'd want to expose to the outside world using app

: KEY ABSTRACTION - RESOURCE
~> A resource has an URI (Uniform Resource Identifier)
~> ex. GET /user/Ranga/todos/1
~> ex. POST /user/Ranga/todos
~> //assigning URI to each resource
~> **REST defines the resources and performs actions on them using whatever facilities provided by HTTP!! **

~> A resource can have differnt representations - XML, HTML, JSON





~> So to implement REST,
1. you have to think in terms of resources
: what are differnt resources present in your app that you wanna expose to other apps?

2. make use of HTTP
: use verbs specified by HTTP - GET, POST,PUT, DELETE

~> Data Exchange Format - No restrictions. JSON is popular
~> Transport - only HTTP
~> Service Definition - No Standard. WADL / Swagger / ...


- REST VS SOAP
: Restrictions vs Architectural
: Data Exchange Format
: Service Definition
: Transport
: East of Implementation (REST is typically easier, as it uses JSON and does not need to define a service definition)

## 10. Appendix - Intro to Spring Boot
- trend: building up many microservices, rather than one large app
~> key: to make them quickly! and this is where Spring Boot comes in

#### 223. Intro to Spring Boot: Goals and Important Features
- Spring Boot Main Goals
1. enable production-ready apps quickly
2. provide all commonb non-functional features, embedded servers, metrics, health checks, externalized configuration

- What Spring Boot is NOT!
1. ZERO code generation
2. Neither an app server nor a web server
: provides great integration with embedded servers like Tomcat and Jetty but not a server by itself!

- Features
1. Quickly create Spring apps

2. Quick Starter Projects with Auto Config
: Web
: JPA (Java Persistent API!)

//Add a starter called Spring Boot Starter web into your project
//then Spring core, Spring MVC, validation framework, log framework come for free!

//or Spring Boot Starter JPA 
//then JPA, default implementation of JPA with Hibernate, and auto config come for free

3. Embedded Servers - Tomcat, Jetty, or Undertow
// you can 'package'your server ex. Tomcat
// along with your app jar
// and on linux box, you don't need to install any other server, as long as Java runs on it

4. Production-ready features
: metrics and health checks
: externalized configuration
(ex. config in dev differs from config in production, and Spring Boot provides these features built in)
(you can simply create property files matching a simple naming convention and that' it!)


## 224. Developing Spring Application before Spring Boot
- example: built with Spring MVC
~> had to specify Spring security web, Spring security config, Jackson databind (for binding and validation), JSTL, Hibernate validator, log4j, 
~> deciding dependencies and their versions
~> default exception handling 
~> complete Spring configuration file
~> component scan
~> configure a view resolver (for redirecting the views to a JSP)
~> implement a message source and a local resolver(for internationalization)
~> configure the dispatcher servlet in web.xml so that it can handle all requests and act as a frame controller
~> configure the contex configuration location
~> Spring security

//dependencies, dependencies versions, Spring configuration, internationalization configuration, logging, security, and so on


- But Spring Boot automatically provides all

## 225. Using Spring initializer to creat a project
- start.spring.io

- Maven, Java, Spring 2.4.4(SNAPSHOT)
- Web Starter added
- Generate => zip file downloaded! unzip and note down the path to it

- Eclipse
~> import

- NOTE: installed Eclipse first, because I never used it!
~> Encoding set to UTF-8
(https://suzxc2468.tistory.com/174)


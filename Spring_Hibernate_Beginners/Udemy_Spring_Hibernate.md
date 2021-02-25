# 1. Introduction
- Learn how to build Java apps with Spring and Hibernate
<br>

# 2. Spring Overview
#### 6. Why Spring?
: very popular framework for building Java apps
: initially a simpler and lightweight alternative to J2EE
: provides a large number of helper classes

- Note. J2EE
~> Java 2 Platform Enterprise Edition.
: platform-independent, Java-centric environment from Sun for developing, building and deploying Web-based enterprise applications online.
: comprised of a set of services + APIs + protocols which provide the functionality for developing multitiered, Web-based aplications

- J2EE
~> EJB v1 and v2 were extremly complex

- Rod Johnson: Founder of Spring!

~> "J2EE development without EJB, but with Spring Framework!!!"


- Chad's recs: learn BOTH Spring and Java EE (JSP, Servlet, JSE)

#### 8. Spring 5 Update
(September 2017)

~> currently v5.3.1

#### 8. Spring Core Framework
~> Simplify Java Enterprise Development

- Goals of Spring
1. Lightweight development with Java POJOs (Plain Old Java Objects)
2. Dependency injection to promote loose coupling
3. Declarative programming with Aspect-Oriented-Programming (AOP)
4. Minimize boilerplate Java code


- Core Container
: Factory for creatin beans
: Manage bean dependencies
: 'creating beans and making them available'

- Infrastructure
: AOP, Aspects, Instrumentation, Messaging
~> AOP(Aspect Oriented Programming)
: Add application-wide functionality to objects declaratively...
: logging, security, transactions, etc...

~> Instrumentation: Java agents to remotely monitor the app with JMX(Java Management Extension)

- Data Access Layer
: JDBC, ORM, Transactions, OXM, JMS
: for communication with databases
~> JDBC: helper classes reduce your JDBC codes by 50% or more
~> ORM(Object to Relational Mapping): Integration with Hibernate and JPA
~> JMS(Java Message Service): allows you to send msg to a msg queue in an async fashion
: core part of Java EE
: Spring provides helper classes

~> Transaction support makes heavy use of AOP behind the scenes

- Web Layer (All Web related classes!)
~> Home of the Spring MVC framework
: Servlet, WebSocket, Web, Portlet



- Test Layer: Spring supports Test-Driven-Development
: Mock objects and out-of-container testing
: Unit,Integration, Mock

#### 11. Spring Platform
- What are Spring "Projects"?
: Additional Spring modules built-on-top (or add-ons) of the core Spring Framework
: Only used what you need...
~> Spring Cloud, Spring Data
~> Spring Batch, Spring Security
~> Spring for Android, Spring Web Flow(SOAP/REST)
~> Spring Web Services/LDAP

- spring.io!!
=> various options


## 3. Setting Up Your Development Environment
#### 12. Dev Environment Overview
- Have JDK (Java Development Kit) installed
- www.oracle.com/technetwork/java/javase/downloads
- Spring5 requires Java8 or higher

- Software
1. Java Application Server
=> for Web Development
2. Java Integrated Development Environemnt (IDE)

~> Lots of options, while we will use TOMCAT server and ECLIPSE IDE





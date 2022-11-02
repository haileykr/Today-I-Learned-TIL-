# Build a Backend REST API with Python & Django - Advanced
## Udemy
## Mark Winterbottom, Brooke Rutherford

## Introduction
3. Course Structure
    * App Design  -> Intro to TDD -> System Setup -> Project Setup -> Configure GitHub Actions -> TDD with Django -> Configure DB -> Create User Model -> Setup Django Admin -> API Documentation -> Build User API -> Build Recipe API -> Build Tags API -> Build Ingredients API -> Recipe Image API -> Implement Filtering -> Deploy to AWS -> Summary -> Upgrade

4. Getting Help
    * Codechecker.app
    * Stack Overflow
    * Q&A

## App Design
6. Technologies
    * Python
    * Django
      * Python Web Framework
      * Handles
        * URL Mappings
        * Object Relational Mapper
        * Admin site
    * Django REST Framework
      * Django add-on
      * Build REST APIs
      * Django REST API > Django > Python
    * PostgreSQL
    * Docker
      * Development environment
      * Deployment
    * Swagger
    * Github Actions
      * Automation - Testing & Linting!

7. Django Project structure
    * app/ - Django project
    * app/core/ - Code shared between multiple apps
    * app/user/ - User related code
    * app/recipe/ - Recipe related code


## Test Driven Development


8. What is TDD?
   * Unit Tests
     * Code which tests code
       * Setup conditions/inputs
       * Runs a piece of code
       * Checks outputs with "assertions"

     * Many benefits
       * Ensures code runs as expected
       * Catches bugs
       * Improves reliability
       * Provides confidence
   * TDD - Development practice
     * Write Code -> Write Test (X)
     * Write Test -> Write Code (O)
   * TDD Process
    1. Write Test
    2. Run Test (Fails)
    3. Add Feature
    4. Run Test (Passes)
    5. Re-factor
    6. Go back to Step #4 and #5
   * Why TDD?
     * better understanding of code
     * confidence-led changes

## System Setup


9. What to install
    * Visual Studio Code
    * Docker Desktop/Docker for Linux
    * Git
10. Setup COnfirmation
    * Check by running

```python
docker --version
docker-compose --version
git --version
```


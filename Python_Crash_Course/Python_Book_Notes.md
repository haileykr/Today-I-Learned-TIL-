### 15. Generating Data
* Data Visualization Tools - Matplotlib, Plotly
```python
$ python -m pip install --user matplotlib
```
* https://matplotlib.org/gallery
<br />

### 16. Downloading Data
* CSV - csv module
```python
import csv
from datetime import datetime

with open(filename) as f:
    reader = csv.reader(f)
    header_row = next(reader)
    for row in reader:
        # ...

current_date = datetime.strptime(row[2], "%y/%m/%d")
```
* try-except-else

* JSON - json module
```python
import json

with open(filename) as f:
    file = json.load(f)

with open(filename, "w")as f:
    json.dump(file, f, indent=4)
```
* scattergeo / hover_text / size etc
<br/>

### 17. Working with APIs
* Requests

> $ python -m pip install --user requests
```python
import requests

url = ""
headers = {"Accept": "application/json"}
r = requests.get(url,headers)

response = r.json()
```
<BR/>

### 18. Getting Started With Django





* Django : web-building framework

* Write a spec first
* Setting up a Virtual Environemnt!
  * where u install packages and isolate them from all other Python packages

##### Create a new directory
* $ python -m venv ll_env

* $ source ll_env/bin[Scripts] /activate

* the environment is active, and you can install packages to the environment and use the ones which are installed
* Packages you install in ll_env will be available only while the environment is active

* to stop using the virtual env, enter ** deactivate **


##### Install Django
* $ pip install django

##### Create a Project in Django within the virtual env ll_env
* $ django-admin startproject learning_log .

* the dot creates the new project with a directory structure including
  * \__init__.py
  * settings.py -  controls how Django interacts with ur System and manages ur project
  * urls.py -  tells Django which pages to build in response to browser Requests
  * wsgi.py -  web server gateway interface, helps Django serve the files it Creates

##### Creating Database
  * $ python manage.py migrate

  * SQLite database is created - db.sqplite3

* any time a database it modified, the database is migrated
  

##### Run Project
* to view the project in its current state - $python manage.py runserver  [port#]

##### Starting An App
* A Django Project - group of  individual *apps* that work together to make the whole project work

* leave the dev server run and open a new terminal window
* navigate to manage.py
* $ source ll_env/bin/activate
* $ python manage.py startapp learning_logs
* $ ls
* $ls learning_logs/

* startapp appname -  tells Django to create the infrastructure needed to build an app

* A new folder named the same is created with some files - most important ones: models.py, admin.py, views.py





##### Defining Models
* models.py - to define the data we want to manage in our app

* models.py
```python
from django.db import models
# model tells Django how to work with the data that will be stored in the app
# code-wise, a model is just a class; it has attributes and methods

class Topic(models.Model):
    """A topic the user is learning"""
    text = models.CharField(max_length = 200)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        """Return a string representation of the model."""
        return self.text


```
* Topic class inherits from Model
  * Model is a built-in parent class which defines a model's basic functionality




##### Activate Models

* tell Django to include our app in the overall project
  * To use Our Model
  * in settings.py


* tell Django to modify the database
* so it can store information related to the model Topic
* $ python manage.py makemigrations learning_logs 

* makemigrations: tells Django to figure out how to modify the database so it can store the data associated with any new models we've defined
* the new migration file called 0001_initial will create a table for the model Topic in the database
* apply this migration and have Django modify the database for us
* $ python manage.py migrate

* whenever we want to modify the data that Learning Log is managing,
* (1) modify models.py
* (2) call makemigrations on learning_logs
* (3) tell Django to migrate the project
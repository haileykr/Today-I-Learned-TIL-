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

* Create a new directory
* $ python -m venv ll_env
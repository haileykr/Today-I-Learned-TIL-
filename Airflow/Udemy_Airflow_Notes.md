# The Complete Hands-On Introductino to Apache Airflow

## Udemy
## Marc Lamberti

## 1. Course Introduction
### 4. Development Environment
* Your error might come from dependencies, tools installed on your machines, conflicts, dependencies and the list goes on.
* To avoid this, we are going to use a Virtual Machine!
* If you don't know what a virtual machine is, you can think of it as a tiny computer running inside your computer.

* For example, you are on Windows, you could have a virtual machine running on Linux. You have Linux running inside your Windows machine.

* That being said let's set up the development environment! 🤓

* Installing the VM
* Go to the virtualbox page: https://www.virtualbox.org/wiki/Downloads

* Select your operating system, to download VirtualBox

* Once it is downloaded, double click on it and follow the instructions to install it on your computer

* Once installed, open Virtual Box and you should obtain the following output

* If you already have Virtual Box installed, make sure your version is up to date (at least 6.1.14)
* Well done, you just've installed VirtualBox successfully!
* Setting up the Virtual Machine
* Now we have Virtual Box, we need to install and set up the virtual machine.

* At the end, we will have a Linux distribution (Ubuntu) running in VirtualBox, so inside our computer.
* To do this, go to https://marclamberti.com/courses/the-complete-hands-on-course-to-master-apache-airflow/
* and fill the form to get the virtual machine (no worries, you won't get any spam 😉)

* You have to confirm your email address (look in your spam) and then you will receive the link to download the VM.
* You didn't receive the email? Send me a message on Udemy!
* Once you have downloaded the Virtual Machine, you should have a file called AirflowVM.ova
- Double click on it

* You might NEED to uncheck Import hard drives as VDI if case you get an error after importing it related to 'medium'
- Click on "Start" and wait for the VM to start until you get the following output from it

* Well done, the VM is ready!

* Quick check: Open your web browser and go to localhost:8080. If you don't get an empty page, you might already having something running on that port. You need to stop it as we will use that port for Airflow
* SSH and Visual Studio Code
* VirtualBox is installed, the VM is set up, there is one more step.
* Access the VM in SSH and connect Visual Studio Code through it.
* If you don't know what SSH is, it's a protocol to connect two machines over a network in a secured way.

- Open your terminal and type: ssh -p 2222 airflow@localhost

* You should obtain the following output:
* Type: yes
* Then you need to enter the password: airflow
* And you should be connected to the VM as shown below
* At this point you are inside the VM connected through the user airflow

* Hit control-D to exit the VM.

* Ok, last step, set up Visual Studio Code to edit files/folders in the VM.
* Open Visual Studio Code (If you don't have it, you should 😌 https://code.visualstudio.com/

* Click on "Extensions"

<!-- * And in the search bar on the top, look for "remote ssh" and Install it -->

* Once the plugin is installed, open it by hitting
- Cmd-P (on Mac)
- F1 (on Windows)

* and type >remote-ssh
* Then hit enter, and select "Add New SSH host..."
* Enter the following command
* ssh -p 2222 airflow@localhost
* and hit enter.

* Select the first proposition for the SSH config file
* You should see this message box on the bottom right of VSCode:
* Now the connection has been added, open the plugin again
- Cmd-P (on Mac)
- F1 (on Windows)
* and type >remote-ssh
* Then choose "localhost" by hitting enter.
* A new Visual Studio Code window opens, type the password airflow

* And YOU ARE CONNECTED! Congrats! 😎 😎

## 2. Getting Started with Airflow
* What is Airflow?
    * Apache Airflow is an open source platform to **programmatically author, schedule** and **monitor** workflows
* Benefits
    * Dynamic, Scalability, UI,Extensibility

* Core Components
    1. Web Server
        - Flask server with Gunicorn serving the UI
    2. Scheduler
        - Daemon in charge of scheduling workflows
    3. Metastore
        - Database where metadata are stored
    4. Executor
        - Class defining how your tasks should be executed
    5. Worker
        - Process/sub process executing your task

* DAG - Directed Acyclic Graph
* Operator - Wrapper around the task you want to achieve
    * ex. use database and insert data
    ```javascript
    db = connect(host, credentials)
    db.insert(sql-request)
    ```

    1. Action Operator
        - executing functinos or commands
        - ex. bash operator, python operator
    2. Transfer Operator
        - transfer data between a source and a destination
    3. Sensor Operator
        - wait for sth before it moves onto another

* Task - operator in your data pipeline // as soon as you execute an operator that operator becomes a task instance

* Workflow - combination of all concepts

* what Airflow is NOT?
    : Not a data streaming solution , neither a data processing framework
    ex. if you want to process data every second, dont use Airflow

### 8. How Airflow works?
<DIAGRAM>
1. One Node Architecture
    
    * Under One Node / on a single machine,
    : Web Server, Scheduler, Metastore, Executor

    => perfect when you want to explore Airflow or have a limited number of tasks that you want to execute

2. Multi Nodes Architecture (Celery)
    * Node 1 : Web  Server, Scheduler, Executor
    * Node 2 : Metastore, Queue [external to the executor]

    * Worker Node [Airflow Worker] x n


### 9. Practice - Installing Airflow 2.0
* download VM
* windows => uncheck 'Import hard drives as VDI'
* settings => Network : may change from NAT to Bridged Adapter
=> Port binding : AirflowUI - 8080:8080, SSH - 2222:22
* Click on "Start"
* "AirflowVM Login"

* On VSCode, hit F1 and type "remote-ssh: connect to host"
    * type "ssh -p 2222 airflow@localhost"
* "remote-ssh: connect to host" again
    * choose localhost!

* virtual env
```python
python3 -m venv sandbox
source sandbox/bin/activate

pip install wheel # module used by Airflow

pip install apache-airflow=2.1.0 --constraint https://gist.githubusercontent.com/marclamberti/742efaef5b2d94f44666b0aec020be7c/raw/21c88601337250b6fd93f1adceb55282fb07b7ed/constraint.txt # constraint is to limit python dependencies info
```
* https://gist.github.com/marclamberti

* `airflow db init`
* `ls`

* `airflow webserver` to start user interface



## 7. Using Apache Airflow with Docker

### 54. Quick Reminder About Docker
- Install and run software regardless of the installed dependencies and the operating system used
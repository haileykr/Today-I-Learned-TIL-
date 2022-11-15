# Docker & Kubernetes : The Practical Guide
### Udemy
### Maximilian Schwarzmuller

## Getting started
### 8. Docker Setup - Windows
* Follow instructions
* Docker Desktop
### 11. Docker Tools Overview
* we installed **Docker Engine**
* Dokcer Engine => Docker Desktop(incl. Daemon and CLI)
* Docker Hub
* Docker Compose

### 13. Getting Our Hands Dirty
* Preview

## 2. Docker Images & Containers : The Core Building Blocks
### 18. Images & Containers: What and Why?
* Docker
    * Images
        * Templates or Blueprints for containers
        * Contains code and required tools or runtimes
    * Containers
        * The running 'unit of software'
### 21. Building our own Imagew w/ DockerFile
* Install **Docker** Extension
```dockerfile
FROM node

# Set the Working directory to sth not root
WORKDIR /app 

# COPY [host file sys] [image/container file sys]
COPY . ./ # points at app

# COPY . /app
RUN npm install

# AFTER setting everything up,
# BEFORE specifying command
# EXPOSE a port to **let docker know when this container is started
# we wanna expose a certain port
# to our local sys**
EXPOSE 80

# CMD : executed when a container is starting not when an image is being built
CMD ["node","server.js"]
```
* if you don't specify a CMD, the CMD of the base image will be executed.
* With no base img and no CMD there will be an error!
* you HAVE to map host machine and docker ports when creating container
* `docker run -p 3000:80 <imagename>`

### 23. EXPOSE &A Little Utility Func
* In the last lecture, we started a container which also exposed a port (port 80).
* I just want to clarify again, that EXPOSE 80 in the Dockerfile in the end is **optional**. It documents that a process in the container will expose this port. But you still need to then actually expose the port with -p when running docker run. So technically, -p is the only required part when it comes to listening on a port. Still, it is a best practice to also add EXPOSE in the Dockerfile to document this behavior.
* As an additional quick side-note: For all docker commands where an ID can be used, you don't always have to copy / write out the full id.
* You can also just use the first (few) character(s) - just enough to have a unique identifier.
* So instead of
`docker run abcdefg`
* you could also run
`docker run abc`
* or, if there's no other image ID starting with "a", you could even run just:
`docker run a`
* This applies to ALL Docker commands where IDs are needed.

### 24. Images are Read Only!
* you have to build images whenever any change is made!
* as images are "snapshots" of codes

### 25. Understanding Image Layer
* a Container is based on Images
* Any image after where change is made is going to be rebuilt
* optimization
```dockerfile
FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 80

CMD ["node","server.js"]
```
=> whenever source code changes the layers before it do not need to be re-built

### 27. Managing Images and Containerz
* for both image and container
    * add `--help` to **see all options**
* Images
    * can be **tagged (named)**
        * *-t, docker tag _*
    * can be **listed**
        * *docker images*
    * can be **analyzed**
        * *docker image inspect*
    * can be **removed**
        * *docker rmi, docker prune*
* Containers
    * can be **named**
        * `--name`
    * can be **configured in detail**
        * see  `--help`
    * can be listed
        * *docker ps*
    * can be removed
        * *docker rm*
### 29. Understanding Attached and Detached Containers
* Attached : listening to the app in terminal
    * `docker run `
    * `docker contanier attach CONTAINER_NAME`
* Detached : running on background
    * `docker run -d`

### 31. Entering Interactive Mode
* Python example
```dockerfile
FROM python
WORKDIR /app
COPY . /app
CMD ["python", "rng.py"]
```
* `docker run -it `

### 32. Deleting Images & Containers
* `docker rm <id1> <id2> ..`
* or to remove all stopped containers at once - `docker container prune`
* `docker rmi <image_id>`
    * to remove images
* `docker image prune`

### 33. A Look Behind the Scenes: Inspecting Images
* `docker image inspect <image_id>`
    * can see details of the image
    * ex. exposed port, layers, os

### 35. Copying Files Into & From A Container
* `docker cp <source> <destination-container>`
* ex.  `docker cp dummy/. boring_vaughan:/test`
  ex.  `docker cp boring_vaughan:/test dummy`
* useful when ex. you want to copy logs from the container to the local machine

### 36. Naming and Tagging Containers and Images
*  `docker run --name <name>`
* Understanding Image Tags
    * name:tag
    * name - defines a group of, possible more specialized, images
    * example: "node"
    * tag - defines a specialized image within a group of images
    * example: "14"
    * Combined - A **unique identifier**
* if you want to remove ALL images, incl. tagged images, you need to run `docker image prune -c`

### 37. Sharing Images - Overview
* with an image, anyone can create containers based on it!
    * Share a Dockerfile
        * Simply run `docker build .`
            * **Important**: The Dockerfile instructions **might need surrounding files** / folders (e.g. source code)
        * Share a **Built Image**
            * Download an image, run a container based on that image
            * No build step required, everything is included in the image already!

### 38. Pushing Images to DockerHub
* Sharing via Docker Hub or Private Registry
    * Docker Hub
        * Free usage possible!
        * Official Docker Image Registry
        * Public, private and "official" images
    * Private Registry
        * Any provider / registry you want to use
        * only your own (or team) images
    * Share: `docker push IMAGE_NAME`
    * Use: `docker pull IMAGE_NAME`
        * needs to be "HOST:NAME" to talk to private registry
* to clone image..
    * `docker tag <old_name> <new_name>`
* to log into DockerHub on terminal..
    * `docker login`

### 39. Pulling and Using Shared Images
* `docker pull`

### 40. Module Summary
* Docker is all about **Images** and **Containers**
    * Images are the templates / blueprints for Containers, multiple Containers can be created  based on one Image
    * Images are either downloaded (*docker pull*) or created with Dockerfile and *docker build*
    * Images contain multiple layers (1 Instruction = 1 Layer) to optimize build speed (caching!) and re-usability
    * Containers are created with *docker run IMAGE* and can be configured with various options / flags
    * Containers can be listed (*docker ps*), removed (*docker rm*) and stopped + started (*docker stop/start*)
    * Images can also be listed (*docker images*) , removed (*docker rmi, docker image prune) , and shared (*docker push/pull*)

## 3. Managing Data & Working with Volumes
### 43. Understanding Data Categories / Different Kinds of Data
1. Application
    * Code + Environment 
    * Written and provided by you (=developer) 
    * added to image and container in build phase
    * "Fixed" : can't be changed once image is built
    * Read-only - hence stored in **IMAGES**
2. Temporary App Data (e.g. entered user input)
    * Fetched / Produced in running container
    * Stored in memory or temporary files
    * dynamic and changing but cleared regularly
    * Read + write, temporary - hence stored in **CONTAINER**
3. Permanent App Data (e.g.user accounts)
    * Fetched / Produced in running container
    * Stored in files or a database
    * must not be lost if container stops / restarts - data should actually survive the removal of a container
    * Read + write, permanent, stored with **CONTAINER & VOLUME**
* Note : Image - read-only vs. Container - read-write

### 45. Building and Understanding the RealAPP Demo
* file is stored inside docker container!

### 46. Understanding Problem
* when a container is removed, or a different container is created, data is lost!

### 47. Introduction to Volume
* Understanding Volumes
    * Volumes are **folders on your host machine** hard drive which are **mounted** ("made available", mapped) **into containers**
        * so you can connect a folder INSIDE a container and the one OUTSIDE the container!
    * Volumes **persist if a container shuts down**. If a container (re-)starts and mounts a volume, any data inside of that volume is **available in the container**
* A container  **can write** data into a volume **and read** data from it

### 48. A First, Unsuccessful Try
```dockerfile
VOLUME [ "container_path_inside_the_container"  ]
```
* make changes
```javascript
//await fs.rename(..)
await fs.copyFile(tempFilePath, finalFilePath);
await fs.unlink(tempFilePath);
```

### 49. Named Volumes to the Rescue
* Two Types of External Data Storages
1. Volumes (Managed by Docker)
    * Anonymous Volumes
        * Created particularly for a single container!
        * survives container shutdown / restart unless --rm is used
        * cannot be shared across containerz
        * since it's anonymous, it can't be re-used (even on same image)
        * can prioritize container-internal path higher than external one
    * Named Volumes
        * Great for data which should be Persistent but which you don't need to edit directly
        * cannot be created in a Docker file but can be created using command
        * Created in general, not tied to any particular container
        * Survives container shutdown / restart - removal via CLI
        * can be shared across containers
        * can be re-used for same container, across restart
    * Docker sets up a folder/path on your host machine, exact location is unknown to you (=dev). Managed via *docker volume* command
2. Bind Mounts (Managed by You)
    * You define a path/folder on your host machine
    * Great for persistent, editable(by you) data (e.g. source code) 
        * can provide "live data" to container without a need for rebuilding
    * Location on host file system not tied to any particular container
    * Survives container shutdown  / restart-removal on host fs
    * can be shared across containers
    * can be re-used for same container, across restart
    * FOR WINDOWS USERS, WE GOTTA MOUNT TO LINUX
* for both, a defined path in the container is mapped to the created volume/mount. e.g. /some-path on your hosting machine is mapped to /app/data
* `docker volume ls`  
* `docker run -d -p 3000:80 --rm --name feedback-app -v  feedback:/app/feedback feedback-node:volumes`
* here, feedback is the volume name!

### 50. Removing Anonymous Volumes
* We saw, that anonymous volumes are removed automatically, when a container is removed.
* This happens when you start / run a container with the --rm option.
* If you start a container without that option, the anonymous volume would NOT be removed, even if you remove the container (with `docker rm ...`).
* Still, if you then re-create and re-run the container (i.e. you run `docker run ... ` again), a **new anonymous volume will be created**. So even though the anonymous volume wasn't removed automatically, it'll also not be helpful because a different anonymous volume is attached the next time the container starts (i.e. you removed the old container and run a new one).
* Now you just start piling up a bunch of unused anonymous volumes - you can clear them via `docker volume rm VOL_NAME ` or `docker volume prune`.

### 51. Getting Started with Bind Mounts (Code Sharing)
*  `docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback -v /Users/max/development/udemy/docker-ls:/app feedback-node:volumes`
* make sure Docker has access to your local folder
* settings for Docker =>file sharing
* on windows with wsl integration you dont see the "file sharing"option but it is fine

### 52. Bind Mounts - Shortcuts Paths
* macOS/Linux :  `-v $(pwd):/app`
* Windows: `-v  "%cd%":/app`

### 53. Combining & Merging Different Volumes
* local host (local machine) folder overrides what's inside the Docker container
    * this can cause issues ex. when node_modules are not in local host folder
* so we gotta tell Docker that there are certain parts of the Docker container which should not be overwritten
    * add another  `-v /app/node_modules`
        * use ANONYMOUS Volume
*  `docker run -d -p 3000:80 --name feedback-app -v feedback:/app/feedback -v /Users/max/development/udemy/docker-ls:/app -v /app/node_modules feedback-node:volumes`

* the more specific path wins 
    * node_modules folder which was created during the image build will win as volume
* now it runs

### 54. A NodeJS-specific Adjustment: Using Nodemon in a Container
* in package.json, add "start" command
* and in Dockerfile, add CMD ["npm", "start"]
* for windows, the folder should be mounted to Linux=> Look for resource

### 55. Volumes & Bind Mounts: Summary
1. `docker run -v /app/data ...` => Anonymouse Volume
2. `docker run -v data:/app/data ..` => Named Volume
3. `docker run -v /path/to/code:/app/code..` => Bind Mounts

### 56. A Look at Read-Only Vol
*  `.. "local_host_path:/app:ro" ..`

### 57. Managing Volumes
* `docker volume <option>`

### 58. Using "COPY" vs. Bound Mounts
* Bound Mounts=> wouldnt use for prod

### 59. Don't COPY Everything: Using "dockerignore" files
* .dockerignore (ex.node_modules, Dockerfile, .git)

### 61. Working with Environment Variables & ".env" files
* Docker supports build-time **ARG**uments and runtime **ENV**ironment variables
* ARG
    * allow you to set flexible bits of data i.g. variables in your dockerfile to plug different values to dockerfiles based on arguments given with --build-arg option
    * Available inside of Dockerfile, NOT accessible in CMD or any application code
    * Set on image build(**`docker build`**) via  `--build-arg`
* ENV
    * Available inside of Dockerfile & in application code
    * Set via ENV in Dockerfile or via --env on  **`docker run`**
* Examples
    - NODE : `process.env.PORT`
    - in Dockerfile,
        - ex. 
```dockerfile
ENV PORT 80
EXPOSE $PORT
```
    - `docker run ... --env PORT=8000`
    - no need to rebuild images!
* direct to a file
    - `docker run .. --env-file ./.env ..`

### 62. Environment Variables & Security
* depending on what data you're storing in your env variables, you might not want to include it directly in ur `dockerfile`
* instead, go for a separate environment variables file which is then only used at runtime (i.e. when you run your container with docker run).
* Otherwise, the values are "baked into the image" and everyone can read these values via docker history <image>.
* For some values, this might not matter but for credentials, private keys etc. you definitely want to avoid that!
* If you use a separate file, the values are not part of the image since you point at that file when you run docker run. But make sure you don't commit that separate file as part of your source control repository, if you're using source control

### 63. Using Build ARGuments (ARG)
* anywhere  in dockerfile,
* but prob towards the end to minimize layer-rebuilds,
```dockerfile
ARG DEFAULT_PORT=80
# ..
ENV PORT $DEFAULT_PORT
EXPOSE $PORT
# ..
```
* `docker build -t feedback-node:dev --build-arg DEFAULT_PORT=8000 .`

### 64. Module Summary
* Containers can read + write data. **Volumes** can help with data storage, **Bind Mounts** can help with direct container interaction.
* Containers can  **read + write data**, but written data is lost if the container is removed
* **Volumes** are folders on the host machine, managed by Docker
    * mounted into the container
* **Named Volumes** survive container removal and can thereforebe used to store persistent data
* **Anonymous Volumes** are attached to a container - they can be used to save(temporary) data inside the container
* **Bind Monts**are folders on the host machine which are specified by the user and mounted into containers - like **Named Volumes**
* **Build ARGuments** and **Runtime ENVironment** variables can be used to make images and containers more dynamic/configurable

## 4. Networking: (Cross-)Container Communication
### 67. Case 1- Container to WWW Communication
* sending http requests to api's outside our app
* IT WORKS without any specific set-ups

### 68. Case 2 - Container to Local Host Machine Communication
* to local host machine communication
* ex.
```mongoose.connect(
    'mongodb://localhost:27017/swfavorites',
    { useNewUrlParser: true},
    (err) => {
        if (err) {
            console.log(err);
        }
        else {
            app.listen(3000);
        }
    }
)
```
* we need to change the `localhost` part to sth that Docker can understand
=> `host.docker.internal`
=> translated to the ip address of the host machine as seen from inside container

### 69. Case 3 - Container to Container Communication
* Best Practice - One container does one thing
* ex. separate express and mongodb

### 73. Container to Container Communication : A Basic Solution
* `docker run mongo` using pre-existing mongo image
* `docker run -d --name mongodb mongo`
* inspect that container by using
    - `docker container inspect mongodb`
    - Copy IPAddress
    - and substitute "host.docker.internal" with this

### 74. Introducing Docker Networks : An Elegant Container to Container Communication
* Creating Container Networks
* `docker run --network my_network ..   `
* Network -> under this, Container 1, Container 2, Container 3
* making all containers exist under one network
* Within a Docker network, all containers can communicate with each other and IPs are automatically resolved
* `docker network create favorite-net`
* `docker network ls`
* `docker run -d  --name mongodb --network  favorites-net mongodb`
* `docker ps`
* when multiple containers are under one network, we can just specify the container name of our choice as host
* ex. `mongodb://mongodb_container:27017/swfavorite`
* no need to expose port if you're only communicating container-container in the same net

### 75. How Docker Resolved IP Addresses
* Container to Host Machine => Use `host.docker.internal` as address
* Container to Container => Requires a container network + use `container name as address`
* Docker will NOT replae your source code. It simply detects outgoing requests and resolves the IP for such request

### 76. Docker Network Drivers
* Docker Networks actually support different kinds of "Drivers" which influence the behavior of the Network.
* The default driver is the "bridge" driver - it provides the behavior shown in this module (i.e. Containers can find each other by name if they are in the same Network).
* The driver can be set when a Network is created, simply by adding the --driver option.
` docker network create --driver bridge my-net`
* Of course, if you want to use the "bridge" driver, you can simply omit the entire option since "bridge" is the default anyways.
* Docker also supports these alternative drivers - though you will use the "bridge" driver in most cases:
* host: For standalone containers, isolation between container and host system is removed (i.e. they share localhost as a network)
* overlay: Multiple Docker daemons (i.e. Docker running on different machines) are able to connect with each other. Only works in "Swarm" mode which is a dated / almost deprecated way of connecting multiple containers
* macvlan: You can set a custom MAC address to a container - this address can then be used for communication with that container
* none: All networking is disabled.
* Third-party plugins: You can install third-party plugins which then may add all kinds of behaviors and functionalities
* As mentioned, the "bridge" driver makes most sense in the vast majority of scenarios.

## 5. Building Multi-Container Applications with Docker
### 80. Our Target App & Setup
* Our Demo Project:Three Building Blocks
1. Database -> MongodB
    * data MUST PERSIST
    * Access should be LIMITED
<=>
2. Backend ->NodeJS REST API
    * data MUST PERSIST
    * Live Source Code Update   
<=>
3. Frontend ->React SPA
    * Live Source Code Update!

### 81. Dockerizing the MongoDB Service
* `docker run --name mongo-app --rm -d  -p 27017:27017 mongo`
    * to expose the mongo port to the local machine so that other containers can access it through local machine too

### 82. Dockerizing the Node App
* Gotta write our own Dockerfile!
```dockerfile

FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["node", "app.js"]
```
* `docker image prune -a`
* `docker build -t goals-BE  .`
* `docker run --name goals-BE -p 80:80 --rm  goals-BE`
* make sure localhost is edited to host.docker.internal then re-build the image as the source code has been  modified!
* make sure you publish the port so that frontend can talk to backend server!

### 83. Moving the React SPA into Container
* also gotta make a dockerfile to create our own image - no official image of this
* Reminder : React is based on NodeJS
* image definition 
```dockerfile
FROM node

WORKDIR /app

COPY package.json

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```
* `docker build -t goals-react .`
* `docker run --name goals-frontend --rm -p 3000:3000 goals-react`
    - =>error!
    - this is just because how React is set up
    - => requires `-it` option!
    - run as `docker run .. -it .. goals-react ` then it works well!

### 84. Adding Docker Networks for Efficient Cross-Container Communication
* let's put all of containers under one network so that they can communicate with each other moer efficiently!
* `docker network create goals-net`

* <FIRST ATTEMPT>
* `docker run --name mongodb --rm -d --network goals-net mongo`
    * no need to specify port anymore
* `docker run --name goals-backend --rm -d --network goals-net goals-node`
    * adjust the code to be 'mongodb://mongodb:27017/course-goals'
    * 'localhost'-> 'goals-backend' => problem!!!!! (See below)
* `docker run --name goals-frontend --rm --network goals-net -p 3000:3000 -it goals-react`

* here we get errors
    * cuz React runs on BROWSER and it does not identify "http://goals-backend/.."
    * change back to  'goals-backend' -> 'localhost'

* <ANSWER>
* `docker run --name mongodb --rm -d --network goals-net mongo`
* `docker run --name goals-backend --rm -d --network goals-net -p 80:80 goals-node`
* `docker run --name goals-frontend --rm -p 3000:3000 -it goals-react`

### 85. Adding Data Persistence to MongoDB with Volumes
* `docker run --name mongodb --rm -v data:/data/db --rm -d --network goals-net mongo `
    * "named volume" using data:/data/db
    * the container folder path is specified by mongo documentatino
* for security introduce env variables
* `docker run --name mongodb --rm -v data:/data/db --rm -d --network goals-net -e MONGO_INITDB_ROOT_USERNAME=max -e MONGO_INITDB_ROOT_PASSWORD=secret1 mongo `
    * now connection fails because our be is requesting to mongodb api without username+pw
    * refer to mongo doc
        => "mongodb://[username:pw@]host1[:port][...]
* `'mongodb://max:secret1@mongodb:27017/course-goals?authSource=admin' `

### 86. Volumes, Bind Mounts & Polishing for the NodeJS Container 
* can do either named volume or bind mount
* `docker run --name goals-backend -v logs:/app/logs -v /Users/max/dev/udemy/docker-ls/backend:/app -v /app/node_modules --rm -d --network goals-net mongo `
    * `-v logs:/app/logs` - /app/logs is our working directory according  to the code
        * because this file path is longer / more precise, logs in the container will not be overwritten
    * `-v /Users/max/dev/udemy/docker-ls/backend:/app ` - binding everything in the app folder to local folder so that changes to source code are applied to container as well
    * `-v /app/node_modules` - making sure that node_moduels in container are not overwritten. anonymous volume serves the purpose
* let's add "nodemon" to devDependencies
    * so that the server is restarted upon source code changes
    * npm start
* let's make mongodb username and pw to be env var too
```dockerfile
FROM node
WORKDIR /app
COPY package.json
RUN npm instal
COPY . .
EXPOSE 3000

ENV MONGODB_USERNAME=root # default
ENV MONGODB_PASSWORD=secret # default

CMD ["npm", "start"]
```
* `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb/..`
  
### 87. Live Source Code Updates for the React Container (with Bind Mounts)
* frontend
* `docker run -v /Users/max/dev/udemy/docker-ls/frontend/src:/app/src --name goals-frontend --rm -p 3000:3000 -it goals-react`
* for windows users,
    * micro-soft (https://devblogs.microsoft.com/commandline/access-linux-filesystems-in-windows-and-wsl-2/) 
### 88. Module Summary
* room for improvment
1. Three, long dokcer run commands
    * would be great if we wouldn't have to remember/save those and if we wouldn't have to run them individually
2. Development-only setup
    * Not optimized for production, shouldn't be executed like this on a production server

## 6. Docker Compose: Elegant Multi-Container Orchestration
### 91. Docker-Compose: What & Why?
* Automating Multi-container Setup
* docker build & docker run x n => ONE CONFIGURATINO FILE + ORCHESTRATION COMMANDS (build, start, stop ..)
1. Docker Compose does NOT replace Dockerfiles for custom images
2. Docker Compose does NOT replace images or containers
3. Docker Compose is NOT suited for managing multiple containers on different hsots/machines

* writing Docker Compose files
    * Services (Containers)
        * Published Ports
        * Environment Variables
        * Volumes
        * Networks

### 93. Diving into the Compose File Config
* docker-compose.yaml
* yaml  => indentation specifies dependencies and indentation should be 2 spaces
* docker compose docs (https://docs.docker.com/compose/compose-file)
```yaml
version: "3.8",
services: # 'children' <=> 'containers'
  backend-container:
  mongodb:
    image: 'mongo'
    volumes: 
      - data:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=max
      # MONGO_INITDB_ROOT_USERNAME: max
      MONGO_INITDB_ROOT_PASSWORD: secret
    # env_file:
      # - ./env/mongo.env
    # networks: # usually don't need it cuz compose file runs containers under 1 net anyways
      # - goals-net
  frontend-container:
volumes: # named volumes are located here/ anonymous vol or bind mount dont have to be written down here
  data: 
```
* commands for ref!
    ```bash
    docker run --name mongodb \
        -e MONGO_INITDB_ROOT_USERNAME=max\
        -e MONGO_INITDB_ROOT_PASSWORD=secret\
        -v data:/data/db \
        --rm \
        -d \
        --network goals-net \
        mongo
    ```
### 94. Installing Docker COmpose on Linux
* has to be manual
1. `sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`
2. `sudo chmod +x /usr/local/bin/docker-compose`
3. `sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose`
4. `docker-compose --version`
### 95. Docker Compose Up&Down
* `docker-compose up`
* `docker-compose up -d`
* `docker-compose down`
    * does not deleve volumes though
* `docker-compose down -v`
    * shuts down volumes too
### 96. Working with Multiple Containers
```yaml
version: "3.8",
services: # 'children' <=> 'containers'
  backend-container:
    #build: ./backend # instead of giving the built img
    build:
      context: ./backend # context should be set to the /backend folder since we're copying the entire folder into the image (COPY .  . )
      dockerfile: Dockerfile
      args:
        some-args: 
    ports:
      - '80:80'
    volumes:
      - logs:/app/logs
      - ./backend:/app # relative  way of path denotation is possible
      - /app/node_modules'
    env-file:
      - ./env/backend.env
    depends_on:
      - mongodb # needed for docker-compose cuz multiple containers run at the same time
  mongodb:
    image: 'mongo'
    volumes: 
      - data:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=max
      # MONGO_INITDB_ROOT_USERNAME: max
      MONGO_INITDB_ROOT_PASSWORD: secret
    # env_file:
      # - ./env/mongo.env
    # networks: # usually don't need it cuz compose file runs containers under 1 net anyways
      # - goals-net
  frontend-container:
volumes: # named volumes are located here/ anonymous vol or bind mount dont have to be written down here
  data: 
  logs:
```

* commands for ref!
```shell
docker build -t goals-node .

docker run --name goals-backend \
    -e MONGO_USERNAME=max\
    -e MONGO_PASSWORD=secret\
    -v logs:/app/logs \
    -v /Users/max/dev/udemy/docker-ls/backend
    -v /app/node_modules \
    --rm \
    -d \
    --network goals-net \

    -p 80:80 \
    goals-node
```

* container names set by docker-compose are different from what we specify, but we can still use what we specify as names in our code
    * unless you specify container_name field

### 97.Adding Another Container - Frontend
```yaml
version: "3.8",
services: # 'children' <=> 'containers'
  backend-container:
    #build: ./backend # instead of giving the built img
    build:
      context: ./backend # context should be set to the /backend folder since we're copying the entire folder into the image (COPY .  . )
      dockerfile: Dockerfile
      args:
        some-args: 
    ports:
      - '80:80'
    volumes:
      - logs:/app/logs
      - ./backend:/app # relative  way of path denotation is possible
      - /app/node_modules'
    env-file:
      - ./env/backend.env
    depends_on:
      - mongodb # needed for docker-compose cuz multiple containers run at the same time
    container_name:
      - mongodb
  mongodb:
    image: 'mongo'
    volumes: 
      - data:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=max
      # MONGO_INITDB_ROOT_USERNAME: max
      MONGO_INITDB_ROOT_PASSWORD: secret
    # env_file:
      # - ./env/mongo.env
    # networks: # usually don't need it cuz compose file runs containers under 1 net anyways
      # - goals-net
  frontend-container:
    build: ./frontend
    ports:
      - "3000:3000"
    volumes:
      - ./frontend/src:/app/src
    stdin_open: true  # -it
    tty: true #-it
    depends_on:
        - backend
```

* commands for ref!
    ```bash
    docker run --name goals-frontend\
      -v /Users/max/dev/udemy/docker-ls/frontend
      --rm \
      -d \
      -p 3000:3000 \
      -it \
      goals-react
    ```

### 98. Building Images and Understanding Container Names
* can also do `docker-compose build`

## 7. Working with "Utility Containers" & Executing Commands in Containerz
### 102. Utility Containers: Why would you use them?
* [env] => [`docker run mynpm init`] => [executes or appends custom commands]   

### 103. Different Ways of Runnign COmmands in Containers
* REMINDER
    * you can use `docker container attach  <container_name>` to attach to the container after it's started

### 104. BUilding a First Utility Container
* node utility container
```dockerfile
FROM node:14-alpine #extra-slim node base image
WORKDIR /app
```
* `docker run -t node-util .`

* then you can run node commands with this
    - `docker run node-util npm init`
    - `docker run -it node-util npm init`

* to bind local
    - `docker run -v /Users/max/dev/udemy/docker:/app  -it npm init`
* now package.json is in the local folder too!

### 105. Utilizing ENTRYPOINT
* kind of security measure to prevent malicious use of commands

* if there's `CMD` line in dockerfile
* and command is written while running docker
* the typed command overwrites  the `CMD` command

* vs. **ENTRYPOINT**
    * any command typed in CLI is **appended** to the ENTRYPOINT command

* for example
```dockerfile
FROM node:14-alpine

WORKDIR /app

ENTRYPOINT ["npm"]
```

* `docker run -it -v /Users/../docker:/app mynpm  init`
* `dokcer run -it -v /Users/../docker:/app mynpm   install express  --save`

### 106. Using Docker Compose
* dokcer-compose for this ex
```yaml
version: "3.8"
services:
  npm:
    build:./
    stdin_open: true
    ttyp: true
    volumes:
      - ./:/app
```

* `docker-compose run` allows users to up a single container by its name

* `docker-compose run --rm npm init`

### 107. Utility Containers, Permissions & linux
* user permissions as set by Docker  when working with "Utility Containers" and how you should tweak them
* (https://www.udemy.com/course/docker-kubernetes-the-practical-guide/learn/lecture/22167140#questions/12977214/)

## 8. A More Complex Setup : A Laravel & PHP Dockerized Project
### 112. Adding a Nginx (Web Server) Container
* refer to nginx docker webpage for descriptions too!
* blueprint
```yaml
version: "3.8"
services:
  server:
    image:  "nginx:stable-alpine"
    ports:
      - "8000:80"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro # container should not change that configuration
  php:
  mysql:
  compose:
```
* in the local host, create a folder named nginx and make a file nginx.conf
```conf
server {
    listen 80;
    index index.php index.html;
    server_name localhost;
    root /var/www/html/public;
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }
    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass php:3000;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
    }
}
```

### 113. Adding a PHP Server
* create a folder named dockerfiles and put php.dockerfile on localhost
```dockerfile
FROM php:7.4-fpm-alpine

WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql # php extensions we need
```
* you NEED a php-fpm image for the Nginx config used
    * in this project!
* NOTE: docker-compose php section
```yaml
php:
  build: 
      context: ./dockerfiles

      dockerfile: php.dockerfile
    volumes:
      - ./src:/var/www/html:delegated 
      # delegated because update doesnt need to be done immediately
  ports:
    - '3000:9000'
    # on official php image file #PORT 9000 is exposed
    # in config #PORT 3000 is exposed

    # but is it what we really want?
    # in the end, that is the Nginx Server which wanna talk to the php container
    # thus php:3000 goes straight to container and it is not sent from localhost machine

    # so we actually don't need to talk to php server from our localhost machine

    # just change the config to be php:9000

```

### 114. Adding a MySQL container
* mysql image also is provided officially
```yaml
mysql:
  image: mysql:5.7

  env_file:
    - ./env/mysql.env
```
* create a folder named env
    * create mysql.env file

```env
MYSQL_DATABASE=homestead # by Laravel
MYSQL_USER=homestead
MYSQL_PASSWORD=secret
MYSQL_ROOT_PASSWORD=secret
```

### 115. adding a Composer Utility Container
* composer dockerfile
```dockerfile
FROM composer:latst
WORKDIR /var/www/html
ENTRYPOINT ["composer", "--ignore-platform-reqs"]
```
* docker-compose
```yaml
composer:
  build:
    context: ./dockerfiles
    dockerfile: composer.dockerfile 
  volumes:
    - ./src:/var/www/html
```

### 118. Launching Only Some Docker Compoee Services
* in docker-compose file,
```yaml
server:
  volumes:
    - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf:ro
  depends_on:
    - php
    - mysql
```
* with  `depends_on`, the starting command can be simplified to `docker-compose up -d server`

* `docker-compose up -d --build server`
  * makes docker rebuild images with change

### 119. Adding More Utility Containers
* docker-compose.yaml
```yaml
artisan: 
  build:
    context: ./dockerfiles
    dockerfile: php.dockerfile
  volumes:
    - ./src:/var/www/html
  entrypoint: ['php', '/var/www/html/artisan'] # can override
npm: 
  image: node:14
  working_dir: /var/www/html
  entrypoint: ['npm']
  volumes:
    - ./src:/var/www/html
```

### 120. Dokcer Compose with and without Dockerfiles
* adding "docker file instructions" ex. working_dir ,entrypoint => optional in docker-compose
* can do them in separate dockerfile

* NOTE: bind-mounts => only proper for development (the local folders are not available on other machines)

### 121. Bind Mounts and COPY: When to Use What
* becuase of that drawback of bind-mount

* it may be better to have a separate dockerfile to have a 'snapshot' of the image and let docker-compose specify the bind mount part

* nginx.dockerfile
```dockerfile
FROM nginx:stable-alpine

WORKDIR /etc/nginx/conf.d

COPY nginx/nginx.conf .

RUN mv /etc/nginx/conf.d/nginx.conf defualt.conf

WORKDIR /var/www/html

COPY src .
```
* we ensure that the source code is always snapshot and we're not just relying on the bind mount

```dockerfile
FROM php:7.4-fpm-alpine
WORKDIR /var/www/html
COPY src .
RUN docker-php-ext-install pdo pdo-mysql
RUN chown -R www-data:www-data /var/www/html # to fix permission problem with php
# php base image does not allow editing
# so give the user 'www-data' (auto generated default)
```

## 9. Deploying Docker Containers
### 123. Module Introduction
* We will focus on web app Deployment!

### 124. From Dev to Prod

* Things to Watch Out For!
  * **Bind Mounts shouldn't** be used in Proudction!
  * Containerized apps **might need a build step** (e.g. React apps)
  * **Multi-COntainer projects** might need to be **split** (or should be split) across multiple hosts / remote machines
  * **Trade-offs** between **control** and **responsibility** may be worth  it

### 125. Deployment Process & Providers
* A Basic First Example: Standalone NodeJS App
  * Jusst NodeJS, no db, nothing else
  * => 1 image and container
* Possible Deployment Approach
  * Install DOcker on a remote host (e.g. via SSH), push and pull image, run container based on image on remote host
* **DIAGRAM**
* Hosting Prodivers [for docker]
  * documentation**
  * there are hundreds!
* Three major hosting providers - AWS, Azure, GoogleCloud
* AWS in this lecture => EC2

### 124. Getting Started w/ an Example
* AWS EC2 is a service that allows you to spin up and manage your own remote machines
* 3 Steps
  1. Create and launch EC2 instance - VPC and security group
  2. Configure security group to expose all required ports to WWW
  3. Connect to instance (SSH), install Docker and run container

### 127. Bind Mounts in Production
* In Dev
  * COntainers should encapsulate the runtime env but not necessarily the code
  * use 'Bind Mounts' to provide your local host project files to the running container
  * allows for instant updatedswithout restarting the cont
* In Prod 
  * Image/Container is the 'single source of truth'
  * A container should really work standalone, you should NOT have source code on your remote machine
  * use COPY to copy code snapshot into an image
  * ensures that every image runs without any extra, surrounding configuration or code

### 128. Introducing AWS & EC2
* AWS Management Console => EC2
* Launch instance

### 129. Connecting to an EC2 instance
* Amazon Linux2 AMI (hvm), ssd Volume Type
  * create vpc
* launch => key pair
* SSH (Secure Shell) - protocol for connecting a remote and a local machine via terminal
    * for Windows : use WSL2 or PuTTY
    * a standalone ssh client

* for Linux and Mac
* `chmod 400 <key_file_name>`
* `ssh -i "<key_file_name>" ec2-user@ec2-18-218-126-91.us-east-2.compute.amazonaws.com`
  * these ran in virtual machine

### 130. Installing Docker on Virtual Machine
* `sudo yum update -y` 

* `sudo amazon-linux-extras install docker`
* `sudo service docker start`
  * sudo ensures the command is executed as a root user /w/ sufficient permissions
* `docker run`  

### 131. Installing Docker on Linux in general!
* In the last lecture, you saw the AWS-specific command for installing Docker on a Linux machine:
`amazon-linux-extras install docker`
* Of course you might not always want to install it on a AWS EC2 instance though - maybe you are using a different provider.

* In that case, you can always follow the Linux setup instructions you find on the official Docker page: https://docs.docker.com/engine/install/ (under "Server").

### 132. Pushing our local image to the CLoud
* Deploy SOurce Code vs Image
1. Option 1: Deploy Source
 * Build image on remote machine
 * Push source code to remote machine, run `docker build` and then `docker run`
 * unnecessary complexity
2. Option 2: Deploy Built Image
 * Build image before deployment (e.g. on local machine)
 * Just execute `docker run`
 * avoid unnecessary remote server work
 * can use DockerHub for that

### 133. Running and Publishing the app (on EC2)
* `sudo docker run -d --rm -p 80:80 academind/node-example-1`
  * if you check the EC2 page online you see that you don't see the app (ip)
  * securiy feature
  * by default your ec2 instance is disconnected from all other stuff on the web
    * only YOU can connect via SSH
* "Security Groups"
* "Edit inbound rule" to change "http" to source from 'anywhere'

### 134. Managing & Updating the Container/Image
* to reflect changes in source code => rebuild image, push, pull, then run again
* to completely stop and remove ec2 instance go to the ec2 dashboard

### 135. Disadvantages of our Current Approach
* Docker is Awesome
  * Only Docker needs to be installed (no Other runtimes or tools)
  * Uploading "codes" is very easy
  * It is the exact same app and env as on our localmachine
* "DIY" Approach - Disadvanta
  * we fully "own"  the remote machine => we're responsible for it (and its security!)
  * Keep essential software updated
  * Manage network and security groups/firewalls!
  * SSHing into the machine to manage it can be annoying

### 136. From Manual Deployment[EC2] to Managed Services
* Your Own Remote Machine
  * ex. AWS EC2
  * you need to create, manage, update, monitor, and scale them etc
  * Great if you're an experienced Admin/Cloud Expert
* Managed Remote Machine
  * ex. AWS ECS
  * Creation, management, updating are handled automatically, monitoring and scaling are simplified
  * Great if you simply want to deploy your app/container
* Note that other cloud providers also have similar service plans

### 137. Important: AWS, Pricing and ECS
* Unlike EC2, it's NOT covered by the AWS free tier - you can check the "Free Tier" page to see what's included: https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc

* You should therefore only follow along actively, if you are okay with incurring some costs. You'll only be charged a few dollars if you follow along as shown (and you then remove all resources thereafter) - to learn more about the AWS pricing, please visit their pricing page: https://aws.amazon.com/pricing/

* Important: You really should double-check to remove ALL created resources (e.g. load balancers, NAT gateways etc.) once you're done - otherwise, monthly costs can be much higher!

### 138. Deploying with AWS ECS: A Managed Docker COntainer Service
* Amazon Elastic COntainer Service - ECS
  - AMazon ECS makes it easy to deploy, manage, and scale Docker containers running applications, services, and batch processez. ECS plaecs containers across your cluster based on ur resource needs and is integrated with familiar features like Elastic Load Balancing, EC2 security groups, EBS volumes and IAM roles.
* ECS manages containers for us
* AWS ECS thinks in four categories
1. Cluster
2. Service
3. Task Definition
4. COntainer Definition

* in the side drawer you define how  `docker run` should be executed later
  * lot of which can be defined with  `docker run  --options`

* "Task"
  * A blueprint for your app, describes one or more containers through attributes
  * Compatibilities - FARGATE : serverless mode
  * could swtich to "EC2" telling AWS to create EC2 instance for your containers instead

* "Service"
  * controls how the task (this configured application and container) should be executed

* "Cluster"
  * the overall network in which our services run

### 139. More on AWS
* Academind website
* FARGATE - server is run only when it is required

### 140. Updating Managed Container
* Make changes, build image, push to the hub again!
* make a new task and the AWS will use the most recent image on the hub!
* an alternative would be to not create a new task revision but just use "UPdate Service" and select "Force new Deployment"

### 141. Preparing a Multi-Container App
* referring another container by its name (under the same docker network) does not work on AWS => becuase it's not guaranteed that they will work on the same machine
* however, you can instead refer it by 'localhost' if you define those in a single task =>then it is guaranteed that they work on the same machine

### 142. Configuring the NodeJS Backend Container
<TAKE THOSE LATER>

### 146. Our Current Architecture!
* AWS ECS
* ECS Task
  1. NodeJS REST API <=AWS Load Balancer
  2. MongoDB => VOlume => AWS EFS Storage

### 147. Databases & Containers : An Importance COnsideration
* You can absolutely manage your own Database containers
* but..
  * Scaling and managing availability can be challenging
  * Performance (also during traffic spikes) could be  bad
  * Taking care about backups and security can be challenging
* Consider using a Managed DB Service e.g. AWS RDS, MongoDB Atlas, ..

### 148. Moving to MongoDB Atlas
* setup cluster
* change mongodb url

* edit database accesses

### 149. Using MongoDB Atlas in Proudction
* Create a new revision
* with modification to env var
```yaml
MONGODB_USERNAME=max
MONGODB_PASSWORD=Bjaerjioaefjjdkl
MONGODB_URL=cluster0.ntrwp.mongodb.net (not localhost anymore)
MONGODB_NAME=goals-dev
```
* update service

### 150. Our Updated & Target Architecture
* For Our Final App Architecture,
=> Multi-container app
=> AWS Load balancer -> React SPA -> NodeJS API -> MongoDB Atlas


### 151. Understanding Common Problem
* SOme apps / projects require a *build setup*
* e.g. optimization script that needs to be executed AFTER development but BEFORE deployment
* Development Setup <=> IS NOT EQUAL TO (not entirely!) <=> Productino Setup
    * e.g. React App
        - Uses live-reloading development server, uses unoptimizaed/unsupported JS features
        - NO attached server, optimized, fully browser-compatible code

* SPA codes should be  'transformed' to sth taht browsers can understand
* "npm start" starts a development server which is a basic web server which serves the frontend application!

* "npm start" is not meant to run in productino!
    * not optimized for that
    * the entire file compilation process ways too much resource

* "Build" script => code compilation and optimization
    => we get the files not server
    => does not start any reachable process
* "Start" => runs server but not good for production

### 152. Creating a "build-only" contaier
* React app need be executed differently in development and in productin
    * set up two different environments

* NodeJS needed just for development <= uses npm start command

* New file named 'Docker.prod'! for different env settings
```dockerfile
FROM node:14-alpine

WORKDIR /app

COPY package.json

RUN npm install

COPY . .

CMD ["npm" , "run", "start"] 
# no port exposes, because we won't start any versive
```
=> this gives us optimized files, but no server 
* Introducing Multi-Stage Builds

### 153. Introducing Multi-Stage Builds
* allows us to  have one Dockerfile
but have multiplze build/setup steps so called "stages" inside of that file
* stages can copy results from each other, so we can have one stage to create the optimized files!
* and another stage to serve them

* we can either build the entire Dockerfile going through all stages, step by step from top to bottom

* ONE Dockerfile, MUltiple Build / Setup Steps ("Stages")
    * Stages can copy results (created files and folders) from each other
    * You can buil the complete image or select individual stages


* THus with multi-stage builds,
```dockerfile
FROM node:14-alpine as build

WORKDIR /app

COPY package.json . 

RUN npm install

COPY . .

RUN npm run build
# as we get here node is not needed anymore

FROM nginx:stable-alpine
# multi-stage build!

COPY --from=build /app/build /usr/share/nginx/html
# copying final product of the previous stage
# with the from option, we are telling 
# /usr~ : default folder where nginx will try to serve files

EXPOSE 80
# default port that nginx exposes

CMD ["nginx", "-g", "daemon off;"]
# from official docs
# if starting by ourselves
```

* final container will only include the second stage 
* but first build the first stage to derive the final stage


* let's use nginx! ligthweight and serves our purpose here!

* to use multiple base images, "multi-stage build" is required


* Every **FROM** intruction **creates a new stage** in your Dockerfile.
* Even if you use the **same image** as in the previous step
### 154.  Building a Multi-Stage Image
* first verify whether our code needs any adjustment

    * actually one thing!
    * we are calling 'localhost' a lot
    * Note that the frontend codes run on **end user's browser** not inside a container
    * thus 'localhost' refers to their own machine not to task or cnotainer or ECS managed service

* and the url depends on how we will deploy our app
    * we plan on deploying this in the same task as NodeJS API
    * so they will be available in the same domain

```javascript
await fetch('http://localhost/goals/')

// =>
await fetch('/goals/')
```

*  `docker build -f ruruewio  frontend/Dockerfile.prod  -t academind/goals-react ./frontend/`
*  `docker push academind/goals-react`
* now deploy to AWS ECS

### 155. Deploying a Standalone Frontend App
* AWS ECS

* Problem! both backend and frontend run on Port 80
    1. Make a separate task for frontend
    2. Merge two so that it's one container

* because they run on differnt tasks, we need to specify urls again
```javascript
const backendUrl = process.env.NODE_ENV==='development' ? 'http://localhost:3000' : 'ecs-1278971049823.us-east-2..elb.amazonaws.com'
# get the prod url from the load balancer
```




* set up a new load balancer
    * the security group **opens port 80**and just port 80 to incoming traffic - we need that both for the backend and the frontend 


### 156. Development vs Production Differences

### 157. Understanding Multi-stage Build Targets
* `docker build --target build -f frontend/Dockerfile.pord ./frontend`

### 158. Beyond AWS
* AWS was just the example in this section


1. Manual Installation of Docker + managemne tof the underlying server
    * EC2
    * possible with any provider that gievs you fully controlled remote hosts/instances
2. Managed Container/Docker Services like ECS
    * Many cloud providers offer managed Docker / Container Services

### 159. Module Summary
* 
### 10. Docker & Containers - A Summary
### 162. Images & Containers
* Container: Isolated box or environment required to run that code
    * single-task-focused
        * e.g. we don't run a web server, frontend, db all at once
    * sharable, reproducable
    * stateless (plus volumes)

* Images: created with dockerfiles/pulled from docker hub
    * contain the code and the env
    * as described in the dockerfile
    * blueprints for containers!
    * read-only / does not run
    * can be built and shared
    * Created with insturctions (layers)

### 163. Key Commands
* Build an image based on a Dokcerfile
* `docker build .`
    * . is the build context
* Run a container based on a remote or local image
* `docker run --name NAME --rm -d IMAGE`
* Share (push) an Image to a Registry (defualt: DockerHub)
* `docker push REPOSITORY/NAME:TAG`
* Fetch (pull) an Image from a Registry (default: DockerHub)
`docker pull REPO/NAME:TAG`

### 164.Data VOlumes & Networking
* containers are isolated and statelss
* isolated = containers have their own data and filesystem, detached from the host machine filesystem
    * use Bind Mounts to connect hos machine folders
    * `-v /local/path:/container/path `
* stateless - they can store data internally, but data will be lost if the container is removed and replaced by a new one
    * use volumes to persist data
    *  `-v NAME:/container/path`

* Containers are isolated but can be connected to send requests to each other (e.g. http)
1. OPtion 1: Determine container IP and use that
    * IP might change, determining it is unnecessary (manual) work
2. Option 2: Create a Docker network and add both containers
    * Containers can use each other's names as request addresses

### 165. Docker Compose
* Repeating long `docker build` and `docker run` commands gets annoying - especially when working **with multiple containers**
* **Docker Compose** aloows you to pre-define build and run configuration in a .yaml file
    * `docker-compose up` - build missing images and start all containers
    * `docker-compose down` - stop all started containers














### 166. Local vs Remote
* Local Host/Development
    * isolated, encapsulated, reproducible development environments
    * no depencdency or software clashes

* It's perfectly fine to use Docker (and Docker Compose) for local development!
    * Encapsulated : environments for =/= projects
    * No Global Installation of tools
    * Easy to share and re-produce

* Remote Host/Production
    * isolated, encapsulated, reproducible environments
    * Easy updates: simply 

### 167. Deployment
* Replace **Bind Mounts** with **Volumes** or **COPY**

* Multiple containers might need **multiple hosts**
* But they can also run on the **same host** (depends on application)
* **Multi-stage builds** help with apps that need a **build step**

* Control vs ease - of - use
    * you can launch a remote server, install Docker and run your containers
        * full control but you also need to manage everything
    * you can use a managed service instead
        * less control and extra knowledge required but easier to use, less responsibility

















## 11. Getting Started with Kubernetes
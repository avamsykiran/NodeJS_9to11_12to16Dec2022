Prerequisites
----------------------------------

    Javascript (ES6)
    1. Javascript variables, data types, operators, control strucutres
    2. Functions - function expressions, arrow functions, closures, callbacks, constructor functions
    3. Classes, inheretence, objects, object notation.
    4. Spreed Operator, Rest Operators, Arrays and array protoytpe functions.
    5. Javascript standard libraries like String,Math,Object,Date ..etc.,
    6. ES6 features
    7. Asynchronous Programming

Objectives
-----------------------------------

    1.Node.js: The Big Picture
    2.Node.js: Getting Started
    3.Getting Started with npm
    4.Automating Node.js with NPM Scripts
    5.Using MongoDB with Node.js
    6.Building Web Applications with Node.js and Express
    7.HTTP with Node.js
    8.Managing Files with Node.js
    9.Async Patterns in Node.js

Lab Setup
-------------------------------------------------------------------------

    NodeJS              https://nodejs.org/en/
    VSCode              https://code.visualstudio.com/download
    MongoDB             https://www.mongodb.com/try/download/community

NodeJS
---------------------------------------------------------------------------

    Node JS is a alternate runtime for JavaScript.
    This allow javascript to execute in a stand alone mode paving ways
    to employ javascript to create back-end applications.

    NodeJS offers npm as a build tool.
    npm - node package manager.
    each javascript app on nodejs is called a package.

    A modern build tool offer project sructure construction, dependency managment, project lifecycle management .

    Each build tool depends on a build descriptor file like
        Maven       pom.xml
        Gradle      build.gradle
        NPM         package.json

    generally, the build descriptor file has the project meta-data, dependency list and project lifecyle event scripts.

Working with npm
---------------------------------------------------------------------------

    npm init            to create a package (project).
    npm start           to execute a command that starts the execution of our package
    npm test            to execute a command that starts the testing tool on our package
    ..etc.,

    npm install -g thrid-party-package-name --save      install thrid party dependencies into our machine globally
    npm install thrid-party-package-name --save         install thrid party dependencies into our project locally

    npm install                                         install all third party packages listed in package.json

    node_modules folder is the house for the downloaded packages.

REST api on NodeJS
------------------------------------------------------------------------------------------------
    express             is a rest-api cosntruction library
    body-parser         is a library used to parse JSON into javascript object and vice-versa.
    cors                to enable cross origins

    npm install express --save
    npm install body-parser --save
    npm install cors --save

    npm install express body-parser cors --save

    npm install    will re-execute the package download from packgae.json

    an action method of a controller accepts req and resp objects:

        req
                params
                body

        resp
                status
                send

    expres() is method that returns an http server object.

    let server = express();

        server.listen(POPT,() => {
            //...........is executed on successful start of the server.
        })

        server.use(interceptor)
        server.get(urlEndPoint,reqHandlerMethod)
        server.post(urlEndPoint,reqHandlerMethod)
        server.put(urlEndPoint,reqHandlerMethod)
        server.delete(urlEndPoint,reqHandlerMethod)
            ...etc
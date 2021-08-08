F1 World Championship Results :

How to Install :

1. Clone the project and make sure that code is being pushed to master branch .
2. After cloning run npm install .
3. Once npm install is done . Run npm start to run the application .


What is application includes :


1. This application has two views 
    a. List of champions from 2005 - 2020 
    b. List of races on a year .
2. Both List would be rendered on a common component ("List") under component folder . This common component accepts some props like list headers with list data .(can be passed events or html  element if required but as current project does not need it).
3. Contains a centerlized traslator json file for the reuse purpose .

4. while navigating from list of champions to list of races on that year . project will maintain  detail of the champion in redux store .

5. all the routes are managed under routes folder .


liberies added :

"react-redux": "^7.2.4",
"react-router-dom": "^5.2.0",
"redux": "^4.1.1"

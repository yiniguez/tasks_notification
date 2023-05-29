# Project requirements

```
First you required install docker and docker compose in your system.
```

## Project setup
```
cd project_folder/backend
execute: npm install

cd project_folder/client
execute: npm install

Command to start the project: 
cd project_folder/
docker compose up -d --build --force-recreate
Command to stop the project:
cd project_folder/
docker compose stop
```


## General access
```
App client: http://localhost:8080/
App backend: http://localhost:4000/
App mongodb: MONGODB_URI=mongodb://localhost:27017/notification
```

## Task Api doc
```
List of task: 
    - Method: GET
    - URL: http://localhost:4000/tasks
    
Get one task: 
    - Method: GET
    - URL: http://localhost:4000/tasks/taskId
    
Create task: 
    - Method: POST
    - URL: http://localhost:4000/tasks
    - Body: { title: 'title', description: 'description', completed: true }
    
Update task: 
    - Method: PUT
    - URL: http://localhost:4000/tasks/taskId
    - Body: { title: 'title', description: 'description', completed: true }
    
Delete task: 
    - Method: DELETE
    - URL: http://localhost:4000/tasks/taskId
    
```


### Run test on backend
```
First set global options for node and jest to use imports:
(set or export depends of linux or windows Operating system)
export NODE_OPTIONS=--experimental-vm-modules && npx jest --detectOpenHandles

or npm test using package.json config
```
### Steps to start docker app (is nedded docker and docker compose preinstalled to start backend and mongodb app):

```
cd notification_task_project_folder
docker compose up --build --force-recreate -d


```

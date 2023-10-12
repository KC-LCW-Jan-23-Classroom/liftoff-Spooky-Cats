# liftoff-Spooky-Cats

This project consist of an Angular frontend, Spring backend service, and mysql database.

To setup the MySql database:
1) create a database with a new schema

To setup the Spring backend
1) ensure you have Java 17 installed
2) open the project in IntelliJ at the "feral-cat-tracker" directory  
3) go to \src\main\resources\application.properties and update:
    - spring.datasource.url=jdbc:mysql://<YOUR DATABASE URL>
    - spring.datasource.username=<YOUR USER NAME>
    - spring.datasource.password=<YOUR PASSWORD>
4) run application with "bootrun"

To setup the Angular frontend
1) this project was created with node 18.18.0 and Angular CLI 16.2.5
2) open the project in VS Code at the "feral-cat-tracker-ui" directory
3) open up the terminal and run "npm install" to install all dependencies
4) run application with "ng serve"

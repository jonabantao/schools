# User Portal
The current version is a simple app that allows a user (admin status to be included
later) to edit other users or delete them. Only form of authentication at the moment
are passwords being hash and salted through BCrypt.

## How to Run
Clone the repository.

Docker is required. In the root directory where the `docker-compose.yml` file is located, run:

```
docker-compose up
```

After all containers are up and running, visit [http://localhost:4200](http://localhost:4200)

## How to Shutdown
Press `Ctrl-C` to stop all containers.

To remove all containers, run:
```
docker-compose down
```

## How to Run Frontend Unit Tests
From the root folder navigate to the `/frontend` folder and run:
```
npm test
```

## How to Run E2E/Feature Tests
Feature tests are located in the `/feature-test` folder and are in the `FeatureTesting.java` file located in the `test` folder.


Trello was used to track user stories: [Trello Board](https://trello.com/b/P2J6P3D0/housing)

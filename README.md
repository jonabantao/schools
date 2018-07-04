# School Search
**San Francisco School Search** utilizes [SF Open Data's](https://datasf.org/opendata/) API to locate all schools Grade 12 and under and mark them
on Google Maps. This app was primary created to allow a user to see the safety of the neighborhood in proximity of the school. Currently, once logged
on, a user is able to search school by category, constrain the grade range of schools, and see all police activity that occured within the last
three months in the Google Map bounds.

## Live Link
~~School App Hosted on Amazon's S3~~(EC2 backend taken down for server costs)

## How to Run
Clone the repository.

[Docker](https://www.docker.com/community-edition) version `13` or greater is required. In the root directory where the `docker-compose.yml` file is located, run:

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

## User Stories
Trello was used to track user stories: [Trello Board](https://trello.com/b/P2J6P3D0/schools)

## Proposal
Mock proposal for this project can be found [here](docs/proposal.pdf).

## Technologies Used
* Angular v6
* Angular Material
* Google Maps
* San Francisco Open Data
* Spring Boot
* Netflix Eureka (Service Registry)
* Netflix Zuul (API Gateway)
* Docker
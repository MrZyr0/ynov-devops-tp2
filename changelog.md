# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.0.0] - 2020-01-03
### Changed
- Fix docker-compose.prod indent problem


## [3.0.0] - 2020-01-03
### Added
- Add git files & postgres-persistent-data folder to dockerignore
- Add postgres-persistent-data folder to gitignore
- Add new env key to nodeapi container
- Add Volume to persist postgres data
- Add `pg` & `redis` npm package
- Add `compose-up-prod`, `compose-up-dev`, `compose-down-prod` and `compose-down-dev`. Please read the README.md to know what they did
- Add **Redis** & **Postgres** client on API

### Changed
- Update docker-compose.prod according to docker-compose.dev

### Removed
- Remove unused ENV keys in Dockerfile of nodeapi container

## [2.1.0] - 2020-01-03
### Changed
- adapt dev command to be usable on any OS localy


## [2.0.0] - 2020-01-03
### Added
- Add `start` command in package.json for production launch
- Add `dev` command in package.json for developpement launch
- Add Start API message in console
- Add nodemon support
- Add location to nginx config
- Add node ENV to development
- Create Production & Development Dockerfile for nodeapi
- Create Production & Development docker-compose file

### Changed
- Reorganization of the project (rename, mv etc...)
- Complete dockerignore for COPY function in Dockerfile
- Change package description
- Change express default port for env var in server.js
- Change nginx configuration according to new nodeapi port (3030)
- Change all docker images to alpine version


## [1.0.0] - 2019-12-17
### Added
- Create Dockerfile for reverse proxy (nginx)
- Add nginx conf for api reverse proxy


## [0.4.0] - 2019-12-17
### Added
- Add ignore files


## [0.3.0] - 2019-12-17
### Added
- Docker & docker composed minimum version to prerequisites

### Removed
- virtualbox docker tutorial for windows family in readme


## [0.2.0] - 2019-12-17
### Changed
- Add virtualbox docker tutorial for windows family


## [0.1.0] - 2019-12-17
### Added
- Init the project, create README & changelog
# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.0] - 2019-12-17
### Changed
- adapt dev command to be usable on any OS localy

## [2.0.0] - 2019-12-17
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
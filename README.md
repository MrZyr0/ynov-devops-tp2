# B3 Devops - TP 1

## Info

professor : [@aegirops](https://github.com/aegirops)

## Docker Config

### Libraires & Programs installed

#### Host

Only docker

#### Containers

To run the projet, there is multiples container who run these services:

```
nodejs@12
nginx
postgreSQL
Redis
```

# Prerequisites
- Docker version 17.12.0+ and Compose version 1.21.0+
- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- git
- a shell 😁

# Installation / How to start

1. Clone the repository.
2. Moving to the root of the project
3. Compose the project :

   ### Using npm

   `npm compose-up-(prod | dev)`

   ### Using manual `docker-compose` command

   - **For production** : `docker-compose -f ./Dockerfiles/docker-compose.prod.yml up --build --force-recreate`
   - **For developmnet** : `docker-compose -f ./Dockerfiles/docker-compose.dev.yml up --build --force-recreate`

4. Your done ! The environment is up and running.

# Usage

The objective of this project is to have a development environment identical to the production one, simple and quick to deploy for a nodeJS API.

#### SSH Access

Once the environment is launched you just have to access the API available at http://localhost:3000/api.

List of preconfigured URLs:

- http://localhost:3000 => nginx default page
- http://localhost:3000/api => `Hello World` API message
- http://localhost:3000/api/status => API data

Launched in development mode, the project folder is bind with nodeapi container and `Dockerfiles/nginx/conf.d` folder is bind with nginx's configuration folder (`/etc/nginx/conf.d`).
In develpment mode, all is setup to speed up your productivity.
You can easily edit your javascript files of the API, **nodemon** will restart the service automaticly !
And if you need to edit nginx's config, you can !
Edit are create files in `Dockerfiles/nginx/conf.d` and restart the container **reverseproxy** : `docker-compose restart reverseproxy` !

# All commands

- `dev`: run `npm install` and start the project with nodemon (used when container start for dev mode)
- `start`: juste start the API (used when container start for prod mode)
- `compose-up-prod`: it's an npm alias to compose up the project in production mode
- `compose-up-dev`: it's an npm alias to compose up the project in development mode
- `compose-down-prod`: it's an npm alias to compose down the project in production mode
- `compose-down-dev`: it's an npm alias to compose down the project in development mode
- `docker-clean`: it's an npm alias to clean your docker (stop, rm and rmi) ⚠ **DATA can be LOST** use it carrefully ⚠

# Uninstall

1. Use CTRL-C to stop the containers
2. Use `compose-down-(prod | dev)` to remove containers
3. You can use `docker ps -a` and `docker rmi IMG_ID` to remove containers images from your computer

# TIPS

## Exec command in container

If when you develop the API you need to install some dependencies, you can run commands easily on the container using `docker exec -it {CONTAINER_ID} {COMMAND}`.

For example, instead of completly restart reverseproxy container, you can execute `nginx -t && nginx -s reload` to test and reload nginx configuration.

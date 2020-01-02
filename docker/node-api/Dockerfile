FROM node:alpine3.10

ENV API_PORT 3000
ENV HOSTNAME nodeapi
ENV DB_USER postgres
ENV DB_PASSWORD postgres
ENV DB_NAME postgres
ENV DB_HOST postgres


WORKDIR /home/node/app
RUN chown -R node:node /home/node/app
USER node

COPY package*.json ./
COPY index.js ./

RUN npm i

EXPOSE 3000

# Commands at runtime
CMD [ "node", "index.js" ]

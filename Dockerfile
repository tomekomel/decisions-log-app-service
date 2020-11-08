FROM node:12-alpine

ENV AP /data/app

RUN apt-get -y update
RUN mkdir -p $AP/node_modules && chown -R node:node $AP

WORKDIR $AP

COPY package*.json ./

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
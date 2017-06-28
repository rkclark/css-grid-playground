FROM node:6.11

ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
COPY .npmrc .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "serve"]

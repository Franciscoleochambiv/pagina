FROM node:14.15.4-alpine3.11 AS build
WORKDIR /home/Descargas/paginafinal4
COPY package.json ./
COPY . .
CMD ["npm","start"]

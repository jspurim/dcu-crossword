FROM node:14.18.0-alpine3.11 as build
WORKDIR /app

RUN apk add --no-cache git && git config --global url.https://github.com/.insteadOf git://github.com/

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install
COPY . .
RUN ng build

FROM nginx as runtime
COPY --from=build /app/dist/crossword /usr/share/nginx/html

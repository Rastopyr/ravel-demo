FROM alpine:latest

RUN apk add --no-cache git
RUN apk add --no-cache nodejs

COPY ./package.json ./
COPY ./bower.json ./

RUN npm install
RUN npm i -g bower

RUN bower install --allow-root

COPY ./ ./

CMD ["ember", "fastboot", "--environment production", "--port 8080"]

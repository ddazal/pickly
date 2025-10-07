FROM node:6-alpine

RUN apk add --no-cache git ca-certificates \
 && update-ca-certificates

RUN addgroup -S app && adduser -S -G app app

WORKDIR /usr/src/app

COPY package*.json ./
COPY bower.json ./
COPY .bowerrc ./
RUN npm install

RUN git config --global url."https://".insteadOf git:// \
 && ./node_modules/.bin/bower install --allow-root --config.interactive=false

COPY . .

USER app

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["node", "server.js"]
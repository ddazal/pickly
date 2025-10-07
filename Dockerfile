FROM node:6-alpine

RUN addgroup -S app && adduser -S -G app app

WORKDIR /usr/src/app

COPY package.json package-lock.json bower.json .bowerrc ./
RUN npm install --only=production

COPY . .

USER app

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["node", "server.js"]
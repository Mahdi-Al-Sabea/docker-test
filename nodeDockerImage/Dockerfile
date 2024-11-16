FROM node:19-alpine

COPY package.json /app/package.json
COPY index.js /app/index.js

WORKDIR /app
RUN npm install

CMD ["node", "index.js"]
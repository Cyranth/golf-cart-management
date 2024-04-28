ARG BASE_IMAGE_TAG
FROM node:${BASE_IMAGE_TAG}

WORKDIR /app

ENV NODE_ENV=development

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${API_PORT}

CMD ["npm", "start"]

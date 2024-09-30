FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

# Clean npm cache before install and remove --force flag
RUN npm cache clean --force && npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


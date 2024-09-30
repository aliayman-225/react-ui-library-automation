FROM node:19.5.0-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules package-lock.json

# Clean npm cache before install and remove --force flag

RUN npm cache clean --force && npm --verbose install

COPY . .



RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


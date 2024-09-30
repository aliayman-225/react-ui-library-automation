# Use the appropriate base image
FROM node:18.6.0-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Clear npm cache and install dependencies
RUN npm cache clean --force && \
    npm install -g npm@latest && \
    npm install

# Copy the rest of the application code
COPY . .

# Expose the appropriate port
EXPOSE 3000

# Command to run your app
CMD ["npm", "start"]


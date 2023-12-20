# Use an official Node.js runtime as the base image
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . /app

# Build the Angular app
RUN npm run build --prod

RUN rm -rf /usr/share/nginx/html/*
# Use a lightweight, production-ready web server image as the final base image
FROM nginx:alpine

# Copy the built Angular app from the build stage to the final image
COPY --from=build /app/dist/posclient /usr/share/nginx/html

# Stage 1: Build the Astro project
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Astro project
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy the built static files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration file if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the outside world
EXPOSE 80

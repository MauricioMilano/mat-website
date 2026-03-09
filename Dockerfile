# ---- Build stage ----
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies first (copy package files)
COPY package.json package-lock.json* ./ 

# Install dependencies
RUN npm install

# Copy rest of the source
COPY . .

# Build the app (produces /app/dist)
RUN npm run build

# ---- Production stage ----
FROM nginx:stable-alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
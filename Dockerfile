# Use a tiny nginx image to serve static files
FROM nginx:alpine AS base

# Remove default html
RUN rm -rf /usr/share/nginx/html/*

# Copy site
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx (default CMD already does this)
CMD ["nginx","-g","daemon off;"]


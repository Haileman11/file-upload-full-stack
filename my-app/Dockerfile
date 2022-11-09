FROM node:17-alpine as builder
WORKDIR /src
COPY package.json .
RUN npm install
COPY . .
RUN npm run build


FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /src/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
# Set working directory to nginx asset directory
# Remove default nginx static assets
# Copy static assets from builder stage
# Containers run nginx with global directives and daemon off
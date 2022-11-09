FROM node:latest
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+)
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
RUN npm install 
# Bundle app source
COPY . .
EXPOSE 8080
CMD npm run prod
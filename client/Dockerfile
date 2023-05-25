FROM node:16

# Create app directory
WORKDIR /app/client

# Install app dependencies
COPY package*.json ./

RUN npm install -g nodemon
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "run", "serve"]]

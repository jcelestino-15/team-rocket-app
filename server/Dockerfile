# Name the node stage "builder"
FROM node:16 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
RUN npm install -g npm
# install node modules and build assets
RUN npm i 

# Stage 2 build for creating smaller image
FROM node:carbon-alpine
WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD [ "npm", "start" ]

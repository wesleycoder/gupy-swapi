# Use node 4.4.5 LTS
FROM node:8.6.0
ENV APP_PORT 80

RUN apt-get update && apt-get install -y apt-utils apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn

# Copy source code
RUN mkdir -p /opt
COPY . /opt/app

# Change working directory
WORKDIR /opt/app

# Install dependencies
RUN yarn install

# Expose API port to the outside
EXPOSE 80

# Launch application
CMD ["yarn", "start"]

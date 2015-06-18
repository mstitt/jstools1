
FROM local/ziggy_user

USER root
RUN apt-get update && apt-get install --yes python
RUN mkdir -pv /opt/nodejs && chown ziggy:ziggy /opt/nodejs
USER ziggy

# install node
RUN wget -qO- http://nodejs.org/dist/v0.10.36/node-v0.10.36-linux-x64.tar.gz | tar xvz -C /opt/nodejs
ENV PATH /opt/nodejs/node-v0.10.36-linux-x64/bin:$PATH

# bring in packages as global 
RUN npm install -g browserify watchify jest-cli react-tools express coffee-script coffee-react-transform
ENV NODE_PATH /opt/nodejs/node-v0.10.36-linux-x64/lib/node_modules

# install support for serving static files
COPY share/express_static /home/ziggy/express_static/

FROM node:12

WORKDIR /app
ADD package.json .
RUN npm install

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list
RUN apt-get update -qq && apt-get install -y -qq --no-install-recommends \
    vim \
    python3-setuptools \
    python3-pip \
    google-chrome-stable \
    libnss3-dev \
    xvfb \
    openjdk-8-jdk \
    gcc libpq-dev \
    python3-dev python3-pip python3-venv python3-wheel \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

RUN pip3 install wheel
# RUN pip3 install awscli

COPY . .
RUN mkdir ~/Downloads
RUN npm i
RUN npm rebuild node-sass
CMD npm test
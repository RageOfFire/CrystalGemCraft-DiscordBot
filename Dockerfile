FROM node:18

# Create the bot's directory

RUN mkdir -p /usr/src/crystalgemcraft-bot

WORKDIR /usr/src/crystalgemcraft-bot



COPY package.json /usr/src/crystalgemcraft-bot

RUN npm install



COPY . /usr/src/crystalgemcraft-bot



# Start the bot.

CMD ["node", "index.js"]
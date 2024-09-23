FROM node:20.17-alpine AS builder

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

RUN yarn build
FROM node:20.17-alpine
WORKDIR /app
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY package.json ./
RUN yarn install --production
EXPOSE 443
CMD yarn start

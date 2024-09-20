FROM node:20.17-alpine

# Set the working directory.
WORKDIR /app

# Copy package.json and yarn.lock (or package-lock.json).
COPY package.json yarn.lock ./

# Install dependencies.
RUN yarn install

# Copy the rest of the application code.
COPY . .

# Build the Next.js app.
RUN yarn build

# Create the final image.
FROM node:20.17-alpine

# Set the working directory.
WORKDIR /app

# Copy only the necessary files from the builder stage.
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY package.json ./

# Install production dependencies.
RUN yarn install --production

# Expose the desired port (default is 3000).
EXPOSE 3000

# Start the Next.js application.
CMD yarn start

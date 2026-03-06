# Stage 1: Build Angular
FROM node:20-alpine AS build
# Security: Upgrade OS packages to fix known vulnerabilities
RUN apk update && apk upgrade --no-cache
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Security: Upgrade OS packages in the final production image
RUN apk update && apk upgrade --no-cache
COPY --from=build /app/dist/hello-world/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

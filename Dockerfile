FROM node:22-alpine
ENV NODE_ENV=production PORT=3001 APP_VERSION=1.0.0
WORKDIR /usr/src/app
COPY src/package*.json ./
RUN npm install --omit=dev && npm cache clean --force
COPY src/app.js ./app.js
USER node
EXPOSE 3001
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 CMD node -e "require('http').get('http://127.0.0.1:3001/health',r=>process.exit(r.statusCode===200?0:1)).on('error',()=>process.exit(1))"
CMD ["node","app.js"]





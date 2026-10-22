const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const APP_VERSION = process.env.APP_VERSION || '1.0.0';

app.get('/', (_req, res) => {
  res.status(200).send(
    `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>MyApp - AWS CI/CD</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            max-width: 760px;
            margin: 80px auto;
            padding: 20px;
            background: #f4f7fb;
            color: #1f2937;
          }
          .card {
            background: white;
            padding: 32px;
            border-radius: 12px;
            box-shadow: 0 4px 18px #00000012;
          }
          h1 { color: #075985; }
          .status { color: #15803d; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Hello from MyApp!</h1>
          <p>Your Node.js application is running.</p>
          <p class="status">Application status: Healthy</p>
          <p>Deployment version: ${APP_VERSION}</p>
          <p>Application port: ${PORT}</p>
          <p>Deployment platform: AWS ECS Fargate</p>
        </div>
      </body>
    </html>
  `
  );
});

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

if (require.main === module) {
  app.listen(PORT, '0.0.0.0', () => console.log(`App listening on ${PORT}`));
}

module.exports = app;

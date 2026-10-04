# Personal Assistant Backend

## Project Overview

A Node.js backend foundation for a Personal Assistant application.

## Technologies

* Node.js
* npm
* JavaScript
* HTTP
* dotenv

## Setup

Install the project dependencies:

```bash
npm install
```

## Run the Server

Start the server with:

```bash
node server.js
```

The server runs on port `3000` by default.

## API Endpoints

### GET /

Returns a welcome message.

Example response:

```json
{
  "message": "Welcome to Personal Assistant"
}
```

### GET /health

Returns the server health status.

Example response:

```json
{
  "status": "UP"
}
```

### GET /about

Returns application information.

Example response:

```json
{
  "application": "Personal Assistant",
  "version": "1.0"
}
```

## Utility Module

The project contains a separate `utils.js` module with:

* `add()`
* `subtract()`
* `multiply()`

## Environment Variables

The application uses a `.env` file:

```env
PORT=3000
APP_NAME=Personal Assistant
```

## Project Structure

```text
personal-assistant-backend/
├── server.js
├── utils.js
├── .env
├── .gitignore
├── README.md
├── package.json
└── package-lock.json
```

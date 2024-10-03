# Mailchimp Integration Project

This project is a simple Node.js backend application that integrates with the Mailchimp API to allow users to subscribe to a mailing list. Users can submit their email addresses through a contact form, and the backend handles the subscription process by communicating with Mailchimp.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [CORS Configuration](#cors-configuration)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- Users can submit their email addresses to subscribe to a mailing list.
- Integrates with Mailchimp API to manage subscriptions.
- Provides error handling for failed subscription attempts.
- CORS-enabled for seamless frontend-backend communication.

## Technologies Used

- **Node.js** - JavaScript runtime for server-side development.
- **Express.js** - Web framework for building web applications.
- **Node Fetch** - Lightweight module for making HTTP requests.
- **dotenv** - Module for loading environment variables from a `.env` file.
- **CORS** - Middleware for enabling Cross-Origin Resource Sharing.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

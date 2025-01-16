# Headless solution for a single branding website

## Description

### Headless solution for a single branding website that uses Drupal as a back-end system and Next.js as a front-end.

## Table of Contents

-   [Installation and Configuration](#installation-and-configuration)
-   [Web Accessibility](#web-accessibility-rules)
-   [Development and Contributing](#development-and-contributing)
-   [Deployment](#deployment)
-   [Technical Documentation](#technical-documentation)
-   [Useful Documentation](#useful-documentation)

### Pre-requisites

-   Node.js (v20.12.6 required)

### Installing Node.js using NVM

#### For macOS and Linux:

1. Install nvm:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    # or
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    ```
2. Install and use Node.js v20.12.6:
    ```bash
    nvm install 20.12.6
    nvm use 20.12.6
    ```
3. Verify installation:
    ```bash
    node -v  # Should output 'v20.12.6'
    ```

### Git Repository Setup

```bash
git clone git@github.com:ffwagency/headless-poc-next.git
cd headless-poc-next
npm install
```

## Configuration

### .env File Setup

Create a `.env.local` in the root of your project with the following:

```plaintext
NEXT_PUBLIC_DRUPAL_BASE_URL=drupal_base_url
NEXT_IMAGE_DOMAIN=image_domain

DRUPAL_CLIENT_ID=drupal_client_id
DRUPAL_CLIENT_SECRET=drupal_client_secret
DRUPAL_PREVIEW_SECRET=drupal_preview_secret

NEXT_PUBLIC_DEFAULT_LANGUAGE=default_language
NEXT_GENERATE_FILES=true
```

## Usage

### Running the Development Server

```bash
npm run dev
```

### Building for Production

```bash
npm run build
npm start
```

## Tests and Lints

### Running Tests

```bash
npm test
```

### Running Lints

```bash
npm run lint
```

## Web Accessibility Rules

Ensuring our project is accessible to all users, including those with
disabilities, is a top priority. Below are specific rules and guidelines to
follow to achieve web accessibility.

[Web Accessibility Rules](https://www.w3.org/WAI/standards-guidelines/wcag/)

## Development and Contributing

#### Git workflow

We are using:

-   [Beginning of the project Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
-   [Feature-based Git Workflow](https://ffwagency.atlassian.net/wiki/x/HYCrGwE)

#### Lead Developer(s)

-   Kristiyan Velkov (JavaScript DKL)
-   Email: kristiyan.velkov@ffw.com
-   Nikola Bintev (Team Lead | AWS Certified Solutions Architect - Associate)
-   Email: nikola.bintev@ffw.com

## Deployment

### Development Environment

Deploy locally or to a staging environment for testing.

### Production Environment

Set up to handle real user traffic efficiently.

## Technical Documentation

Links with Technical Documentation for This Project:

-   [Full project documentation](https://ffwagency.atlassian.net/wiki/spaces/DKC/pages/4726685807/Scenario+1+A+single+instance+branding+site).
-   [Project repository](https://ffwagency.atlassian.net/wiki/spaces/DKC/pages/4726685807/Scenario+1+A+single+instance+branding+site).

## Useful Documentation

-   [Next.js Official Documentation](https://nextjs.org/docs)
-   [React Official Documentation](https://reactjs.org/docs)
-   [Getting Started with Docker](https://docs.docker.com/get-started/)
-   [Next.js for Drupal](https://next-drupal.org/)
-   [Lando Documentation](https://docs.lando.dev/getting-started/)
-   [Decoupled Drupal Documentation](https://www.drupal.org/docs/develop/decoupled-drupal)

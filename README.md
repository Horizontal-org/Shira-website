# Welcome

This is the Shira Website code-base. 
This website is built using [Docusaurus](https://docusaurus.io/).

## Installation {#installation}

```bash
yarn
```

## Environment variables {#environment-variables}

The following environment variables configure the URLs for each environment. Copy `.env.example` to `.env` and adjust as needed.

| Variable | Description | Default |
|---|---|---|
| `SPACE_URL` | Base URL for Shira Space (signup/login) | `https://alpha.space.shira.app` |
| `QUIZ_URL` | Base URL for the quiz app | `https://alpha.quiz.shira.app` |

## Local Development {#local-development}

```bash
SPACE_URL='https://space.shira.app' QUIZ_URL='https://quiz.shira.app' yarn start
```

## Build {#build}

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


[![Translation status](https://hosted.weblate.org/widget/shira/svg-badge.svg)](https://hosted.weblate.org/engage/shira/)

# Welcome

This is the Shira Website code-base. Shira website is accesible in [shira.app](https://shira.app/).
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

## Translations

Shira is translated by the community on [Hosted Weblate](https://hosted.weblate.org/projects/shira/). If you'd like to help make Shira available in your language, you can join and start translating there — no coding required. If you need any help, please [contact us!](https://shira.app/contact/)



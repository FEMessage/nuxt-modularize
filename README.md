# @femessage/nuxt-modularize

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> modularize nuxt project

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@femessage/nuxt-modularize` dependency to your project

```bash
yarn add @femessage/nuxt-modularize # or npm install @femessage/nuxt-modularize
```

2. Add `@femessage/nuxt-modularize` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@femessage/nuxt-modularize',

    // With options
    ['@femessage/nuxt-modularize', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Han <xsytby1112@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@femessage/nuxt-modularize/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@femessage/nuxt-modularize

[npm-downloads-src]: https://img.shields.io/npm/dt/@femessage/nuxt-modularize.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@femessage/nuxt-modularize

[circle-ci-src]: https://img.shields.io/circleci/project/github/user.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/user

[codecov-src]: https://img.shields.io/codecov/c/github/user.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/user

[license-src]: https://img.shields.io/npm/l/@femessage/nuxt-modularize.svg?style=flat-square
[license-href]: https://npmjs.com/package/@femessage/nuxt-modularize

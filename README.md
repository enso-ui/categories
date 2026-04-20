# Categories

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/categories/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.3.4-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/categories)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/categories.svg)](https://www.npmjs.com/package/@enso-ui/categories)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/categories)
[![Issues](https://img.shields.io/github/issues/enso-ui/categories.svg)](https://github.com/enso-ui/categories/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/categories.svg)](https://github.com/enso-ui/categories/pulls)

## Description

Categories administration pages for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/categories
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- exports the categories index page used by the administration router
- combines Enso table slots with a dedicated level filter
- renders picture previews and flattened parent labels through table slots
- ships the page and route modules required by the matching backend package

## Usage

```vue
<script>
import CategoriesIndex from '@enso-ui/categories';

export default {
    components: { CategoriesIndex },
};
</script>
```

## API

### `Index`

Default export for the categories administration index page.

Import: `@enso-ui/categories`

Props:
- No public props.

Events:
- No public emits.

Methods:
- Table behaviour is configured through slots and injected route/i18n helpers.

## Depends On

- [`@enso-ui/confirmation`](https://docs.laravel-enso.com/frontend/confirmation.html) [↗](https://github.com/enso-ui/confirmation)
- [`@enso-ui/filters`](https://docs.laravel-enso.com/frontend/filters.html) [↗](https://github.com/enso-ui/filters)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/uploader`](https://docs.laravel-enso.com/frontend/uploader.html) [↗](https://github.com/enso-ui/uploader)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/categories/blob/master/LICENSE)

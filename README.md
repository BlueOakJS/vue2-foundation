# vue2-foundation

Vue 2.x component wrappers for Foundation 6 widgets

## Usage

### Install the package.

`npm i vue2-foundation --save`
`npm i node-sass --save-dev`

### Add an alias in your webpack configuration for the components:

``` javascript
module.exports = {
  resolve: {
    alias: {
      'vf': 'vue2-foundation/components'
    }
  }
}
```

### Load the Foundation Javascript and SCSS code:

loadFoundation.scss:
``` scss
@import '../node_modules/foundation-sites/scss/foundation';
@include foundation-everything()
```

main.js:
``` javascript
require('script!jquery')
require('script!foundation-sites/dist/js/foundation.js')
require('./loadFoundation.scss');
```

### Import and use the components in a .vue file:

``` vue
<template>
	<fo-button :to="{ name: 'settings' }">Settings</fo-button>
</template>

<script>
import FoButton from 'vf/FoButton';

export default {
	name: 'foo',

	components: {
		FoButton
	}
}
</script>
```

## Building the documentation website

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## LICENSE

Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed

<template lang="md">

<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->

<div class="markdown-body">

# Off-canvas

Off-canvas panels are positioned outside of the viewport and slide in when activated. Setting up an off-canvas layout in Foundation is super easy.

## Complete Example

Following is a complete example. It includes a close button and basic menu styles.

```html
<fo-off-canvas>
  <div slot="menu">
    <!-- Close button -->
    <fo-button class="close-button" aria-label="Close menu" data-close>
      <span aria-hidden="true">&times;</span>
    </fo-button>

    <!-- Menu -->
    <ul class="vertical menu">
      <li><a href="#">Foundation</a></li>
      <li><a href="#">Dot</a></li>
      <li><a href="#">ZURB</a></li>
      <li><a href="#">Com</a></li>
      <li><a href="#">Slash</a></li>
      <li><a href="#">Sites</a></li>
    </ul>
  </div>

  <div slot="content" >
    <!-- Your page content lives here -->
  </div>
</fo-off-canvas>
```

## Sass Reference

See the [Foundation documentation](http://foundation.zurb.com/sites/docs/accordion.html#sass-reference) for a complete reference to the Sass variables and mixins available to customize this component.

## Component Reference

### \<fo-off-canvas>

#### Props

|Property|Type|Required|Description
|---|---|---|---
|side|String|No|Which side of the viewport to open the menu from.  Can be one of `position-left`, `position-right`, `position-top`, or `position-bottom`.  Defaults to `position-left`.
|revealBreakpoint|String|No|The left- and right-hand off-canvas panes can be set to be persistent on larger screens like a sidebar.  Set this prop to either `reveal-for-medium` or `reveal-for-large` to determine at what breakpoint the off-canvas will default open.
|options|Object|No|A plain object with settings to override the default options. See the [Foundation documentation](http://foundation.zurb.com/sites/docs/off-canvas.html#js-options) for a complete reference to the options available to customize this component.  <options-note/>
|value|String|No|A string indicating the current state of the `<off-canvas>`, either `open` or `closed`.

#### Events

|Event|Description
|---|---
opened|Fires when the off-canvas menu opens.
closed|Fires when the off-canvas menu closes.
input|Fires when the off-canvas menu opens or closes.  The parameter will be `open` or `closed` indicating which state the off-canvas menu is now in.

#### Slots

|Slot|Required|Description
|---|---|---
menu|Yes|The off-canvas content.
content|Yes|The main content of your page.

</div>

</template>

<script>
  import OptionsNote from './optionsNote';
  import FoOffCanvas from 'focomponents/FoOffCanvas';
  import FoButton from 'focomponents/FoButton';

  export default {
    components: {
      OptionsNote,
      FoOffCanvas, FoButton
    }
  };
</script>

<template lang="md">

<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->

<div class="markdown-body">

# Title Bar

If you need a simple bar to contain your hamburger icon/s and toggle the off-canvas, `<fo-title-bar>` is here to help. It supports left- and right-aligned sections. You can add your off-canvas toggle triggers here:

```html
<fo-title-bar>
  <span slot="title">Foundation</span>
  <span slot="left">
    <button class="menu-icon" data-open="offCanvasLeft"></button>
  </span>
  <span slot="right">
    <button class="menu-icon" data-open="offCanvasRight"></button>
  </span>
</fo-title-bar>
```

</div>
<div class="example">

<fo-title-bar>
  <span slot="title">Foundation</span>
  <span slot="left">
    <button class="menu-icon" data-open="offCanvasLeft"></button>
  </span>
  <span slot="right">
    <button class="menu-icon" data-open="offCanvasRight"></button>
  </span>
</fo-title-bar>

</div>
<div class="markdown-body">


<div class="primary callout">

When using the `<fo-title-bar>` with a vertical off-canvas, the title-bar slots are still either `left` or `right`.

</div>

```html
<fo-title-bar>
  <span slot="title">Foundation title bar with top off-canvas</span>
  <span slot="left">
    <button class="menu-icon" data-open="offCanvasTop"></button>
  </span>
  <span slot="right">
    <button class="menu-icon" data-open="offCanvasTop"></button>
  </span>
</fo-title-bar>
```

</div>
<div class="example">

<fo-title-bar>
  <span slot="title">Foundation title bar with top off-canvas</span>
  <span slot="left">
    <button class="menu-icon" data-open="offCanvasTop"></button>
  </span>
  <span slot="right">
    <button class="menu-icon" data-open="offCanvasTop"></button>
  </span>
</fo-title-bar>

</div>
<div class="markdown-body">

## Sass Reference

See the [Foundation documentation](http://foundation.zurb.com/sites/docs/off-canvas.html#sass-reference) for a complete reference to the Sass variables and mixins available to customize this component.

## Component Reference

### \<fo-title-bar>

#### Props

This component does not use any props.

#### Events

This component does not emit any events.

#### Slots

|Slot|Required|Description
|---|---|---
title|No|The content to display in the title/branding area.
left|No|The content to display in the left-hand section
right|No|The content to display in the right-hand section.

</div>

</template>

<script>
  import FoTitleBar from 'focomponents/FoTitleBar';

  module.exports = {
    components: {
      FoTitleBar
    }
  }
</script>



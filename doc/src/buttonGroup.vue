<template lang="md">

<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->

<div class="markdown-body">

# Button Group

Button groups are containers for related action items. They're great when you need to display a group of actions in a bar. These build off the button styles and work perfectly with the grid.

## Basics

The container for a button group uses the `<fo-button-group>` component.  Place any number of buttons inside it. The buttons are separated by a small border.

```html
<fo-button-group>
  <fo-button>One</fo-button>
  <fo-button>Two</fo-button>
  <fo-button>Three</fo-button>
</fo-button-group>
```

</div>
<div class="example">

<fo-button-group>
  <fo-button>One</fo-button>
  <fo-button>Two</fo-button>
  <fo-button>Three</fo-button>
</fo-button-group>

</div>

<div class="markdown-body">

## Additional classes

Any of the CSS classes documented by Foundation for things like sizing, coloring, styles, etc. may also be passed on `<fo-button-group>`.  See the [Foundation documentation](http://foundation.zurb.com/sites/docs/button-group.html#sizing) for a complete reference.

### Sizing

</div>
<div class="example">

<fo-button-group class="small">
  <fo-button>Small</fo-button>
  <fo-button>Button</fo-button>
  <fo-button>Group</fo-button>
</fo-button-group>

</div>

<div class="markdown-body">

### Coloring

</div>
<div class="example">

<fo-button-group>
  <fo-button class="secondary">View</fo-button>
  <fo-button class="success">Edit</fo-button>
  <fo-button class="warning">Share</fo-button>
  <fo-button class="alert">Delete</fo-button>
</fo-button-group>

<fo-button-group class="secondary">
  <fo-button>Harder</fo-button>
  <fo-button>Better</fo-button>
  <fo-button>Faster</fo-button>
  <fo-button>Stronger</fo-button>
</fo-button-group>

</div>
<div class="markdown-body">

### Even-width Group

</div>
<div class="example">

<fo-button-group class="expanded">
  <fo-button>Expanded</fo-button>
  <fo-button>Button</fo-button>
  <fo-button>Group</fo-button>
</fo-button-group>

</div>
<div class="markdown-body">

### Stacking

</div>
<div class="example">

<fo-button-group class="stacked-for-small">
  <fo-button>How</fo-button>
  <fo-button>Low</fo-button>
  <fo-button>Can</fo-button>
  <fo-button>You</fo-button>
  <fo-button>Go</fo-button>
</fo-button-group>

</div>
<div class="markdown-body">

### Split Buttons

</div>
<div class="example">

<fo-button-group>
  <fo-button>Primary Action</fo-button>
  <fo-button class="dropdown arrow-only">
    <span class="show-for-sr">Show menu</span>
  </fo-button>
</fo-button-group>

</div>
<div class="markdown-body">

## Sass Reference

See the [Foundation documentation](http://foundation.zurb.com/sites/docs/button-group.html#sass-reference) for a complete reference to the Sass variables and mixins available to customize this component.

## Component Reference

### \<fo-button-group>

#### Props

This component does not have any props.

#### Events

This component does not emit any events.

#### Slots

|Slot|Description
|---|---
default| The `<fo-button>` components to include in the button group.

</div>

</template>

<script>
  import FoButtonGroup from 'focomponents/FoButtonGroup';
  import FoButton from 'focomponents/FoButton';

  module.exports = {
    components: {
      FoButtonGroup, FoButton
    }
  }
</script>

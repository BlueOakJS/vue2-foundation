<template lang="md">

<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->

<div class="markdown-body">

# Button

Buttons are convenient tools when you need more traditional actions. To that end, Foundation has many easy to use button styles that you can customize or override to fit your needs.

## Basics

`<fo-button>` will render to an `<a>` tag or `<button>` tag depending on whether the `to` prop is present. If `to` is present, it will use Vue's `<router-link>` to render the `<a>` tag and set it's `href` correctly.

```html
<!-- Anchors (links) -->
<fo-button to="about">Learn More</fo-button>
<fo-button :to="{ name: 'button', params: { id: 123 }}" class="button">User 123</fo-button>

<!-- Buttons (actions) -->
<fo-button class="success" @click.native="alert('Save pressed')">Save</fo-button>
<fo-button class="alert" @click.native="alert('Delete pressed')">Delete</fo-button>
```

</div>

<div class="example">

<fo-button to="about">Learn More</fo-button>
<fo-button :to="{ name: 'button', params: { id: 123 }}" class="button">User 123</fo-button>
<fo-button class="success" @click.native="alert('Save pressed')">Save</fo-button>
<fo-button class="alert" @click.native="alert('Delete pressed')">Delete</fo-button>

</div>

<div class="markdown-body">

## Additional classes

Any of the CSS classes documented by Foundation for things like sizing, coloring, styles, etc. may also be passed on `<fo-button>`.  See the [Foundation documentation](http://foundation.zurb.com/sites/docs/button.html#sizing) for a complete reference.

### Sizing

</div>

<div class="example">

<fo-button class="tiny" to="button">So Tiny</fo-button>
<fo-button class="small" to="button">So Small</fo-button>
<fo-button class="button" to="button">So Basic</fo-button>
<fo-button class="large" to="button">So Large</fo-button>
<fo-button class="expanded" to="button">Such Expand</fo-button>
<fo-button class="small expanded" to="button">Wow, Small Expand</fo-button>

</div>

<div class="markdown-body">

### Coloring

</div>

<div class="example">

<fo-button class="primary" to="button">Primary</fo-button>
<fo-button class="secondary" to="button">Secondary</fo-button>
<fo-button class="success" to="button">Success</fo-button>
<fo-button class="alert" to="button">Alert</fo-button>
<fo-button class="warning" to="button">Warning</fo-button>

</div>

<div class="markdown-body">

### Disabled Buttons

</div>

<div class="example">

<fo-button class="disabled" to="button" aria-disabled>Disabled</fo-button>
<fo-button class="primary" disabled>Disabled</fo-button>
<fo-button class="secondary" disabled>Disabled</fo-button>
<fo-button class="success" disabled>Disabled</fo-button>
<fo-button class="alert" disabled>Disabled</fo-button>
<fo-button class="warning" disabled>Disabled</fo-button>

</div>

<div class="markdown-body">

### Hollow Style

</div>

<div class="example">

<fo-button class="hollow" to="button">Primary</fo-button>
<fo-button class="hollow secondary" to="button">Secondary</fo-button>
<fo-button class="hollow success" to="button">Success</fo-button>
<fo-button class="hollow alert" to="button">Alert</fo-button>
<fo-button class="hollow warning" to="button">Warning</fo-button>
<fo-button class="hollow" to="button" disabled>Disabled</fo-button>

</div>

<div class="markdown-body">

### Dropdown Arrows

</div>

<div class="example">

<fo-button class="dropdown tiny">Dropdown Button</fo-button>
<fo-button class="dropdown small">Dropdown Button</fo-button>
<fo-button class="dropdown">Dropdown Button</fo-button>
<fo-button class="dropdown large">Dropdown Button</fo-button>
<fo-button class="dropdown expanded">Dropdown Button</fo-button>

</div>

<div class="markdown-body">


## Sass Reference

See the [Foundation documentation](http://foundation.zurb.com/sites/docs/button.html#sass-reference) for a complete reference to the Sass variables and mixins available to customize this component.

## Component Reference

### \<fo-button>

#### Props

|Property|Type|Required|Description
|---|---|---|---
|to|String \| Location|No|If this prop is specified, the button will be rendered using an `<a>` tag.  If it's not specified, it will be rendered using a `<button>` tag.  The value denotes the target route of the link. When clicked, the value of the to prop will be passed to `router.push()` internally, so the value can be either a string or a location descriptor object. See <a href="http://router.vuejs.org/en/essentials/navigation.html#routerpushlocation">the vue-router documentation</a> for more details.

#### Events

This component does not emit any events.

You can use `@click.native` to receive an event when the user clicks the button.

```html
<fo-button @click.native="alert('Save pressed')">Save</fo-button>
```

#### Slots

|Slot|Description
|---|---
default| The content to display inside the button.

</div>

</template>

<script>
  import FoButton from 'focomponents/FoButton';

  export default {
    components: {
      FoButton
    },

    methods: {
      alert: function(msg) {
        window.alert(msg);
      }
    }
  };
</script>

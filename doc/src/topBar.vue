<template lang="md">

<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->

<div class="markdown-body">

# Top Bar

The new top bar is a simpler wrapper around our flexible menu components.

## Basics

A top bar (`<fo-top-bar>`) can have two sections: a left-hand section (slot `name=left`) and a right-hand section (slot `name=right`). On small screens, these sections stack on top of each other.

In the below example, our top bar includes a [dropdown menu](#menu), along with a text input field and action button. The dropdown menu inherits the background color of the top bar. If you're using the Sass version of Foundation, you can change this with the `$topbar-submenu-background` variable.

```html
<fo-top-bar>
  <fo-menu slot="left" type="dropdown">
    <fo-menu-item>Site Title</fo-menu-item>
    <fo-menu title="One">
      <fo-menu-item to="#">One</fo-menu-item>
      <fo-menu-item to="#">Two</fo-menu-item>
      <fo-menu-item to="#">Three</fo-menu-item>
    </fo-menu>
    <fo-menu-item to="#">Two</fo-menu-item>
    <fo-menu-item to="#">Three</fo-menu-item>
  </fo-menu>
  <fo-menu slot="right">
    <fo-menu-item><input type="search" placeholder="Search"></fo-menu-item>
    <fo-menu-item><fo-button>Search</fo-button></fo-menu-item>
  </fo-menu>
</fo-top-bar>
```

</div>
<div class="example">

<fo-top-bar>
  <fo-menu slot="left" type="dropdown">
    <fo-menu-item>Site Title</fo-menu-item>
    <fo-menu title="One">
      <fo-menu-item to="#">One</fo-menu-item>
      <fo-menu-item to="#">Two</fo-menu-item>
      <fo-menu-item to="#">Three</fo-menu-item>
    </fo-menu>
    <fo-menu-item to="#">Two</fo-menu-item>
    <fo-menu-item to="#">Three</fo-menu-item>
  </fo-menu>
  <fo-menu slot="right">
    <fo-menu-item><input type="search" placeholder="Search"></fo-menu-item>
    <fo-menu-item><fo-button>Search</fo-button></fo-menu-item>
  </fo-menu>
</fo-top-bar>

</div>
<div class="markdown-body">

---

## Stacking

By default, the two sections of a top bar will stack on top of each other on small screens. This can be changed by adding the class `.stacked-for-medium` or `.stacked-for-large`.

```html
<fo-top-bar class="stacked-for-medium">
  <!-- ... -->
</fo-top-bar>
```

</div>

<div class="example">
<fo-top-bar class="stacked-for-medium">
  <fo-menu slot="left" type="dropdown">
    <fo-menu-item>Site Title</fo-menu-item>
    <fo-menu title="One">
      <fo-menu-item to="#">One</fo-menu-item>
      <fo-menu-item to="#">Two</fo-menu-item>
      <fo-menu-item to="#">Three</fo-menu-item>
    </fo-menu>
    <fo-menu-item to="#">Two</fo-menu-item>
    <fo-menu-item to="#">Three</fo-menu-item>
  </fo-menu>
  <fo-menu slot="right">
    <fo-menu-item><input type="search" placeholder="Search"></fo-menu-item>
    <fo-menu-item><fo-button>Search</fo-button></fo-menu-item>
  </fo-menu>
</fo-top-bar>
</div>

<div class="markdown-body">


## Sass Reference

See the [Foundation documentation](http://foundation.zurb.com/sites/docs/top-bar.html#sass-reference) for a complete reference to the Sass variables and mixins available to customize this component.

## Component Reference

### \<fo-top-bar>

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
  import FoTopBar from 'focomponents/FoTopBar';
  import FoButton from 'focomponents/FoButton';
  import FoMenu from 'focomponents/FoMenu';
  import FoMenuItem from 'focomponents/FoMenuItem';

  export default {
    components: {
      FoTopBar, FoButton,
      FoMenu,
      FoMenuItem
    }
  };
</script>



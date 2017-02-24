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
  <fo-menu slot="left">
    <fo-menu-item>Site Title</fo-menu-item>
    <fo-menu title="One">
      <fo-menu-item to="">One</fo-menu-item>
      <fo-menu-item to="">Two</fo-menu-item>
      <fo-menu-item to="">Three</fo-menu-item>
    </fo-menu>
    <fo-menu-item to="">Two</fo-menu-item>
    <fo-menu-item to="">Three</fo-menu-item>
  </fo-menu>
  <div slot="right">
    <ul class="menu">
      <li><input type="search" placeholder="Search"></li>
      <li><fo-button>Search</fo-button></li>
    </ul>
  </div>
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
  <div slot="right">
    <ul class="menu">
      <li><input type="search" placeholder="Search"></li>
      <li><fo-button>Search</fo-button></li>
    </ul>
  </div>
</fo-top-bar>

</div>
<div class="markdown-body">

## Additional classes

Any of the CSS classes documented by Foundation may also be passed on `<fo-top-bar>`.  See the [Foundation documentation](http://foundation.zurb.com/sites/docs/top-bar.html#stacking) for a complete reference.

### Stacking

</div>
<div class="example">

<fo-top-bar class="stacked-for-medium">
  <div slot="left">
    <ul class="dropdown menu" data-dropdown-menu>
      <li class="menu-text">Site Title</li>
      <li>
        <a href="#">One</a>
        <ul class="menu vertical">
          <li><a href="#">One</a></li>
          <li><a href="#">Two</a></li>
          <li><a href="#">Three</a></li>
        </ul>
      </li>
      <li><a href="#">Two</a></li>
      <li><a href="#">Three</a></li>
    </ul>
  </div>
  <div slot="right">
    <ul class="menu">
      <li><input type="search" placeholder="Search"></li>
      <li><fo-button>Search</fo-button></li>
    </ul>
  </div>
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



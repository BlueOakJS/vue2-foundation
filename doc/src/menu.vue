<template lang="md">

<div class="markdown-body">

# Menu

Our flexible menu component makes it easy to build many common navigation patterns, all with the same markup.

## Basic Menu

All versions of the menu are an `<fo-menu>` component filled with ` <fo-menu-item to="menu">` components. By default, a Menu is horizontally oriented.

```html
<fo-menu>
  <fo-menu-item to="menu">One</fo-menu-item>
  <fo-menu-item to="menu">Two</fo-menu-item>
  <fo-menu-item to="menu">Three</fo-menu-item>
  <fo-menu-item to="menu">Four</fo-menu-item>
</fo-menu>
```

</div>
<div class="example">

<fo-menu>
  <fo-menu-item to="menu">One</fo-menu-item>
  <fo-menu-item to="menu">Two</fo-menu-item>
  <fo-menu-item to="menu">Three</fo-menu-item>
  <fo-menu-item to="menu">Four</fo-menu-item>
</fo-menu>

</div>
<div class="markdown-body">

---

## Item Alignment

By default, each item in the menu aligns to the left. They can also be aligned to the right with the `align="right"` property.

<div class="warning callout">
  <p>In a <a href="rtl.html">right-to-left</a> environment, items align to the right by default, and the <code>align="right"</code> property can be used to reverse direction.</p>
</div>

```html
<fo-menu align="right">
  <fo-menu-item to="menu">One</fo-menu-item>
  <fo-menu-item to="menu">Two</fo-menu-item>
  <fo-menu-item to="menu">Three</fo-menu-item>
  <fo-menu-item to="menu">Four</fo-menu-item>
</fo-menu>
```

</div>
<div class="example">

<fo-menu align="right">
  <fo-menu-item to="menu">One</fo-menu-item>
  <fo-menu-item to="menu">Two</fo-menu-item>
  <fo-menu-item to="menu">Three</fo-menu-item>
  <fo-menu-item to="menu">Four</fo-menu-item>
</fo-menu>

</div>
<div class="markdown-body">

<br>

To align items in the middle, add the `align="center"` property to the menu.

```html
<fo-menu align="center">
  <fo-menu-item to="menu">One</fo-menu-item>
  <fo-menu-item to="menu">Two</fo-menu-item>
  <fo-menu-item to="menu">Three</fo-menu-item>
  <fo-menu-item to="menu">Four</fo-menu-item>
</fo-menu>
```

</div>
<div class="example">

<fo-menu align="center">
  <fo-menu-item to="menu">One</fo-menu-item>
  <fo-menu-item to="menu">Two</fo-menu-item>
  <fo-menu-item to="menu">Three</fo-menu-item>
  <fo-menu-item to="menu">Four</fo-menu-item>
</fo-menu>

</div>
<div class="markdown-body">

<br>

Items can also be set to expand out and take up an even amount of space, with the `.expanded` class. Thanks to the magic of CSS, the items will automatically size themselves equally depending on how many are inside the menu.

```html
<fo-menu class="expanded">
  <fo-menu-item to="menu">One</fo-menu-item>
  <fo-menu-item to="menu">Two</fo-menu-item>
</fo-menu>
```

</div>
<div class="example">

<fo-menu class="expanded">
  <fo-menu-item to="menu">One</fo-menu-item>
  <fo-menu-item to="menu">Two</fo-menu-item>
</fo-menu>

<fo-menu class="expanded">
  <fo-menu-item to="menu">One</fo-menu-item>
  <fo-menu-item to="menu">Two</fo-menu-item>
  <fo-menu-item to="menu">Three</fo-menu-item>
</fo-menu>

<fo-menu class="expanded">
  <fo-menu-item to="menu">One</fo-menu-item>
  <fo-menu-item to="menu">Two</fo-menu-item>
  <fo-menu-item to="menu">Three</fo-menu-item>
  <fo-menu-item to="menu">Four</fo-menu-item>
</fo-menu>

</div>
<div class="markdown-body">

---

## Vertical Menu

Add the `vertical` property to a Menu to switch its orientation.

```html
<fo-menu vertical>
   <fo-menu-item to="menu">One</fo-menu-item>
   <fo-menu-item to="menu">Two</fo-menu-item>
   <fo-menu-item to="menu">Three</fo-menu-item>
   <fo-menu-item to="menu">Four</fo-menu-item>
</fo-menu>
```

</div>
<div class="example">

<fo-menu vertical>
   <fo-menu-item to="menu">One</fo-menu-item>
   <fo-menu-item to="menu">Two</fo-menu-item>
   <fo-menu-item to="menu">Three</fo-menu-item>
   <fo-menu-item to="menu">Four</fo-menu-item>
</fo-menu>

</div>
<div class="markdown-body">

---

## Simple Style

Add the `.simple` class to a Menu to remove the padding and color change. This style imitates the inline list from Foundation 5.

```html
<fo-menu class="simple">
   <fo-menu-item to="menu">One</fo-menu-item>
   <fo-menu-item to="menu">Two</fo-menu-item>
   <fo-menu-item to="menu">Three</fo-menu-item>
   <fo-menu-item to="menu">Four</fo-menu-item>
</fo-menu>
```

</div>
<div class="example">

<fo-menu class="simple">
   <fo-menu-item to="menu">One</fo-menu-item>
   <fo-menu-item to="menu">Two</fo-menu-item>
   <fo-menu-item to="menu">Three</fo-menu-item>
   <fo-menu-item to="menu">Four</fo-menu-item>
</fo-menu>

</div>
<div class="markdown-body">

---

## Nested Style

Add a new menu inside the `<fo-menu>` of a Menu. The nested Menu has extra padding on the inside.

```html
<fo-menu vertical>
  <fo-menu vertical title="One">
     <fo-menu-item to="menu">One</fo-menu-item>
     <fo-menu-item to="menu">Two</fo-menu-item>
     <fo-menu-item to="menu">Three</fo-menu-item>
     <fo-menu-item to="menu">Four</fo-menu-item>
  </fo-menu>
   <fo-menu-item to="menu">Two</fo-menu-item>
   <fo-menu-item to="menu">Three</fo-menu-item>
   <fo-menu-item to="menu">Four</fo-menu-item>
</fo-menu>
```

</div>
<div class="example">

<fo-menu vertical>
  <fo-menu vertical title="One">
     <fo-menu-item to="menu">One</fo-menu-item>
     <fo-menu-item to="menu">Two</fo-menu-item>
     <fo-menu-item to="menu">Three</fo-menu-item>
     <fo-menu-item to="menu">Four</fo-menu-item>
  </fo-menu>
   <fo-menu-item to="menu">Two</fo-menu-item>
   <fo-menu-item to="menu">Three</fo-menu-item>
   <fo-menu-item to="menu">Four</fo-menu-item>
</fo-menu>

</div>
<div class="markdown-body">

---

## Active State

Add the class `.active` to any ` <fo-menu-item to="menu">` to create an active state.

```html_example
<fo-menu>
  <fo-menu-item class="active" to="menu">Home</fo-menu-item>
  <fo-menu-item to="menu">About</fo-menu-item>
  <fo-menu-item to="menu">Nachos</fo-menu-item>
</fo-menu>
```

</div>
<div class="example">

<fo-menu>
  <fo-menu-item class="active" to="menu">Home</fo-menu-item>
  <fo-menu-item to="menu">About</fo-menu-item>
  <fo-menu-item to="menu">Nachos</fo-menu-item>
</fo-menu>

</div>
<div class="markdown-body">

---

## Text

Because the padding of the menu item is applied to the `<a>`, if you try to add an item that's text only, it will be misaligned. To get around this, add the class `.menu-text` to any `<li>` that doesn't have a link inside of it.

```html
<fo-menu>
  <fo-menu-item>Site Title</fo-menu-item>
  <fo-menu-item to="menu">One</fo-menu-item>
  <fo-menu-item to="menu">Two</fo-menu-item>
  <fo-menu-item to="menu">Three</fo-menu-item>
</fo-menu>
```

</div>
<div class="example">

<fo-menu>
  <fo-menu-item>Site Title</fo-menu-item>
  <fo-menu-item to="menu">One</fo-menu-item>
  <fo-menu-item to="menu">Two</fo-menu-item>
  <fo-menu-item to="menu">Three</fo-menu-item>
</fo-menu>

</div>
<div class="markdown-body">

---

## Icons

Menu items can have icons. Wrap the text of the item in a `<span>`, and then add an `<img>` element before the `<span>`. If you're using the Foundation icon font, the `<img>` will be an `<i>` instead.

```html
<fo-menu>
   <fo-menu-item to="menu"><i class="fi-list"></i> <span>One</span></fo-menu-item>
   <fo-menu-item to="menu"><i class="fi-list"></i> <span>Two</span></fo-menu-item>
   <fo-menu-item to="menu"><i class="fi-list"></i> <span>Three</span></fo-menu-item>
   <fo-menu-item to="menu"><i class="fi-list"></i> <span>Four</span></fo-menu-item>
</fo-menu>
```

</div>
<div class="example">

<fo-menu>
   <fo-menu-item to="menu"><i class="fi-list"></i> <span>One</span></fo-menu-item>
   <fo-menu-item to="menu"><i class="fi-list"></i> <span>Two</span></fo-menu-item>
   <fo-menu-item to="menu"><i class="fi-list"></i> <span>Three</span></fo-menu-item>
   <fo-menu-item to="menu"><i class="fi-list"></i> <span>Four</span></fo-menu-item>
</fo-menu>

</div>
<div class="markdown-body">

---

Add the class `.icon-top` to the Menu to orient icons above the text.

```html_example
<fo-menu class="icon-top">
   <fo-menu-item to="menu"><i class="fi-list"></i> <span>One</span></fo-menu-item>
   <fo-menu-item to="menu"><i class="fi-list"></i> <span>Two</span></fo-menu-item>
   <fo-menu-item to="menu"><i class="fi-list"></i> <span>Three</span></fo-menu-item>
   <fo-menu-item to="menu"><i class="fi-list"></i> <span>Four</span></fo-menu-item>
</fo-menu>
```

</div>
<div class="example">

<fo-menu class="icon-top">
   <fo-menu-item to="menu"><i class="fi-list"></i> <span>One</span></fo-menu-item>
   <fo-menu-item to="menu"><i class="fi-list"></i> <span>Two</span></fo-menu-item>
   <fo-menu-item to="menu"><i class="fi-list"></i> <span>Three</span></fo-menu-item>
   <fo-menu-item to="menu"><i class="fi-list"></i> <span>Four</span></fo-menu-item>
</fo-menu>

</div>
<div class="markdown-body">

---

<!--

This hasn't been wrapped yet
---

## Sticky Navigation

See the documentation for the [Sticky](sticky.html#sticky-navigation) plugin to see how to easily make a sticky nav bar.
-->








# Dropdown Menu

Change a basic Menu into an expandable dropdown menu with the Dropdown Menu plugin.

## Horizontal

Dropdown menus build on the Menu component's syntax. Add the `type="dropdown"` property to the menu container to set up the dropdown.

```html
<fo-menu type="dropdown">
  <fo-menu-item to="menu">Item 1</fo-menu-item>
  <fo-menu-item to="menu">Item 2</fo-menu-item>
  <fo-menu-item to="menu">Item 3</fo-menu-item>
  <fo-menu-item to="menu">Item 4</fo-menu-item>
</fo-menu>
```

To create dropdown menus, nest a new `<fo-menu>` inside the `<fo-menu>`. You can nest further to create more levels of dropdowns.

```html
<fo-menu type="dropdown">
  <fo-menu title="Item 1">
     <fo-menu-item to="menu">Item 1A</fo-menu-item>
    <!-- ... -->
  </fo-menu>
  <fo-menu-item to="menu">Item 2</fo-menu-item>
  <fo-menu-item to="menu">Item 3</fo-menu-item>
  <fo-menu-item to="menu">Item 4</fo-menu-item>
</fo-menu>
```

</div>
<div class="example">

<fo-menu @input="logInput" @show="logShow" @hide="logHide" type="dropdown">
  <fo-menu id="1" to="#Item-1" title="Item 1">
    <fo-menu-item to="#Item-1A" id="3">Item 1A</fo-menu-item>
    <fo-menu to="#Item-1B">
      <!-- Alternative to using title on fo-menu -->
      <span slot="title">Item 1B</span>
      <fo-menu-item to="#Item-1Bi">Item 1B i</fo-menu-item>
      <fo-menu-item to="#Item-1Bii">Item 1B ii</fo-menu-item>
      <fo-menu to="#Item-1Biii" title="Item 1B iii">
        <fo-menu-item to="#Item-1Biiialpha">Item 1B iii alpha</fo-menu-item>
        <fo-menu-item to="#Item-1Biiiomega">Item 1B iii omega</fo-menu-item>
      </fo-menu>
      <fo-menu to="#Item-1Biv" title="Item 1B iv">
        <fo-menu-item to="#Item-1Bivalpha">Item 1B iv alpha</fo-menu-item>
      </fo-menu>
    </fo-menu>
    <fo-menu-item to="#Item-1C">Item 1C</fo-menu-item>
  </fo-menu>

  <fo-menu to="#Item-2" title="Item 2">
    <fo-menu-item to="#Item-2A">Item 2A</fo-menu-item>
    <fo-menu-item to="#Item-2B">Item 2B</fo-menu-item>
  </fo-menu>
  <fo-menu-item to="#Item-3">Item 3</fo-menu-item>
  <fo-menu-item to="#Item-4">Item 4</fo-menu-item>
</fo-menu>

</div>
<div class="markdown-body">

---

## Vertical

Add the `vertical` property to the top-level menu to make it vertical. Sub-menus are automatically vertical, regardless of the orientation of the top-level menu.

<div class="primary callout">
  <p>Menus are block-level elements, which means they stretch to fill the width of their container. To make the below example less goofy, we've hard-coded a <code>max-width</code> on the menu.</p>
</div>

```html
<fo-menu vertical type="dropdown" style="max-width: 300px;">
  <fo-menu title="Item 1">
  <!-- ... -->
</fo-menu>
```

</div>
<div class="example">

<fo-menu vertical style="max-width: 300px;" type="dropdown">
  <fo-menu to="#Item-1" title="Item 1">
    <fo-menu-item to="#Item-1A" id="3">Item 1A</fo-menu-item>
    <fo-menu to="#Item-1B" title="Item 1B">
      <fo-menu-item to="#Item-1Bi">Item 1B i</fo-menu-item>
      <fo-menu-item to="#Item-1Bii">Item 1B ii</fo-menu-item>
      <fo-menu to="#Item-1Biii" title="Item 1B iii">
        <fo-menu-item to="#Item-1Biiialpha">Item 1B iii alpha</fo-menu-item>
        <fo-menu-item to="#Item-1Biiiomega">Item 1B iii omega</fo-menu-item>
      </fo-menu>
      <fo-menu to="#Item-1Biv" title="Item 1B iv">
        <fo-menu-item to="#Item-1Bivalpha">Item 1B iv alpha</fo-menu-item>
      </fo-menu>
    </fo-menu>
    <fo-menu-item to="#Item-1C">Item 1C</fo-menu-item>
  </fo-menu>

  <fo-menu to="#Item-2" title="Item 2">
    <fo-menu-item to="#Item-2A">Item 2A</fo-menu-item>
    <fo-menu-item to="#Item-2B">Item 2B</fo-menu-item>
  </fo-menu>
  <fo-menu-item to="#Item-3">Item 3</fo-menu-item>
  <fo-menu-item to="#Item-4">Item 4</fo-menu-item>
</fo-menu>


</div>
<div class="markdown-body">

# Drilldown

Drilldown is one of Foundation's three menu patterns, which converts a series of nested lists into a vertical drilldown menu.

## Basics

Drilldowns use the standard Menu syntax, using `<fo-menu>` and ` <fo-menu-item to="menu">`. Add `type="drilldown"` to the root menu to set up the drilldown.

To create sub-menus, place a `<fo-menu>` inside an `<fo-menu>`.

Any ` <fo-menu-item to="menu">` will function like a normal link.

```html
<fo-menu type="drilldown">
  <fo-menu to="#Item-1" title="Item 1">
    <fo-menu to="#Item-1A" title="Item 1A">
      <!-- ... -->
    </fo-menu>
  </fo-menu>
  <fo-menu to="#Item-2" title="Item 2">
  </fo-menu>
</fo-menu>
```

<div class="primary callout">
  <p>The drilldown menu takes on the height of the tallest menu in the hierarchy, so the menu doesn't change height as the user navigates it.</p>
</div>

</div>
<div class="example">

<fo-menu @input="logInput" @open="logOpen" @closed="logClosed" @hide="logHide" style="width: 200px" id="m1" type="drilldown">
  <fo-menu v-model="menu1" title="Item 1">
    <fo-menu title="Item 1A">
      <fo-menu-item to="#Item-1Aa">Item 1Aa</fo-menu-item>
      <fo-menu-item to="#Item-1Ab">Item 1Ab</fo-menu-item>
      <fo-menu-item to="#Item-1Ac">Item 1Ac</fo-menu-item>
      <fo-menu-item to="#Item-1Ad">Item 1Ad</fo-menu-item>
      <fo-menu-item to="#Item-1Ae">Item 1Ae</fo-menu-item>
    </fo-menu>
    <fo-menu-item to="#Item-1B">Item 1B</fo-menu-item>
    <fo-menu-item to="#Item-1C">Item 1C</fo-menu-item>
    <fo-menu-item to="#Item-1D">Item 1D</fo-menu-item>
    <fo-menu-item to="#Item-1E">Item 1E</fo-menu-item>
  </fo-menu>

  <fo-menu title="Item 2">
    <fo-menu-item to="#Item-2A">Item 2A</fo-menu-item>
    <fo-menu-item to="#Item-2B">Item 2B</fo-menu-item>
    <fo-menu-item to="#Item-2C">Item 2C</fo-menu-item>
    <fo-menu-item to="#Item-2D">Item 2D</fo-menu-item>
    <fo-menu-item to="#Item-2E">Item 2E</fo-menu-item>
  </fo-menu>

  <fo-menu title="Item 3">
    <fo-menu-item to="#Item-3A">Item 3A</fo-menu-item>
    <fo-menu-item to="#Item-3B">Item 3B</fo-menu-item>
    <fo-menu-item to="#Item-3C">Item 3C</fo-menu-item>
    <fo-menu-item to="#Item-3D">Item 3D</fo-menu-item>
    <fo-menu-item to="#Item-3E">Item 3E</fo-menu-item>
  </fo-menu>
  <fo-menu-item to="#Item-4">Item 4</fo-menu-item>
</fo-menu>

</div>
<div class="markdown-body">

## autoHeight

<div class="secondary callout">
  <p>If you like to set the height to auto you can also set the autoHeight and animateHeight params</p>
  <button class="button expanded" @click="toggleAutoheight">autoHeight is {{m3Options.autoHeight}}</button>
</div>

</div>
<div class="example">

<fo-menu data-auto-height="true" data-animate-height="true" style="width: 200px" id="m3" type="drilldown" :options="m3Options">
  <fo-menu title="Item 1">
    <fo-menu title="Item 1A">
      <fo-menu-item to="#Item-1Aa">Item 1Aa</fo-menu-item>
      <fo-menu-item to="#Item-1Ba">Item 1Ba</fo-menu-item>
    </fo-menu>
    <fo-menu-item to="#Item-1B">Item 1B</fo-menu-item>
    <fo-menu-item to="#Item-1C">Item 1C</fo-menu-item>
    <fo-menu-item to="#Item-1D">Item 1D</fo-menu-item>
    <fo-menu-item to="#Item-1E">Item 1E</fo-menu-item>
  </fo-menu>
  <fo-menu title="Item 2">
    <fo-menu-item to="#Item-2A">Item 2A</fo-menu-item>
    <fo-menu-item to="#Item-2B">Item 2B</fo-menu-item>
    <fo-menu-item to="#Item-2C">Item 2C</fo-menu-item>
    <fo-menu-item to="#Item-2D">Item 2D</fo-menu-item>
    <fo-menu-item to="#Item-2E">Item 2E</fo-menu-item>
  </fo-menu>
  <fo-menu title="Item 3">
    <fo-menu-item to="#Item-3A">Item 3A</fo-menu-item>
    <fo-menu-item to="#Item-3B">Item 3B</fo-menu-item>
    <fo-menu-item to="#Item-3C">Item 3C</fo-menu-item>
    <fo-menu-item to="#Item-3D">Item 3D</fo-menu-item>
    <fo-menu to="#Item-3E" title="Item 3E">
      <fo-menu-item to="#Item-3EA">Item 3EA</fo-menu-item>
      <fo-menu-item to="#Item-3EB">Item 3EB</fo-menu-item>
      <fo-menu-item to="#Item-3EC">Item 3EC</fo-menu-item>
      <fo-menu-item to="#Item-3ED">Item 3ED</fo-menu-item>
      <fo-menu-item to="#Item-3EE">Item 3EE</fo-menu-item>
      <fo-menu-item to="#Item-3EA">Item 3EA</fo-menu-item>
      <fo-menu-item to="#Item-3EB">Item 3EB</fo-menu-item>
      <fo-menu-item to="#Item-3EC">Item 3EC</fo-menu-item>
      <fo-menu-item to="#Item-3ED">Item 3ED</fo-menu-item>
      <fo-menu-item to="#Item-3EE">Item 3EE</fo-menu-item>
      <fo-menu-item to="#Item-3EA">Item 3EA</fo-menu-item>
      <fo-menu-item to="#Item-3EB">Item 3EB</fo-menu-item>
      <fo-menu-item to="#Item-3EC">Item 3EC</fo-menu-item>
      <fo-menu-item to="#Item-3ED">Item 3ED</fo-menu-item>
      <fo-menu-item to="#Item-3EE">Item 3EE</fo-menu-item>
    </fo-menu>
  </fo-menu>
  <fo-menu-item to="#Item-4">Item 4</fo-menu-item>
  <fo-menu-item to="#Item-5">Item 5</fo-menu-item>
  <fo-menu-item to="#Item-6">Item 6</fo-menu-item>
  <fo-menu-item to="#Item-7">Item 7</fo-menu-item>
  <fo-menu-item to="#Item-8">Item 8</fo-menu-item>
</fo-menu>

</div>
<div class="markdown-body">

## ScrollTop Drilldown

<div class="callout">Scroll to the top of the menu when selecting a submenu/navigating back using the menu back button. Can be useful with a longer menu to provide a better user experience.</div>

</div>
<div class="example">

<fo-menu @scrollme="logScrollme" @open="logOpen" @hide="logHide" :options="{scrollTop: true}" style="width: 200px" id="m2" type="drilldown">
   <fo-menu-item to="menu">Item</fo-menu-item>
   <fo-menu-item to="menu">Item</fo-menu-item>
   <fo-menu-item to="menu">Item</fo-menu-item>
   <fo-menu-item to="menu">Item</fo-menu-item>
   <fo-menu-item to="menu">Item</fo-menu-item>
   <fo-menu-item to="menu">Item</fo-menu-item>
   <fo-menu-item to="menu">Item</fo-menu-item>
   <fo-menu-item to="menu">Item</fo-menu-item>
   <fo-menu-item to="menu">Item</fo-menu-item>
   <fo-menu-item to="menu">Item</fo-menu-item>
  <fo-menu class="vertical" title="Item">
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
     <fo-menu-item to="menu">Item</fo-menu-item>
    <fo-menu class="vertical" title="Item">
       <fo-menu-item to="menu">Item</fo-menu-item>
    </fo-menu>
  </fo-menu>
   <fo-menu-item to="menu">Item</fo-menu-item>
</fo-menu>

</div>
<div class="markdown-body">

---

## Custom Styling

The drilldown plugin automatically adds a back button to the top of each nested menu. To style this control, target the `.js-drilldown-back` class:

```css
.js-drilldown-back {
  // ...
}
```





# Accordion Menu

Change a basic vertical Menu into a expandable accordion menu with the Accordion Menu plugin.

## Basics

Accordion menus follow the basic Menu syntax of `<fo-menu>` and ` <fo-menu-item to="menu">`. To convert a basic menu into an accordion, add the `type="accordion"` property.  Menus are automatically vertical.

Any ` <fo-menu-item to="menu">` will behave like a standard link. However, any nested `<fo-menu>` menu will then slide that sub-menu up and down when clicked on.

<div class="primary callout">
  <p>To have a sub-menu already open when the page loads, use <code>v-model</code> to bind the state of the accordion menu to a variable with the value <code>show</code>.</p>
</div>

```html
<fo-menu type="accordion">
  <fo-menu title="Item 1">
     <fo-menu-item to="menu">Item 1A</fo-menu-item>
     <fo-menu-item to="menu">Item 1B</fo-menu-item>
  </fo-menu>
   <fo-menu-item to="menu">Item 2</fo-menu-item>
</fo-menu>
```

</div>
<div class="example">

<fo-menu @input="logInput" @show="logShow" @hide="logHide" type="accordion">
  <fo-menu title="Item 1">
    <fo-menu title="Item 1A">
       <fo-menu-item to="menu">Item 1A i</fo-menu-item>
       <fo-menu-item to="menu">Item 1A ii</fo-menu-item>
       <fo-menu-item to="menu">Item 1A iii</fo-menu-item>
    </fo-menu>
     <fo-menu-item to="menu">Item 1B</fo-menu-item>
     <fo-menu-item to="menu">Item 1C</fo-menu-item>
  </fo-menu>

  <fo-menu title="Item 2">
     <fo-menu-item to="menu">Item 2A</fo-menu-item>
     <fo-menu-item to="menu">Item 2B</fo-menu-item>
  </fo-menu>
   <fo-menu-item to="menu">Item 3</fo-menu-item>
</fo-menu>

</div>
<div class="markdown-body">




## Sass Reference

See the Foundation documentation for a complete reference to the Sass variables and mixins available to customize the various menu components.

* Menu: [Sass Reference](http://foundation.zurb.com/sites/docs/menu.html#sass-reference)
* Dropdown menu: [Sass Reference](http://foundation.zurb.com/sites/docs/dropdown-menu.html#sass-reference)
* Accordion menu: [Sass Reference](http://foundation.zurb.com/sites/docs/accordion-menu.html#sass-reference)

## Component Reference

### \<fo-menu>

#### Props

|Property|Type|Required|Description
|---|---|---|---
|options|Object|No|A plain object with settings to override the default options. See the Foundation documentation for [Dropdown menu](http://foundation.zurb.com/sites/docs/dropdown-menu.html#js-options), [Accordion menu](http://foundation.zurb.com/sites/docs/accordion-menu.html#js-options), or [Drilldown menu](http://foundation.zurb.com/sites/docs/drilldown-menu.html#js-options) for a complete reference to the options available to customize this component.  <options-note/>
|type|String|No|A string indicating what the type of the menu.  If not specified, a basic Menu will be created.  Other allowed values are `dropdown`, `drilldown`, and `accordion`.
|to|String \| Location|No|If this prop is specified, it denotes the target route of the link. When clicked, the value of the to prop will be passed to `router.push()` internally, so the value can be either a string or a location descriptor object. See <a href="http://router.vuejs.org/en/essentials/navigation.html#routerpushlocation">the vue-router documentation</a> for more details.
|title|String|No|If the menu is a submenu, the title of the submenu.  Either this property or the `title` slot should be used.
|value|String|No|A string indicating what the current state of the menu is, either `show` or `hide`.
|align|String|No|A string that defines the alignment of the menu.  If not specified, defaults to left-aligned.  Allowable values are `right` and `center`.
|vertical|String|No|If specified, lays out the menu vertically.  If not specified, lays out the menu horizontally.

#### Events

|Event|Description
|---|---
show|Fires when the submenu has opened.
hide|Fires when the submenu has closed.
input| Fires when the submenu has opened or closed.  The parameter will be `show` or `hide` indicating which state the menu is now in.
scrollme|Fires after the menu has scrolled.

#### Slots

|Slot|Required|Description
|---|---|---
default|Yes|The `<fo-menu>` and ` <fo-menu-item>` components that represent the menu items.
title|No|If the menu is a submenu, the title of the submenu.  Either this slot or the `title` property should be used.

#### Usage with v-model

If `v-model` is used on this component, the bound property will be set to the current state of the `<fo-menu>` (either `show` or `hide`).  The property value can also be used to toggle the state of the `<fo-menu>`.

### \<fo-menu-item>

#### Props

|Property|Type|Required|Description
|---|---|---|---
|to|String \| Location|No|If this prop is specified, the menu title will be rendered using an `<a>` tag.  If it's not specified, it will be rendered as text inside an `li` tag with a `.menu-text` class.  The value denotes the target route of the link. When clicked, the value of the to prop will be passed to `router.push()` internally, so the value can be either a string or a location descriptor object. See <a href="http://router.vuejs.org/en/essentials/navigation.html#routerpushlocation">the vue-router documentation</a> for more details.

#### Events

This component does not emit any events.

#### Slots

|Slot|Required|Description
|---|---|---
default|Yes|The title of the menu item.

</div>

</template>

<script>
  import OptionsNote from './optionsNote';
  import FoMenu from 'focomponents/FoMenu';
  import FoMenuItem from 'focomponents/FoMenuItem';

  module.exports = {
    name: 'menu',

    components: {
      OptionsNote,
      FoMenu,
      FoMenuItem
    },

    data: function() {
      return {
        menu1: 'hide',

        m3Options: {
          autoHeight: true
        }
      };
    },

    methods: {
      logInput: function() {
        console.log('input', arguments);
      },
      logShow: function() {
        console.log('show', arguments);
      },
      logHide: function() {
        console.log('hide', arguments);
      },
      logOpen: function() {
        console.log('open', arguments);
      },
      logClosed: function() {
        console.log('closed', arguments);
      },
      logScrollme: function() {
        console.log('scrollme', arguments);
      },

      toggleAutoheight: function() {
        this.m3Options.autoHeight = !this.m3Options.autoHeight;
      }
    }
  }
</script>

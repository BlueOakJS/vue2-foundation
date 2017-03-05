<template lang="md">

<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->

<div class="markdown-body">

# Accordion

Accordions are elements that help you organize and navigate multiple documents in a single container. They can be used for switching between items in the container.

## Basics

The container for an accordion uses the `<fo-accordion>` component.

```html
<fo-accordion>
  ...
</fo-accordion>
```

Inside the accordion, place a series of panes with the  `<fo-accordion-item>` component. To mark which pane should be open by default, add the class `.is-active` to that pane or use `v-model` to set the active state.

Each pane has a **title**, specified in the `title` slot, and a **content area**, specified in the `content` slot.

```html
<fo-accordion>
  <fo-accordion-item class="is-active">
    <span slot="title">Accordion 1</span>
    <div slot="content">
      I would start in the open state, due to using the `is-active` state class.
    </div>
  </fo-accordion-item>
  <!-- ... -->
</fo-accordion>
```

Once you put it all together, here's what you get!

</div>
<div class="example">

<fo-accordion>
  <fo-accordion-item class="is-active">
    <span slot="title">Accordion 1</span>
    <div slot="content">
      <p>Panel 1. Lorem ipsum dolor</p>
      <a href="#">Nowhere to Go</a>
    </div>
  </fo-accordion-item>

  <fo-accordion-item>
    <span slot="title">Accordion 2</span>
    <div slot="content">
      <textarea></textarea>
      <button class="button">I do nothing!</button>
    </div>
  </fo-accordion-item>

  <fo-accordion-item>
    <span slot="title">Accordion 3</span>
    <div slot="content">
      Pick a date!
      <input type="date"></input>
    </div>
  </fo-accordion-item>
</fo-accordion>

</div>

<div class="markdown-body">

---

## Advanced Options

### Multi-expand

By default, only one pane of an accordion can be open at a time. This can be changed by setting the `multiExpand` option to `true`.

```html
<fo-accordion :options="{multiExpand: true}">
  <!-- ... -->
</fo-accordion>
```

</div>

<div class="example">

<fo-accordion :options="{multiExpand: true}">
  <fo-accordion-item class="is-active">
    <span slot="title">Accordion 1</span>
    <div slot="content">
      Panel 1. Lorem ipsum dolor
    </div>
  </fo-accordion-item>

  <fo-accordion-item>
    <span slot="title">Accordion 2</span>
    <div slot="content">
      Panel 2. Lorem ipsum dolor
    </div>
  </fo-accordion-item>

  <fo-accordion-item>
    <span slot="title">Accordion 3</span>
    <div slot="content">
      Panel 3. Lorem ipsum dolor
    </div>
  </fo-accordion-item>
</fo-accordion>

</div>

<div class="markdown-body">

---

### All Closed

By default, at least one pane in an accordion must be open. This can be changed by setting `allowAllClosed` option to `true`.

```html
<fo-accordion :options="{allowAllClosed: true}">
  <!-- ... -->
</fo-accordion>
```

</div>

<div class="example">

<fo-accordion :options="{allowAllClosed: true}">
  <fo-accordion-item class="is-active">
    <span slot="title">Accordion 1</span>
    <div slot="content">
      Panel 1. Lorem ipsum dolor
    </div>
  </fo-accordion-item>

  <fo-accordion-item>
    <span slot="title">Accordion 2</span>
    <div slot="content">
      Panel 2. Lorem ipsum dolor
    </div>
  </fo-accordion-item>

  <fo-accordion-item>
    <span slot="title">Accordion 3</span>
    <div slot="content">
      Panel 3. Lorem ipsum dolor
    </div>
  </fo-accordion-item>
</fo-accordion>

</div>

<div class="markdown-body">

## Sass Reference

See the [Foundation documentation](http://foundation.zurb.com/sites/docs/accordion.html#sass-reference) for a complete reference to the Sass variables and mixins available to customize this component.

## Component Reference

### \<fo-accordion>

#### Props

|Property|Type|Required|Description
|---|---|---|---
|options|Object|No|A plain object with settings to override the default options. See the [Foundation documentation](http://foundation.zurb.com/sites/docs/accordion.html#js-options) for a complete reference to the options available to customize this component.  <options-note/>


#### Events

This component does not emit any events.

#### Slots

|Slot|Required|Description
|---|---|---
default|Yes|The `<fo-accordion-item>` components that represent the panes.


### \<fo-accordion-item>

#### Props

|Property|Type|Required|Description
|---|---|---|---
|value|Boolean|No|Indicates what the current state of the accordion is, either `true` indicating open (down) or `false` indicating closed (up).


#### Events

|Event|Description
|---|---
down| Fires when the tab is done opening.
up| Fires when the tab is done collapsing up.
input| Fires when the tab is done opening or collapsing up.  The parameter will be `true` or `false` indicating which state the panel is now in.

#### Slots

|Slot|Required|Description
|---|---|---
title|No|Title of the accordion pane.
content|No|Content to display in the accordion pane.

#### Usage with v-model

If `v-model` is used on this component, the bound property will be set to the current state of the `<accordion-item>` (either `true` or `false`).  The property value can also be used to toggle the state of the `<accordion-item>`.

</div>

</template>

<script>
  import OptionsNote from './optionsNote';
  import FoAccordion from 'focomponents/FoAccordion';
  import FoAccordionItem from 'focomponents/FoAccordionItem';

  export default {
    components: {
      OptionsNote,
      FoAccordion, FoAccordionItem
    }
  };
</script>

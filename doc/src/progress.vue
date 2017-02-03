<template lang="md">

<div class="markdown-body">

# Progress Bar

Show your progress. A simple way to add progress bars to your layouts.

## Basics

Use the `<fo-progress>` component to display a progress bar.

```html
<fo-progress tabindex="0" value="0">
</fo-progress>
```

</div>
<div class="example">

<fo-progress tabindex="0" value="0">
</fo-progress>

</div>
<div class="markdown-body">

Add a `value` prop to the component to fill the progress bar.

```html
<fo-progress tabindex="0" value="50" aria-valuetext="50 percent">
</fo-progress>
```

</div>
<div class="example">

<fo-progress tabindex="0" value="50" aria-valuetext="50 percent">
</fo-progress>

</div>
<div class="markdown-body">

---

## Colors

A progress bar can be styled with the `.secondary`, `.success`, `.warning`, and `.alert` colors.

```html
<fo-progress class="secondary" tabindex="0" value="25" aria-valuetext="25 percent">
</fo-progress>

<fo-progress class="success" value="50">
</fo-progress>

<fo-progress class="warning" value="50">
</fo-progress>

<fo-progress class="alert" value="75">
</fo-progress>
```

</div>
<div class="example">

<fo-progress class="secondary" tabindex="0" value="25" aria-valuetext="25 percent">
</fo-progress>

<fo-progress class="success" value="50">
</fo-progress>

<fo-progress class="warning" value="50">
</fo-progress>

<fo-progress class="alert" value="75">
</fo-progress>

</div>
<div class="markdown-body">

---

## With Text

You can add text inside the meter of a progress bar.  You can specify alternative text for a screen reader using the `aria-valuetext` prop.

```html
<fo-progress tabindex="0" value="25" aria-valuetext="25 percent">
    25%
</fo-progress>
```

</div>
<div class="example">

<fo-progress tabindex="0" value="25" aria-valuetext="25 percent">
    25%
</fo-progress>

</div>
<div class="markdown-body">

## Sass Reference

See the [Foundation documentation](http://foundation.zurb.com/sites/docs/progress-bar.html#sass-reference) for a complete reference to the Sass variables and mixins available to customize this component.

## Component Reference

### \<fo-progress>

#### Props

|Property|Type|Required|Description
|---|---|---|---
|value|String \| Number|Yes|The current value of the progress meter.  Will fill in the appropriate percentage of the meter based on the `min` and `max` values.
|min|String \| Number|No|The minimum value of the progress meter.  Defaults to 0.
|max|String \| Number|No|The maximum value of the progress meter.  Defaults to 100.
|aria-valuenow|String|No|Value to use for the `aria-valuenow` attribute.  Defaults to `value`.
|aria-valuemin|String|No|Value to use for the `aria-valuemin` attribute.  Defaults to `min`.
|aria-valuemax|String|No|Value to use for the `aria-valuemax` attribute.  Defaults to `max`.
|aria-valuetext|String|No|Value to use for the `aria-valuetext` attribute, which should include a human-readable version of the bar's value.  If not present, the attribute will not be present in the DOM.

#### Events

This component does not emit any events.

#### Slots

|Slot|Required|Description
|---|---|---
default|No|The text to display inside the progress meter.

</div>

</template>

<script>
  import FoProgress from 'focomponents/FoProgress';

  module.exports = {
    components: {
      FoProgress
    }
  }
</script>

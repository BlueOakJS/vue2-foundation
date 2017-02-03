<template lang="md">

<div class="markdown-body">

# Button

</div>
<div class="example">

</div>

<div class="markdown-body">

## Sass Reference

See the [Foundation documentation](http://foundation.zurb.com/sites/docs/accordion.html#sass-reference) for a complete reference to the Sass variables and mixins available to customize this component.

## Component Reference

### \<fo-button>

#### Props

|Property|Type|Required|Description
|---|---|---|---
|to|String \| Location|No|Denotes the target route of the link. When clicked, the value of the to prop will be passed to router.push() internally, so the value can be either a string or a location descriptor object.

#### Events

This component does not emit any events.

|Event|Description
|---|---
down| Fires when the tab is done opening.

#### Slots

|Slot|Required|Description
|---|---|---
default|No|The `<fo-accordion-item>` components that represent the panes.

</div>

</template>

<script>
  import FoButton from 'focomponents/FoButton';

  module.exports = {
    components: {
      FoButton
    }
  }
</script>

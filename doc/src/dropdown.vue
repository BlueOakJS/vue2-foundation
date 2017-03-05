<template lang="md">

<div class="markdown-body">

# Dropdown

Dropdown panes are little happy sprites which can be revealed on click or hover.

<div class="primary callout">
  <p>You might be looking for <router-link :to="{ name: 'menu' }">dropdown menus</router-link>, which are a separate component.</p>
</div>

## Basics

To create a dropdown pane, use the `<fo-dropdown>` component. Give the dropdown a unique ID as well.

To create the dropdown trigger, add `data-toggle` to an `<fo-button>`. The value of `data-toggle` is the ID of the dropdown.

```html
<fo-button data-toggle="example-dropdown">Toggle Dropdown</button>
<fo-dropdown id="example-dropdown" data-auto-focus="true">
  Example form in a dropdown.
  <form>
    <div class="row">
      <div class="medium-6 columns">
        <label>Name
          <input type="text" placeholder="Kirk, James T.">
        </label>
      </div>
      <div class="medium-6 columns">
        <label>Rank
          <input type="text" placeholder="Captain">
        </label>
      </div>
    </div>
  </form>
</fo-dropdown>


<fo-button data-toggle="example-dropdown-1">Hoverable Dropdown</button>
<fo-dropdown id="example-dropdown-1" data-hover="true" data-hover-pane="true">
  Just some junk that needs to be said. Or not. Your choice.
</fo-dropdown>
```

</div>
<div class="example">
<fo-button data-toggle="example-dropdown">Toggle Dropdown</fo-button>
<fo-dropdown id="example-dropdown" data-auto-focus="true">
  Example form in a dropdown.
  <form>
    <div class="row">
      <div class="medium-6 columns">
        <label>Name
          <input type="text" placeholder="Kirk, James T.">
        </label>
      </div>
      <div class="medium-6 columns">
        <label>Rank
          <input type="text" placeholder="Captain">
        </label>
      </div>
    </div>
  </form>
</fo-dropdown>


<fo-button data-toggle="example-dropdown-1">Hoverable Dropdown</fo-button>
<fo-dropdown id="example-dropdown-1" data-hover="true" data-hover-pane="true">
  Just some junk that needs to be said. Or not. Your choice.
</fo-dropdown>

</div>
<div class="markdown-body">

---

## Positioning

By default, a dropdown anchors below the button that opened it. Add the class `.top`, `.right`, or `.bottom` to the dropdown to change this.

```html
<fo-button data-toggle="example-dropdown2">Top Aligned</fo-button>

<fo-dropdown class="top" id="example-dropdown2">
  Just some junk that needs to be said. Or not. Your choice.
</fo-dropdown>
```

</div>
<div class="example">

<fo-button data-toggle="example-dropdown2">Top Aligned</fo-button>

<fo-dropdown class="top" id="example-dropdown2">
  Just some junk that needs to be said. Or not. Your choice.
</fo-dropdown>

<fo-button data-toggle="example-dropdown3" style="float: right;">Left Aligned</fo-button>
<fo-dropdown class="left" id="example-dropdown3">
  Just some junk that needs to be said. Or not. Your choice.
</fo-dropdown>

<fo-button data-toggle="example-dropdown4">Right Aligned</fo-button>
<fo-dropdown class="right" id="example-dropdown4">
  Just some junk that needs to be said. Or not. Your choice.
</fo-dropdown>

</div>
<div class="markdown-body">

Adding `.float-right` or `.float-left` to the anchor will change the direction of the dropdown as well.

</div>
<div class="example clearfix">

<fo-button class="float-right" data-toggle="example-dropdown5">Bottom-right Aligned</fo-button>
<fo-dropdown class="bottom" id="example-dropdown5">
  Just some junk that needs to be said. Or not. Your choice.
</fo-dropdown>

<fo-button class="float-left" data-toggle="example-dropdown6">Bottom-left Aligned</fo-button>
<fo-dropdown class="bottom" id="example-dropdown6">
  Just some junk that needs to be said. Or not. Your choice.
</fo-dropdown>

</div>
<div class="markdown-body">


## Sass Reference

See the [Foundation documentation](http://foundation.zurb.com/sites/docs/dropdown.html#sass-reference) for a complete reference to the Sass variables and mixins available to customize this component.

## Component Reference

### \<fo-dropdown>

#### Props

|Property|Type|Required|Description
|---|---|---|---
|options|Object|No|A plain object with settings to override the default options. See the [Foundation documentation](http://foundation.zurb.com/sites/docs/dropdown.html#javascript-reference for a complete reference to the options available to customize this component.  <options-note/>
|value|Boolean|No|Indicates what the current state of the dropdown is, either `true` indicating open or `false` indicating closed.

#### Events

|Event|Description
|---|---
show| Fires once the dropdown is visible.
hide| Fires once the dropdown is no longer visible.
input| Fires when the dropdown is done opening or collapsing up.  The parameter will be `true` or `false` indicating which state the dropdown is now in.

#### Slots

|Slot|Required|Description
|---|---|---
default|No|Content to display in the dropdown.

#### Usage with v-model

If `v-model` is used on this component, the bound property will be set to the current state of the `<fo-dropdown>` (either `true` or `false`).  The property value can also be used to toggle the state of the `<fo-dropdown>`.

</div>

</template>

<script>
  import OptionsNote from './optionsNote';
  import FoButton from 'focomponents/FoButton';
  import FoDropdown from 'focomponents/FoDropdown';

  export default {
    components: {
      FoButton, FoDropdown, OptionsNote
    }
  };
</script>

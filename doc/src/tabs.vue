<template lang="md">

<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->

<div class="markdown-body">

# Tabs

Tabs are elements that help you organize and navigate multiple documents in a single container. They can be used for switching between items in the container.

## Basics

There are two pieces to a tabbed interface: the tabs themselves, and the content for each tab. The tabs are an `<fo-tabs>` component, and each item is a `<fo-tabs-title>` component. Each item has a reference to the tab content.  The `href` of each `<fo-tabs-title>` should match the ID of a tab.

```html
<fo-tabs id="example-tabs">
  <fo-tabs-title class="is-active" href="#panel1">
    Tab 1
  </fo-tabs-title>
  <fo-tabs-title href="#panel2">
    Tab 2
  </fo-tabs-title>
</fo-tabs>
```

The tab content container is an `<fo-tabs-content>` component, while each section is a `<fo-tabs-panel>` component. Each `<fo-tabs-panel>` also has a unique ID, which is targeted by the `href` in the `<fo-tabs-title>`.

```html
<fo-tabs-content>
  <fo-tabs-panel id="panel1">
    <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
  </fo-tabs-panel>
  <fo-tabs-panel id="panel2">
    <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
  </fo-tabs-panel>
</fo-tabs-content>
```

Put it all together, and we get this:

</div>

<div class="example">

<fo-tabs id="example-tabs">
  <fo-tabs-title class="is-active" href="#panel1">
    Tab 1
  </fo-tabs-title>

  <fo-tabs-title href="#panel2">
    Tab 2
  </fo-tabs-title>

  <fo-tabs-title href="#panel3">
    Tab 3
  </fo-tabs-title>

  <fo-tabs-title href="#panel4">
    Tab 4
  </fo-tabs-title>

  <fo-tabs-title href="#panel5">
    Tab 5
  </fo-tabs-title>

  <fo-tabs-title href="#panel6">
    Tab 6
  </fo-tabs-title>
</fo-tabs>

<fo-tabs-content id="example-tabs">
  <fo-tabs-panel id="panel1">
    <p>one</p>
    <p>Check me out! I'm a super cool Tab panel with text content!</p>
  </fo-tabs-panel>

  <fo-tabs-panel id="panel2">
    <p>two</p>
    <img class="thumbnail" src="http://foundation.zurb.com/sites/docs/assets/img/generic/rectangle-7.jpg">
  </fo-tabs-panel>
  <fo-tabs-panel id="panel3">
    <p>three</p>
    <p>Check me out! I'm a super cool Tab panel with text content!</p>
  </fo-tabs-panel>
  <fo-tabs-panel id="panel4">
    <p>four</p>
    <img class="thumbnail" src="http://foundation.zurb.com/sites/docs/assets/img/generic/rectangle-2.jpg">
  </fo-tabs-panel>
  <fo-tabs-panel id="panel5">
    <p>five</p>
    <p>Check me out! I'm a super cool Tab panel with text content!</p>
  </fo-tabs-panel>
  <fo-tabs-panel id="panel6">
    <p>six</p>
    <img class="thumbnail" src="http://foundation.zurb.com/sites/docs/assets/img/generic/rectangle-8.jpg">
  </fo-tabs-panel>
</fo-tabs-content>

</div>

<div class="markdown-body">

---

## Vertical Tabs

Add the `vertical="true"` property to a tabstrip to stack tabs vertically. You can also place the tabstrip and the tab contents in a grid to make them sit side-by-side.

```html
<div class="row collapse">
  <div class="medium-3 columns">
    <fo-tabs vertical="true" id="example-vert-tabs">
      <fo-tabs-title class="is-active" href="#panel1v">
        Tab 1
      </fo-tabs-title>

      <fo-tabs-title href="#panel2v">
        Tab 2
      </fo-tabs-title>

      <fo-tabs-title href="#panel3v">
        Tab 3
      </fo-tabs-title>

      <fo-tabs-title href="#panel4v">
        Tab 4
      </fo-tabs-title>

      <fo-tabs-title href="#panel5v">
        Tab 5
      </fo-tabs-title>

      <fo-tabs-title href="#panel6v">
        Tab 6
      </fo-tabs-title>
    </fo-tabs>

    <div class="medium-9 columns">
    <fo-tabs-content vertical="true" id="example-vert-tabs">
      <fo-tabs-panel id="panel1v">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </fo-tabs-panel>
      <fo-tabs-panel id="panel2v">
        <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
      </fo-tabs-panel>
      <fo-tabs-panel id="panel3v">
        <img class="thumbnail" src="http://foundation.zurb.com/sites/docs/assets/img/generic/rectangle-3.jpg">
      </fo-tabs-panel>
      <fo-tabs-panel id="panel4v">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </fo-tabs-panel>
      <fo-tabs-panel id="panel5v">
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </fo-tabs-panel>
      <fo-tabs-panel id="panel6v">
        <img class="thumbnail" src="http://foundation.zurb.com/sites/docs/assets/img/generic/rectangle-5.jpg">
      </fo-tabs-panel>
    </div>
  </div>
</div>
```
</div>

<div class="example">

<div class="row collapse">
<div class="medium-3 columns">

<fo-tabs vertical="true" id="example-vert-tabs">
  <fo-tabs-title class="is-active" href="#panel1v">
    Tab 1
  </fo-tabs-title>

  <fo-tabs-title href="#panel2v">
    Tab 2
  </fo-tabs-title>

  <fo-tabs-title href="#panel3v">
    Tab 3
  </fo-tabs-title>

  <fo-tabs-title href="#panel4v">
    Tab 4
  </fo-tabs-title>

  <fo-tabs-title href="#panel5v">
    Tab 5
  </fo-tabs-title>

  <fo-tabs-title href="#panel6v">
    Tab 6
  </fo-tabs-title>
</fo-tabs>
</div>

<div class="medium-9 columns">
<fo-tabs-content vertical="true" id="example-vert-tabs">
  <fo-tabs-panel id="panel1v">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </fo-tabs-panel>
  <fo-tabs-panel id="panel2v">
    <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
  </fo-tabs-panel>
  <fo-tabs-panel id="panel3v">
    <img class="thumbnail" src="http://foundation.zurb.com/sites/docs/assets/img/generic/rectangle-3.jpg">
  </fo-tabs-panel>
  <fo-tabs-panel id="panel4v">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </fo-tabs-panel>
  <fo-tabs-panel id="panel5v">
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </fo-tabs-panel>
  <fo-tabs-panel id="panel6v">
    <img class="thumbnail" src="http://foundation.zurb.com/sites/docs/assets/img/generic/rectangle-5.jpg">
  </fo-tabs-panel>
</fo-tabs-content>

</div>
</div>

</div>

<div class="markdown-body">

---

## Collapsing Tabs

Pass the `activeCollapse: true` property in the options object to a `<fo-tabs>` to collapse active tabs.

```html
<fo-tabs :options="{activeCollapse: true}" id="collapsing-tabs">
  <fo-tabs-title class="is-active" href="#panel1c">
    Tab 1
  </fo-tabs-title>
  <fo-tabs-title href="#panel2c">
    Tab 2
  </fo-tabs-title>
  <fo-tabs-title href="#panel3c">
    Tab 3
  </fo-tabs-title>
  <fo-tabs-title href="#panel4c">
    Tab 4
  </fo-tabs-title>
</fo-tabs>

<fo-tabs-content id="collapsing-tabs">
  <fo-tabs-panel class="is-active" id="panel1c">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </fo-tabs-panel>
  <fo-tabs-panel id="panel2c">
    <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
  </fo-tabs-panel>
  <fo-tabs-panel id="panel3c">
      <img class="thumbnail" src="http://foundation.zurb.com/sites/docs/assets/img/generic/rectangle-3.jpg">
  </fo-tabs-panel>
  <fo-tabs-panel id="panel4c">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </fo-tabs-panel>
</fo-tabs-content>
```
</div>

<div class="example">

<fo-tabs :options="{activeCollapse: true}" id="collapsing-tabs">
  <fo-tabs-title class="is-active" href="#panel1c">
    Tab 1
  </fo-tabs-title>
  <fo-tabs-title href="#panel2c">
    Tab 2
  </fo-tabs-title>
  <fo-tabs-title href="#panel3c">
    Tab 3
  </fo-tabs-title>
  <fo-tabs-title href="#panel4c">
    Tab 4
  </fo-tabs-title>
</fo-tabs>

<fo-tabs-content id="collapsing-tabs">
  <fo-tabs-panel class="is-active" id="panel1c">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </fo-tabs-panel>
  <fo-tabs-panel id="panel2c">
    <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
  </fo-tabs-panel>
  <fo-tabs-panel id="panel3c">
      <img class="thumbnail" src="http://foundation.zurb.com/sites/docs/assets/img/generic/rectangle-3.jpg">
  </fo-tabs-panel>
  <fo-tabs-panel id="panel4c">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </fo-tabs-panel>
</fo-tabs-content>

</div>

<div class="markdown-body">

---

## Tabs and URLs

### Browser history

When the `deepLink` option is set to `true`, the current state of the tabset is recorded by adding a hash with the tab panel ID to the browser URL when a tab opens. By default, tabs *replace* the browser history (using `history.replaceState()`). Modify this behavior by using attribute `updateHistory: true` to *append* to the browser history (using `history.pushState()`). In the latter case the browser back button will track each click that opens a tab panel.

By using deep linking (see below), the open state of a page's tabset may be shared by copy-pasting the browser URL.

### Deep linking

Add the option `deepLink: true` to a tabstrip to:
- modify the browser history when a tab is clicked
- allow users to open a particular tab at page load with a hash-appended URL

```html
<fo-tabs :options="{deepLink: true}" id="deeplinked-tabs">
  <fo-tabs-title class="is-active" href="#panel1d">
    Tab 1
  </fo-tabs-title>
  <fo-tabs-title href="#panel2d">
    Tab 2
  </fo-tabs-title>
  <fo-tabs-title href="#panel3d">
    Tab 3
  </fo-tabs-title>
  <fo-tabs-title href="#panel4d">
    Tab 4
  </fo-tabs-title>
</fo-tabs>

<fo-tabs-content id="deeplinked-tabs">
  <fo-tabs-panel class="is-active" id="panel1d">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </fo-tabs-panel>
  <fo-tabs-panel id="panel2d">
    <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
  </fo-tabs-panel>
  <fo-tabs-panel id="panel3d">
      <img class="thumbnail" src="http://foundation.zurb.com/sites/docs/assets/img/generic/rectangle-3.jpg">
  </fo-tabs-panel>
  <fo-tabs-panel id="panel4d">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </fo-tabs-panel>
</fo-tabs-content>
```
</div>

<div class="example">

<fo-tabs :options="{deepLink: true}" id="deeplinked-tabs">
  <fo-tabs-title class="is-active" href="#panel1d">
    Tab 1
  </fo-tabs-title>
  <fo-tabs-title href="#panel2d">
    Tab 2
  </fo-tabs-title>
  <fo-tabs-title href="#panel3d">
    Tab 3
  </fo-tabs-title>
  <fo-tabs-title href="#panel4d">
    Tab 4
  </fo-tabs-title>
</fo-tabs>

<fo-tabs-content id="deeplinked-tabs">
  <fo-tabs-panel class="is-active" id="panel1d">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </fo-tabs-panel>
  <fo-tabs-panel id="panel2d">
    <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
  </fo-tabs-panel>
  <fo-tabs-panel id="panel3d">
      <img class="thumbnail" src="http://foundation.zurb.com/sites/docs/assets/img/generic/rectangle-3.jpg">
  </fo-tabs-panel>
  <fo-tabs-panel id="panel4d">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </fo-tabs-panel>
</fo-tabs-content>

</div>

<div class="markdown-body">

For example, <a target="_blank" href="#panel3d">http://example.com/#panel3d</a> will open the third tab panel at page load. This example will open a new browser tab and scroll you to the open tab.

When linking directly to a tab panel, it might not be obvious that the content appears within a tab panel. An additional option `deepLinkSmudge` rolls the page up slightly after deep linking (to a horizontal tabset) so that the tabstrip is at the top of the viewport.

```html
<fo-tabs :options="{deepLink: true, deepLinkSmudge: true, deepLinkSmudgeDelay: 600}" id="deeplinked-tabs-with-smudge">
```

## Sass Reference

### Variables

See the [Foundation documentation](http://foundation.zurb.com/sites/docs/tabs.html#sass-reference) for a complete reference to the Sass variables available to customize this component.

## Component Reference

### \<fo-tabs>

#### Props

|Name|Type|Required|Description
|---|---|---|---
|options|Object|No|A plain object with settings to override the default options. See the [Foundation documentation](http://foundation.zurb.com/sites/docs/tabs.html#js-options) for a complete reference to the options available to customize this component. <options-note>
|value|String|No|The ID of the tab that is currently selected.
|vertical|Boolean|No|Indicates whether to stack the tabs vertically.  Defaults to `false`.


#### Events

|Name|Description
|---|---
input| Fires when the component has successfully changed tabs.  The parameter will be the ID of the newly selected tab.

#### Slots

|Name|Required|Description
|---|---|---
default|Yes|The `<fo-tabs-title>` components that represent the tab strip titles.

#### Usage with v-model

If `v-model` is used on this component, the bound property will be set to the `id` of the currently selected tab.  The property value can also be changed to the `id` of a particular tab to switch to that tab.


### \<fo-tabs-title>

#### Props

|Name|Type|Required|Description
|---|---|---|---
|href|String|Yes|The ID of the tabs panel; must match the `id` of the corresponding `<fo-tabs-panel>`.

#### Events

This component does not emit any events.

#### Slots

|Name|Required|Description
|---|---|---
default|No|The content that will display in the tabstrip.


### \<fo-tabs-content>

#### Props

|Name|Type|Required|Description
|---|---|---|---
|id|String|No|Specifying this ID allows you to have multiple tab containers on the page simultaneously.  If not specified, only 1 tabs container is allowed.
|vertical|Boolean|No|Indicates whether to stack the tabs vertically.  Defaults to `false`.

#### Events

This component does not emit any events.

#### Slots

|Name|Required|Description
|---|---|---
default|Yes|The `<fo-tabs-panel>` components that represent the content of each tab.


### \<fo-tabs-panel>

#### Props

|Name|Type|Required|Description
|---|---|---|---
|id|String|Yes|The ID of the tabs panel; must match the `href` of the corresponding `<fo-tabs-title>`.

#### Events

This component does not emit any events.

#### Slots

|Name|Required|Description
|---|---|---
default|No|The content that will display in the tab panel when it is open.


</div>

</template>

<script>
  import OptionsNote from './optionsNote';
  import FoTabs from 'focomponents/FoTabs';
  import FoTabsContent from 'focomponents/FoTabsContent';
  import FoTabsPanel from 'focomponents/FoTabsPanel';
  import FoTabsTitle from '../../components/FoTabsTitle';

  module.exports = {
    components: {
      OptionsNote,
      FoTabs, FoTabsContent, FoTabsPanel, FoTabsTitle
    }
  }
</script>

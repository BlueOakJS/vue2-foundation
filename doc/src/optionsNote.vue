<template lang="md">

<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->

<div class="note">

The names provided in the Foundation documentation may be used in the options object by removing the `data-` prefix, and translating the rest of the name to camel case.  For example, given the following Foundation option:

Name|Type|Default|Description
|---|---|---|---
data-foo-bar|number|250|Amount of foos per bar.

The corresponding property name would be `fooBar`, and could be used like this in an options object: `:options="{fooBar: 42}"`.

</div>

</template>


<style lang="scss">
  .note {
    border-color: #52E052;
    background: #E9FBE9;
    overflow: auto;
    padding: .5em;
    border-left-width: .5em;
    border-left-style: solid;
    margin: 1em 0;
    position: relative;
    clear: both;

    &:before {
      color: darken(#52E052, 20%);
      font-family: sans-serif;
      content: "Note";
      min-width: 7.5em;
      text-transform: uppercase;
      display: block;
    }
  }
</style>

<template>
<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->

  <div id="app">
    <fo-off-canvas revealBreakpoint="reveal-for-medium">
      <side-menu slot="menu" name="side-menu"></side-menu>>
      <router-view slot="content" name="content"></router-view>
    </fo-off-canvas>
  </div>
</template>

<script>
import 'highlight.js/styles/github.css';
import 'github-markdown-css';
import FoOffCanvas from '../../components/FoOffCanvas';
import SideMenu from './SideMenu';


export default {
  name: 'app',
  components: {
    FoOffCanvas, SideMenu
  }
};
</script>

<style>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 45px;
}

.example {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 20px 45px;

  &:before {
    color: #B9AB2D;
    font-family: sans-serif;
    content: "Example";
    min-width: 7.5em;
    text-transform: uppercase;
    display: block;
  }
}
</style>

<script setup lang="ts">
import FooBarFunction from "./components/FooBarFunction.ts";
import FooBarAnonymous from "./components/FooBarAnonymous.ts";
import FooBarDefine from "./components/FooBarDefine.ts";
</script>

<template>
  <FooBarFunction kind="function" :favourite-number="7" class="foo-bar" />

  <FooBarAnonymous
    kind="anonymous function"
    :favourite-number="7"
    class="foo-bar"
  />

  <FooBarDefine kind="define" :favourite-number="7" class="foo-bar" />
</template>

<style scoped>
.foo-bar {
  display: grid;
  max-width: max-content;
  padding: 1em;
  border: 1px solid black;
}
</style>

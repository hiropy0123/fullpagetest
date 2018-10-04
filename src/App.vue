<template>
  <div id="app">
    <div id="wrapper">
      <header id="header"></header>
      <main id="main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style src="fullpage.js/dist/fullpage.min.css"></style>

<style>
body, html {
  margin: 0;
  padding: 0;
}

.fp-tableCell {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
}
</style>

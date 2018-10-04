<template>
  <div class="home">
    <div>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">
          <button class="next" @click="$refs.fullpage.api.moveSectionDown()">Next</button>
          First section ...
        </div>
        <div class="section">
          <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">Prev</button>
          Second section ...
        </div>
        <div class="section">
          Third section ...
        </div>
      </full-page>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Fullpagetest',
    titleTemplate: null
  },
  components: {},
  data() {
    return {
      options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#38caca', '#ff5f45', '#0798ec'],
        controlArrows: true,
      },
    }
  },
  methods: {},
  mounted() {}
}
</script>


<style lang="scss" scoped>
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  width: 100%;
}

</style>

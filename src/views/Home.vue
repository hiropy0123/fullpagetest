<template>
  <div class="home">
    <div>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">
          <!-- <button class="next" @click="$refs.fullpage.api.moveSectionDown()">Next</button> -->
          First section ...
        </div>
        <div class="section">
          <div class="slide"> Slide 1 </div>
          <div class="slide"> Slide 2 </div>
          <div class="slide"> Slide 3 </div>
          <div class="slide"> Slide 4 </div>
        </div>
        <div class="section">
          <!-- <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">Prev</button> -->
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
import 'fullpage.js/dist/fullpage.extensions.min.js'
// https://github.com/alvarotrigo/fullPage.js/wiki/How-to-activate-a-fullPage.js-extension
// https://alvarotrigo.com/fullPage/extensions/scroll-horizontally.html#firstPage

export default {
  metaInfo: {
    title: 'Fullpagetest',
    titleTemplate: null
  },
  components: {},
  data() {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4'],
        sectionsColor: ['#38caca', '#ff5f45', '#0798ec', '#9728ec'],
        controlArrows: true,
        navigation: false,
        navigationPosition: 'right',
        autoScrolling: true,
        scrollHorizontally: true,
        scrollHorizontallyKey: '',
        continuousHorizontal: true,
        dragAndMove: true,
      },
    }
  },
  methods: {},
  mounted() {}
}
</script>


<style lang="scss" scoped>


</style>

<template>
  <div id='app'>
    <myHeader></myHeader>
    <transition name='page-fade' mode='out-in'>
      <router-view/>
    </transition>
  </div>
</template>

<script>
import myHeader from './components/myHeader'
import WebFont from 'webfontloader'

WebFont.load({
  custom: {
    families: [
      'Noto Sans Japanese'
    ],
    urls: [
      'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css'
    ]
  },
  loading: function () {
    console.log('loading')
  },
  active: function () {
    console.log('active')
  },
  inactive: function () {
    console.log('inactive')
  },
  fontloading: function (familyName, fvd) {
    console.log('fontloading', familyName, fvd)
  },
  fontactive: function (familyName, fvd) {
    console.log('fontactive', familyName, fvd)
  },
  fontinactive: function (familyName, fvd) {
    console.log('fontinactive', familyName, fvd)
  }
})

export default {
  name: 'App',
  components: {
    myHeader
  }
}
</script>

<style lang='scss'>
#app {
	font-family: 'Noto Sans Japanese';
}

body {
	margin: 0px;
}

.page-fade-enter-active,
.page-fade-leave-active {
	transition: opacity 0.3s ease;
}
.page-fade-enter,
.page-fade-leave-to {
	opacity: 0;
}
</style>

<template>
  <header>
    <div class = 'link'>
      <router-link to='/'>Top</router-link>
      <router-link to='/about'>About</router-link>
      <router-link to='/languages'>Languages</router-link>
      <router-link to='/frameworks'>Frameworks</router-link>
      <router-link to='/works'>Works</router-link>
      <router-link to='/contacts'>Contacts</router-link>
      <div class='clear'></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'myHeader',
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/_color.scss';

header {
	width: 100%;
	text-align: center;
	background-color: white;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
	position: relative;
	top: 0px;
	z-index: 10;
}

a {
	height: 60px;
	line-height: 60px;
	transition: all 0.3s;
	cursor: pointer;
	font-size: 18px;
	color: black;
	text-decoration: none;
	width: 150px;
	display: inline-block;

	&:hover {
		background-color: darken(white, 5%);
	}
}

.clear {
	clear: left;
}
/* タブレット */
@media (max-width: 1000px) {
	a {
		width: 30%;
		height: 60px;
		line-height: 60px;
	}
}

/* スマートフォン */
@media (max-width: 670px) {
	a {
		width: 40%;
		height: 35px;
		line-height: 35px;
	}
}
</style>

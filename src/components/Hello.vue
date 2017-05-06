<template>
  <div class="hello">
    <h1>{{ d.msg }}</h1>
    <p>{{ d.counter }}</p>
    <a href="#" @click.prevent="click">+</a>
  </div>
</template>

<script>
import HelloData from './HelloData.ts';

export default {
  name: 'hello',
  data() {
    return {
      d: new HelloData(),
    };
  },
  methods: {
    click() {
      this.d.increase();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

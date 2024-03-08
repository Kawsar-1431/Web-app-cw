<template>
    <div>
      <lesson></lesson>
      <checkout></checkout>
    </div>
  </template>
  
  <script>
  import Lesson from './Lesson.vue';
  import Checkout from './Checkout.vue';
  
  export default {
    components: {
      Lesson,
      Checkout
    }
  }
  </script>
  
  
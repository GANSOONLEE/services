<script setup>

defineProps({
  href: {
    type: String,
    default: '#'
  },
  icon: String,
  msg: String,
})

</script>

<template>

  <a :href="href">
    <div class="div_card">
    
      <i class="div_i" :class="icon"></i>

      <p class="div_p">{{ msg }}</p>

    </div>
  </a>

</template>

<style scoped>

  .div_card {
    background-color: #161616;
    aspect-ratio: 1 / 1;
    width: 200px;
    
    border: 1px solid #00000044;
    border-radius: 6px;

    padding: 1rem;
    display: grid;
    grid-template-rows: 5fr;
    justify-content: center;
    align-items: center;
    color: white;

    transition: all .14s ease-in-out;
    cursor: pointer;
  }

  .div_card:hover {
    box-shadow: 5px 5px 20px 1px #00000033;
    color: #545454;
  }

  .div_i {
    aspect-ratio: 1/1;
    font-size: 5rem;
  }

  .div_p {
    margin-block: 0;
    font-size: 1.2rem;
  }

</style>

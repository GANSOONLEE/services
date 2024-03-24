
<script setup>
  import ServiceContainer from '../components/ServiceContainer.vue'
</script>

<template>

  <section class="header_section">

    <h1 style="font-weight: bold">線上服務系統</h1>

    <div class="section_div">

      <h3 class="div_title">請選擇您要的服務</h3>

      <div class="div_div">

        <service-container msg="排程系統" icon="fa fa-calendar" href="#"></service-container>
  
        <service-container msg="記賬系統" icon="fa fa-money" href="#"></service-container>

      </div>

    </div>

  </section>


</template>


<style scoped>

  .header_section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .section_div {
    background-color: rgb(33, 33, 33);
    border-radius: 1rem;
    padding: 1rem 4rem 4rem;
  }

  .div_title {
    font-size: 2rem;
    color: #7a7a7a;
  }

  .div_div {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 3rem;
  }

</style>

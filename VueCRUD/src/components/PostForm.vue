<template>
   <form @submit.prevent>
      <input
       v-bind:value="title"
       @input="title = $event.target.value"
       class="input" 
       type="text" 
       placeholder="Nazvanie">
      <input 
       v-bind:value="body"
       @input="body = $event.target.value"
        class="input"
         type="text" 
         placeholder="Opisania">
      <button 
      class="btn"
       @click="createPost">Create</button>
    </form>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
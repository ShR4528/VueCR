<template>
   <input
   
    @input="updateInput" 
    class="input" 
    type="text"> 
</template>

<script>
export default {
    name: 'my-input',
    props: {
        value: [String, Number],
       
    },
    methods: {
        updateInput(event) {
          this.$emit('update: modelValue', event.target.value)
        
        }
    },
    }
</script>

<style scoped>
.input {
  width: 100%;
  border: 3px solid rgb(81, 81, 16);
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
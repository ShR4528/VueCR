<template>
    <button class="btn">
    <slot></slot>
 </button>


</template>

<script>
export default {
    name:'my-button'
       
    }
</script>

<style scoped>
.btn {
  display: flex;
  margin-top: 10px;
  padding: 10px 15px;
  background-color: none;
  align-self: flex-end;
  
  color: rgb(12, 226, 226);
  border:  2px solid rgb(8, 18, 10);
}
</style>
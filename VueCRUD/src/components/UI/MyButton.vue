<template>
    <button class="btn">
    <slot></slot>

    </button>


</template>

<script>
export default {
      name: 'my-button',
       
    }
</script>

<style scoped>
.btn {
  margin-top: 20px;
  align-self: flex-end;
  padding: 10px 15px;
  background-color: none;
  color: rgb(12, 226, 226);
  border:  2px solid teal;
}
</style>
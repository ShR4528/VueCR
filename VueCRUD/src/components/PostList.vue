<template>
    <div class="post" v-for="post in posts">
    <div><strong>Name:</strong>{{ post.title}}</div>
    <div><strong>Description:</strong>{{ post.body}}</div>
  </div>

</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.post {
  padding: 15px;
  border: 3px solid rgb(81, 81, 16);
  margin-top: 15px;
}
</style>
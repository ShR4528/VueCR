<template>
<div class="post">
  <div>
    <div> {{ post.id }}  </div>
    <div><strong>Title: </strong> {{ post.title }}</div> 
    <div><strong>Description: </strong> {{ post.body }}</div>
  </div> 
  <div class="post__btns">
  <my-button
  @click="$router.push('/posts/${post.id}')" 
  >Open 
</my-button>
  </div>
</div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>
.post {
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
display: flex;
}


</style>






















<!-- <template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Н:</strong> {{ post.title }}</div>
      <div><strong>О:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      
      <my-button
        @click="$router.push(`/posts/${post.id}`)"
      >
        Открыть
      </my-button>
     <my-button
       @click="$emit('remove', post)"
     >
       Delete
     </my-button>
    </div>
  </div>
</template>

<script>
export default {
props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid rgb(20, 192, 28);
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
  display: flex;
}
</style>
     -->
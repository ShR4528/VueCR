<template>
  <div v-if="posts.length > 0">
    <h3>List of users</h3>
    <post-item 
     v-for="post in posts" 
     :post="post"
     :key="post.id"
     @remove="$emit('remove', post)"
     />
</div>
<h2 v-else style="color: brown" >
  User List is Empty
</h2>
</template>

<script>
import PostItem from '../components/PostItem.vue'
export default {
  components: {PostItem},
   props: {
    posts: {
      type: Array,
      required: true
    }
   } 
  }
</script>

<style scoped>


</style>

























<!-- <template>
   <div  class="posts">
   <h3>Spisok </h3> -->
    <!-- <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
     />
   </div>
   <h2 style="color: red">
    Список пользователей пуст
  </h2>
</template>

<script>
import PostItem from  "@/components/PostItem.vue";
export default {
 components: {PostItem},
    props: {
        posts: {
            type: Array,
            required: true,
        }
    } 
} 
 -->

<!-- </script>

<style scoped>

</style> -->
<template>
  <div v-if="posts && posts.length > 0">
    <h3>List users</h3>
    <transition-group name="user-list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: red">
    List of users is empty
  </h2>
</template>

<script>
import PostItem from "../components/PostItem.vue";
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
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform 0.4s ease;
}

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
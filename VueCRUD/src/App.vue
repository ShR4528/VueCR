<template>
 <div class="app">
  <h1>Page with Post</h1>
  <my-button></my-button>
   <post-form 
   @create="createPost"
   />
   <post-list :post="posts"
  />
    
 </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
export default {
  components: {
        PostForm, PostList
      },
data() {
    return {
     posts: [
     {id: 1, title: ' JavaScript ', body: ' Opisanie '},
     {id: 2, title: ' JavaScript ', body: ' Opisanie 2 '},
     {id: 3, title: ' JavaScript ', body: '  Opisanie 3 '}
     ],
    }
  },
methods: {
  createPost(post) {
  this.posts.push(post);
  },
}
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>

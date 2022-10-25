<template>
   <form @submit.prevent>
      <my-input
       v-model="post.title"
       
       type="text" 
       placeholder="Nazvanie"/>


      <my-input 
        v-model="post.body"
         type="text" 
         placeholder="Opisania"/>

      <my-button 
      style="aligh-self: flex-end"
       @click="createPost">
       Create
       </my-button>
    </form> 
</template>

<script>
export default {
   data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
    
    this.post.id = Date.now(),
    this.$emit('create', this.post, 'second param', '3 param')
    this.title = '';
    this.body = '';
        }
    },
}
</script>

<style  scoped>
.form {
  display: flex;
  flex-direction: column;
}

</style>
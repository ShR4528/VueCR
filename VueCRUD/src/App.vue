<template>
 <div class="app">
   <h4>Header</h4>
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
 </div>
</template>

<script>

export default {
  data() {
    return {
     posts: [
     {id: 1, title: ' JavaScript ', body: ' Opisanie '},
     {id: 2, title: ' JavaScript ', body: ' Opisanie 2 '},
     {id: 3, title: ' JavaScript ', body: '  Opisanie 3 '}
     ],
     title: '',
     body: '',
    }
  },
methods: {
  createPost(event) {
  const newPost = {
    id: Date.now(),
    title: this.title,
    body: this.body,
  }
  this.posts.push(newPost);
  this.title = '';
  this.body = '';
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

.post {
  padding: 15px;
  border: 3px solid rgb(81, 81, 16);
  margin-top: 15px;
}
.form {
  display: flex;
  flex-direction: column;
}
.input {
  width: 100%;
  border: 3px solid rgb(81, 81, 16);
  padding: 10px 15px;
  margin-top: 15px;
}
.btn {
  margin-top: 20px;
  align-self: flex-end;
  padding: 10px 15px;
  background-color: none;
  color: teal;
  border:  2px solid teal;

}

</style>

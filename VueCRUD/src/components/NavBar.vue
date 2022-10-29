<template>
    <div class="navbar">
        <div @click="$router.push('/')">Vue £</div>
        <div class="navbar__btns">
            <my-button style='margin-left:20px;' @click="$router.push('/posts')">Posts</my-button>
            <my-button style='margin-left:20px;' @click="$router.push('/about')">About</my-button>
            <my-button style='margin-left:20px;' @click="$router.push('/store')">store</my-button>
            <my-button style='margin-left:20px;' @click="$router.push('/composition')">Composition</my-button>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style>
.navbar {
  display: flex;
  align-self: center;
  background-color: rgb(104, 13, 13);
  box-shadow: 2px 2px 4px gray;
  padding: 0 15px;
}
.navbar__btns {

  margin-left: auto;
  display: flex;
}

</style>
<template>
  <div class="comment">
    <h4>{{ comment.author }} - <span>{{ (new Date(comment.created_at)).toLocaleString() }}</span></h4>
    <p>{{ comment.message }}</p>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: [
    'comment'
  ]
}
</script>

<style scoped>
.comment {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: solid 1px darkgrey;
}

.comment h4 {
  margin-bottom: 1.3rem;
}

.comment h4 > span {
  color: darkgrey;
  float: right;
}

.comment h4 > span:after {
  content: '';
  display: block;
  width: 100%;
  height: 0;
  clear: both;
}
</style>

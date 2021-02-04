export const state = () => ({
  post: null,
  comments: []
})

export const mutations = {
  setPost(state, post) {
    state.post = post;
  },
  setComments(state, comments) {
    state.comments = comments;
  }
}

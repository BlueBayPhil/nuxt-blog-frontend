export const state = () => ({
  comments: [],
  mastheadImage: "https://source.unsplash.com/1600x300?beach,holiday",
})

export const mutations = {
  setComments(state, comments) {
    state.comments = comments;
  },
  setMastHeadImage(state, image) {
    state.mastheadImage = image;
  }
}

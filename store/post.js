export const state = () => ({
  title: '',
  description: '',
  content: '',
  author: '',
  created_at: null,
  updated_at: null,
  published_at: null,
  image: '',
});

export const mutations = {
  set(state, obj) {
    state.title = obj.title;
    state.description = obj.description;
    state.content = obj.content;
    state.author = obj.author;
    state.created_at = obj.created_at;
    state.updated_at = obj.updated_at;
    state.published_at = obj.published_at;
    state.image = obj.image;
  },
  title(state, text) {
    state.title = text;
  },
  description(state, text) {
    state.description = text;
  },
  content(state, text) {
    state.content = text;
  },
  author(state, text) {
    state.author = text;
  },
  created_at(state, text) {
    state.created_at = text;
  },
  updated_at(state, text) {
    state.updated_at = text;
  },
  published_at(state, text) {
    state.published_at = text;
  },
  image(state, text) {
    state.image = text;
  },
  blank(state) {
    state.title = '';
    state.description = '';
    state.content = '';
    state.author = '';
    state.created_at = '';
    state.updated_at = '';
    state.published_at = '';
    state.posting = false;
    state.image = '';
  }
}

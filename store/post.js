export const state = () => ({
  title: '',
  description: '',
  content: '',
  author: '',
  created_at: null,
  updated_at: null,
  published_at: null,
  posting: false
});

export const mutations = {
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
  posting(state) {
    state.posting = !state.posting;
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
  }
}

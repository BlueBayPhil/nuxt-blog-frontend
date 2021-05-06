<template>
  <div class="image-uploader">
    <div class="preview-image-container" @click="showFileSelector">
      <div class="preview-image" v-if="imageSelected" v-bind:style="{backgroundImage: 'url(' + imagePath + ')'}"></div>
      <div class="preview-image-text" v-else>
        Click to select image.
      </div>
    </div>
    <input type="file" @change="handleFileChange" style="display:none;" :name="name" ref="fileInput" accept="image/*">
  </div>
</template>

<script>
export default {
  name: "ImageUploader",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      imageSelected: false,
      imagePath: ""
    };
  },
  computed: {
    image: {
      get() {
        return this.$store.state.post.image;
      },
      set(value) {
        this.$store.commit("post/image", value);
      }
    }
  },

  methods: {
    handleFileChange() {
      this.image = this.$refs.fileInput.files[0];
      this.imagePath = "'" + URL.createObjectURL(this.image) + "'";
      this.imageSelected = true;
    },
    showFileSelector() {
      this.$refs.fileInput.click();
    }
  }
}
</script>

<style scoped>
.image-uploader {
  border: solid 1px lightgrey;
  padding: 0.125rem;
  background-color: white;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.preview-image-container {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: lightgrey;
  align-items: center;
  justify-content: center;
}

.preview-image {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  display: block;
  width: 100%;
  height: 100%;
  padding: 8rem 0;
}
.preview-image-text {
  padding: 8rem 0;
}
</style>

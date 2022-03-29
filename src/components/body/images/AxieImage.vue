<template>
    <!-- <div> -->
        <img alt="Axie" :src="imageSrc">
    <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent} from 'vue';
export default defineComponent({
  name: 'AxieImage',
  props: {
      imageSrc: {type: String, required: true}
  },
});
</script>


<style scoped>
    div {
        height: inherit;
        width: inherit;
    }
    img {
        height: 72%;
        width: 100%;
    }
</style>
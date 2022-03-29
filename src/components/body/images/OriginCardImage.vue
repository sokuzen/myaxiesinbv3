<template>
    <img :alt="`V3 ${axiePart.type}`" :src="imageSrc"/>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import { ImageHelper } from '@/helpers/ImageHelper'
import { AxiePart } from '@/interfaces';

export default defineComponent({
  name: 'OriginCardImage',
  props: {
      axiePart: {type: Object as PropType<AxiePart>, required: true }
  },
  setup(props) {
      console.log(props.axiePart);
      const imageSrc = ref<string>(ImageHelper.getOriginImagePath(props.axiePart));
      console.log(imageSrc.value);
      return {
        imageSrc,
      }
  }
});
</script>

<style scoped>
    img {
        height: 21rem;
        width: 18rem;
    }
</style>
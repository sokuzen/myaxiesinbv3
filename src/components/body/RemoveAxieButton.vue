<template>
<input type="button" value="Remove Axie" @click="removeAxie()"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RemoveAxieButton',
  emits: ["click"],
  setup(props, { emit }) {

      const removeAxie = () => {
          emit("click");
      }

      return {
          removeAxie
      }
  }
});
</script>
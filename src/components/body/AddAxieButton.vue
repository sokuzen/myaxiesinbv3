<template>
    <input type="button" value="Find My Axie" @click="addAxie()"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddAxieButton',
  emits: ["click"],
  setup(props, { emit }) {

      const addAxie = () => {
          emit("click");
      }

      return {
          addAxie
      }
  }
});
</script>
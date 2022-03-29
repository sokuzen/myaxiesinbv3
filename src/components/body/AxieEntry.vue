<template>
<div class="wrapper">
    <div class="row">

      <div class="info cell">
        <div class="center">
          <h2>Axie # {{axie.id}}</h2> 
          <remove-axie-button @click="removeAxie()"/>
        </div>
      </div>
      <div class="axie-pic cell">
        <axie-image class="center" :imageSrc="axie.image"/>
      </div>

      <div class="current-cards">
        <div class="label">Classic Cards</div>
        <current-card-image v-for="part in filterNoAbilities" :key="'current-' + part.id" :part="part"/>
      </div>
    </div>

    <div class="row">      
      <div class="origin-cards">
        <div class="label">Origin/Battles V3 Cards</div>
        <origin-card-image v-for="part in axie.parts" :key="'origin-' + part.id" :axiePart="part"/>
      </div>
    </div>

    <div class="row">
      
    </div>
</div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { Axie, AxiePart } from '@/interfaces';
import AxieImage from './images/AxieImage.vue';
import CurrentCardImage from './images/CurrentCardImage.vue';
import OriginCardImage from './images/OriginCardImage.vue';
import RemoveAxieButton from './RemoveAxieButton.vue';

export default defineComponent({
  name: 'AxieEntry',
  components: {
    AxieImage,
    CurrentCardImage,
    OriginCardImage,
    RemoveAxieButton
  },
  props: {
      axie: {type: Object as PropType<Axie>, required: true},
  },
  emits: ["remove"],
  setup(props, { emit }) {
      const removeAxie = () => {
          emit("remove", props.axie.id);
      }

      const filterNoAbilities = computed((): AxiePart[] => {
        return props.axie.parts.filter(part => part.abilities.length > 0)
      });

      return {
        filterNoAbilities,
        removeAxie,
      }
  }
});
</script>

<style scoped>
div {
  margin: 1rem
}

div.wrapper {
  background:aliceblue;
}

div.cell {
  width: 15%;
}

div.info {
  margin-left: 5rem;
  position: relative;
}

div.axie-pic {
  margin: 0;
  position: relative;
}

div.current-cards {
  position: relative;
  border: 1px solid green;
  width: 61%;
}

div.current-cards .label {
  color: black;
  position: absolute;
  top: -9%;
  background: aliceblue;
  left: 50%;
}

div.origin-cards {
  position: relative;
  border: 1px solid green;
  width: 100%;
  height: 110%;
}

div.origin-cards .label {
  color: black;
  position: absolute;
  top: -9%;
  background: aliceblue;
  left: 43%;
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
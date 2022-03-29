<template>
  <div class="relative">
    <img :src="ability.backgroundUrl"/>
    <div class="energy-count">{{ability.energy}}</div>
    <div class="name">{{ability.name}}</div>
    <div class="attack-holder">
      <div class="icon-wrapper">
        <img :src="require(`@/assets/bg-icons/bg-${part.class.toLowerCase()}.png`)" />
        <div class="img-wrapper">
          <img :src="require(`@/assets/bg-icons/icon-atk.png`)" />
        </div>
        <div class="txt-wrapper">{{ability.attack}}</div>
      </div>
    </div>
    <div class="defense-holder" >
      <div class="icon-wrapper">
        <img :src="require(`@/assets/bg-icons/bg-${part.class.toLowerCase()}.png`)" />
        <div class="img-wrapper">
          <img :src="require(`@/assets/bg-icons/icon-def.png`)" />
        </div>
        <div class="txt-wrapper">{{ability.defense}}</div>
      </div>
    </div>
    <div class="description">{{ability.description}}</div>
  </div>

  
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { AxieCardAbility, AxiePart } from '@/interfaces';
export default defineComponent({
  name: 'CurrentCardImage',
  props: {
      part: {type: Object as PropType<AxiePart>, required: true}
  },
  setup(props) {
      const ability = computed((): AxieCardAbility => {
        return props.part.abilities[0];
      });

      return {
        ability,
      }
  }
});
</script>

<style scoped>
    div.relative {
      color:white;
      position: relative;
      height: 19rem;
      width: 15rem;
      float: left;
    }
    div.energy-count {
      position: absolute;
      top: 2%; 
      left: 3%; 
      width: 22%; 
      height: 16%; 
      -webkit-text-stroke: 1px rgb(125, 69, 27); 
      font-size: 35.5px;
    }
    div.name {
      color:black;
      position: absolute;
      top: 7.5%;
      left: 23%;
      width: 59%;
      height: 10%;
      font-size: 12.7128px;
    }
    div.description {
      position: absolute;
      top: 75%;
      left: 22%;
      height: 28%;
      font-size: 10.1702px;
      width: 59%;
      color: rgb(204, 204, 204);
    }
    div.icon-wrapper {
      position: absolute;
      top: 50%; 
      left: 50%; 
      transform: translate(-50%, -50%)
    }
    div.img-wrapper {
      position: absolute;
      top: 50%; 
      left: 50%; 
      transform: translate(-50%, -50%)
    }
    div.txt-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-shadow: rgb(2, 89, 89) -2px 0px, rgb(2, 89, 89) 0px 2px,
        rgb(2, 89, 89) 2px 0px, rgb(2, 89, 89) 0px -2px;
      font-size: 20.5128px;
    }
    div.attack-holder {
      position: absolute;
      top: 33%;
      left: 16%;
    }
    div.defense-holder {
      position: absolute;
      top: 61%;
      left: 16%;
    }
    img {
      width: inherit;
      height: inherit;
    }
</style>

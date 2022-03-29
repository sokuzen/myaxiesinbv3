<template>
<div class="input-wrapper">
    <input type="number" id="find-text" v-model="axieId"/>
    <add-axie-button @click="addEntry()"/>
</div>
<axie-entry v-for="axie in axies" :key="axie.id" :axie="axie"
    @remove="removeEntry"/>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable'
import { Axie } from '@/interfaces';
import AddAxieButton from './body/AddAxieButton.vue';
import AxieEntry from './body/AxieEntry.vue';
import { GET_AXIE_DETAIL } from '@/graphql/document'

export default defineComponent({
  name: 'AppBody',
  components: {
    AddAxieButton,
    AxieEntry
  },
  setup() {
      const axieId = ref<string>('123456');
      const axies = ref<Axie[]>([]);   
      const axieToAdd = reactive({
          axieId: ''
      })   
      
      const { result } = useQuery<{
        axie: Axie;
      }>(GET_AXIE_DETAIL, axieToAdd);

      const axieResult = useResult(
        result,
        [],
        data => data.axie && data.axie.id
      );

      const removeEntry = (id: string) => {
          axies.value = axies.value.filter(entry => entry.id !== id);
      };

      watch(result, () => {
        console.log(result.value);
        if (result.value && result.value.axie
            && !axies.value.find(a => a.id === result.value?.axie.id)) {
            axies.value.push(result.value.axie);
            axieToAdd.axieId = '';
        }
        
      });

      const addEntry = () => {
        // console.log(axieId.value);
        axieToAdd.axieId = axieId.value;
        //TODO add error handlings
        //no less than 1
        //no already existing

        //push to axieEntries ref
        console.log(axieToAdd.axieId);
        

        // axieToAdd.axieId = '';
      };

      return {
          axieId,
          axies,
          addEntry,
          removeEntry
      }
  }
});
</script>

<style scoped>
div.input-wrapper {
    margin: 1rem;
}
div.input-wrapper input {
    margin-right: 1rem;
}
</style>
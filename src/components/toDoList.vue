<template>
  <div id = "app" class="q-pa-md">
    <div class = "fit row inline wrap justify-center items-start content-start">
        <div style="margin-right:15px" class = "item">
            <q-input  outlined v-model="text" type="text" label="Task"/>
        </div>
        <div style="padding-top: 10px" class = "item">
            <q-btn @click="addTodo" color="black" label="Add"/>
        </div>
    </div>
      <ul class="justify-center items-start content-start">
          <li id ="list"style="list-style: none;" v-for="(value,index) in toDos">
              <div id="block" class="fit row inline wrap justify-center ">
                  <q-checkbox style="padding-bottom:25px " size="md" v-model="value.checkbox"/>
                  <q-input style="margin-bottom: 20px"type="text" v-model="value.task" filled   ></q-input>
                  <q-btn style="margin-top:10px; margin-left: 5px; max-height: 35px; max-width: 35px"
                         color="red" icon="delete" v-on:click="toDos.splice(index,1)"/>
              </div>
          </li>
      </ul>
  </div>
</template>
<style>
    .item{
        display:inline-block;
        float: left;
    }
    #list{
        padding-right: 117px;
    }
</style>

<script>
  import { QInput, QBtn, QField, QCheckbox } from 'quasar'

export default {
  components: { QInput, QBtn, QField,QCheckbox },
  name: 'HelloWorld',
  data () {
      return {
          text: '',
          toDos: [],
          val: [],
      };
  },
    methods: {
        getTodos() {
            this.toDos = this.$store.getters.getTasks;
        },
        addTodo() {
            this.getTodos();
            if (this.text != "") {
                this.$store.dispatch('setTask', {
                    checkbox : false,
                    task : this.text
                    });
                this.text = "";
            }
        },
    }
}
</script>

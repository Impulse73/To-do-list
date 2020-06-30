<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-toolbar-title>
         To-Do List
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <toDoList />
    </q-page-container>
  </q-layout>
</template>

<script>
import toDoList from './components/toDoList.vue'

export default {
  name: 'LayoutDefault',

  components: {
    toDoList
  },

  data () {
    return {

    }
  }
}
</script>

<style>
</style>

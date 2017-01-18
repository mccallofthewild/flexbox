<template>

  <div class="page-container container" id="flexbox">
    <div class="box-container">
      <div class="elevated-box 
                  center-align
                  control-panel">
        <h3>Welcome to FlexBox</h3>
        <div class="">
          <div class="button-container">

            <a class="btn-floating 
                  waves-effect 
                  waves-light 
                  btn-custom" 
                @click="addItem()">
              <i class="material-icons">add</i>
            </a>
            <a class="btn-floating 
                  waves-effect 
                  waves-light 
                  btn-custom" 
                @click="removeItem()">
              <i class="material-icons">remove</i>
            </a>
          </div>
        </div>
        <div class="flex-controls">
          <div class="row">
            <div class="col s6">
              <custom-select v-model="selectedProp">
                <label slot="label" class="default">Flex Property</label>
                <option slot="options" v-for="(flexProp, propName) in flexProps">{{propName}}</option>
              </custom-select>
            </div>
            <div class="col s6">
                <custom-select v-model="flexProps[selectedProp].selection">
                  <label slot="label" class="default">Value</label>
                  <option slot="options" v-for="val in flexProps[selectedProp].values">{{val}}</option>
                </custom-select>
            </div>
          </div>
          </div>
      </div>
    </div>
    <div class="box-container">
      <div 
      class="flex-box"
      :style="flexBoxStyles"
      >
        <div 
            v-for="(item, index) in items" 
            class="flex-item animated fadeInLeft" 
            :class="['flex-item-'+index]"
            >
          .flex-item-{{index}}
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
    import vData from "./data"
    import vReady from "./ready"
    import vMethods from "./methods"
    import vComputed from "./computed"
    import customSelect from "../custom/inputs/Select.vue"
    export default {
        name:"flexbox",
        data() {
            return vData
        },
        components:{
          "custom-select":customSelect

        },
        methods: vMethods,
        computed: vComputed,
        ready: vReady
    }
</script>

<style lang="scss">
@import "./style";
</style>
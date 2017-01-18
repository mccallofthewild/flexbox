<template>
            <div class="input-field" id="custom-select">
            <slot name="label"></slot>
              <div class="select-wrapper">
                <select
                @change="updateValue($event.target.value)"
                >
                    <slot name="options"></slot>
                </select>
              </div>
            </div>
</template>

<script>
export default {
    name:"custom-select",
    props:["value", "key"],
    methods:{
        updateValue(value){
            this.$emit('input', value)
        }
    },
    watch:{
        
    },
    mounted(){
    }
}
</script>

<style lang="scss">

select{
  border:none;
  &:focus{
    outline:none;
  }
}

.select-wrapper{
    background: white;
    border: 2px solid white;
    border-radius: 0px;
    box-shadow: 0px 0px 4px rgba(0,0,0,0.2);
}

</style>


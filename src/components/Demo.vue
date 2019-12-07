<template>
    <div>

        <div style="display:inline-block;">
            <dr-check-combobox  style="width:120px" ref="chkCombo1" :datas="datas" v-model="selectedValue" title="체크콤보">                            
            </dr-check-combobox>
            <button @click="onClickSelectedValue">change Selected</button>
        </div>
        <div>
            <span>{{selectedText}}</span>
        </div>

    </div>
    
</template>

<script>

import DrCheckCombobox from "./DrCheckCombobox"

export default {
    data(){
        return{
            datas:[],
            selectedValue:[],
        }
    },
    computed:{
        selectedText(){
            return this.selectedValue.join(" , ");
        }
    },
    components:{
        DrCheckCombobox
    },
    mounted(){
        this.datas = [
            {columnValue:'1',columnName:'test_1'},
            {columnValue:'2',columnName:'test_2'},
            {columnValue:'3',columnName:'test_3'},
            {columnValue:'4',columnName:'test_4'}
        ];

        this.$nextTick(()=>{
            this.selectedValue = [1,3];
        })
    },
    methods:{
        onClickSelectedValue(){
            this.selectedValue = [3,4];
        }
    }
}
</script>

<style>

</style>

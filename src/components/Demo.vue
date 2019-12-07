<template>
    <div>
        
        <!--
        <dr-check-combobox  style="width:120px" ref="chkCombo2" :datas="datas" v-model="selectedValue2" title="체크콤보">                            
        </dr-check-combobox>
        -->
        <div style="display:inline-block;">
            <dr-check-combobox  style="width:120px" ref="chkCombo1" :datas="datas" v-model="selectedValue1" title="체크콤보">                            
            </dr-check-combobox>
            <button @click="onClickSelectedValue">change Selected</button>
        </div>
        <div>
            <span>{{selectedText1}}</span>
            <span>{{selectedText2}}</span> 
        </div>

    </div>
    
</template>

<script>

import DrCheckCombobox from "./DrCheckCombobox"

export default {
    data(){
        return{
            datas:[],
            selectedValue1:[],
            selectedValue2:[],
        }
    },
    computed:{
        selectedText1(){
            return this.selectedValue1.join(" , ");
        },
        selectedText2(){
            return this.selectedValue2.join(" , ");
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
            this.selectedValue1 = [1,3];
        })
    },
    methods:{
        onClickSelectedValue(){
            this.selectedValue1 = [3,4];
        }
    }

    
}
</script>

<style>

</style>

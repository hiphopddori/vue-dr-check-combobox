<template>
    <div>
        <dr-check-combobox ref="chkCombo" :datas="datas" :selectValue="selectedValue" title="체크콤보">                            
        </dr-check-combobox>

    </div>
</template>

<script>

import DrCheckCombobox from "./DrCheckCombobox"

export default {
    data(){
        return{
            datas:[],
            selectedValue:[]
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
    }
    
}
</script>

<style>

</style>

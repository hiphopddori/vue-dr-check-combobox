<template>
    <div class="mu-selectbox mu-multibox" v-bind:class="{on:isPop , disabled:isDisabled}"  v-on:mouseleave="onMouseLeave" >
        <button class="mu-value" @click="onClickPopItemList">{{title}}</button>
        <ul class="mu-list">
           
            <div class="mu-checkbox">
                <input type="checkbox" v-bind:id="checkAllId" v-model="isCheckAll" @click="onClickItem(null)" >
                <label v-bind:for="checkAllId">{{allLabelName}}</label>
            </div>                
        
            <li v-for="data in checkComboDatas" v-bind:key="data[valueName]">                
                <div class="mu-checkbox">
					<input type="checkbox" v-bind:id="data.id" v-bind:value="data[valueName]"  v-model="selectedItem" @change="onChangeItem()">
					<label v-bind:for="data.id">{{data[labelName]}}</label>
				</div> 
            </li>

        </ul>
    </div>
</template>
<script>

import util from "../util/util";

export default {
    props:{
        datas:{
            type:Array,
            default:null
        },
        title:{
            type:String,
        },                      
        allLabelName:{              //전체 포함일시 label Name
            type:String,
            default:'전체'
        },
        labelName:{                 //combobox에 보여질 object json key name
            type:String,
            default:'columnName'
        },
        valueName:{                  //combobox에 code(value)성 object json key name
            type:String,
            default:'columnValue'
        },
        isDisabled:{
            type:Boolean,
            default:false
        },selectValue:{
            type:Array,
            default:null
        }
    },
    model: {
        prop: 'selectValue',
        //event: 'change'
    },
    
    data(){
        return{            
            //isCheckAll:true,
            checkAllId:'',
            checkComboDatas:null,
            selectedItem:[],
            isPop:false
        }
    },
    computed: {
       isCheckAll:{
           get:function(){
               let allChk = false;
               if (this.checkComboDatas && this.selectedItem){
                   if (this.checkComboDatas.length == this.selectedItem.length){
                       allChk = true;
                   }
               }
               return allChk;
           },
           set:function(allChecked){
               
               let selectedItem = [];
               if (allChecked){                    
                    let vi = this;
                    this._.map(this.checkComboDatas,(info) =>{                    
                        if (allChecked){
                            selectedItem.push(info[vi.valueName]);
                        }                   
                    });                
               }
               this.selectedItem = selectedItem;
               this.onChangeItem();
           }
       }
    },
    created() {
        this.checkAllId =  util.getRandomId("0");
    },
    mounted() {        
    },
    methods: {
        onMouseLeave(){
            this.isPop = false;
        },
        onClickPopItemList(){
            this.isPop = !this.isPop;
        },                                         
        onChangeItem(){                            
            //this.$emit("onChange",item);       
            this.$emit('input',this.selectedItem);
        },
        getSelectedItem(){
            //선택된 실제 ITEM을 넘긴다.
            //return this.selectedItem;  
        }
    },
    watch:{
        datas:{
            //immediate: true,
            handler(value){                
                let vi = this;
                let selctedValue = [];

                this.checkComboDatas = JSON.parse(JSON.stringify(value));
                //this.checkComboDatas = value;

                 this._.map(this.checkComboDatas,(info) =>{
                    info.id = util.getRandomId(info[vi.valueName]);                    
                    /* 추후 데이타 selected 속성 추가 할경우 아래 풀자
                    if (info.hasOwnProperty("selected")){                                                                        
                        if (info.selected){
                            selctedValue.push(info[vi.valueName]);
                        }                        
                    }
                    */
                    selctedValue.push(info[vi.valueName]);
                });       
                this.selectedItem = selctedValue;
                this.onChangeItem();
            }
        },
        selectValue:{
            immediate: true,  
            handler(value){                                
                if (JSON.stringify(value) != JSON.stringify(this.selectedItem)){
                    this.selectedItem = value;
                }
            }   
        }
    }

}
</script>

<style>

</style>

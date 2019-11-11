/* 비지니스 로직과 상관없는 util
*/
const util = {
    /* remark : 데이타 null 일경우 처리
       param  : data -> 비교값
                replace(optional) -> null일경우 대체할 값
    */
    null2Str:(data,replace)=>{
        if (data == null){        
            if (replace === undefined){
                return "";
            }else{
                return replace;
            }			
        }else{
            return data.toString();
        }
    },
    /* remark : Object get key value
       param  : data -> Object       
                key -> Object Key
                replace(optional) -> null일경우 대체할 값
                replace(optional) : null일경우 대체할 값
    */
    key2Str:(data,key,replace) =>{
        let retV = "";
        if (data){
            if (data.hasOwnProperty(key)){
                retV = data[key];
            }            
        }
        if (replace !== undefined && retV.length <=0){
            retV = replace;
        }
        return retV;
    },
    /* remark : Random 문자열 생성
       param  : stringLength -> 생성할 문자열 길이                
    */
    generateRandomString:(stringLength) =>{
        let randomString = '';
        let randomAscii;
        for(let i = 0; i < stringLength; i++) {
            randomAscii = Math.floor((Math.random() * 25) + 97);
            randomString += String.fromCharCode(randomAscii)
        }
        return randomString
    },
    /* remark : Random 문자열 생성
       param  : stringLength -> 생성할 문자열 길이                
    */
   getRandomId:(id) =>{
        
        if (id === undefined){
            id = "id";
        }
        id = id + "_" + util.generateRandomString(5);
        return id;
    },
    /* remark: 문자열 replace
       param : 문자열, 찾을문자열, 바꿀문자열
    */
    replaceAll (str, searchStr, replaceStr) {
        return str.split(searchStr).join(replaceStr)
    }   

}

export default util
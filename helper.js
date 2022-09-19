export const RemoveEmptyValueFromArray = (param) => {
  var arr = [];
  if(Array.isArray(param)){
    
    for(var i=0; i<param.length; i++){
      
      if(Array.isArray(param[i])){
        arr.push(RemoveEmpty(param[i]));
      } else if(param[i]!==""){
        arr.push(param[i]);
      }     
    }
    
    return arr;
  }
}

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

export const binToHex = (str) => {
    let decimal = parseInt(str, 2);
    return decimal.toString(16);
}

export const hexToBin = (str) => {
    let decimal = parseInt(str,16);
    return decimal.toString(2)
}

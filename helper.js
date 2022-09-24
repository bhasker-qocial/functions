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

export const binToHex = (str) =>{
    
    if(str.length !== 96){
        return false;
    }
    
    let hex = "";
    
    for(let i=0; i<96; i= i+4){
        const oneHour = str.substring(i, i+4);
        let dec = parseInt(oneHour, 2)
        hex += dec.toString(16)
    }
    
    if(hex.length === 24){
        return hex;
    } else{
        console.error("Something went wrong");
        return false;
    }
}

export const hexToBin = (str) => {
    if(str.length !== 24){
        console.log("Invalid Hex Time format");
        return false;
    }
    
    let bin = "";
    
    for(let i=0; i< 24; i++){
        const dec = parseInt(str[i], 16);
        bin += dec.toString(2);
    }
    
    if(bin.length === 96){
        return bin
    } else{
        console.log("something went wrong")
        return false;
    }
}

function rgb(r, g, b){
    const hexDecArrey = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    let hex = ""
    // rgb to hex calculation 
    function rgbToHex(num){
      if(num>255){
        num = 255
      }else if(num<0){
        num = 0
      } else{}
    
      let firstChar = parseInt(num/16) 
      let secondChar = num%16
      hex = hex + hexDecArrey[firstChar] + hexDecArrey[secondChar] 
    }
    rgbToHex(r)
    rgbToHex(g)
    rgbToHex(b)
    return hex
    
    }
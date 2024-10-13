function add(numbers){
    if(!numbers) return 0;

    let delimiter = /[\n,]/;

    if(numbers.startsWith("//")){
      const matchDelimeters = numbers.match(/\/\/(.)\n/);
      // console.log(matchDelimeters)
      delimiter = new RegExp(matchDelimeters[1]);
      // console.log(numbers)
      numbers= numbers.split("\n")[1]
      console.log(numbers)
    }
    
    const numArray = numbers.split(delimiter);
    const ans = numArray.reduce((sum,num)=>sum + parseInt(num),0)
    return ans
    
}

module.exports=add
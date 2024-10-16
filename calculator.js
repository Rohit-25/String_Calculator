function add(numbers){
    if(!numbers) return 0;

    let delimiter = /[\n,]/;

    if(numbers.startsWith("//")){
      const matchDelimeters = numbers.match(/\/\/(.)\n/);
      // console.log(matchDelimeters)
      delimiter = new RegExp(matchDelimeters[1]);
      // console.log(numbers)
      numbers= numbers.split("\n")[1]
      // console.log(numbers)
    }
    
    const numArray = numbers.split(delimiter).map(num=> (num ? parseInt(num) : 0));
    const negativeNumbers = numArray.filter(num=>num<0)
    // console.log(negativeNumbers)
    
    if(negativeNumbers.length>0){
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`)
    }
    const ans = numArray.reduce((sum,num)=>sum + parseInt(num),0)
    return ans
    
}

module.exports=add
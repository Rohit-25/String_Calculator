function add(numbers){
    if(!numbers) return 0;
    
    const numArray = numbers.split(/[\n,]/);
    const ans = numArray.reduce((sum,num)=>sum + parseInt(num),0)
    return ans
    
}

module.exports=add
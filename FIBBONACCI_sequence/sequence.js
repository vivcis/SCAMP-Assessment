var fibbonacciSequence = function(num){
	if (num===1){
		 return[0,1];
	}
	else{
		var f = fibbonacciSequence(num - 1);
		f.push(f[f.length - 1] + f[f.length - 2]);
		return f;
	}
};

console.log(fibbonacciSequence(20));
    

function Even_Odd_Storage(arr){
	var result = [0,0];
	for(var i =0; i< arr.length; i++)
	{
		if(i % 2) result[1] += arr[i];
		else
			result[0] += arr[i];
	}
		return result
}

console.log(Even_Odd_Storage([88, 99,107,5,23,38,48,61,80,85,124]))

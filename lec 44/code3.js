
// Arrays with function

let arr = [10,20,30,40,50];

function getSum(arr)
{
	// let sum =0;
	// for(let index =0; index<arr.length; index++)
	// {
	// 	sum+=arr[index];
	// }
	// return sum;


	let sum=0;
	arr.forEach((value) =>{
		sum+=value;
	})
	return sum;
}

console.log(getSum(arr));
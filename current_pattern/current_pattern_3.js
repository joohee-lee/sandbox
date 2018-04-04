

var arr = [
	{className: 'on'},
	{className: 'off'}
];
var current = 1;
var count = arr.length;
var count2 = 0;

function x() {

	for(var i = 0; i < count; i++) {
		// console.log(i, arr[i]);
	}

	count2++;

	console.log('count2', count2);
	console.log(arr[0].className);
};

for(var i = 0; i < 1; i++) {
	x(); 
}

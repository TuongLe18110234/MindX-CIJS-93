function solution(A) {
	let r = 0;
	for (let i = 0; i < A.length;) {
			let j = i;
			for (; i < A.length && A[i] === A[j]; ++i);
			// A[j] occurs (i - j) time
			r += Math.min(Math.abs(A[j] - (i - j)), i - j);
	}
	return r;
}

console.log(solution([1, 1, 3, 4, 4, 4]));
console.log(solution([1, 2, 2, 2, 5, 5, 5, 8]));
console.log(solution([1, 1, 1, 1, 3, 3, 4, 4, 4, 4, 4]));
console.log(solution([10, 10, 10]));
/* This is a demo task.

Write a function:

class Solution { public int solution(int[] A); }

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

 */
function findSmallestPositiveInt(A) {
    l = A.length;
    for(i = 0; i < l; i++){
        smallest = A[i];
        for(j=i; j < l; j++){
            if(A[j] < A[i]){
                t = A[i];
                A[i] = A[j];
                A[j] = t;
            }
        }
    }
    console.log(A);
    smallest = A[0];
    if(smallest <=0) smallest=0;
    for(a=1; a<l; a++){
		if(A[a] <=0) continue;
		if(A[a] != A[a-1]) smallest++;
        if(smallest != A[a]){
            return smallest;
        }
    }
	return ++smallest;
}
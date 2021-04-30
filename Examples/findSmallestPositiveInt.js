
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
var list =  [1, 3, 6, 4, 1, 2];
sm = findSmallestPositiveInt(list);
console.log(sm);

var list =   [1, 2, 3];
sm = findSmallestPositiveInt(list);
console.log(sm);

var list =  [-1, -3]
sm = findSmallestPositiveInt(list);
console.log(sm);

var list =  [-1, 3, -6, 4, -1, 2];
sm = findSmallestPositiveInt(list);
console.log(sm);

var list =  [-1, 3, -6, 4, -1, 2];
sm = findSmallestPositiveInt(list);
console.log(sm);
let bubbleSort = (inputArr) => {
	debugger;
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
		debugger;
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

var list = [1,5,8,3,9,2];
bubbleSort(list);
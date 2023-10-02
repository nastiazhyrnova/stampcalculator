export const findTheSmallestRemainder = (initialArray, price) => {
	//remove duplicates
	const array = [...new Set(initialArray)];

	//1. check if single values from array are equal
	const equal = array.find(item => item === price);
	if (equal) {
		return [equal];
	}

	array.sort();
	console.log(array);

	//2. if not, find single value closest to the price:
	const bestSingleCandidate = array.find(item => item > price);
	let bestCandidates = [bestSingleCandidate];

	//remove from array all bigger values:
	const bestSingleCandidateIndex = array.indexOf(bestSingleCandidate);
	array.splice(bestSingleCandidateIndex);

	//USEFUL FUNCTIONS:
	const getBestCandidatesSum = () => {
		return +bestCandidates.reduce((x, y) => x + y, 0);
	};

	const sumIsEqualToPrice = (a, b) => {
		if (a + b === price) {
			bestCandidates = [a, b];
		}
	};

	const checkIfSumIsTheBest = (a, b) => {
		if (a + b > price) {
			const bestCandidatesSum = getBestCandidatesSum();
			if (a + b < bestCandidatesSum) {
				bestCandidates = [a, b];
			}
		}
	};

	//3. check PAIRS
	for (let firstIndex = 0; firstIndex < array.length; firstIndex++) {
		//check if there is already the best combination:
		if (getBestCandidatesSum() === price) {
			break;
		}

		const firstValue = array[firstIndex];

		//check the sum of the same one:
		if (sumIsEqualToPrice(firstValue, firstValue)) {
			break;
		} else {
			checkIfSumIsTheBest(firstValue, firstValue);
		}

		//check sum with every other item
		if (firstIndex < array.length) {
			for (
				let secondIndex = firstIndex + 1;
				secondIndex < array.length;
				secondIndex++
			) {
				const secondValue = array[secondIndex];
				//if sum is equal to the price, stop loop
				if (sumIsEqualToPrice(firstValue, secondValue)) {
					break;
				} else {
					checkIfSumIsTheBest(firstValue, secondValue);
				}
			}
		}
	}

	//4. check TRIOS

	//check is the same three

	return bestCandidates;
};

//

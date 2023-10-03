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

	const bestSingleCandidate = array.find(item => item > price);

	//remove from array all bigger values:
	const bestSingleCandidateIndex = array.indexOf(bestSingleCandidate);
	array.splice(bestSingleCandidateIndex + 1);

	const getAllNumberCombinations = (stampsLimit, valuesQty) => {
		var result = [];
		for (let i = 0; i < Math.pow(valuesQty, stampsLimit); i++) {
			result.push(i.toString(valuesQty));
		}
		return result;
	};

	//NEW APPROACH:

	const numbersCombinations = getAllNumberCombinations(3, array.length);
	const ordered = numbersCombinations.map(combination =>
		combination.split('').sort().join('')
	);
	const orderedNoDuplicates = [...new Set(ordered)];

	const allPossibleCombinations = orderedNoDuplicates.reduce(
		(filtered, combination) => {
			const splitArr = combination.split('');
			const realValuesArr = splitArr.map(singleItem => {
				let result;
				for (let i = 0; i < array.length; i++) {
					if (singleItem === i.toString()) {
						result = array[i];
						break;
					}
				}
				return result;
			});
			const sum = realValuesArr.reduce((a, b) => a + b, 0);
			if (sum >= price && sum <= array[array.length - 1]) {
				filtered.push({
					values: realValuesArr,
					remainder: sum % price,
				});
			}
			return filtered;
		},
		[]
	);

	//sort by the smallest remainder
	allPossibleCombinations.sort((a, b) => a.remainder - b.remainder);
	console.log(allPossibleCombinations);

	const result = allPossibleCombinations.filter(
		combination =>
			combination.remainder === allPossibleCombinations[0].remainder
	);

	return result;
};

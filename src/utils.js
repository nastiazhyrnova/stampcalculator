export const findTheSmallestRemainder = (initialArray, price) => {
	console.log(price);
	//remove duplicates
	const array = [...new Set(initialArray)];

	//1. check if single values from array are equal
	const equal = array.find(item => item === price);
	if (equal) {
		return [equal];
	}

	array.sort();

	//remove from array all bigger values:
	const bestSingleCandidate = array.find(item => item > price);
	const bestSingleCandidateIndex = array.indexOf(bestSingleCandidate);
	if (bestSingleCandidate + 1 < array.length) {
		array.splice(bestSingleCandidateIndex + 1);
	}

	//get all possible combinations
	const getAllNumberCombinations = (stampsLimit, valuesQty) => {
		const result = [];
		for (let i = 0; i < Math.pow(valuesQty, stampsLimit); i++) {
			result.push(i.toString(valuesQty));
		}
		return result;
	};

	//
	const numbersCombinations = getAllNumberCombinations(3, array.length);
	const ordered = numbersCombinations.map(combination =>
		combination.split('').sort().join('')
	);
	const orderedNoDuplicates = [...new Set(ordered)];

	const allPossibleCombinations = orderedNoDuplicates.reduce(
		(filtered, combination) => {
			const splitValues = combination.split('');
			const realValues = splitValues.map(singleItem => {
				let result;
				for (let i = 0; i < array.length; i++) {
					if (singleItem === i.toString()) {
						result = array[i];
						break;
					}
				}
				return result;
			});
			const sum = realValues.reduce((a, b) => a + b, 0);
			if (bestSingleCandidate) {
				if (sum >= price && sum <= bestSingleCandidate) {
					filtered.push({
						values: realValues,
						remainder: sum - price,
					});
				}
			} else {
				if (sum >= price) {
					filtered.push({
						values: realValues,
						remainder: sum - price,
					});
				}
			}

			return filtered;
		},
		[]
	);

	//sort by remaider (small to big)
	allPossibleCombinations.sort((a, b) => a.remainder - b.remainder);

	const result = allPossibleCombinations.filter(
		combination =>
			combination.remainder === allPossibleCombinations[0].remainder
	);

	return result;
};

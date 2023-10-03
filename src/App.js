import Layout from './Layout';
import { findTheSmallestRemainder } from './utils';

function App() {
	const arr = [2, 4.5, 0.7, 3, 2, 1];
	const deliveryPrice = 4;

	const result = findTheSmallestRemainder(arr, deliveryPrice);

	console.log(result);

	const results = result.map((option, index) => (
		<div key={index} style={{ paddingBottom: '30px' }}>
			{option.values.map((value, valueIndex) => (
				<p key={valueIndex}>{value}</p>
			))}
		</div>
	));

	// console.log(getAllCombinations(4, 4));

	return <Layout>{results}</Layout>;
}

export default App;

//it has to stop only if sum is equal, otherwise we keep running until we find the best combination
//stamps can repeat unlimited number of times

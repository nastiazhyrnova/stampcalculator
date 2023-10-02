import Layout from './Layout';
import { findTheSmallestRemainder } from './utils';

function App() {
	const arr = [2, 4.5, 0.7, 3, 2, 7];
	const deliveryPrice = 4.87;

	const result = findTheSmallestRemainder(arr, deliveryPrice);

	return (
		<Layout>
			{result.map((candidate, index) => (
				<p key={index}>{candidate}</p>
			))}
		</Layout>
	);
}

export default App;

//it has to stop only if sum is equal, otherwise we keep running until we find the best combination
//stamps can repeat unlimited number of times

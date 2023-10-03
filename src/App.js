import Layout from './Layout';
import { findTheSmallestRemainder } from './utils';
import stamp from './assets/stamp4.svg';
import classes from './App.module.scss';

function App() {
	const arr = [2, 4.5, 0.7, 3, 2, 1];
	const deliveryPrice = 4;

	const result = findTheSmallestRemainder(arr, deliveryPrice);

	const results = result.map((option, index) => (
		<div key={index} style={{ paddingBottom: '30px' }}>
			{option.values.map((value, valueIndex) => (
				<p key={valueIndex}>{value}</p>
			))}
		</div>
	));

	return (
		<Layout>
			{results}
			<img src={stamp} className={classes.Image} />
		</Layout>
	);
}

export default App;

//it has to stop only if sum is equal, otherwise we keep running until we find the best combination
//stamps can repeat unlimited number of times

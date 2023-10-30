import Layout from './Layout';
import { findTheSmallestRemainder } from './utils';
import Stamp from './components/Stamp';

import stamp1 from './assets/stamp1.svg';
import stamp2 from './assets/stamp2.svg';
import stamp3 from './assets/stamp3.svg';
import stamp4 from './assets/stamp4.svg';

import classes from './App.module.scss';

function App() {
	const arr = [0.78, 1.65, 1.75, 2.1, 2, 1, 0.6, 4];
	const deliveryPrice = 1.95;

	const result = findTheSmallestRemainder(arr, deliveryPrice);

	const results = result.map((option, index) => (
		<>
			<h3>Option {index + 1}</h3>
			<div key={index} className={classes.StampsContainer}>
				{option.values.map((value, valueIndex) => (
					<Stamp key={valueIndex} price={value} image={stamp2}></Stamp>
				))}
			</div>
		</>
	));

	return <Layout>{results}</Layout>;
}

export default App;

//it has to stop only if sum is equal, otherwise we keep running until we find the best combination
//stamps can repeat unlimited number of times

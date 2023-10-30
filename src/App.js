import Layout from './Layout';
import { findTheSmallestRemainder } from './utils';
import Stamp from './components/Stamp';

import classes from './App.module.scss';

function App() {
	const arr = [0.78, 1.65, 1.75, 2.1, 2, 1, 0.6, 4];
	const deliveryPrice = 2.95;

	const result = findTheSmallestRemainder(arr, deliveryPrice);

	const results = result.map((option, index) => {
		//check how many stamp types are needed
		const stampsTypes = [...new Set(option.values)].map((price, imageIndex) => {
			return {
				imageIndex,
				price,
			};
		});

		return (
			<div key={index}>
				<h3>Option {index + 1}</h3>
				<div className={classes.StampsWrapper}>
					{option.values.map((value, valueIndex) => {
						const stampType = stampsTypes.find(type => type.price === value);

						return (
							<>
								<Stamp
									key={valueIndex}
									price={value}
									imageIndex={stampType.imageIndex}></Stamp>
							</>
						);
					})}
				</div>
			</div>
		);
	});

	return <Layout>{results}</Layout>;
}

export default App;

//it has to stop only if sum is equal, otherwise we keep running until we find the best combination
//stamps can repeat unlimited number of times

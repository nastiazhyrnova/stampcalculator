import Stamp from './Stamp';
import { findTheSmallestRemainder } from '../utils';
import classes from './Options.module.scss';
import { STAMPS } from '../DUMMY';

const Options = () => {
	const pricesArr = STAMPS.map(stamp => stamp.price);

	const deliveryPrice = 3.75;

	const result = findTheSmallestRemainder(pricesArr, deliveryPrice);

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

						const title = STAMPS.find(stamp => stamp.price === value)?.title;

						return (
							<>
								<Stamp
									key={valueIndex}
									price={value}
									title={title}
									imageIndex={stampType.imageIndex}></Stamp>
							</>
						);
					})}
				</div>
			</div>
		);
	});

	return <>{results}</>;
};

export default Options;

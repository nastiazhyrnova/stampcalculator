import Stamp from './Stamp';
import { findTheSmallestRemainder } from '../utils';
import classes from './Options.module.scss';
import { STAMPS } from '../DUMMY';

const Options = ({ deliveryPrice }) => {
	let options;

	if (deliveryPrice) {
		const pricesArr = STAMPS.map(stamp => stamp.price);

		const result = findTheSmallestRemainder(pricesArr, deliveryPrice);

		const results = result.map((option, index) => {
			//check how many stamp types are needed
			const stampsTypes = [...new Set(option.values)].map(
				(price, imageIndex) => {
					return {
						imageIndex,
						price,
					};
				}
			);

			return (
				<div key={index}>
					<h3>Option {index + 1}</h3>
					<div key={index} className={classes.StampsWrapper}>
						{option.values.map((value, valueIndex) => {
							const stampType = stampsTypes.find(type => type.price === value);

							const title = STAMPS.find(stamp => stamp.price === value)?.title;

							return (
								<>
									<Stamp
										key={`${index}${valueIndex}`}
										price={value}
										title={title}
										imageIndex={stampType.imageIndex}></Stamp>
								</>
							);
						})}
					</div>
					<div>Paid extra: {option.remainder.toFixed(2)}€</div>
				</div>
			);
		});

		options = results;
	}

	return <>{deliveryPrice ? options : 'Enter shipping price'}</>;
};

export default Options;

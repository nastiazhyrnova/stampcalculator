import stamp1 from '../assets/stamp1.svg';
import stamp3 from '../assets/stamp2.svg';
import stamp2 from '../assets/stamp3.svg';
import stamp4 from '../assets/stamp4.svg';

import classes from './Stamp.module.scss';

const Stamp = ({ title, price, imageIndex }) => {
	const images = [stamp1, stamp2, stamp3, stamp4];

	return (
		<div className={classes.Container}>
			<div className={classes.TextContainer}>
				{title && <span className={classes.Title}>{title}</span>}
				<br />
				<span className={classes.Price}>{price.toFixed(2)}€</span>
			</div>
			<img
				src={images[imageIndex]}
				className={classes.Image}
				alt={'Floral postal stamp'}
			/>
		</div>
	);
};

export default Stamp;

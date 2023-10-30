import stamp from '../assets/stamp1.svg';
import classes from './Stamp.module.scss';

const Stamp = ({ image = stamp, title, price }) => {
	return (
		<div className={classes.Container}>
			<div className={classes.TextContainer}>
				{title && <span>{title}</span>}
				<br />
				<span>{price.toFixed(2)}€</span>
			</div>
			<img src={image} className={classes.Image} alt={'Floral postal stamp'} />
		</div>
	);
};

export default Stamp;

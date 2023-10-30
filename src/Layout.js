import classes from './Layout.module.scss';

const Layout = ({ children }) => {
	return (
		<main className={classes.Body}>
			<h1>Stamp calculator (up to 3 stamps)</h1>
			{children}
		</main>
	);
};

export default Layout;

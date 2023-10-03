import classes from './Layout.module.scss';

const Layout = ({ children }) => {
	return (
		<body className={classes.Body}>
			<h1>Stamp calculator</h1>
			{children}
		</body>
	);
};

export default Layout;

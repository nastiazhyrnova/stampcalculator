import Layout from './Layout';
import Options from './components/Options';

function App() {
	return (
		<Layout>
			<Options />
		</Layout>
	);
}

export default App;

//it has to stop only if sum is equal, otherwise we keep running until we find the best combination
//stamps can repeat unlimited number of times

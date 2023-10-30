import { useRef, useState } from 'react';

import Layout from './Layout';
import Options from './components/Options';

function App() {
	const priceRef = useRef();
	const [deliveryPrice, setDeliveryPrice] = useState(null);

	const onSubmitHandler = e => {
		e.preventDefault();
		setDeliveryPrice(Number(priceRef.current?.value.trim()));
	};

	return (
		<Layout>
			<form>
				<input type='number' ref={priceRef} placeholder='Enter price' />
				<button onClick={onSubmitHandler} type='submit'>
					Calculate
				</button>
			</form>
			<Options deliveryPrice={deliveryPrice} />
		</Layout>
	);
}

export default App;

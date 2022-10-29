import ChatBot from 'react-simple-chatbot';

const steps = [
	{
		id: '0',
		message: 'Hey Dude!',
		end: true
	}
];

function App() {
	return (
		<div className="App">
			<ChatBot steps={steps} />
		</div>
	);
}

export default App;

import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header.js';
import Tesseract from './components/Tesseract.js';
import Footer from './components/Footer.js';

// Mobile-first
function App() {

	const [members, setMembers] = useState([]);

	useEffect(() => {
		async function fetchData(){
			const response = await fetch(`https://api.github.com/orgs/grupotesseract/public_members`)
			.catch(error => {console.log(error)});
			const data = await response.json();
			setMembers(data);
		}
		fetchData();
	}, []);

	const toggleSelection = (id) => {
		setMembers(members.map((member) => member.id === id ? { ...member, selected: !member.selected } : member));
	};

  	return (
		<div
			className="container">
			<Header title="Desafio Tesseract"/>
			<Tesseract
				onToggle={toggleSelection}
				members={members}/>
			<Footer />
		</div>
  	);
}

export default App;

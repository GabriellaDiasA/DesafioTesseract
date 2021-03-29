import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header.js';
import Tesseract from './components/Tesseract.js';
import Footer from './components/Footer.js';

// Mobile-first
function App() {

	const [input, setInput] = useState('');
	const [repos, setRepos] = useState([]);
	const [followers, setFollowers] = useState([]);
	const [createDate, setCreated] = useState([]);
	const [isLoading, setLoading] = useState(true);

	// Duas listas, uma constante e outra para exibição pós-filtro
	const [members, setMembers] = useState([]);
	const [membersDefault, setMembersDefault] = useState([]);

	useEffect(() => {
		setLoading(true);
		async function fetchData(){
			//Fetch inicial
			const response = await fetch(`https://api.github.com/orgs/grupotesseract/public_members`)
			.catch(error => {console.log(error)});
			let data = await response.json();
			setMembers(data);
			setMembersDefault(data);

			//Fetch repositórios
			let reposTemp = [];
			for(let member in data){
				const response = await fetch(data[member].repos_url)
				.catch(error => {console.log(error)});
				let dataRepos = await response.json();
				let reposNum = dataRepos.length;
				let newRepos = { id: data[member].id, reposNum: reposNum };
				reposTemp = [...reposTemp, newRepos];
			}
			setRepos(reposTemp);

			//Fetch followers
			let followersTemp = [];
			for(let member in data){
				const response = await fetch(data[member].followers_url)
				.catch(error => {console.log(error)});
				let dataFollowers = await response.json();
				let followersNum = dataFollowers.length;
				let newFollowers = { id: data[member].id, followersNum: followersNum };
				followersTemp = [...followersTemp, newFollowers];
			}
			setFollowers(followersTemp);

			//Fetch data de criação de conta
			let createTemp = [];
			for(let member in data){
				const response = await fetch(data[member].url)
				.catch(error => {console.log(error)});
				let dataCreate = await response.json();
				let created_at = dataCreate.created_at.slice(0, 10);
				let newCreate = { id: data[member].id, created_at: created_at };
				createTemp = [...createTemp, newCreate];
			}
			setCreated(createTemp);

			setLoading(false);
		}
		fetchData();
	}, []);

	const toggleSelection = (id) => {
		setMembers(members.map((member) => member.id === id ? { ...member, selected: !member.selected } : member));
	};

	// Lista membersDefault permanece constante
	const updateInput = async (input) => {
		const filtered = membersDefault.filter(member => {
			return member.login.toLowerCase().includes(input.toLowerCase())
		})
			setInput(input);
			setMembers(filtered);
	}

  	return (
		<div
			className="container">
			<Header
				title="Desafio Tesseract"
				input={input}
				onChange={updateInput} />
			{ !isLoading ? (
			<Tesseract
				onToggle={toggleSelection}
				members={members}
				repos={repos}
				followers={followers}
				date={createDate} />
			) : (
				"Loading..."
			)}
			<Footer />
		</div>
  	);
}

export default App;

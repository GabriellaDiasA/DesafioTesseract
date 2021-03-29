import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header.js';
import Tesseract from './components/Tesseract.js';
import Footer from './components/Footer.js';

// Mobile-first
function App() {

	const [members, setMembers] = useState([]);
	const [repos, setRepos] = useState([]);
	const [followers, setFollowers] = useState([]);
	const [createDate, setCreated] = useState([]);

	useEffect(() => {
		async function fetchData(){
			//Fetch inicial
			const response = await fetch(`https://api.github.com/orgs/grupotesseract/public_members`)
			.catch(error => {console.log(error)});
			let data = await response.json();
			setMembers(data);

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
			setCreated(createTemp)
		}
		fetchData();
	}, []);

	const toggleSelection = (id) => {
		console.log(members[0]);
		setMembers(members.map((member) => member.id === id ? { ...member, selected: !member.selected } : member));
	};

  	return (
		<div
			className="container">
			<Header title="Desafio Tesseract"/>
			<Tesseract
				onToggle={toggleSelection}
				members={members}
				repos={repos}
				followers={followers}
				date={createDate}/>
			<Footer />
		</div>
  	);
}

export default App;

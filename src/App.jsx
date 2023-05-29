import './App.css';
import { Box, Typography, Divider } from '@mui/material';
import CitationCard from './components/CitationCard';
import { useEffect, useState } from 'react';
import ButtonComponent from './components/ButtonComponent';
import Search from './components/Search';
import CitationLine from './components/CitationLine';
import axios from 'axios';


function App() {


	const [currenCitation, setCurrentCitation] = useState({});
	const [allCitations, setAllCitations] = useState([]);

	const getRandomFromMyCitations = (() => {
		axios({
			method: 'get',
			url: process.env.REACT_APP_BASE_URL + 'citations/random',
			responseType: "json"
		}).then((response) => {
			setCurrentCitation(response.data.citation);
			console.log(response.data.citation);
		});
	});

	const getRandomFromKaamelott = (() => {
		axios({
			method: 'get',
			url: 'https://kaamelott.chaudie.re/api/random',
			responseType: "json"
		}).then((response) => {
			setCurrentCitation(response.data.citation);
			console.log(response.data.citation);
		});
	});

	const getAllCitations = (() => {
		axios({
			method: 'get',
			url: process.env.REACT_APP_BASE_URL + 'citations',
			responseType: "json"
		}).then((response) => {
			setAllCitations(response.data.citation);
		});
	});

	useEffect(() => {
		getAllCitations();
		getRandomFromMyCitations();
	}, []);


	return (
		<Box
			sx={{
				fontFamily: "Roboto",
				display: "flex",
				flexDirection: "column",
				margin: "auto",
				width: {
					xs: "90%",
					md: "60%"
				}
			}}
			className="App">
			<Typography variant='h3' sx={{ textAlign: 'center', fontWeight: 'bold', margin: "50px" }} >
				Citations
			</Typography>

			<CitationCard citationObject={currenCitation} />

			<Typography variant='h6' sx={{ margin: "25px auto 15px" }} >
				Afficher une autre citation
			</Typography>

			<Box sx={{ display: "flex", flexFlow: "row wrap", justifyContent: "center" }}>
				<ButtonComponent onClick={getRandomFromMyCitations} text="Parmis mes citations" bcolor="white" color="#8F00FF" icon="eyes" />
				<ButtonComponent onClick={getRandomFromKaamelott} text="Parmis les citations de Kaamelott" bcolor="white" color="#8F00FF" icon="eyes" />
			</Box>

			<Divider sx={{ width: "100%", margin: "35px auto 0" }} />

			<Typography variant='h5' sx={{ fontWeight: 'bold', margin: "25px auto 15px" }} >
				Mes citations
			</Typography>

			<Box sx={{ display: "flex", flexFlow: "row wrap", justifyContent: { xs: "center", lg: "space-between" }, alignItems: "center", }}>
				<ButtonComponent text="Ajouter une citation" bcolor="#8F00FF" color="white" icon="add" />
				<Search />
			</Box>

			<Divider sx={{ width: "100%", margin: "25px 0" }} />

			{allCitations && allCitations.map((item, index) => {
				return (
					<CitationLine key={index} citation={item.citation} />
				);
			})}
		</Box>
	);
}

export default App;

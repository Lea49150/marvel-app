import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, Tooltip } from 'recharts';

const CharactersComparePage = () => {

    // change the title of the page
    document.title = "Compare | Marvel App";

    const characters = useLoaderData();

    useEffect(() => {
        console.log('Loaded characters:', characters); // Ajoutez ce log pour vérifier les personnages chargés
    }, [characters]);

    if (!characters || characters.length === 0) {
        return <p>No characters available for comparison.</p>;
    }

    const options = characters.map((character, index) => ({
        value: index,
        label: character.name,
    }));

    const [option1, setOption1] = useState(options[0].value);
    const [option2, setOption2] = useState(options[1].value);

    const centerStyle = { textAlign: 'center' };

    const data = Object.keys(characters[option1].capacities).map((key) => ({
        subject: key,
        [characters[option1].name]: characters[option1].capacities[key],
        [characters[option2].name]: characters[option2].capacities[key],
    }));

    return (
        <>
            <h2>Compare characters</h2>

            <p style={centerStyle}>

                <select
                    data-testid='select-character-1'
                    value={option1}
                    onChange={(event) => setOption1(event.target.value)}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                with
                <select
                    data-testid='select-character-2'
                    value={option2}
                    onChange={(event) => setOption2(event.target.value)}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </p>

            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 10]} />
                <Radar name={characters[option1].name} dataKey={characters[option1].name} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name={characters[option2].name} dataKey={characters[option2].name} stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
                <Tooltip />
            </RadarChart>
        </>
    );
};

export default CharactersComparePage;
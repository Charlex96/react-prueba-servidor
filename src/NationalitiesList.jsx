import { useEffect, useState } from 'react';


const NationalitiesList = () => {
    const [nationalities, setNationalities] = useState([]);

    useEffect(() => {
        // Función para obtener datos de la API
        const fetchNationalities = async () => {
        try {
        const response = await fetch('http://localhost:8090/api/nationalities');
        const data = await response.json();
        setNationalities(data);
        } catch (error) {
        console.error('Error fetching nationalities:', error);
        }
    };

    // Llamamos a la función al montar el componente
    fetchNationalities();
    }, []); // El segundo parámetro [] asegura que useEffect se ejecute solo una vez al montar el componente

    return (
    <div>
        <h2>Nationalities List</h2>
        <ul>
        {nationalities.map((nationality) => (
            <li key={nationality.NatiId}>
            <strong>ID:</strong> {nationality.NatiId},{' '}
            <strong>Name (es):</strong> {nationality['NatiName(es)']},{' '}
            <strong>Name (en):</strong> {nationality['NatiName(en)']}
            </li>
        ))}
        </ul>
    </div>
    );
}


export default NationalitiesList
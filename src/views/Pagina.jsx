import React from "react";

// Dados das 11 cidades de Santa Catarina
const cities = [
    { name: "Florianópolis", description: "A capital, famosa por suas mais de 40 praias e apelidada de 'Ilha da Magia', combinando natureza e tecnologia." },
    { name: "Joinville", description: "A maior cidade do estado em população, conhecida como a 'Cidade da Dança' por sediar o Festival de Dança de Joinville." },
    { name: "Blumenau", description: "Famosa por sua forte influência alemã, arquitetura enxaimel e por sediar a Oktoberfest, uma das maiores festas da cerveja do mundo." },
    { name: "São Francisco do Sul", description: "Cidade histórica com um dos portos mais importantes e arquitetura colonial preservada." },
    { name: "Balneário Camboriú", description: "Polo turístico de luxo, conhecida pelos seus arranha-céus e pela Praia Central alargada." },
    { name: "Chapecó", description: "Importante centro agroindustrial no Oeste Catarinense, forte em produção de alimentos e sede da Arena Condá." },
    { name: "Criciúma", description: "Principal polo carbonífero e cerâmico do sul do Brasil, com economia diversificada e tradição em futebol." },
    { name: "Lages", description: "Maior cidade da Serra Catarinense, conhecida pelas temperaturas frias e pela Festa Nacional do Pinhão." },
    { name: "Itajaí", description: "Sede de um dos principais portos do país e com forte vocação para logística, além de belas praias." },
    { name: "Brusque", description: "Polo da indústria têxtil, famosa por seu comércio atacadista de vestuário e sua cultura italiana." },
    { name: "Laguna", description: "Cidade histórica litorânea, palco da história de Anita Garibaldi e conhecida pelo Farol de Santa Marta." },
];

// Componente Card para cada cidade (SC)
const CityCard = ({ name, description }) => (
    <div className="card shadow-lg hover:shadow-xl transition duration-300" style={{ width: '18rem', margin: '15px' }}>
        {/* Usando placeholder dinâmico com cores de SC (Verde e Branco) */}
        <img 
            src={`https://placehold.co/286x180/008000/FFFFFF?text=${name.replace(' ', '+')}`} 
            className="card-img-top" 
            alt={`Vista de ${name}`}
            style={{ borderRadius: '0.5rem 0.5rem 0 0' }}
        />
        <div className="card-body">
            <h5 className="card-title text-xl font-semibold">{name}</h5>
            <p className="card-text text-gray-600">
                {description}
            </p>
        </div>
    </div>
);


export default function Pagina() {
    return (
        <>
            <h1 style={{ 
                textAlign: 'center', 
                color: '#008000', // Verde de SC
                marginBottom: '40px', 
                marginTop: '30px',
                fontWeight: 'bold'
            }}>
                Conheça 11 Cidades de Santa Catarina
            </h1>

            {/* Container para organizar os cards de forma responsiva */}
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center',
                gap: '20px', // Espaço entre os cards
                padding: '0 20px 40px 20px'
            }}>
                {cities.map((city) => (
                    <CityCard key={city.name} name={city.name} description={city.description} />
                ))}
            </div>
        </>
    );
}
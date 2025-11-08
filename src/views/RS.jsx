import React from "react";

// Dados das 11 cidades do Rio Grande do Sul
const cities = [
    { name: "Porto Alegre", description: "A capital, conhecida pelo pôr do sol no Rio Guaíba e por ser um importante polo cultural, político e econômico da Região Sul." },
    { name: "Caxias do Sul", description: "Principal polo metalmecânico do Sul e famosa pela forte influência italiana, sendo sede da Festa da Uva." },
    { name: "Gramado", description: "Um dos destinos turísticos mais famosos do Brasil, conhecido pelo clima europeu, Festival de Cinema e Natal Luz." },
    { name: "Canela", description: "Vizinha de Gramado, abriga a impressionante Cascata do Caracol e é um destino de ecoturismo na Serra Gaúcha." },
    { name: "Pelotas", description: "Conhecida como a 'Capital Nacional do Doce', tem arquitetura histórica e tradição na produção de guloseimas finas." },
    { name: "Santa Maria", description: "Importante centro universitário e militar, conhecido como o 'Coração do Rio Grande' por sua localização central." },
    { name: "Rio Grande", description: "A cidade mais antiga do estado, sedia o principal porto e estaleiro, sendo um centro de logística e indústria petrolífera." },
    { name: "Passo Fundo", description: "Grande centro regional no Norte, com forte economia em agronegócio, comércio e saúde." },
    { name: "Bento Gonçalves", description: "Capital Brasileira do Vinho, com paisagens que remetem à Toscana e rotas turísticas focadas em vinícolas e cultura italiana." },
    { name: "Novo Hamburgo", description: "Conhecida como a 'Capital Nacional do Calçado', possui forte indústria coureiro-calçadista e forte influência alemã." },
    { name: "São Borja", description: "Cidade histórica na fronteira com a Argentina, terra natal de Getúlio Vargas e João Goulart." },
];

// Componente Card para cada cidade (RS)
const CityCard = ({ name, description }) => (
    <div className="card shadow-lg hover:shadow-xl transition duration-300" style={{ width: '18rem', margin: '15px' }}>
        {/* Usando placeholder dinâmico com cores de RS (Amarelo e Vermelho/Verde) */}
        <img 
            src={`https://placehold.co/286x180/FFCD00/000000?text=${name.replace(' ', '+')}`} 
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


export default function RS() {
    return (
        <>
            <h1 style={{ 
                textAlign: 'center', 
                color: '#FFCD00', // Amarelo de RS
                marginBottom: '40px', 
                marginTop: '30px',
                fontWeight: 'bold'
            }}>
                Conheça 11 Cidades do Rio Grande do Sul
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
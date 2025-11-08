import React from "react";
// Removemos todas as importações de imagem locais (.jfif) pois não serão mais usadas.

// Dados das 11 cidades do Paraná (Mantemos os dados)
const cities = [
    { name: "Curitiba", description: "A capital, conhecida por sua organização, pelo Jardim Botânico e planejamento urbano. " },
    { name: "Londrina", description: "Importante polo universitário e econômico no Norte do Paraná, com destaque para o setor agroindustrial." },
    { name: "Maringá", description: "Famosa pela sua Catedral de arquitetura moderna e pelo planejamento urbano, sendo muito arborizada e limpa. " },
    { name: "Foz do Iguaçu", description: "Lar das imponentes Cataratas do Iguaçu e da grandiosa Usina Hidrelétrica de Itaipu, um centro de turismo internacional. " },
    { name: "Ponta Grossa", description: "Polo industrial e sede do Parque Estadual de Vila Velha, com formações rochosas incríveis, como o 'Cálice'." },
    { name: "Cascavel", description: "Grande centro agroindustrial e de serviços na região Oeste, sendo um dos municípios mais populosos do estado." },
    { name: "São José dos Pinhais", description: "Sede do Aeroporto Internacional Afonso Pena (o principal acesso a Curitiba) e forte em logística e indústria automotiva." },
    { name: "Guarapuava", description: "Conhecida como a 'Terra da Erva-Mate', possui um clima frio e um polo cervejeiro em crescimento." },
    { name: "Paranaguá", description: "Abriga um dos maiores portos da América Latina, essencial para o escoamento da produção agrícola brasileira." },
    { name: "Toledo", description: "Destaque nacional na agropecuária e conhecida pela alta qualidade de vida, com forte produção de proteína animal." },
    { name: "Apucarana", description: "Conhecida como a 'Capital Nacional do Boné', possui forte tradição na indústria de confecções e têxteis." },
];

// Componente Card para cada cidade
// O componente foi alterado para usar um cabeçalho colorido em vez de uma tag <img>
const CityCard = ({ name, description }) => (
    <div 
        className="card shadow-lg hover:shadow-xl transition duration-300" 
        style={{ 
            width: '18rem', 
            margin: '15px',
            borderRadius: '0.5rem', // Borda arredondada no card inteiro
            overflow: 'hidden' // Garante que a cor preencha o topo
        }}
    >
        {/* CABEÇALHO VERDE SÓLIDO COM O NOME DA CIDADE */}
        <div 
            className="p-4 text-white flex items-center justify-center" 
            style={{ 
                backgroundColor: '#7F0000', // Verde Floresta
                height: '100px' // Altura para simular a área da imagem
            }}
        >
            <h5 className="text-2xl font-bold text-center">{name}</h5>
        </div>
        
        <div className="card-body p-4">
            <p className="card-text text-gray-600">
                {description}
            </p>
        </div>
    </div>
);


export default function PR() {
    return (
        <>
            <h1 style={{ 
                textAlign: 'center', 
                color: '#7F0000', // Cor típica do Paraná
                marginBottom: '40px', 
                marginTop: '30px',
                fontWeight: 'bold'
            }}>
                Conheça 11 Cidades do Paraná
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
                    // Passamos apenas o 'name' e 'description'
                    <CityCard key={city.name} name={city.name} description={city.description} />
                ))}
            </div>
        </>
    );
}
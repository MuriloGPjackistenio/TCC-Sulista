import React from 'react';

export default function Home() {
    return (
        <div 
            className="container mx-auto p-8 text-center" 
            style={{ 
                maxWidth: '900px', 
                minHeight: '80vh', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center'
            }}
        >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ color: '#7F0000' }}>
                <span style={{ color: '#FFCD00' }}>SUL</span>ISTA
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-700">
                Uma Jornada Pelos Três Estados do Sul do Brasil
            </h2>
            
            <div className="bg-gray-50 p-6 md:p-10 rounded-xl shadow-2xl border-t-4 border-b-4" style={{ borderColor: '#008000' }}>
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                    Bem-vindo ao projeto SULISTA! Este portal é dedicado a explorar e apresentar o que há de mais notável nos estados do Paraná, Santa Catarina e Rio Grande do Sul.
                    Navegue pela barra superior para conhecer as 11 principais cidades de cada estado, descobrindo seus polos econômicos, belezas naturais, cultura e história.
                    Seja Curitiba, Florianópolis ou Porto Alegre, embarque nesta jornada de conhecimento e valorização da Região Sul.
                </p>
                
                {/* Indicador visual das três cores da região */}
                <div className="flex justify-center mt-6 space-x-4">
                    <div className="w-10 h-2 rounded-full" style={{ backgroundColor: '#7F0000' }} title="Paraná"></div>
                    <div className="w-10 h-2 rounded-full" style={{ backgroundColor: '#008000' }} title="Santa Catarina"></div>
                    <div className="w-10 h-2 rounded-full" style={{ backgroundColor: '#FFCD00' }} title="Rio Grande do Sul"></div>
                </div>
            </div>
        </div>
    );
}
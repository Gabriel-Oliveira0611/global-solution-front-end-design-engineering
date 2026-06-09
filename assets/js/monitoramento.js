const simulateBtn = document.getElementById('simulate-btn');
const aircraftCount = document.getElementById('aircraft-count');
const routeCount = document.getElementById('route-count');
const riskLevel = document.getElementById('risk-level');
const lastUpdate = document.getElementById('last-update');

const risks = ['Baixo', 'Médio', 'Alto'];

if (simulateBtn) {
    simulateBtn.addEventListener('click', () => {
        aircraftCount.textContent = Math.floor(Math.random() * 18) + 8;
        routeCount.textContent = Math.floor(Math.random() * 10) + 5;
        riskLevel.textContent = risks[Math.floor(Math.random() * risks.length)];

        const now = new Date();
        lastUpdate.textContent = `Última atualização: ${now.toLocaleTimeString('pt-BR')}`;
    });
}

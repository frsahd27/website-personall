
// database.js - Khusus untuk halaman database

const therapyDatabase = {
    reflexology: {
        title: "Pijat Refleksi",
        description: "Terapi pijat pada titik-titik tertentu di kaki yang berhubungan dengan organ tubuh.",
        benefits: [
            "Melancarkan peredaran darah",
            "Mengurangi stress",
            "Meningkatkan kualitas tidur"
        ],
        procedure: [
            "Pemeriksaan awal kondisi kaki",
            "Pemanasan dengan gerakan dasar",
            "Penekanan pada titik refleksi",
            "Relaksasi akhir"
        ],
        contraindications: [
            "Luka terbuka",
            "Pembengkakan akut",
            "Varises parah"
        ]
    },
    // Tambahkan data terapi lainnya
};

function showTherapyDetail(therapyId) {
    const therapy = therapyDatabase[therapyId];
    if(!therapy) return;

    const modalContent = `
        <div class="therapy-detail">
            <h2>${therapy.title}</h2>
            <p class="therapy-description">${therapy.description}</p>
            
            <div class="therapy-benefits">
                <h3>Manfaat:</h3>
                <ul>
                    ${therapy.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>

            <div class="therapy-procedure">
                <h3>Prosedur:</h3>
                <ol>
                    ${therapy.procedure.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>

            <div class="therapy-contraindications">
                <h3>Kontraindikasi:</h3>
                <ul>
                    ${therapy.contraindications.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    openModal(modalContent);
}

// Initialize database page specific features
document.addEventListener('DOMContentLoaded', function() {
    initializeSearchAndFilter();
    initializeTherapyCards();
});

function initializeSearchAndFilter() {
    // Implementation of search and filter initialization
}

function initializeTherapyCards() {
    // Implementation of therapy cards initialization
}
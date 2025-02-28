export default function Clients() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 bg-gray-100">
            <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Our Clients</h3>
                <p className="text-gray-600 mt-2">Industry leaders entrust their business visions to us.</p>
            </div>

            {/* FLEX CONTAINER */}
            <div className="flex flex-wrap -mx-2">
                {[
                    "https://altar.io/wp-content/uploads/2023/12/client__logo-alix-partners-dark.svg",
                    "https://altar.io/wp-content/uploads/2023/12/client__logo-apiax-dark.svg",
                    "https://altar.io/wp-content/uploads/2023/12/client__logo-audapio-dark.svg",
                    "https://altar.io/wp-content/uploads/2023/12/client__logo-systemorph-dark.svg",
                    "https://altar.io/wp-content/uploads/2023/12/client__logo-fullcube-dark.svg",
                    "https://altar.io/wp-content/uploads/2023/12/client__logo-logo-quartal-fs-dark.svg",
                    "https://altar.io/wp-content/uploads/2023/12/client__logo-logo-teezler-dark.svg",
                    "https://altar.io/wp-content/uploads/2023/12/client__logo-enterprise-bot-dark.svg",
                    "https://altar.io/wp-content/uploads/2023/12/client__logo-ibm-dark.svg",
                    'https://altar.io/wp-content/uploads/2023/12/client__logo-mckinsey-and-company-dark.svg',
                ].map((src, index) => (
                    <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 mb-4">
                        <div className="bg-white shadow-md p-4 rounded-lg flex justify-center items-center w-full h-24">
                            <img className="max-h-16 md:max-h-20 lg:max-h-24" src={src} alt="Client Logo" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

import AwardCard from "./AwardCard";

export default function Awards() {
    const awardImages = [
        "https://altar.io/wp-content/uploads/2023/12/top_clutch.co_product_design_company_2024_award-759x1024.png.webp",
        "https://altar.io/wp-content/uploads/2023/12/software_developers-1.svg",
        "https://altar.io/wp-content/uploads/2023/12/appfutura-badge-2-1.png.webp",
        "https://altar.io/wp-content/uploads/2023/12/global_award_spring_2024-1024x877.png.webp",
        "https://altar.io/wp-content/uploads/2023/12/top_the_manifest_software_developers_portugal_2023_award-1-702x1024.png.webp",
        "https://altar.io/wp-content/uploads/2023/12/top-software-development-companies-worldwide.webp",
        "https://altar.io/wp-content/uploads/2023/12/clutch_1000_2022_award1-1024x856.png.webp",
        "https://altar.io/wp-content/uploads/2023/09/image-7.png.webp",
        "https://altar.io/wp-content/uploads/2023/09/image-8.png",
        "https://altar.io/wp-content/uploads/2023/12/software_developers-1.svg",
        "https://altar.io/wp-content/uploads/2023/12/clutch_1000_2022_award1-1024x856.png.webp",
        "https://altar.io/wp-content/uploads/2023/12/top-software-development-companies-worldwide.webp"
    ];

    return (
        <section className="p-6 lg:p-16 bg-gray-50">
            {/* Header Section */}
            <div className="text-center mb-8 lg:mb-12">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Awards</h3>
                <p className="text-gray-600 text-lg mt-2 max-w-2xl mx-auto">
                    We are voted a Top Firm by Entrepreneurs and Business Leaders just like you.
                </p>
            </div>

            {/* Awards Grid */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                {awardImages.map((img, index) => (
                    <div key={index} className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex justify-center items-center bg-white shadow-md rounded-lg p-3">
                        <AwardCard img={img} />
                    </div>
                ))}
            </div>
        </section>
    );
}

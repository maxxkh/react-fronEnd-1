export default function ClientInfo() {
    return(
        <section className="clientInfo px-5 text-center mt-10">
            <h1 className="text-4xl font-bold"> Our clients are seen on...</h1>
            <div className="clientsList flex items-center flex-wrap flex-col pt-10 md:flex-row md:justify-center md:gap-20">
                <img src="https://altar.io/wp-content/uploads/2023/12/brand-forbes.png.webp" alt="" className="clientLogo" />
                <img src="https://altar.io/wp-content/uploads/2024/09/techcrunch-vector-logo.svg" alt="" className="clientLogo" />
                <img src="https://altar.io/wp-content/uploads/2024/09/Fast_Company_logo.svg" alt="" className="clientLogo" />
                <img src="https://altar.io/wp-content/uploads/2024/09/techcrunch-vector-logo.svg" alt="" className="clientLogo" />
            </div>
        </section>
    )
}
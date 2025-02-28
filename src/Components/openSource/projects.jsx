import BasicButton from '../SiteAssets/Buttons/BasicButton'

export default function Projects(props) {
    return(
        <section className="prject flex justify-center flex-col items-center">
            <div className="projectText lg:px-96 lg:py-20">
                <h3 className="font-bold text-4xl">Open Source</h3>
                <p className="lg:w2/3">
                We don’t just serve the industry – we’re part of the industry and build technology that is used worldwide.
                </p>
            </div>
            <div className="projectImg flex  flex-col lg:flex lg:justify-around lg:gap-20 lg:h-96 lg:items-start lg:flex-wrap lg:flex-row">
              <img src="https://altar.io/wp-content/uploads/2023/12/open-source-strongloop-1024x1024.jpg.webp" alt="" srcset="" />
              <img src="https://altar.io/wp-content/uploads/2023/12/open-source-loopback-sdk-builder-1024x1024.jpg.webp" alt="" srcset="" />
              <img src="https://altar.io/wp-content/uploads/2023/12/open-source-angular-starter-1024x1024.jpg.webp" alt="" srcset="" />
              <img src="https://altar.io/wp-content/uploads/2023/12/open-source-angulartics-1024x1024.jpg.webp " alt="" />
            </div>
            <BasicButton color='rgb(255, 0, 85)' ButtonText="See all open Source Projects" filled={false} />
        </section>
    )
}
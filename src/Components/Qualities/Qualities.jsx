import React from "react"


const data = [
    {
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="#F2EEF8"></rect><path d="M20.0001 30.078C19.4376 30.078 18.8845 29.9468 18.4345 29.6937L14.0001 27.1343C12.1626 25.8968 12.0408 25.6718 12.0408 23.7312V19.0812C12.0408 17.1405 12.1626 16.9155 13.9626 15.7062L18.4439 13.1187C19.3345 12.603 20.6751 12.603 21.5658 13.1187L26.0001 15.678C27.8376 16.9155 27.9595 17.1405 27.9595 19.0812V23.7312C27.9595 25.6718 27.8376 25.8968 26.0376 27.1062L21.5564 29.6937C21.1158 29.9562 20.5533 30.078 20.0001 30.078ZM20.0001 14.1405C19.6814 14.1405 19.3626 14.2062 19.1376 14.3374L14.7033 16.8968C13.447 17.7499 13.447 17.7499 13.447 19.0812V23.7312C13.447 25.0624 13.447 25.0624 14.7501 25.9437L19.147 28.4749C19.597 28.7374 20.4126 28.7374 20.8626 28.4749L25.297 25.9155C26.5533 25.0624 26.5533 25.0624 26.5533 23.7312V19.0812C26.5533 17.7499 26.5533 17.7499 25.2501 16.8687L20.8533 14.3374C20.6376 14.2062 20.3189 14.1405 20.0001 14.1405Z" fill="#7B5AB4"></path><path d="M25.1563 16.6063C24.7719 16.6063 24.4531 16.2875 24.4531 15.9031V13.4375C24.4531 11.9562 23.825 11.3281 22.3438 11.3281H17.6563C16.175 11.3281 15.5469 11.9562 15.5469 13.4375V15.8375C15.5469 16.2219 15.2281 16.5406 14.8438 16.5406C14.4594 16.5406 14.1406 16.2312 14.1406 15.8375V13.4375C14.1406 11.1687 15.3875 9.92188 17.6563 9.92188H22.3438C24.6125 9.92188 25.8594 11.1687 25.8594 13.4375V15.9031C25.8594 16.2875 25.5406 16.6063 25.1563 16.6063Z" fill="#7B5AB4"></path><path d="M21.528 25.2782C21.3311 25.2782 21.1249 25.2407 20.9186 25.1563L19.9999 24.8L19.0811 25.1657C18.5842 25.3625 18.078 25.3157 17.703 25.0438C17.328 24.7719 17.1311 24.3032 17.1592 23.7688L17.2155 22.7844L16.5874 22.025C16.2499 21.6032 16.1374 21.1157 16.2874 20.6657C16.428 20.225 16.8124 19.8875 17.328 19.7563L18.2842 19.5125L18.8186 18.6782C19.3905 17.7782 20.6186 17.7782 21.1905 18.6782L21.7249 19.5125L22.6811 19.7563C23.1967 19.8875 23.5811 20.225 23.7217 20.6657C23.8624 21.1063 23.7499 21.6032 23.4124 22.0157L22.7842 22.775L22.8405 23.7594C22.8686 24.2938 22.6717 24.7532 22.2967 25.0344C22.0717 25.1938 21.8092 25.2782 21.528 25.2782ZM17.6749 21.125L18.303 21.8844C18.5186 22.1375 18.6405 22.5407 18.6217 22.8688L18.5655 23.8532L19.4842 23.4875C19.7936 23.3657 20.2061 23.3657 20.5155 23.4875L21.4342 23.8532L21.378 22.8688C21.3592 22.5407 21.4811 22.1469 21.6967 21.8844L22.3249 21.125L21.3686 20.8813C21.0499 20.7969 20.7124 20.5532 20.5342 20.2813L20.0092 19.4563L19.4749 20.2813C19.2967 20.5625 18.9592 20.8063 18.6405 20.8907L17.6749 21.125Z" fill="#7B5AB4"></path></svg>,
        title: "Your extended team of co-founders",
        description: "At our core, we design and build high-quality, user-centric software products for entrepreneurs and business leaders. Our approach is deeply rooted in the science of successful product development. This expertise, coupled with our rich entrepreneurial experience, enables us to add extra layers of value."
    },
    {
        svg:<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="#F2EEF8"></rect><path d="M20.1406 26.8906C19.7563 26.8906 19.4375 26.5719 19.4375 26.1875V24.2188C19.4375 23.8344 19.7563 23.5156 20.1406 23.5156C20.525 23.5156 20.8438 23.8344 20.8438 24.2188V26.1875C20.8438 26.5719 20.525 26.8906 20.1406 26.8906Z" fill="#7B5AB4"></path><path d="M25.5312 30.0781H14.75V28.4375C14.75 27.0125 15.9031 25.8594 17.3281 25.8594H22.9531C24.3781 25.8594 25.5312 27.0125 25.5312 28.4375V30.0781ZM16.1562 28.6719H24.125V28.4375C24.125 27.7906 23.6 27.2656 22.9531 27.2656H17.3281C16.6812 27.2656 16.1562 27.7906 16.1562 28.4375V28.6719V28.6719Z" fill="#7B5AB4"></path><path d="M25.7656 30.0781H14.5156C14.1313 30.0781 13.8125 29.7594 13.8125 29.375C13.8125 28.9906 14.1313 28.6719 14.5156 28.6719H25.7656C26.15 28.6719 26.4688 28.9906 26.4688 29.375C26.4688 29.7594 26.15 30.0781 25.7656 30.0781Z" fill="#7B5AB4"></path><path d="M26.028 20.4124C25.8312 20.4124 25.6343 20.328 25.4937 20.1687C25.3155 19.9624 25.2687 19.6718 25.3812 19.428C25.6999 18.6968 25.8593 17.9187 25.8593 17.103V14.2905C25.8593 13.9624 25.803 13.6437 25.6905 13.3062C25.6812 13.278 25.6718 13.2405 25.6624 13.203C25.6343 13.0624 25.6249 12.9218 25.6249 12.7905C25.6249 12.4062 25.9437 12.0874 26.328 12.0874H26.8905C28.5687 12.0874 29.9374 13.4937 29.9374 15.228C29.9374 16.6624 29.3468 18.078 28.3249 19.0999C28.3062 19.1187 28.2499 19.1655 28.2405 19.1749C27.6874 19.6343 27.0593 20.1499 26.2155 20.3843C26.1499 20.403 26.0937 20.4124 26.028 20.4124ZM27.1999 13.5218C27.2468 13.7749 27.2655 14.0374 27.2655 14.2905V17.103C27.2655 17.4874 27.2374 17.853 27.1812 18.228C27.2374 18.1812 27.2843 18.1437 27.3405 18.0968C28.0905 17.3468 28.5312 16.2968 28.5312 15.228C28.5312 14.3843 27.9593 13.6718 27.1999 13.5218Z" fill="#7B5AB4"></path><path d="M13.9812 20.375C13.9062 20.375 13.8406 20.3656 13.7656 20.3375C12.9969 20.0938 12.275 19.6437 11.675 19.0437C10.5969 17.8531 10.0625 16.55 10.0625 15.1719C10.0625 13.4656 11.4031 12.125 13.1094 12.125H13.7187C13.9531 12.125 14.1781 12.2469 14.3094 12.4438C14.4406 12.6406 14.4594 12.8938 14.3656 13.1094C14.2156 13.4469 14.1406 13.8312 14.1406 14.2344V17.0469C14.1406 17.8531 14.3 18.6406 14.6281 19.3906C14.7406 19.6438 14.6844 19.9344 14.5062 20.1406C14.3656 20.2906 14.1781 20.375 13.9812 20.375ZM12.7812 13.5594C12.0219 13.7094 11.4688 14.3656 11.4688 15.1719C11.4688 16.1938 11.8812 17.1781 12.6969 18.0781C12.7344 18.125 12.7812 18.1625 12.8281 18.2C12.7625 17.8156 12.7344 17.4313 12.7344 17.0469V14.2344C12.7344 14.0094 12.7531 13.7844 12.7812 13.5594Z" fill="#7B5AB4"></path><path d="M20 24.4531C15.9969 24.4531 12.7344 21.1906 12.7344 17.1875V14.375C12.7344 11.9188 14.7313 9.92188 17.1875 9.92188H22.8125C25.2687 9.92188 27.2656 11.9188 27.2656 14.375V17.1875C27.2656 21.1906 24.0031 24.4531 20 24.4531ZM17.1875 11.3281C15.5094 11.3281 14.1406 12.6969 14.1406 14.375V17.1875C14.1406 20.4219 16.7656 23.0469 20 23.0469C23.2344 23.0469 25.8594 20.4219 25.8594 17.1875V14.375C25.8594 12.6969 24.4906 11.3281 22.8125 11.3281H17.1875Z" fill="#7B5AB4"></path></svg>,
        title:'Tangible results',
         description: 'We have an enviable track record of helping two-thirds of our clients achieve VC funding in an ecosystem where only ~0.05% of startups ever see that landmark.'
    }

]

export default function Qualities(params) {
    return(
        <section className="QualitiesSection lg:px-56 lg:inline-flex overflow-x-hidden  bg-white my-10 py-10 px-5">
            <div className="textContainer lg:w-[40%]">

                <div className="topText">
                    <h1 className="text-4xl font-bold">Why choose Altar for your next business venture?</h1>
                    <p className="text-gray-700 mt-5 text-[16px] font-semibold">Our company was formed by ex-startup founders that learned how to bring new innovative products to market by doing it.</p>
                </div>
                <div className="qualities lg:px-5  pt-10">
                    {data.map((item, index) => (
                        <div key={index} className="qualityCard mt-5 bg-white shadow-md rounded-lg p-5">
                            <h1 className="  text-[156x] font-bold flex items-center gap-3">
                                {item.svg}
                                {item.title}
                            </h1>
                            <p className="text-gray-700 pt-5">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="img h-screen w-[1000px]  lg:w-[800px] overflow-hidden ">
                <img
                    className="w-full h-auto translate-x-[-150px] md:translate-x-0 md:w-[800px]"
                    src="https://altar.io/wp-content/uploads/2023/12/fave-mockup-phone.png"
                    alt="Fave Mockup Phone"
                />  
            </div>
        </section>
    )
}
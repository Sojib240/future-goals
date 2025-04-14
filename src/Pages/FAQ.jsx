import React, { useState } from "react";
import CommonHero2 from "../Components/Common/CommonHero2";
import PageAnimation from "../Components/PageAnimation";

const FAQ = () => {
    document.title = "FAQ → Future Goals";
    const FaqData = [
        {
            id: 1,
            question: `<p>What is the main focus of the partnership?</p>`,
            answer: `
            <p>
                Making football available to everyone, and inspiring and motivating the next generation when it comes to playing the game. That is why we start at all primary schools in Curaçao, where we can nurture the next generation. We want to honor the island’s surroundings by working with local partners and facilitating football goals that are creatively made from fishing nets and plastic waste.
            </p>
            `,
        },
        {
            id: 2,
            question: `<p>How many primary schools are involved?</p>`,
            answer: `
            <p className="text-[15px] sm:text-[17px] leading-[25px] sm:leading-[27px] mb-6">
                As a Caribbean organization, the Sandals Foundation is committed to improving the lives of residents and creating positive and sustainable change in the islands in which we operate. Through our three pillars of work – education, community and the environment, the Foundation galvanizes the power of our team members, partners, travel agents, and guests to inspire hope and drive change.
            </p>
            <p>
                Future Goals is an example of our continued commitment to community development and ensuring we have a positive impact on our home and the islands where we operate. Ahead of the debut of Sandals Royal Curacao, we’re laying the groundwork for our entry to the destination using the plastic waste and fishing nets collected from the ocean to create sustainable football nets for children to enjoy in primary schools around the island of Curaçao. Sandals Resorts was already partnering with Limpi by donating to the company to ensure they have the proper equipment to manufacture the unique products they make out of recycled plastics. We are here to support every step of the process, ensuring we do our best to meet our goal of putting Future Goals in 48 schools in Curaçao and beyond.
            </p>`,
        },
        {
            id: 3,
            question: `<p>Are there other partners involved?</p>`,
            answer: `
            <p className="text-[15px] sm:text-[17px] leading-[25px] sm:leading-[27px] mb-6">
                Ajax and Sandals Resorts are the main initiators. Additionally, in light of the partnership between Ajax and Curaçao and the new Sandals Royal Curaçao opening on 1st June, the Curaçao Tourist Board is an important partner. And then there is adidas: as a main sponsor of Ajax they were more than willing to equip all participating primary schools with balls and the Future Coaches with their outfits.
            </p>
            <p>
                One of the main objectives of Future Goals is to give back to the local community, that’s why we involve local parties where we can. For example Limpi, a Curaçao based plastic recycling company, which is in charge of manufacturing the goals from fishing nets and plastic waste. Or the Future Coaches, the local youth trained by Ajax coaches, who are locally recruited by Favela Street, a foundation that aims to create a new generation of role models by the power of football.
            </p>
            `,
        },
        {
            id: 4,
            question: `<p>Can other partners join?</p>`,
            answer: `
            <p>
                Future Goals is always open for collaboration with partners that add value to our shared mission; encourage children in the Caribbean to play and enjoy football with sustainably produced resources. Ready to join the movement? Get in touch and reach out to us via our contact form.
            </p>
            `,
        },
        {
            id: 5,
            question: `<p>How are the goals manufactured?</p>`,
            answer: `
            <p className="text-[15px] sm:text-[17px] leading-[25px] sm:leading-[27px] mb-6">
                The nets are made out of 100% old fishing nets from the ocean and the goalposts out of recycled plastic. A combination of ocean- and plastic waste from the island is used to manufacture the goalposts. To ensure quality, safety and long lasting use a combination of different plastic materials is used. With our promise ‘from the ocean, for the future’ in mind we always strive to incorporate at least 30% of ocean waste in each goal. A higher number of recycled ocean plastic is not doable because of the low quality of ocean plastic.
            </p>
            <p>
                The goals itself are 100% recycled, except for the construction screws. Even the clamps used to hang the nets are made out of recycled plastic.
            </p>
            `,
        },
        {
            id: 6,
            question: `<p>How sustainable are the Future Goals?</p>`,
            answer: `
            <p className="text-[15px] sm:text-[17px] leading-[25px] sm:leading-[27px] mb-6">
                The Future Goals are made out of 100% recycled materials. Materials that are (mainly) manufactured with a single use approach. Future Goals provide plastic waste that would otherwise end up wandering in the ocean, with a ‘second chance’.
            </p>
            <p>
                Except for the screws and some aluminum to strengthen the upper bar, no ‘virgin’ materials are used to construct the Future Goals. This is quite remarkable, as recycling more often than not also integrates new materials. What’s more, since both the used materials as well as the production process find their origin in Curacao no extensive transport is needed.
            </p>`,
        },
        {
            id: 7,
            question: `<p>What does the program consist of?</p>`,
            answer: `
            <p>
                Expanding opportunities for children through the power of youth sports, the partnership will outfit all primary schools throughout the island of Curaçao with Future Goals - football goals made out of fishing nets sourced from the ocean and plastic waste. Complemented by a unique 8-week school program. Ajax will mentor local youngsters from the island into Future Coaches, who will be trained and equipped to provide the curriculum to future generations. Not only will Future Coaches teach children football techniques, they’ll serve as role models for their local communities and peers, using the sport as a means to encourage sportsmanship, team learning and more. The first year concludes with the Future Goals League; a final and islandwide tournament in which all participating schools compete to win the Future Goals Cup.
            </p>
            `,
        },
        {
            id: 8,
            question: `<p>What is the target audience?</p>`,
            answer: `
            <p>
                Children in the age of 8-12 years, as the program will be provided for all primary schools in Curaçao.
            </p>`,
        },
        {
            id: 9,
            question: `<p>When and where does the program start?</p>`,
            answer: `
            <p>
                The first schools start in september 2022.
            </p>`,
        },
        {
            id: 10,
            question: `<p>Are there broader Carribean plans as well?</p>`,
            answer: `
            <p>
                It’s our mission to expand Future Goals Caribbean-wide, one island at a time.
            </p>`,
        },
        {
            id: 11,
            question: `<p>What is the role of Ajax?</p>`,
            answer: `
            <p>
               Ajax will mentor the Future Coaches to ensure these local youngsters are well equipped to provide the curriculum. They will do so in collaboration with Favela Street; a local foundation that’s in charge of the recruitment and training of the Future Coaches and aims to turn youngsters into role models through the power of football. Favela Street is headed up by Director Roxeanne Hehakaija, a former player of the Dutch women's football team who is well at home in the industry. Ajax will attend and monitor the program on multiple key moments throughout the year.
            </p>`,
        },
        {
            id: 12,
            question: `<p>How can I subscribe?</p>`,
            answer: `
            <div>
               Via the form at the <Link to={"/school-portal"}>School Portal</Link>.
            </div>`,
        },
        {
            id: 13,
            question: `<p>Why start in Curacao?</p>`,
            answer: `
            <p>
               Taking into account that Sandals Resorts is about to open a new resort on the island and the existing relationship between Ajax and Curaçao, starting our Caribbean journey in Curaçao was the natural first step in this land-mark partnership. However, the aim for the coming years is to expand the program Carribean-wide.
            </p>`,
        },
    ];
    const [accordianOpen, setAccordianOpen] = useState(
        FaqData.map((item) => item.id)
    );

    const handleAccordian = (id) => {
        setAccordianOpen((prev) =>
            prev.includes(id)
                ? prev.filter((itemId) => itemId !== id)
                : [...prev, id]
        );
    };

    return (
        <PageAnimation>
            <div className="">
                <CommonHero2
                    title="FAQ"
                    backgroundImage={"/Images/News/news-1c.jpg"}
                    subtitle={"Check our frequently asked questions below."}
                    bgColor={"bg-[#00000095]"}
                    margins={"mt-2 lg:mt-5 xl:mt-10"}
                    sizes={
                        "text-[13vw] leading-[13.5vw] sm:text-[55px] md:text-[60px] lg:text-[90px] xl:text-[115px] text-[#F1EAE2] sm:leading-[120%]"
                    }
                    logo={null}
                    paddings={
                        "pt-44 sm:pt-44 md:pt-50 lg:pt-58 xl:pt-62 2xl:pt-64 pb-16 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-23 2xl:pb-26"
                    }
                />
                <div className="bg-[#F2EBE3] px-4 md:px-8 lg:px-10 xl:px-10 pt-12 sm:pt-16 md:pt-20 pb-24">
                    <div className="max-w-[1600px] w-full mx-auto">
                        <div className="first-section">
                            <h4 className="font-BriceSemiBold text-base sm:text-xl lg:text-2xl xl:text-[28px] mb-6 text-center uppercase">
                                Overall
                            </h4>
                            <div className="flex flex-col md:flex-row gap-5 md:gap-8">
                                <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-8">
                                    {FaqData.slice(0, 2).map((item) => (
                                        <div
                                            key={item.id}
                                            className="rounded-3xl bg-[#FCFCFC] px-5 sm:px-6 xl:px-8 pt-5 sm:pt-6 xl:pt-8 overflow-hidden"
                                        >
                                            <button
                                                onClick={() =>
                                                    handleAccordian(item.id)
                                                }
                                                className="w-full mb-3 lg:mb-5 cursor-pointer text-left"
                                            >
                                                <div
                                                    className="font-BriceBold text-[20px] md:text-[24px] lg:text-[28px] xl:text-[26px] 2xl:text-[33px] leading-[23px] sm:leading-[27px] md:leading-[27px] lg:leading-[31px] xl:leading-[29px] 2xl:leading-[36px] uppercase"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.question,
                                                    }}
                                                />
                                            </button>
                                            <div
                                                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                                    accordianOpen.includes(
                                                        item.id
                                                    )
                                                        ? "grid-rows-[1fr]"
                                                        : "grid-rows-[0fr]"
                                                }`}
                                            >
                                                <div className="overflow-hidden font-font3 text-sm sm:text-base leading-[25px]">
                                                    <div
                                                        className="pb-5 sm:pb-6 xl:pb-8 font-PoppinsRegular text-sm xl:text-[15px] 2xl:text-base leading-[23px] sm:leading-[25px] 2xl:leading-[27px] flex flex-col gap-3 md:gap-5"
                                                        dangerouslySetInnerHTML={{
                                                            __html: item.answer,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-8">
                                    {FaqData.slice(2, 4).map((item) => (
                                        <div
                                            key={item.id}
                                            className="rounded-3xl bg-[#FCFCFC] px-5 sm:px-6 xl:px-8 pt-5 sm:pt-6 xl:pt-8 overflow-hidden"
                                        >
                                            <button
                                                onClick={() =>
                                                    handleAccordian(item.id)
                                                }
                                                className="w-full mb-3 lg:mb-5 cursor-pointer text-left"
                                            >
                                                <div
                                                    className="font-BriceBold text-[20px] md:text-[24px] lg:text-[28px] xl:text-[26px] 2xl:text-[33px] leading-[23px] sm:leading-[27px] md:leading-[27px] lg:leading-[31px] xl:leading-[29px] 2xl:leading-[36px] uppercase"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.question,
                                                    }}
                                                />
                                            </button>
                                            <div
                                                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                                    accordianOpen.includes(
                                                        item.id
                                                    )
                                                        ? "grid-rows-[1fr]"
                                                        : "grid-rows-[0fr]"
                                                }`}
                                            >
                                                <div className="overflow-hidden font-font3 text-sm sm:text-base leading-[25px]">
                                                    <div
                                                        className="pb-5 sm:pb-6 xl:pb-8 font-PoppinsRegular text-sm xl:text-[15px] 2xl:text-base leading-[23px] sm:leading-[25px] 2xl:leading-[27px] flex flex-col gap-3 md:gap-5"
                                                        dangerouslySetInnerHTML={{
                                                            __html: item.answer,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="second-section mt-12 md:mt-20">
                            <h4 className="font-BriceSemiBold text-base sm:text-xl lg:text-2xl xl:text-[28px] mb-6 text-center uppercase">
                                Future Goals
                            </h4>
                            <div className="flex flex-col md:flex-row gap-5 md:gap-8">
                                <div className="w-full md:w-1/2 flex flex-col gap-8">
                                    {FaqData.slice(4, 5).map((item) => (
                                        <div
                                            key={item.id}
                                            className="rounded-3xl bg-[#FCFCFC] px-5 sm:px-6 xl:px-8 pt-5 sm:pt-6 xl:pt-8 overflow-hidden"
                                        >
                                            <button
                                                onClick={() =>
                                                    handleAccordian(item.id)
                                                }
                                                className="w-full mb-3 lg:mb-5 cursor-pointer text-left"
                                            >
                                                <div
                                                    className="font-BriceBold text-[20px] md:text-[24px] lg:text-[28px] xl:text-[26px] 2xl:text-[33px] leading-[23px] sm:leading-[27px] md:leading-[27px] lg:leading-[31px] xl:leading-[29px] 2xl:leading-[36px] uppercase"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.question,
                                                    }}
                                                />
                                            </button>
                                            <div
                                                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                                    accordianOpen.includes(
                                                        item.id
                                                    )
                                                        ? "grid-rows-[1fr]"
                                                        : "grid-rows-[0fr]"
                                                }`}
                                            >
                                                <div className="overflow-hidden font-font3 text-sm sm:text-base leading-[25px]">
                                                    <div
                                                        className="pb-5 sm:pb-6 xl:pb-8 font-PoppinsRegular text-sm xl:text-[15px] 2xl:text-base leading-[23px] sm:leading-[25px] 2xl:leading-[27px] flex flex-col gap-3 md:gap-5"
                                                        dangerouslySetInnerHTML={{
                                                            __html: item.answer,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col gap-8">
                                    {FaqData.slice(5, 6).map((item) => (
                                        <div
                                            key={item.id}
                                            className="rounded-3xl bg-[#FCFCFC] px-5 sm:px-6 xl:px-8 pt-5 sm:pt-6 xl:pt-8 overflow-hidden"
                                        >
                                            <button
                                                onClick={() =>
                                                    handleAccordian(item.id)
                                                }
                                                className="w-full mb-3 lg:mb-5 cursor-pointer text-left"
                                            >
                                                <div
                                                    className="font-BriceBold text-[20px] md:text-[24px] lg:text-[28px] xl:text-[26px] 2xl:text-[33px] leading-[23px] sm:leading-[27px] md:leading-[27px] lg:leading-[31px] xl:leading-[29px] 2xl:leading-[36px] uppercase"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.question,
                                                    }}
                                                />
                                            </button>
                                            <div
                                                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                                    accordianOpen.includes(
                                                        item.id
                                                    )
                                                        ? "grid-rows-[1fr]"
                                                        : "grid-rows-[0fr]"
                                                }`}
                                            >
                                                <div className="overflow-hidden font-font3 text-sm sm:text-base leading-[25px]">
                                                    <div
                                                        className="pb-5 sm:pb-6 xl:pb-8 font-PoppinsRegular text-sm xl:text-[15px] 2xl:text-base leading-[23px] sm:leading-[25px] 2xl:leading-[27px] flex flex-col gap-3 md:gap-5"
                                                        dangerouslySetInnerHTML={{
                                                            __html: item.answer,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="third-section mt-12 md:mt-20">
                            <h4 className="font-BriceSemiBold text-base sm:text-xl lg:text-2xl xl:text-[28px] mb-6 text-center uppercase">
                                Future Goals Program
                            </h4>
                            <div className="flex flex-col md:flex-row gap-5 md:gap-8">
                                <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-8">
                                    {FaqData.slice(6, 10).map((item) => (
                                        <div
                                            key={item.id}
                                            className="rounded-3xl bg-[#FCFCFC] px-5 sm:px-6 xl:px-8 pt-5 sm:pt-6 xl:pt-8 overflow-hidden"
                                        >
                                            <button
                                                onClick={() =>
                                                    handleAccordian(item.id)
                                                }
                                                className="w-full mb-3 lg:mb-5 cursor-pointer text-left"
                                            >
                                                <div
                                                    className="font-BriceBold text-[20px] md:text-[24px] lg:text-[28px] xl:text-[26px] 2xl:text-[33px] leading-[23px] sm:leading-[27px] md:leading-[27px] lg:leading-[31px] xl:leading-[29px] 2xl:leading-[36px] uppercase"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.question,
                                                    }}
                                                />
                                            </button>
                                            <div
                                                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                                    accordianOpen.includes(
                                                        item.id
                                                    )
                                                        ? "grid-rows-[1fr]"
                                                        : "grid-rows-[0fr]"
                                                }`}
                                            >
                                                <div className="overflow-hidden font-font3 text-sm sm:text-base leading-[25px]">
                                                    <div
                                                        className="pb-5 sm:pb-6 xl:pb-8 font-PoppinsRegular text-sm xl:text-[15px] 2xl:text-base leading-[23px] sm:leading-[25px] 2xl:leading-[27px] flex flex-col gap-3 md:gap-5"
                                                        dangerouslySetInnerHTML={{
                                                            __html: item.answer,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-8">
                                    {FaqData.slice(10, 13).map((item) => (
                                        <div
                                            key={item.id}
                                            className="rounded-3xl bg-[#FCFCFC] px-5 sm:px-6 xl:px-8 pt-5 sm:pt-6 xl:pt-8 overflow-hidden"
                                        >
                                            <button
                                                onClick={() =>
                                                    handleAccordian(item.id)
                                                }
                                                className="w-full mb-3 lg:mb-5 cursor-pointer text-left"
                                            >
                                                <div
                                                    className="font-BriceBold text-[20px] md:text-[24px] lg:text-[28px] xl:text-[26px] 2xl:text-[33px] leading-[23px] sm:leading-[27px] md:leading-[27px] lg:leading-[31px] xl:leading-[29px] 2xl:leading-[36px] uppercase"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.question,
                                                    }}
                                                />
                                            </button>
                                            <div
                                                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                                    accordianOpen.includes(
                                                        item.id
                                                    )
                                                        ? "grid-rows-[1fr]"
                                                        : "grid-rows-[0fr]"
                                                }`}
                                            >
                                                <div className="overflow-hidden font-font3 text-sm sm:text-base leading-[25px]">
                                                    <div
                                                        className="pb-5 sm:pb-6 xl:pb-8 font-PoppinsRegular text-sm xl:text-[15px] 2xl:text-base leading-[23px] sm:leading-[25px] 2xl:leading-[27px] flex flex-col gap-3 md:gap-5"
                                                        dangerouslySetInnerHTML={{
                                                            __html: item.answer,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageAnimation>
    );
};

export default FAQ;

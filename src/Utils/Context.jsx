import React, { useState } from "react";
import { createContext } from "react";

export const NewsContext = createContext();

const Context = (props) => {
    const [news, setNews] = useState([
        {
            id: 1,
            title: "World Oceans Day: Art Challenge",
            shortDescription:
                "The 2023-2024 Future Goals academic year wrapped up with elementary students from fourteen schools around the island competing in an...",
            publishedDate: "8 July — Curacao",
            slug: "world-oceans-day-art-challenge",
            image: "/Images/News/future-goals-x-sandals.jpg",
            pageContent: (openCloseVideo, setOpenCloseVideo, setVideoSrc) => {
                return (
                    <div className="w-full">
                        <div className="">
                            <p className="font-BriceBold text-[22px] sm:text-[25px] md:text-[28px] lg:text-[32px] xl:text-[38px] leading-[135%] lg:leading-[125%]">
                                “FUTURE GOALS” PROGRAM CELEBRATES SECOND YEAR
                                WITH ECO-FRIENDLY ART CHALLENGE FOR KIDS
                            </p>
                            <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                The 2023-2024 Future Goals academic year wrapped
                                up with elementary students from fourteen
                                schools around the island competing in an
                                immersive plastic Art Challenge, with a grand
                                prize recognition of having their work appear on
                                billboards across Curaçao.
                            </p>

                            <div className="w-full overflow-hidden rounded-xl md:rounded-2xl aspect-[3/2] mt-8 sm:mt-10 md:mt-18 lg:mt-24">
                                <img
                                    className="w-full h-full object-cover"
                                    src="/Images/News/whatsapp-image-2.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="mt-8 sm:mt-10 md:mt-18 lg:mt-24">
                            <p className="">
                                On May 23, 180 students gathered at the Maritiem
                                Museum Curacao to present their creative plastic
                                art projects made from PET bottles, caps, and
                                packing materials. Students explained their
                                masterpieces to a panel of judges from Sandals
                                Resorts, Sandals Foundation, the Ajax Coaching
                                Academy (ACA), and local company Limpi Recycling
                                – who together founded and operate the popular
                                program that repurposes plastic waste and
                                fishing nets lost at sea into colorful football
                                goals for school children.
                            </p>
                            <button
                                onClick={() => {
                                    setOpenCloseVideo(!openCloseVideo);
                                    setVideoSrc(
                                        "/Videos/Future-Goals-Art-Challenge-By-Sandals-Resorts-and-AFC-Ajax.mp4"
                                    );
                                }}
                                className="w-full overflow-hidden rounded-xl md:rounded-2xl aspect-[3/2] mt-8 sm:mt-10 md:mt-18 lg:mt-24 relative group cursor-pointer"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="/Images/News/futuregoals1.jpg"
                                    alt=""
                                />
                                <div className="overlay h-full w-full absolute bottom-0 left-0 bg-[#1E1E1E40] group-hover:opacity-100 opacity-0 transition-all duration-500"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-13 sm:h-13 md:w-15 md:h-15 xl:w-18 xl:h-18 bg-white rounded-full flex items-center justify-center border-[2px] overflow-hidden">
                                    <img
                                        className="z-20 w-3 sm:w-3.5 md:w-4 relative transition-all duration-300 ease-in-out group-hover:invert"
                                        src="/Images/Icons/play.svg"
                                        alt="Play Icon"
                                    />
                                    <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-22 h-22 bg-[#1E1E1E] scale-0 group-hover:scale-125 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0"></span>
                                </div>
                            </button>
                            <p className="mt-8 sm:mt-10 md:mt-18 lg:mt-24">
                                Each team had just 60 seconds to impress the
                                judges with their work, competing for the big
                                prize: representing their schools on 14
                                personalized billboards to be unveiled on World
                                Oceans Day celebrated each year on June 8th.
                                With the billboards, the Future Goals
                                organization hopes to inspire more people to
                                take care of Curaçao and its natural resources.
                            </p>
                            <p className=" mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                “The Ajax Coaching Academy helped to develop a
                                program based on our core value: teaching kids
                                how to win. Today showed the result of two years
                                of shaping young champions who understand how
                                our actions affect the planet. Their art is full
                                of hope towards a positive future,” said Roy
                                Lagendijk - Football expert ACA. “We focused on
                                their creativity, use of materials, and the
                                stories behind their artwork. We're really proud
                                to see all the beautiful work and stories out
                                here today.’’
                            </p>
                            <div className="w-full overflow-hidden rounded-xl md:rounded-2xl aspect-[3/2] mt-8 sm:mt-10 md:mt-18 lg:mt-24">
                                <img
                                    className="w-full h-full object-cover"
                                    src="/Images/News/future-goals-x-sandals-23.jpg"
                                    alt=""
                                />
                            </div>
                            <p className="mt-8 sm:mt-10 md:mt-18 lg:mt-24">
                                The Future Goals program, in partnership with
                                Limpi Recycling, is a one-of-a-kind initiative
                                that builds on youngsters’ love of the game of
                                football while teaching life skills and
                                empowering participants to take care of their
                                environment by making soccer goals from fishing
                                nets and plastic waste. Since its start in 2022,
                                students from 23 primary schools - 63 classes in
                                total - have taken part in an 8-week curriculum
                                of classroom and field lessons taught by local
                                Future Coaches trained by the Ajax Coaching
                                Academy.
                            </p>
                            <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                “The Future Goals Art Challenge was designed to
                                spark creativity, storytelling, and innovation
                                in students, while also inspiring the community
                                to follow their example,” said Patrice Gilpin,
                                Public Relations Manager at Sandals Foundation.
                            </p>
                            <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                To date,
                                <span className="font-PoppinsBold">
                                    1,750 kg of plastic
                                </span>
                                and
                                <span className="font-PoppinsBold">
                                    190 m² fishing nets
                                </span>
                                have been pulled from the ocean and repurposed
                                into
                                <span className="font-PoppinsBold">
                                    46 football goals
                                </span>
                                and counting. Additionally, 40 classes totaling
                                880 children have received lessons on the
                                importance of ocean conservation in alignment
                                with the Future Goals program.
                            </div>
                            <div className="w-full overflow-hidden rounded-xl md:rounded-2xl aspect-[3/2] mt-8 sm:mt-10 md:mt-18 lg:mt-24">
                                <img
                                    className="w-full h-full object-cover"
                                    src="/Images/News/1-billboard-1-fotor.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                );
            },
        },
        {
            id: 2,
            title: "Vacancy: Future Coach",
            shortDescription: "Do you want to be a Future Coach?",
            publishedDate: "12 December — Curacao",
            slug: "vacancy-future-coach",
            image: "/Images/News/whatsapp-image.jpg",
            pageContent: () => {
                return (
                    <div>
                        <p className="font-PoppinsBold">
                            Word jij één van onze Future Coaches?
                        </p>
                        <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                            Half mei 2024 is AFC Ajax op Curaçao om de opleiding
                            tot Future Goals Coach te verzorgen. Als coach geven
                            we je de kans om als (bij)baan aan de slag te gaan
                            en het Future Goals programma te verzorgen voor de
                            groepen 6 van basisscholen op het eiland. Het
                            programma gebruikt de kracht en het plezier van
                            voetbal om kinderen ‘life skills’ en het belang van
                            goed omgaan met hun leefomgeving te leren.
                        </p>
                        <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                            Interesse? Voor de volledige vacaturetekst kan je
                            onze site bezoeken. Aanmelden kan tot 27 maart 2024
                            door een mail te sturen naar info@futuregoals.com
                            met je CV en motivatiebrief.
                        </p>
                        <div className="w-full overflow-hidden rounded-xl md:rounded-2xl aspect-[3/2] mt-8 sm:mt-10 md:mt-18 lg:mt-24">
                            <img
                                className="w-full h-full object-cover"
                                src="/Images/News/schermafbeelding-2.jpg"
                                alt=""
                            />
                        </div>
                        <div className="mt-8 sm:mt-10 md:mt-18 lg:mt-24">
                            <p className="font-PoppinsBold">Vereisten</p>
                            <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                • Affiniteit met het geven van (sport) lessen
                            </p>
                            <p className="mt-1 sm:mt-2 lg:mt-3">
                                • Woonachtig in Curaçao
                            </p>
                            <p className="mt-1 sm:mt-2 lg:mt-3">
                                • Minimaal 4 uur per week beschikbaar
                            </p>
                            <p className="mt-1 sm:mt-2 lg:mt-3">
                                • Talen: Nederlands & Papiaments
                            </p>
                            <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                Future Goals is een initiatief van AFC Ajax en
                                Sandals Resorts. Meer weten over het programma,
                                kijk op deze pagina.
                            </p>
                        </div>
                    </div>
                );
            },
        },
        {
            id: 3,
            title: "Interview with Limpi Recycling",
            shortDescription:
                "“In order to create one Future Goal we need approximately 30 kilos of plastic waste”. An interview with local organization Limpi Recycling.",
            publishedDate: "19 May — Curacao",
            slug: "interview-with-limpi-recycling",
            image: "/Images/News/news-3-interview-limpi.jpg",
            pageContent: (openCloseVideo, setOpenCloseVideo, setVideoSrc) => {
                return (
                    <div className="w-full">
                        <div className="mt-8 sm:mt-10 md:mt-18 lg:mt-24">
                            <p className="font-PoppinsBold">
                                Can you tell us a bit more about Limpi and the
                                products that you make?
                            </p>
                            <p className="">
                                Mitchell: Limpi was founded in 2017 and we make
                                a large variety of products from small to big,
                                We started with keychains and coasters, but
                                nowadays we are able to make table-tops, trash
                                bins and even Future Goals!
                            </p>
                            <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                Debrah: Yes, the Future Goals are a great
                                example of our custom-made products. We love
                                those types of projects, because it gives up the
                                opportunity to design from scratch and since we
                                are still product engineers that love a good
                                challenge we were really excited when Ajax and
                                Sandals Resorts International came with us with
                                the idea of the colorful Future Goals.
                            </p>
                            <div className="w-full overflow-hidden rounded-xl md:rounded-2xl aspect-[3/2] mt-8 sm:mt-10 md:mt-18 lg:mt-24">
                                <img
                                    className="w-full h-full object-cover"
                                    src="/Images/News/news-1-ajax-and-sandals.jpg"
                                    alt=""
                                />
                            </div>
                            <p className="text-xs mt-4">Future Goals</p>

                            <p className="mt-8 sm:mt-10 md:mt-18 lg:mt-24 font-PoppinsBold">
                                What makes Future Goals special?
                            </p>
                            <p>
                                Mitchell: The Future Goals stand out because
                                they are created to make an impact. Like all of
                                our products they offer a solution to plastic
                                waste and by doing so raise awareness as well.
                                We show how valuable plastic waste can be and in
                                that sense hope to encourage more people to
                                recycle.
                            </p>
                            <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                Debrah: Besides the recycling aspect there is
                                more to Future Goals. Think about the positive
                                impact this will have on the children and most
                                importantly there is no greater feeling than
                                being able to give back to your community.
                            </p>
                            <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 font-PoppinsBold">
                                That’s how you came across the Sandals
                                Foundation right?
                            </p>
                            <p>
                                Debrah: Yes, even before opening their new
                                resort here on the island they reached out to
                                us. We were already in contact with Sandals
                                Resorts about selling our recycled souvenirs in
                                their resort shop. Based on this relation
                                Sandals Foundation, the philanthropic arm,
                                decided to help us out. They donated multiple
                                much needed machines in order to create new
                                types of products and make our processes more
                                efficient. One of the machines donated is used
                                to make the goalposts for the Future Goals.
                            </p>
                            <p className="mt-8 sm:mt-10 md:mt-18 lg:mt-24 font-BriceBold text-[22px] sm:text-[25px] md:text-[28px] lg:text-[32px] xl:text-[38px] leading-[135%] lg:leading-[125%] uppercase">
                                "Sandals Foundation donated multiple much needed
                                machines in order to create new types of
                                products"
                            </p>
                            <button
                                onClick={() => {
                                    setOpenCloseVideo(!openCloseVideo);
                                    setVideoSrc(
                                        "/Videos/Future-Goals-From-the-ocean-for-the-future.mp4"
                                    );
                                }}
                                className="w-full overflow-hidden rounded-xl md:rounded-2xl aspect-[3/2] mt-8 sm:mt-10 md:mt-18 lg:mt-24 relative group cursor-pointer"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="/Images/sandals-curacao.jpg"
                                    alt=""
                                />
                                <div className="overlay h-full w-full absolute bottom-0 left-0 bg-[#1E1E1E40] group-hover:opacity-100 opacity-0 transition-all duration-500"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-13 sm:h-13 md:w-15 md:h-15 xl:w-18 xl:h-18 bg-white rounded-full flex items-center justify-center border-[2px] overflow-hidden">
                                    <img
                                        className="z-20 w-3 sm:w-3.5 md:w-4 relative transition-all duration-300 ease-in-out group-hover:invert"
                                        src="/Images/Icons/play.svg"
                                        alt="Play Icon"
                                    />
                                    <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-22 h-22 bg-[#1E1E1E] scale-0 group-hover:scale-125 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0"></span>
                                </div>
                            </button>
                            <p className="mt-8 sm:mt-10 md:mt-18 lg:mt-24 font-PoppinsBold">
                                How does it work, manufacturing a Future Goal?
                            </p>
                            <p>
                                Mitchell: In order to create one Future Goal we
                                need approximately 30 kilos of plastic waste.
                                That’s a lot and a great motivation, because
                                this plastic would have otherwise ended up in
                                the ocean, the streets or in the landfill.
                                Plastic waste is both collected at home and
                                brought to us. There are companies that recycle
                                their plastic through us and we do beach clean
                                ups as well
                            </p>
                            <p className="mt-8 sm:mt-10 md:mt-18 lg:mt-24 font-BriceBold text-[22px] sm:text-[25px] md:text-[28px] lg:text-[32px] xl:text-[38px] leading-[135%] lg:leading-[125%] uppercase">
                                "In order to create one Future Goal we need
                                approximately 30 kilos of plastic waste"
                            </p>
                            <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                Debrah: In case of the Future Goals - besides
                                plastic waste - we work with old fishing nets as
                                well. Also known as ‘ghost nets’, abandoned nets
                                found in the ocean or washed ashore. All the
                                work on the goal nets is done manually, we
                                clean, repair and cut the nets and we secure
                                them with special clips, made from recycled old
                                black plastic bottles. The beams are made with
                                an extruder machine, but not before the plastic
                                is thoroughly cleaned, sorted by color and
                                finally shredded.
                            </p>
                            <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                Mitchell: It’s a lot of work, especially because
                                of the color gradient in the goal posts. But
                                it’s totally worth it. The Future Goals look
                                amazing and at the same time they raise
                                awareness, contribute to the recycling of
                                plastic waste on the island and make sure that
                                lots of local children can enjoy the game of
                                football!
                            </p>
                            <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                More information about Limpi, visit
                                <a
                                    className="underline italic ml-1"
                                    href="https://limpirecycling.com/"
                                    target="_blank"
                                >
                                    Limpi Recycling.
                                </a>
                            </div>
                        </div>
                    </div>
                );
            },
        },
        {
            id: 4,
            title: "MGR. Niewindt College receives first Future Goals",
            shortDescription:
                "Today was most definitely not an ordinary school day for the children of the MGR. Nieuwindt college in Curaçao. The first school on the island to receive th...",
            publishedDate: "19 May — Curacao",
            slug: "mgr-niewindt-college-receives-first-future-goals",
            image: "/Images/News/news-1a.jpg",
            pageContent: () => {
                return (
                    <div>
                        <p className="">
                            Today was most definitely not an ordinary school day
                            for the children of the MGR. Nieuwindt college in
                            Curaçao. The first school on the island to receive
                            the colorful Future Goals. Handed over by none other
                            than Ajax players themselves. All in the context of
                            Future Goals - a new program - initiated by AFC Ajax
                            and Sandals Resorts International - in order to
                            encourage children to enjoy and play football.
                        </p>
                        <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                            The Future Goals, creatively made from fishing nets
                            sourced from the ocean and plastic waste, are
                            donated to the school together with a net full of
                            balls. By doing so all children can enjoy and play
                            on a daily basis. For group six in particular, the
                            equipment is accompanied by an 8-week sports program
                            designed by Ajax. With a common objective of
                            empowering children through the game of football.
                            The first primary schools will start with the
                            program in September and all primary schools have
                            the opportunity to participate.
                        </p>
                        <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                            The first Future Goals recipient, Jeanne Hellburg,
                            Head Principal at primary school MGR. Niewindt
                            College, said:
                            <span className="italic font-PoppinsBold">
                                “ Today was really special, a once in a lifetime
                                opportunity for our children to engage and play
                                with football players from Ajax. The game of
                                football is quite popular at our school and I
                                know for sure that we will have lots of fun with
                                the Future Goals and accompanied balls ”
                            </span>
                        </div>
                    </div>
                );
            },
        },
        {
            id: 5,
            title: "Ajax, SRI and its Foundation sign partnership",
            shortDescription:
                "From fishing nets to football goals: Ajax and Sandals Resorts International join forces to facilitate youth football in the Caribbean. Inspiring the next...",
            publishedDate: "19 May — Curacao",
            slug: "ajax-sri-and-its-foundation-sign-partnership",
            image: "/Images/News/news-1-ajax-and-sandals.jpg",
            pageContent: (openCloseVideo, setOpenCloseVideo, setVideoSrc) => {
                return (
                    <div className="w-full">
                        <div>
                            <p className="font-BriceBold text-[22px] sm:text-[25px] md:text-[28px] lg:text-[32px] xl:text-[38px] leading-[135%] lg:leading-[125%] uppercase">
                                From fishing nets to football goals: Ajax,
                                Sandals Resorts International and its Foundation
                                join forces to facilitate youth football in the
                                Caribbean
                            </p>
                            <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 font-BriceSemiBold text-base sm:text-lg lg:text-xl 2xl:text-2xl leading-[135%] lg:leading-[130%] uppercase">
                                Inspiring the next generation with life and
                                football skills, starting in Curaçao
                            </p>
                            <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                May 19th, Willemstad - Children in Curaçao are
                                celebrating new goals, as AFC Ajax and Sandals
                                Resorts International (SRI), together with its
                                philanthropic arm, the Sandals Foundation,
                                launch an island-wide program that creatively
                                turns fishing nets sourced from the ocean and
                                plastic waste into colorful football goals.
                                Through the new{" "}
                                <span className="font-PoppinsBold">
                                    Future Goals
                                </span>{" "}
                                program, primary schools across the Dutch
                                Caribbean island are set to receive new football
                                equipment, accompanied by a sports program
                                designed by the professional football team. With
                                a common objective of empowering children
                                through the game of football and providing the
                                resources to play, the program marks the
                                beginning of a collaboration between AFC Ajax
                                and SRI, which is opening a new resort on the
                                island.
                            </div>
                        </div>
                        <div className="mt-8 sm:mt-10 md:mt-18 lg:mt-24">
                            <button
                                onClick={() => {
                                    setOpenCloseVideo(!openCloseVideo);
                                    setVideoSrc(
                                        "/Videos/Ajax-x-adidas-Kit-launch.mp4"
                                    );
                                }}
                                className="w-full overflow-hidden rounded-xl md:rounded-2xl aspect-[3/2] mt-8 sm:mt-10 md:mt-18 lg:mt-24 relative group cursor-pointer"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="/Images/News/9-1440x-q72.jpg"
                                    alt=""
                                />
                                <div className="overlay h-full w-full absolute bottom-0 left-0 bg-[#1E1E1E40] group-hover:opacity-100 opacity-0 transition-all duration-500"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-13 sm:h-13 md:w-15 md:h-15 xl:w-18 xl:h-18 bg-white rounded-full flex items-center justify-center border-[2px] overflow-hidden">
                                    <img
                                        className="z-20 w-3 sm:w-3.5 md:w-4 relative transition-all duration-300 ease-in-out group-hover:invert"
                                        src="/Images/Icons/play.svg"
                                        alt="Play Icon"
                                    />
                                    <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-22 h-22 bg-[#1E1E1E] scale-0 group-hover:scale-125 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0"></span>
                                </div>
                            </button>
                            <p className="mt-8 sm:mt-10 md:mt-18 lg:mt-24  font-BriceSemiBold text-base sm:text-lg lg:text-xl 2xl:text-2xl leading-[135%] lg:leading-[130%] uppercase">
                                THE POWER OF FOOTBALL
                            </p>
                            <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                Future Goals is a movement to encourage children
                                in Curaçao to play and enjoy football with
                                sustainably produced resources. Starting with
                                the proper equipment – goals and balls – the
                                program will be further developed based on the
                                needs of each respective island, with the
                                ultimate goal to scale the program throughout
                                the Caribbean. In Curaçao, Ajax and Sandals
                                Resorts will work to outfit all primary schools
                                across the island with Future Goals,
                                complemented by a curriculum designed by AFC
                                Ajax coaches. The eight-week program will focus
                                on the power of football as a vehicle to equip
                                children with life skills, while growing their
                                awareness of the importance of taking care of
                                their communities, precious islands and their
                                natural resources. Future Coaches, local youth
                                trained by Ajax coaches, will organize and teach
                                the program, with the curriculum culminating in
                                an islandwide football tournament where all
                                participating schools compete.
                            </p>
                            <p className="mt-8 sm:mt-10 md:mt-18 lg:mt-24  font-BriceSemiBold text-base sm:text-lg lg:text-xl 2xl:text-2xl leading-[135%] lg:leading-[130%] uppercase">
                                STAYING LOCAL: CREATING OPPORTUNITY FOR THE
                                COMMUNITY
                            </p>
                            <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                Ensuring the Future Goals program fulfills its
                                commitment to the island’s locals and workforce,
                                the program taps into Curaçao based plastic
                                recycling company, Limpi, which is in charge of
                                manufacturing the goals from fishing nets
                                sourced from the ocean and plastic waste.
                                Additionally, the local youth trained by Ajax
                                coaches, the Future Coaches, are recruited from
                                the island by Favela Street, a foundation that
                                aims to turn youngsters into role models by the
                                game of football, and through a special
                                education curriculum.
                            </p>
                            <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 italic">
                                <span className="font-PoppinsBold not-italic">
                                    Edwin van der Sar, CEO AFC Ajax:
                                </span>
                                “Ajax is on a mission to impact the future of
                                football on a global level. This starts with the
                                youth – our next generation. That is why we do
                                everything in our power to inspire future
                                generations. Together with Sandals Resorts we
                                are eager to facilitate impactful football
                                programs for children in Curaçao and the rest of
                                the Caribbean. Starting here at MGR. Niewindt
                                College in Curaçao.”
                            </div>
                            <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 italic">
                                <span className="font-PoppinsBold not-italic">
                                    Heidi Clarke, Executive Director of the
                                    Sandals Foundation:
                                </span>
                                ‘’Future Goals brilliantly encapsulates Sandals’
                                unwavering commitment to empower our islands in
                                the Caribbean through our philanthropic arm, the
                                Sandals Foundation, and our core pillars of
                                education, environment and community. Enveloping
                                ourselves in the destination was part of the
                                blueprint as we rolled out the plans for Sandals
                                Royal Curaçao – a new island for Sandals and a
                                new opportunity to expand our impact — and this
                                one-of-a-kind partnership with Ajax is a sign of
                                our promise to generations to come.”
                            </div>
                            <p className="mt-8 sm:mt-10 md:mt-18 lg:mt-24  font-BriceSemiBold text-base sm:text-lg lg:text-xl 2xl:text-2xl leading-[135%] lg:leading-[130%] uppercase">
                                CHANGING THE GAME, ONE SCHOOL AT A TIME
                            </p>
                            <div className="italic mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                <span className="not-italic">
                                    The first Future Goals recipient, Jeanne
                                    Hellburg, Head Principal at primary school
                                    MGR. Niewindt College, said:
                                </span>
                                You truly see and feel what football does for
                                the kids; you give them a ball and a goal, and
                                nothing else matters anymore. Future Goals is a
                                real gift to us and the children.”
                            </div>
                            <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                To donate, visit the Sandals Foundation page:{" "}
                                <a
                                    className="underline italic"
                                    href="https://sandalsfoundation.org/donation"
                                    target="_blank"
                                >
                                    sandalsfoundation.org/donation
                                </a>
                            </div>
                        </div>
                    </div>
                );
            },
        },
    ]);
    return (
        <NewsContext.Provider value={[news, setNews]}>
            {props.children}
        </NewsContext.Provider>
    );
};

export default Context;

import React from "react";
import PageAnimation from "../Components/PageAnimation";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    document.title = "Privacy Policy → Future Goals";
    const { pathname } = useLocation();

    return (
        <PageAnimation>
            <div className="bg-[#1E1E1E] text-[#F1EAE2] pt-16 sm:pt-44 md:pt-44 lg:pt-54 xl:pt-60 sm:px-5 md:px-8 lg:px-10 xl:px-10 pb-[8vw]">
                <motion.h2
                    key={pathname}
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        bounce: 0.5,
                        stiffness: 150,
                        damping: 16,
                        delay: 1,
                    }}
                    className="text-center text-[13vw] leading-[13.5vw] sm:text-[55px] md:text-[60px] lg:text-[90px] xl:text-[115px] pt-28 font-BriceBold sm:leading-0 uppercase mb-12 sm:mb-32 lg:mb-40"
                >
                    Privacy Policy
                </motion.h2>
                <div className="max-w-[1440px] w-full bg-[#F1EAE2] rounded-3xl mx-auto px-6 sm:px-10 md:px-18 lg:px-24 xl:px-32 py-18 sm:py-20 md:py-24 lg:py-32 text-[15px] sm:text-[17px] text-[#1E1E1E] font-PoppinsRegular  leading-[25px] sm:leading-[27px]">
                    <p>
                        Unique Travel Corp. the worldwide representative for
                        Sandals, Beaches and Grand Pineapple Beach Resorts and
                        AFC Ajax (together referred to as “we”) operate this
                        website (the “Site”), and maintain this information
                        privacy policy explaining how “personal data” collected
                        is used and/or disclosed in regard to the Future Goals
                        Program which both partners developed together.
                    </p>
                    <p className="mt-5 sm:mt-8">
                        This privacy policy describes our practices with respect
                        to “personal data”. As the term suggests, “personal
                        data” is information which can be associated with a
                        specific individual or entity, including, for example,
                        personal information such as a user’s name, address, or
                        telephone number, e-mail address.
                    </p>
                    <h4 className="font-PoppinsBold mt-5 sm:mt-8 mb-1">
                        What information do we collect and what do we use it
                        for?
                    </h4>
                    <p>
                        Hereby an overview of the personal data that we collect:
                    </p>
                    <div className="mt-5 sm:mt-8">
                        <div className="flex gap-2 items-center mb-3">
                            <span className="">•</span>
                            <p>Name and surname</p>
                        </div>
                        <div className="flex gap-2 items-center mb-3">
                            <span className="">•</span>
                            <p>E-mail address</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="">•</span>
                            <p>Phone number</p>
                        </div>
                    </div>
                    <p className="mt-5 sm:mt-8">
                        We collect this data because you use or want to use the
                        Future Goal services and by collecting this data we are
                        able to call or e-mail you in order to carry out your
                        services. We do not keep your personal data any longer
                        than necessary to deliver our agreed services.
                    </p>
                    <div className="mt-5 sm:mt-8">
                        <h4 className="font-PoppinsBold mb-1">
                            Change of purpose
                        </h4>
                        <p>
                            We will only use your personal data for the purposes
                            for which we collected it (as identified above in
                            the What we use this data for column), unless we
                            reasonably consider that we need to use it for
                            another reason which is compatible with the original
                            purpose.
                        </p>
                    </div>
                    <div className="mt-5 sm:mt-8">
                        <h4 className="font-PoppinsBold mb-1">Cookies</h4>
                        <p>
                            We use functional, analytical and tracking cookies.
                            A cookie is an element of data that is stored on a
                            user's computer. It may be used to identify the
                            device you use to access the website to help us
                            improve and deliver a more personalized service
                            based on browsing style.
                        </p>
                    </div>
                    <div className="mt-5 sm:mt-8">
                        <h4 className="font-PoppinsBold mb-1">Data security</h4>
                        <p>
                            We have implemented technology and security features
                            in an effort to safeguard the privacy of your
                            personal data from unauthorized access or improper
                            use, and we will seek to continue to enhance its
                            security procedures as new technology becomes
                            available. However, you acknowledge and agree that
                            perfect security is not possible and your personal
                            data could still be accessed and used by others
                            without authorization. Your access and use of the
                            Site constitutes your agreement that we are not and
                            shall not be responsible for any such unauthorized
                            access and use of your personal data.
                        </p>
                    </div>
                    <div className="mt-5 sm:mt-8">
                        <h4 className="font-PoppinsBold mb-1">Questions?</h4>
                        <p>
                            Please direct any questions or comments regarding
                            our privacy policy to hello@onenil.com
                        </p>
                    </div>
                    <div className="mt-5 sm:mt-8">
                        <div className="italic">
                            For the complete Sandals privacy policy{" "}
                            <a
                                className="underline not-italic"
                                href="https://www.sandals.com/privacy-policy/"
                                target="_blank"
                            >
                                click here
                            </a>
                        </div>
                        <div className="italic">
                            For the complete AFC Ajax privacy policy{" "}
                            <a
                                className="underline not-italic"
                                href="https://www.ajax.nl/meer/privacy/"
                                target="_blank"
                            >
                                click here
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </PageAnimation>
    );
};

export default PrivacyPolicy;

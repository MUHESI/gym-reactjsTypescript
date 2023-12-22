import React from 'react'
import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import oeufs from "@/assets/oeufs.png";
import homePagePoulet from "@/assets/homePagePoulet.jpg";
// import Benefit from "./Benefit";
import viandeCuiteA from "@/assets/viandeCuiteA.png";
import viandeCuiteB from "@/assets/viandenoCuiteA.png";
import pouleord from "@/assets/pouleord.png";
import { useNavigate } from "react-router-dom";
import { benefits } from '@/scenes/benefits';
import Benefit from '@/scenes/benefits/Benefit';
// import Logo from "../Logo";


function ListProducts() {
    const navigate = useNavigate()
    return (
        <section id="benefitsL" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
            // onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:my-2 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>NOS PRODUITS </HText>
                </motion.div>

                {/* BENEFITS */}
                <div className="gap-8 flex-wrap flex justify-center">
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={() => console.clear()}
                        />
                    ))}

                </div>

                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    <img
                        className="w-[450px] mx-auto rounded-md shadow hover:scale-[1.3] transition "
                        alt="benefits-page-graphic"
                        src={homePagePoulet}
                    />

                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    {/* <HText>
                                        PRIX PROMOTIONNEL EN CETTE FIN DE L’ANNÉE chez
                                        <Logo />
                                    </HText> */}
                                </motion.div>
                            </div>
                        </div>

                        {/* DESCRIPT */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">
                                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                                MUHESI.
                            </p>
                            <p className="mb-5">
                                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                                enim mattis odio in risus nunc.
                            </p>
                        </motion.div>

                        {/* BUTTON */}
                        <div className="flex justify-end  mt-5">
                            <button onClick={() => navigate("/shop")}
                                className="rounded-md px-10 py-2 transition border text-white bg-[#ffc132] hover:bg-white border-[#ffc132] hover:text-[#ffc132]"
                            >
                                Commander
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default ListProducts

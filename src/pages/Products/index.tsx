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
// import { benefits } from '@/scenes/benefits';
// import ProductCard from '@/scenes/benefits/Benefit';
import { dataProducts } from '@/components/constantes';
import { CustomButton } from '@/components/core/CustomButton';
import ProductCard from '@/components/productCard';
// import Logo from "../Logo";

function ListProducts() {
    const navigate = useNavigate()
    return (
        <div className=" mx-auto min-h-full w-5/6 py-20">
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
                <div className="gap-8 flex  flex-wrap justify-center">
                    {dataProducts.map((product: any) => (
                        <ProductCard
                            key={product.name}
                            icon={product.img}
                            title={product.name}
                            description={product.description}
                            setSelectedPage={() => console.clear()}
                        />
                    ))}

                </div>

                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">

                    <motion.div
                        className='flex-[90%]'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <img

                            className="md:rotate-12 w-[450px] mx-auto rounded-md shadow hover:scale-[1.3] transition "
                            alt="benefits-page-graphic"
                            src={homePagePoulet}
                        />
                    </motion.div>


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
                            <div className='mt-2 md:mt-0 text-center '>
                                <HText> La quanité et la qualité chez nous</HText>

                            </div>
                            <p className="my-5 text-justify">
                                Vous cherchez des poulets de chair juteux et savoureux ? Ne cherchez plus ! Nos poulets de chair sont élevés avec amour, sans antibiotiques ni hormones. Ils grandissent dans des conditions optimales, se préparant à devenir les stars de vos repas en famille. Que ce soit pour un barbecue, un rôti ou un plat mijoté, nos poulets de chair sont prêts à régaler vos papilles.
                            </p>
                            <p className="mb-5 text-justify">
                                Des poules bien nourries sont des poules heureuses. Notre gamme d’aliments pour poules est spécialement formulée pour garantir une croissance saine, des plumes brillantes et des œufs délicieux. De l’aliment de démarrage à l’aliment de ponte, nous avons tout ce dont vos poules ont besoin. Parce que des poules bien nourries pondent des œufs de qualité supérieure.
                            </p>
                        </motion.div>
                        <div className='flex  justify-end  py-2  px-2'>
                            <CustomButton
                                className='bg-[#ffc132] hover:bg-transparent'
                                label='Lire plus'
                                onClick={() => navigate('/shop')}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default ListProducts

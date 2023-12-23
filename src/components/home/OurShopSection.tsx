import { motion } from "framer-motion";
import homePagePoulet from "@/assets/homePagePoulet.jpg";
import { useNavigate } from "react-router-dom";
import { FirstHeading } from "../core/Heading";
import { CustomButton } from "../core/CustomButton";
import { allShop } from "../constantes";


const FavoritesShop = () => {
    const navigate = useNavigate()
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
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
                    <FirstHeading
                        title="Nos shops les plus actifs"
                    />
                    <p className="my-5 text-sm">
                        Notre équipe vous accompagne dans votre ville, Visualisez une échantillon, n’hésitez pas a avoir plus pour  parcourir la liste entière.
                    </p>
                </motion.div>

                {/* SHOPS */}
                <div className="gap-5 flex-wrap flex justify-center">
                    {allShop.map((item, key) =>
                        <div key={key} className=" flex-[50%] sm:flex-[40%] lg:flex-[30%] shadow-lg transition rounded-xl shadow hover:shadow-md">

                            <div>
                                <img
                                    className="h-[230px] rounded-t rounded-t-xl  cover mx-auto  shadow transition "
                                    alt="benefits-page-graphic"
                                    src={homePagePoulet}
                                />
                            </div>
                            <div>
                                <h5 className="text-center my-2 font-bold ">{item.name}</h5>
                                <div className="mx-2">
                                    <p>Ville/Pays:<strong>  {item.city} </strong> </p>
                                    <p>email: <strong>renovaa@gmail.com </strong></p>
                                    <p>Phone: <strong> +243 9987993 05</strong>  </p>
                                </div>
                            </div>
                            <div className='my-3 flex  justify-center  py-2  px-2'>
                                <CustomButton
                                    className='bg-[#ffc132] hover:bg-transparent'
                                    label='Lire plus'
                                    onClick={() => console.clear()}
                                />
                            </div>
                        </div>)}

                </div>
                <div className='my-4 flex justify-center md:justify-end  py-2  px-2'>
                    <CustomButton
                        className='bg-transparent hover:bg-transparent'
                        label='Plus des shop'
                        onClick={() => navigate('/vision')}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default FavoritesShop;

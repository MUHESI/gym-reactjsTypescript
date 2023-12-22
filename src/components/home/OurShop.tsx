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
import { FirstHeading } from "../core/Heading";
import { CustomButton } from "../core/CustomButton";
// import Logo from "../Logo";


const benefits: Array<BenefitType> = [
    {
        icon: <img className=" w-[190px]  h-[190px] cover" alt="..." src={viandeCuiteA} />,

        title: "State of the Art Facilities",
        description:
            "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
        icon: <img className="w-[190px] h-[190px] cover" alt="..." src={viandeCuiteB} />,
        title: "100's of Diverse Classes",
        description:
            "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
        icon: <img className="w-[190px] h-[190px] cover" alt="..." src={pouleord} />,
        title: "Expert and Pro Trainers",
        description:
            "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
    {
        icon: <img className="w-[190px] h-[190px] cover" alt="..." src={pouleord} />,
        title: "Expert and Pro Trainers",
        description:
            "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
    {
        icon: <img className="w-[190px] h-[190px] cover" alt="..." src={pouleord} />,
        title: "Expert and Pro Trainers",
        description:
            "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
    {
        icon: <img className="w-[190px] h-[190px] cover" alt="..." src={oeufs} />,
        title: "Expert and Pro Trainers",
        description:
            "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
];

const allShop = [
    {
        name: "Shop Jenga Mwili Vamaro",
        city: "Ibanda à Bukavu au Sud",
        email: "",
        phone: "",
    },
    {
        name: "Shop Jenga Mwili Essence",
        city: "Ibanda à Bukavu au Sud/Coopec Chahi",
        email: "",
        phone: "",
    },
    {
        name: "Shop Jenga Mwili à Kavumu Centre",
        city: "Kabare  Sud Kivu ",
        email: "",
        phone: "",
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

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
                        <div key={key} className=" flex-[30%] border border-primary-500 transition rounded-xl shadow hover:shadow-md">

                            <div>
                                <img
                                    className="h-[210px] rounded-t rounded-t-xl  cover mx-auto  shadow transition "
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
                            <div className='flex  justify-center  py-2  px-2'>
                                <CustomButton
                                    className='bg-[#ffc132] hover:bg-transparent'
                                    label='Lire plus'
                                    onClick={() => console.clear()}
                                />
                            </div>
                        </div>)}

                </div>

                {/* <div className="">
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}

                </div> */}

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
};

export default FavoritesShop;

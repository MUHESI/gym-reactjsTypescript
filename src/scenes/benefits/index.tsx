import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import oeufs from "@/assets/oeufs.png";
import homePagePoulet from "@/assets/homePagePoulet.jpg";
import ProductCard from "./Benefit";
import viandeCuiteA from "@/assets/viandeCuiteA.png";
import viandeCuiteB from "@/assets/viandenoCuiteA.png";
import pouleord from "@/assets/pouleord.png";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import { CustomButton } from "@/components/core/CustomButton";


export const benefits: Array<BenefitType> = [
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

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Products = ({ setSelectedPage }: Props) => {
  const navigate = useNavigate()
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
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
          <p className="my-5 text-sm">
            Chez <Logo />  nous vous offrons tout une gamme des produits et les services, Vous trouverez tous nos  produits en cliquant sur voir plus :
          </p>
        </motion.div>

        <div className='flex  justify-center  py-2  px-2'>
          <CustomButton
            className='bg-[#ffc132] hover:bg-transparent'
            label='Lire plus'
            onClick={() => navigate('/products')}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Products;

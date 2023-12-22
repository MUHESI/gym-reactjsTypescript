import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate } from "react-router-dom";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  // icon: JSX.Element;
  icon: any;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const ProductCard = ({ icon, title, description, setSelectedPage }: Props) => {
  const navigate = useNavigate()
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 flex-[50%] sm:flex-[40%]   lg:flex-[25%] rounded-xl border border-gray-100 px-4 py-4 text-center transition hover:shadow-lg "
    >
      <div className="mb-4 flex justify-center">
        {/* <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
          <img alt="..." src={} />
        </div> */}
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          <img alt="..." src={icon} className=" cover rounded-full" />
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p
          className="cursor-pointer"
          onClick={() => navigate('/shop')}
        >Commander</p>
      </AnchorLink>
    </motion.div>
  );
};

export default ProductCard;

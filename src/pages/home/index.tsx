import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageTwoChickens from "@/assets/twoChickens.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import Products from "@/scenes/benefits";
import { useNavigate } from "react-router-dom";
import Logo from "@/scenes/Logo";
import ArrowImg from "@/assets/Sparkles.png";
import Carousel from "@/components/core/Carousel";
import OurVision from "@/components/home/OurVision";
import Resume from "@/components/home/Resume";
import FavoritesShop from "@/components/home/OurShop";
import HText from "@/shared/HText";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const navigate = useNavigate()
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* CAROUSEL*/}
      <>
        <Carousel />
      </>
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">

              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <span className="text-3xl">
                  Chaque chose est bon avec
                  <p className=" ml-10 text-5xl font-bold">
                    <Logo />
                  </p>
                </span>
                {/*  */}
              </div>
            </div>

            <p className="mt-8 text-sm">
              Vous avez besoin des poulets, des viandes tout , commandez des maintenant :
              pour vos différents événements : fêtes de mariages , réunions ,
              nous serons heureux de vous  faire plaisir.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {isAboveMediumScreens && (
              <ActionButton btnAction={() => navigate("/shop")}>
                Commander
              </ActionButton>
            )}
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Lire plus</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img className="w-[900px]"
            alt="home-pageGraphic" src={HomePageTwoChickens} />
          <img className="w-[500px] "
            style={{
              transform: 'translate(-50%, -20%)',

            }}
            alt="..." src={ArrowImg} />
        </div>
      </motion.div>
      {/* OUR VISION */}
      <>
        <OurVision />
      </>

      {/* RESUME */}
      <>
        <Resume />
      </>
      {/* {
        isAboveMediumScreens && (
          <div className=" shadow rounded mt-10 mx-2 bg-primary-100 py-10">
            <div className="mx-auto  w-5/6">
              <div className="text-2xl font-bold flex items-center justify-between gap-8">
                <p className=""> Oeufs </p>
                <p className=""> Morceaux de poule</p>
                <p className=""> Poules fumées </p>
              </div>
            </div>
          </div>
        )
      } */}
      <>
        <FavoritesShop />
      </>
      <div>
        <Products setSelectedPage={(e: any) => console.clear()} />
      </div>

    </section >
  );
};

export default Home;

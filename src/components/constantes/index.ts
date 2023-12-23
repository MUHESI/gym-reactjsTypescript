import homePagePoulet from "@/assets/homePagePoulet.jpg";
import viandeCuiteA from "@/assets/viandeCuiteA.png";
import viandenoCuiteA from "@/assets/viandenoCuiteA.png";
import oeufs from "@/assets/oeufs.png";
import foodPoules from "@/assets/foodPoules.png";
import farine from "@/assets/farine.jpeg";
import semouleF from "@/assets/semouleF.png";
import milk from "@/assets/lait.png";
import tomate from "@/assets/tomate.png";
import miel from "@/assets/miel.png";
import poussins from "@/assets/poussins.png";
import { BenefitType, SelectedPage } from "@/shared/types";
import { IFooterLinks } from "@/types";


export const dataCards = [
    {
        id: 1,
        img: viandenoCuiteA,
        name: "poules de chair",
        description: "something like description",
        prices: {
            smallPrice: 13,
            mediumPrice: 20,
            largePrice: 60
        }
    },

    {
        id: 2,
        img: viandeCuiteA,
        name: "poules de chair",
        description: "something like description",
        prices: {
            smallPrice: 15,
            mediumPrice: 16,
            largePrice: 200
        }
    },

    {
        id: 3,
        img: viandenoCuiteA,
        name: "poules de chair33",
        description: "something like description",
        prices: {
            smallPrice: 8,
            mediumPrice: 5,
            largePrice: 100
        }
    },
    {
        id: 2,
        img: viandeCuiteA,
        name: "poules de chair",
        description: "something like description",
        prices: {
            smallPrice: 18,
            mediumPrice: 20,
            largePrice: 200
        }
    },
    {
        id: 2,
        img: viandeCuiteA,
        name: "poules de chair",
        description: "something like description",
        prices: {
            smallPrice: 18,
            mediumPrice: 20,
            largePrice: 200
        }
    }, {
        id: 2,
        img: viandeCuiteA,
        name: "poules de chair",
        description: "something like description",
        prices: {
            smallPrice: 18,
            mediumPrice: 20,
            largePrice: 200
        }
    }, {
        id: 2,
        img: viandeCuiteA,
        name: "poules de chair",
        description: "something like description",
        prices: {
            smallPrice: 18,
            mediumPrice: 20,
            largePrice: 200
        }
    }, {
        id: 2,
        img: viandeCuiteA,
        name: "poules de chair",
        description: "something like description",
        prices: {
            smallPrice: 18,
            mediumPrice: 20,
            largePrice: 200
        }
    },
    {
        id: 2,
        img: viandeCuiteA,
        name: "poules de chair",
        description: "something like description",
        prices: {
            smallPrice: 15,
            mediumPrice: 16,
            largePrice: 200
        }
    },
    {
        id: 2,
        img: viandeCuiteA,
        name: "poules de chair",
        description: "something like description",
        prices: {
            smallPrice: 18,
            mediumPrice: 20,
            largePrice: 200
        }
    },
    {
        id: 1,
        img: viandenoCuiteA,
        name: "poules de chair",
        description: "something like description",
        prices: {
            smallPrice: 13,
            mediumPrice: 20,
            largePrice: 60
        }
    },
    {
        id: 1,
        img: viandenoCuiteA,
        name: "poules de chair",
        description: "something like description",
        prices: {
            smallPrice: 13,
            mediumPrice: 20,
            largePrice: 60
        }
    },
]


export const dataProducts = [
    {
        id: 1,
        img: viandenoCuiteA,
        name: "Poulet de chair  Jenga Mwili",
        description: "Poulet de chair bio de la ferme Bukavu Chicks nourris aux céréales bio du Kivu",
    },
    {
        id: 2,
        img: oeufs,
        name: "Œufs frais Jenga Mwili",
        description: "Mwili issue d’un élevage respectant la biosécurité et les normes avicoles et nutritionnelles",
    },
    {
        id: 2,
        img: poussins,
        name: "Poussins d’un jour",
        description: "sur commande grâce à nos incubateurs modernes dont la capacité globale est de 144 000 œufs à couver ",
    },
    {
        id: 4,
        img: foodPoules,
        name: "Aliments pour poules ",
        description: "selon les âges , à la commande , nous accompagnons les opérateurs du secteur avicoles à se développer ",
    },
    {
        id: 5,
        img: farine,
        name: "Farine de Mais Jenga Mwili",
        description: "Mwili pour accompagner nos volailles et nos œufs , dans tous nos shops ou auprès de nos distributeurs ",
    },
    {
        id: 5,
        img: semouleF,
        name: "Farine de Semoule Jenga Mwili",
        description: "Pour ceux qui aiment lorsque c’est doux , tout blanc et fin ",
    },
    {
        id: 7,
        img: milk,
        name: "Lait Frais Jenga Mwili",
        description: "Issue des vaches fermières élevées par Bukavu Chicks ",
    },
    {
        id: 5,
        img: tomate,
        name: "Tomates fraiches et bio",
        description: "A manger sans modération pour la bonne santé de toute la famille  ",
    },

    {
        id: 5,
        img: miel,
        name: "le Miel",
        description: "Miel pur sans additif ni dilution, uniquement sur commande",
    },

]
const benefits: Array<BenefitType> = [
    {
        // icon: <img className=" w-[190px]  h-[190px] cover" alt = "..." src={ viandeCuiteA } />,
        title: "State of the Art Facilities",
        description:
            "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },

];
export const allShop = [
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

export const footerLinks: IFooterLinks[] = [
    // {
    //     label: "Nos shops",
    //     path: '/shop'
    // },
    {
        label: "Commander un produit",
        path: '/shop'
    },
    {
        label: "Nos produits",
        path: '/products'
    },
    {
        label: "Nos produits",
        path: '/products'
    },
    {
        label: "Nos partenaires",
        path: '/products'
    },

]

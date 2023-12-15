import { SelectedPage } from "@/shared/types";
import { useNavigate } from "react-router-dom";

type Props = {
  page: string;
  link: string
  selectedPage: SelectedPage;
  // setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ link, page, selectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  const navigate = useNavigate()

  return (
    <span
      className={`cursor-pointer ${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}

      onClick={() => navigate(link)}
    >
      {page}
    </span>
  );
};

export default Link;

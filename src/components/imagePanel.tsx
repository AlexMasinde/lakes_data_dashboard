import { useDataContext } from "@/contexts/dataContext";
import { PlusSquareIcon } from "@chakra-ui/icons";
import NoImage from "./noImage";

export default function ImagePanel() {
  const { imageLinks } = useDataContext();
  const hasImages = imageLinks.length > 0;
  return <>{hasImages ? <DashboardImageGallery /> : <NoImage />}</>;
}

function DashboardImageGallery() {
  return (
    <div>
      <p>Hello WOrld</p>
      <p>Hello WOrld</p>
      <p>Hello WOrld</p>
      <p>Hello WOrld</p>
      <p>Hello WOrld</p>
    </div>
  );
}

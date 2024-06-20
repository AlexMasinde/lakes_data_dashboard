import { useDataContext } from "@/contexts/dataContext";
import NoData from "./noData";
import DataTable from "./dataTable";

export default function DataPanel() {
  const { data } = useDataContext();
  console.log(data);

  const hasData = data.length > 0;
  return <>{hasData ? <DataTable /> : <NoData />}</>;
}

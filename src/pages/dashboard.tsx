import { useAuthContext } from "@/contexts/authContext";
import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Modal,
} from "@chakra-ui/react";
import NavBar from "@/components/navigation";
import DataPanel from "@/components/dataPanel";
import ImagePanel from "@/components/imagePanel";
import { useDataContext } from "@/contexts/dataContext";
import AddDataModal from "@/components/addDataModal";
import AddImageModal from "@/components/addImageModal";

export default function Dashboard() {
  const { user } = useAuthContext();
  const { showAddDataModal, showAddImageModal, dispatch } = useDataContext();

  const handleCloseModal = () => {
    dispatch({ type: "TOGGLE_MODAL" });
  };

  const handleCloseImageModal = () => {
    dispatch({ type: "TOGGLE_ADD_IMAGE_MODAL" });
  };
  console.log("Current user", user);
  return (
    <div className="flex flex-col h-[100vh]">
      <NavBar />
      <div className="container mx-auto flex-1 flex flex-col items-center">
        <Tabs style={{ width: "100%", marginTop: "20px" }} colorScheme="teal">
          <TabList>
            <Tab>
              <p style={{ color: "teal" }}>Data Panel</p>
            </Tab>
            <Tab>
              <p style={{ color: "teal" }}>Image Panel</p>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <DataPanel />
            </TabPanel>
            <TabPanel>
              <ImagePanel />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <Modal isOpen={showAddImageModal} onClose={handleCloseImageModal}>
        <AddImageModal />
      </Modal>
      {/* <Modal isOpen={showAddDataModal} onClose={handleCloseModal}>
        <AddDataModal />
      </Modal> */}
    </div>
  );
}

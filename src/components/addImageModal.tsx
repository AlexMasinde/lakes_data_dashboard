import React, { useState, ChangeEvent } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Image,
} from "@chakra-ui/react";
import { useDataContext } from "@/contexts/dataContext";

export default function AddImageModal() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { dispatch } = useDataContext();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  function handleCloseImageModal() {
    dispatch({
      type: "TOGGLE_ADD_IMAGE_MODAL",
    });
  }

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Upload Image</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel htmlFor="file-upload">Choose an image</FormLabel>
              <Input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </FormControl>
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Selected Image"
                boxSize="200px"
                objectFit="cover"
              />
            )}
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleCloseImageModal}>
            Close
          </Button>
          <Button variant="ghost">Save</Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
}

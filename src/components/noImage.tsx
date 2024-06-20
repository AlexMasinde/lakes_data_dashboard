import { useDataContext } from "@/contexts/dataContext";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button, Box, Text } from "@chakra-ui/react";

export default function NoImage() {
  const { dispatch } = useDataContext();
  function onAddData() {
    dispatch({
      type: "TOGGLE_ADD_IMAGE_MODAL",
    });
  }
  return (
    <Box
      textAlign="center"
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
    >
      <PlusSquareIcon boxSize={12} color="gray.400" />
      <Text mt={4} fontSize="xl" fontWeight="bold" color="gray.600">
        You have not uploaded any images
      </Text>
      <Text mt={2} color="gray.500">
        Click the button below to add an image
      </Text>
      <Button mt={4} colorScheme="teal" onClick={onAddData}>
        Upload Image
      </Button>
    </Box>
  );
}

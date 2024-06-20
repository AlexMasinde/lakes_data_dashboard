import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  Select,
  Input,
  Box,
  Tag,
  TagLabel,
  TagCloseButton,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useDataContext } from "@/contexts/dataContext";
import { Data } from "@/utils/types";

export default function AddDataModal() {
  const { dispatch, data } = useDataContext();

  const [topic, setTopic] = useState<string>("");
  const [variablesOfInterest, setVariablesOfInterest] = useState<string>("");
  const [dataType, setDataType] = useState<string>("");
  const [yearCollected, setYearCollected] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedLakes, setSelectedLakes] = useState<string[]>([]);
  const [error, setError] = useState<{ [key: string]: string | null }>({
    topic: null,
    variablesOfInterest: null,
    dataType: null,
    yearCollected: null,
    description: null,
    selectedLakes: null,
  });

  function handleCloseModal() {
    dispatch({
      type: "TOGGLE_MODAL",
    });
    resetForm(); // Reset form fields and errors on modal close
  }

  function handleDataTypeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setDataType(e.target.value);
    setError({ ...error, dataType: null }); // Dismiss error on change
  }

  function handleYearCollectedChange(e: React.ChangeEvent<HTMLInputElement>) {
    setYearCollected(e.target.value);
    setError({ ...error, yearCollected: null }); // Dismiss error on change
  }

  function handleTopicChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTopic(e.target.value);
    setError({ ...error, topic: null }); // Dismiss error on change
  }

  function handleVariablesChange(e: React.ChangeEvent<HTMLInputElement>) {
    setVariablesOfInterest(e.target.value);
    setError({ ...error, variablesOfInterest: null }); // Dismiss error on change
  }

  function handleLakesChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedLake = e.target.value;
    if (!selectedLakes.includes(selectedLake) && selectedLake !== "") {
      setSelectedLakes([...selectedLakes, selectedLake]);
    }
    setError({ ...error, selectedLakes: null }); // Dismiss error on change
  }

  function removeLake(lake: string) {
    setSelectedLakes(
      selectedLakes.filter((selectedLake) => selectedLake !== lake)
    );
  }

  function handleAddData() {
    const errors: { [key: string]: string | null } = {
      topic: !topic ? "Please enter a topic." : null,
      variablesOfInterest: !variablesOfInterest
        ? "Please enter at least one variable of interest."
        : null,
      dataType: !dataType ? "Please select a data type." : null,
      yearCollected: !yearCollected ? "Please enter year collected." : null,
      description: !description ? "Please enter a description." : null,
      selectedLakes:
        selectedLakes.length === 0 ? "Please select at least one lake." : null,
    };

    setError(errors);

    if (Object.values(errors).every((error) => error === null)) {
      // Create new data item
      const newData: Data = {
        topic,
        variablesOfInterest,
        dataType,
        yearCollected,
        description,
        selectedLakes,
      };

      const newDataArray = [newData, ...data];

      // Dispatch action to add new data array
      dispatch({ type: "SET_DATA", payload: newDataArray });
      handleCloseModal();
    }
  }

  function resetForm() {
    setTopic("");
    setVariablesOfInterest("");
    setDataType("");
    setYearCollected("");
    setDescription("");
    setSelectedLakes([]);
    setError({
      topic: null,
      variablesOfInterest: null,
      dataType: null,
      yearCollected: null,
      description: null,
      selectedLakes: null,
    });
  }

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Data</ModalHeader>
        <ModalBody>
          <Input
            placeholder="Topic"
            value={topic}
            onChange={handleTopicChange}
            mb={4}
            isInvalid={!!error.topic}
          />
          {error.topic && (
            <Box color="red.500" mb={4}>
              {error.topic}
            </Box>
          )}
          <Box mb={4}>
            <Select
              placeholder="Select Great Lakes"
              onChange={handleLakesChange}
              isInvalid={!!error.selectedLakes}
            >
              <option value="Victoria">Lake Victoria</option>
              <option value="Tanganyika">Lake Tanganyika</option>
              <option value="Malawi">Lake Malawi</option>
              <option value="Turkana">Lake Turkana</option>
              <option value="Albert">Lake Albert</option>
              <option value="Kivu">Lake Kivu</option>
              <option value="Edward">Lake Edward</option>
            </Select>
            <Wrap mt={2}>
              {selectedLakes.map((lake) => (
                <WrapItem key={lake}>
                  <Tag
                    size="md"
                    borderRadius="md"
                    variant="solid"
                    colorScheme="gray"
                  >
                    <TagLabel>{lake}</TagLabel>
                    <TagCloseButton onClick={() => removeLake(lake)} />
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
            {error.selectedLakes && (
              <Box color="red.500" mt={2}>
                {error.selectedLakes}
              </Box>
            )}
          </Box>
          <Select
            placeholder="Select Data Type"
            value={dataType}
            onChange={handleDataTypeChange}
            mb={4}
            isInvalid={!!error.dataType}
          >
            <option value="Primary">Primary</option>
            <option value="Secondary">Secondary</option>
          </Select>
          {error.dataType && (
            <Box color="red.500" mb={4}>
              {error.dataType}
            </Box>
          )}
          <Input
            placeholder="Variables of Interest"
            value={variablesOfInterest}
            onChange={handleVariablesChange}
            mb={4}
            isInvalid={!!error.variablesOfInterest}
          />
          {error.variablesOfInterest && (
            <Box color="red.500" mb={4}>
              {error.variablesOfInterest}
            </Box>
          )}
          <Input
            placeholder="Year Collected"
            value={yearCollected}
            onChange={handleYearCollectedChange}
            mb={4}
            isInvalid={!!error.yearCollected}
          />
          {error.yearCollected && (
            <Box color="red.500" mb={4}>
              {error.yearCollected}
            </Box>
          )}
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            resize="vertical"
            minHeight="80px"
            mb={4}
            isInvalid={!!error.description}
          />
          {error.description && (
            <Box color="red.500" mb={4}>
              {error.description}
            </Box>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleCloseModal}>
            Close
          </Button>
          <Button colorScheme="teal" onClick={handleAddData}>
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
}

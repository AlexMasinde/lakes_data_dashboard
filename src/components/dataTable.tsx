import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useDataContext } from "@/contexts/dataContext";
import { Data } from "@/utils/types";

export default function DataTable() {
  const { data, dispatch } = useDataContext();

  const handleAddData = () => {
    dispatch({
      type: "TOGGLE_MODAL",
    });
  };

  return (
    <Flex direction="column" overflowX="auto">
      <Box mb={8} mt={8}>
        <Button
          colorScheme="teal"
          onClick={handleAddData}
          alignSelf="flex-start"
        >
          Add Data
        </Button>
      </Box>
      <Box overflowX="auto">
        <Table variant="striped" size="md" minWidth="100%">
          <Thead>
            <Tr>
              <Th minWidth="250px">Topic</Th>
              <Th minWidth="250px">Variables of Interest</Th>
              <Th minWidth="250px">Data Type</Th>
              <Th minWidth="250px">Year Collected</Th>
              <Th minWidth="250px">Description</Th>
              <Th minWidth="250px">Lakes</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item: Data, index: number) => (
              <Tr key={index}>
                <Td minWidth="250px">{item.topic}</Td>
                <Td minWidth="250px">
                  <Wrap>
                    {item.variablesOfInterest
                      .split(",")
                      .map((variable, idx) => (
                        <WrapItem key={idx}>
                          <Tag size="sm" variant="solid" colorScheme="blue">
                            <TagLabel>{variable.trim()}</TagLabel>
                          </Tag>
                        </WrapItem>
                      ))}
                  </Wrap>
                </Td>
                <Td minWidth="250px">{item.dataType}</Td>
                <Td minWidth="250px">{item.yearCollected}</Td>
                <Td minWidth="250px">{item.description}</Td>
                <Td minWidth="250px">
                  <Wrap>
                    {item.selectedLakes.map((lake, idx) => (
                      <WrapItem key={idx}>
                        <Tag size="sm" variant="solid" colorScheme="teal">
                          <TagLabel>{lake}</TagLabel>
                        </Tag>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
}

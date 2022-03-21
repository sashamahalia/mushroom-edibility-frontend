import { Button, Flex, Heading, Select, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <Heading mb={6}>Select Mushroom Attributes</Heading>
        <Stack spacing={3}>
          <Select variant="filled" isRequired={true} placeholder="Cap shape" />
          <Select variant="filled" isRequired={true} placeholder="Cap colour" />
          <Select
            variant="filled"
            isRequired={true}
            placeholder="Stalk shape"
          />
          <Select variant="filled" isRequired={true} placeholder="Gill color" />
          <Select variant="filled" isRequired={true} placeholder="Odor" />
          <Select variant="filled" isRequired={true} placeholder="Bruises" />
          <Select variant="filled" isRequired={true} placeholder="Population" />
        </Stack>
        <Button mt={6} colorScheme="teal">
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}

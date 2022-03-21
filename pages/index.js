import { Button, Flex, Heading, Select, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { GiMushroomGills } from "react-icons/gi";
import * as deepcopy from "deepcopy";

const Home = () => {
  const [mushroomAttributes, setMushroomAttributes] = useState({
    capShape: "",
    capColor: "",
    stalkShape: "",
    gillColor: "",
    odor: "",
    bruises: "",
    population: "",
  });
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
  };

  const updateFormValue = (e, attributeName) => {
    setMushroomAttributes({
      ...deepcopy(mushroomAttributes),
      [attributeName]: e.target.value,
    });
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <Heading mb={6}>Select Mushroom Attributes</Heading>
        <Stack spacing={3}>
          <Select
            onChange={(e) => updateFormValue(e, "capShape")}
            variant="filled"
            isRequired={true}
            placeholder="Cap shape"
          >
            <option value="b">Bell shaped</option>
            <option value="c">Conical</option>
            <option value="x">Convex</option>
            <option value="f">Flat</option>
          </Select>
          <Select
            onChange={(e) => updateFormValue(e, "capColor")}
            variant="filled"
            isRequired={true}
            placeholder="Cap colour"
          >
            <option value="n">Brown</option>
            <option value="b">Buff</option>
            <option value="c">Cinnamon</option>
            <option value="g">Gray</option>
            <option value="r">Green</option>
            <option value="p">Pink</option>
            <option value="u">Purple</option>
            <option value="e">Red</option>
            <option value="w">White</option>
            <option value="y">Yellow</option>
          </Select>
          <Select
            onChange={(e) => updateFormValue(e, "stalkShape")}
            variant="filled"
            isRequired={true}
            placeholder="Stalk shape"
          >
            <option value="e">Enlarging</option>
            <option value="option2">Tapering</option>
          </Select>
          <Select
            onChange={(e) => updateFormValue(e, "gillColor")}
            variant="filled"
            isRequired={true}
            placeholder="Gill color"
          >
            <option value="k">Black</option>
            <option value="n">Brown</option>
            <option value="b">Buff</option>
            <option value="h">Chocolate</option>
            <option value="g">Gray</option>
            <option value="r">Green</option>
            <option value="o">Orange</option>
            <option value="p">Pink</option>
            <option value="u">Purple</option>
            <option value="e">Red</option>
            <option value="w">White</option>
            <option value="y">Yellow</option>
          </Select>
          <Select
            onChange={(e) => updateFormValue(e, "odor")}
            variant="filled"
            isRequired={true}
            placeholder="Odor"
          >
            <option value="a">Almond</option>
            <option value="l">Anise</option>
            <option value="c">Creosote</option>
            <option value="y">Fishy</option>
            <option value="f">Foul</option>
            <option value="m">Musty</option>
            <option value="n">None</option>
            <option value="P">Pungent</option>
            <option value="s">Spicy</option>
          </Select>
          <Select
            onChange={(e) => updateFormValue(e, "bruises")}
            variant="filled"
            isRequired={true}
            placeholder="Bruises?"
          >
            <option value="t">Bruised</option>
            <option value="f">Not bruised</option>
          </Select>
          <Select
            onChange={(e) => updateFormValue(e, "population")}
            variant="filled"
            isRequired={true}
            placeholder="Population"
          >
            <option value="a">Abundant</option>
            <option value="c">Clustered</option>
            <option value="n">Numerous</option>
            <option value="n">Numerous</option>
            <option value="s">Scattered</option>
            <option value="v">Several</option>
            <option value="y">Solitary</option>
          </Select>
        </Stack>
        <Button
          onClick={() => handleButtonClick()}
          isLoading={loading}
          loadingText="Submitting"
          leftIcon={<GiMushroomGills />}
          mt={6}
          colorScheme="teal"
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;

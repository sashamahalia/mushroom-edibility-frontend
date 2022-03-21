import { Button, Flex, Heading, Select, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <Heading mb={6}>Select Mushroom Attributes</Heading>
        <Stack spacing={3}>
          <Select variant="filled" isRequired={true} placeholder="Cap shape">
            <option value="option1">Bell shaped</option>
            <option value="c">Conical</option>
            <option value="x">Convex</option>
            <option value="f">Flat</option>
          </Select>
          brown=n,buff=b,cinnamon=c,gray=g,green=r,
          pink=p,purple=u,red=e,white=w,yellow=y
          <Select variant="filled" isRequired={true} placeholder="Cap colour">
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
          <Select variant="filled" isRequired={true} placeholder="Stalk shape">
            <option value="e">Enlarging</option>
            <option value="option2">Tapering</option>
          </Select>
          <Select variant="filled" isRequired={true} placeholder="Gill color">
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
          almond=a,anise=l,creosote=c,fishy=y,foul=f,
          musty=m,none=n,pungent=p,spicy=s
          <Select variant="filled" isRequired={true} placeholder="Odor">
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
          <Select variant="filled" isRequired={true} placeholder="Bruises?">
            bruises=t,no=f
            <option value="t">Bruised</option>
            <option value="f">Not bruised</option>
          </Select>
          abundant=a,clustered=c,numerous=n, scattered=s,several=v,solitary=y
          <Select variant="filled" isRequired={true} placeholder="Population">
            <option value="a">Abundant</option>
            <option value="c">Clustered</option>
            <option value="n">Numerous</option>
            <option value="n">Numerous</option>
            <option value="s">Scattered</option>
            <option value="v">Several</option>
            <option value="y">Solitary</option>
          </Select>
        </Stack>
        <Button mt={6} colorScheme="teal">
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}

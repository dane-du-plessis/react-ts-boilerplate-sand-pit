import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  NumberInput
} from "@chakra-ui/core";

const SliderInput = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (value: any) => setValue(value);
  
    return (
      <Flex>
        <NumberInput
          maxW="100px"
          mr="2rem"
          value={value}
          onChange={handleChange}
        />
        <Slider flex="1" value={value} onChange={handleChange}>
          <SliderTrack />
          <SliderFilledTrack />
          <SliderThumb
            fontSize="sm"
            width="32px"
            height="20px"
            children={value}
          />
        </Slider>
      </Flex>
    );
  }

  export default SliderInput;
import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
const ComponentHeader = ({ title, subtitle }) => {
  return (
    <Box maxW="800px">
      <Heading
        fontSize={36}
        fontWeight={800}
        lineHeight={'111%'}
        color={'#1A202C'}
        fontFamily="Inter"
      >
        {title}
      </Heading>
      <Text
        fontSize={20}
        fontWeight={400}
        lineHeight="140%"
        color={'#4A5568'}
        fontFamily="Inter"
        marginY="32px"
      >
        {subtitle}
      </Text>
    </Box>
  );
};
export default ComponentHeader;

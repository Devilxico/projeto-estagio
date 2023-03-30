import React from 'react';
import { Box, Text, Input } from '@chakra-ui/react';
const ComponentInput = ({ title }) => {
  return (
    <Box width="100%">
      <Text
        color="#2D3748"
        fontWeight="500"
        fontSize="16"
        lineHeight="normal"
        style={{ lineHeight: '24px' }}
        marginBottom="8px"
        marginTop="32px"
      >
        {title}
      </Text>
      <Input
        boxSizing="borderBox"
        height="40px"
        backgroundColor="#FFFFFF"
        border="1px"
        borderRadius="6px"
        borderColor="#E2E8F0"
        type="text"
      />
    </Box>
  );
};

export default ComponentInput;

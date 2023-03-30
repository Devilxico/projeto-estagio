import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  Box,
  Text,
  Flex,
  Heading,
  Textarea,
  Button,
  Image,
  Stack,
  Grid,
  useMediaQuery,
} from '@chakra-ui/react';
import ComponentInput from './components/ComponentInput';
import ComponentHeader from './components/ComponentHeader';

function App() {
  const [isMobile] = useMediaQuery('(min-width: 62em)');
  return (
    <ChakraProvider
      theme={extendTheme({
        styles: {
          global: {
            'html, body': {
              backgroundColor: '#F7FAFC',
            },
          },
          breakpoints: {
            sm: '30em',
            md: '48em',
            lg: '62em',
            xl: '80em',
          },
        },
      })}
    >
      <Flex width="100%" alignItems="center" justifyContent="center">
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          margin={{ base: '48px 24px' }}
          gap={7}
        >
          <Box>
            {isMobile && (
              <ComponentHeader
                title={"Let's Connect"}
                subtitle={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue ex, iaculis non magna sit amet, posuere fermentum magna. Praesent tempus risus mauris, ac pharetra mi sagittis id.'
                }
              />
            )}
            <Box
              bg="#FFFFFF"
              borderRadius="8px"
              padding="32px"
              boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
              alignSelf="stretch"
              fontFamily="Inter"
            >
              {!isMobile && (
                <ComponentHeader
                  title={"Let's Connect"}
                  subtitle={
                    'FlexiBlog theme comes with a pre-made contact form component. You can integrate this form with serverless services such as Formspree, Getform, FormKeep and others to receive form submissions via email.'
                  }
                />
              )}
              <Grid>
                <Flex gap={'32px'} direction={{ base: 'column', lg: 'row' }}>
                  <ComponentInput title="Name" />
                  <ComponentInput title="Company Name" />
                </Flex>
                <Flex gap={'32px'} direction={{ base: 'column', lg: 'row' }}>
                  <ComponentInput title="Email" />
                  <ComponentInput title="Phone Number" />
                </Flex>
                <ComponentInput title="Subject" />
                <Text
                  color="#2D3748"
                  fontWeight="500"
                  fontSize="16"
                  lineHeight="normal"
                  style={{ lineHeight: '24px' }}
                  marginBottom="8px"
                  marginTop="32px"
                >
                  Your Message
                </Text>
                <Textarea
                  boxSizing="borderBox"
                  height="40px"
                  resize="vertical"
                  backgroundColor="#FFFFFF"
                  border="1px"
                  borderRadius="6px"
                  borderColor="#E2E8F0"
                  type="text"
                />
                <Button
                  background="#EC7E83"
                  fontWeight="600"
                  color="#FFFFFF"
                  justifyContent="center"
                  width={{ base: '100%', lg: '110px' }}
                  height="48px"
                  borderRadius="4px"
                  marginTop="32px"
                >
                  Submit
                </Button>
              </Grid>
            </Box>
          </Box>
          <Flex
            fontFamily="Inter"
            background="#F7FAFC"
            flexDirection={'column'}
            gap={4}
            width={{ base: '100%', lg: '327px' }}
          >
            <Flex
              height="168px"
              flexDirection={'column'}
              marginTop={{ base: '64px', lg: '74px' }}
            >
              <Heading
                fontSize="18"
                fontWeight="700"
                fontFamily="Inter"
                color="#171923"
                lineHeight="normal"
                style={{ lineHeight: '28px' }}
                marginBottom="12px"
              >
                Our Commitment
              </Heading>
              <Box
                bg="#FFFFFF"
                padding="28px"
                boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
                borderRadius="8px"
              >
                <Text
                  fontWeight="400"
                  fontSize="18"
                  color="#718096"
                  lineHeight="normal"
                  style={{ lineHeight: '28px' }}
                >
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Vivamus hendrerit justo eu diam varius
                  dictum
                </Text>
              </Box>
            </Flex>
            <Flex
              width={{ base: '100%', lg: '327px' }}
              height="248px"
              flexDirection={'column'}
              marginTop={{ base: '64px', lg: '74px' }}
            >
              <Heading
                fontSize="18"
                fontWeight="700"
                fontFamily="Inter"
                color="#171923"
                lineHeight="normal"
                style={{ lineHeight: '28px' }}
                marginBottom="12px"
              >
                Art Directing
              </Heading>
              <Box
                bg="#FFFFFF"
                padding="28px"
                boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
                borderRadius="8px"
              >
                <Text
                  fontWeight="400"
                  fontSize="18"
                  color="#718096"
                  lineHeight="normal"
                  style={{ lineHeight: '28px' }}
                >
                  Proin sapien ligula, aliquam eget enim ac, fringilla hendrerit
                  nulla.
                  <Flex gap={2} marginTop="24px">
                    <Image src="icons\PhoneIcon.svg" />
                    <Text
                      ontSize="16"
                      color="#718096"
                      fontWeight="500"
                      lineHeight="normal"
                      style={{ lineHeight: '24px' }}
                    >
                      +123 (4567) 8910
                    </Text>
                  </Flex>
                  <Flex gap={2} marginTop="20px">
                    <Image src="icons\EmailIcon.svg" />
                    <Text
                      fontSize="16"
                      color="#718096"
                      fontWeight="500"
                      lineHeight="normal"
                      style={{ lineHeight: '24px' }}
                    >
                      hello@example.com
                    </Text>
                  </Flex>
                  <Flex gap={2} marginTop="20px">
                    <Image src="icons\LocationIcon.svg" />
                    <Text
                      ontSize="16"
                      color="#718096"
                      fontWeight="500"
                      lineHeight="normal"
                      style={{ lineHeight: '24px' }}
                    >
                      120 Street Lorem Ipsum Sit Amet
                    </Text>
                  </Flex>
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}

export default App;

import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

import BethPhoto from "../../assets/images/beth_photo.jpg";
import BethPhotoShaker from "../../assets/images/beth_photo_2.png";
import BookPhoto from "../../assets/images/book.jpg";
import SippPhoto from "../../assets/images/sipp.jpg";

export default function Story() {
    return (
        <Box w="100vw" h="300vh" backgroundColor="#eee">
            <Box
                w="100%"
                h="30rem"
                position="relative"
                backgroundImage={BethPhoto}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundAttachment="fixed"
                backgroundPosition="center"
            >
                <Box
                    position="absolute"
                    bottom={0}
                    w="100%"
                    h="1rem"
                    backgroundImage="linear-gradient(360deg, #eee, transparent)"
                />
            </Box>
            <Box
                w="100%"
                h="100vh"
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <Text fontSize="6rem" pt="100px">
                    Our Story
                </Text>
                <Box
                    w="100%"
                    h="10rem"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                >
                    <Text
                        fontSize="2xl"
                        fontFamily="Sharp Grotesk Book"
                        fontStyle="italic"
                        w="50%"
                    >
                        WoW is a product of Beth&apos;s passion and beliefs: a
                        love of thoughtfully handcrafted cocktails, with a
                        splash of feminism, and a deep desire to make the world
                        a better place.
                    </Text>
                </Box>
                <Box w="100%" m="5rem 0" display="flex">
                    <Box w="66%" display="grid" placeItems="center">
                        <Text
                            fontSize="xl"
                            fontFamily="Sharp Grotesk Book"
                            w="50rem"
                        >
                            I&apos;ll start at the beginning. One day I had an
                            idea for creating an all-natural beverage/cocktail
                            mixer. I was bringing my special concoctions to
                            events with my cocktail catering company and serving
                            them to hundreds of people. At every event, guests
                            would ask me where they could buy my creations.
                            After seeing how happy my drinks made everyone I
                            knew I needed to figure out a way to spread the joy
                            even further. That was when my first beverage brand
                            was born, Sipp Sparkling Organics.
                        </Text>
                    </Box>
                    <Box w="33%" display="grid" placeItems="center">
                        <Image
                            w="400px"
                            borderRadius="3xl"
                            src={BethPhotoShaker}
                            alt="Beth"
                        />
                    </Box>
                </Box>
                <Box w="100%" m="5rem 0" display="flex">
                    <Box w="33%" display="grid" placeItems="center">
                        <Image
                            w="400px"
                            borderRadius="3xl"
                            src={SippPhoto}
                            alt="Beth"
                        />
                    </Box>
                    <Box w="66%" display="grid" placeItems="center">
                        <Text
                            fontSize="xl"
                            fontFamily="Sharp Grotesk Book"
                            w="50rem"
                        >
                            After successfully growing Sipp to a national brand,
                            I parted with the venture capital group who invested
                            in my company. I learned they had other plans for
                            the brand that didn&apos;t include me. This was a
                            challenging time, but I knew this wasn&apos;t the
                            end of my journey, it was just the beginning of my
                            next chapter. So many female founders find
                            themselves in my place, but we don&apos;t talk about
                            it. There were times I felt invisible or less-than
                            while growing my business in a male-dominated
                            industry. Times when I was told that &quot;creative
                            people&quot; can&apos;t successfully scale a
                            business. Times when I was not valued as the
                            founder.
                        </Text>
                    </Box>
                </Box>
                <Box w="100%" m="5rem 0" display="flex">
                    <Box w="66%" display="grid" placeItems="center">
                        <Text
                            fontSize="xl"
                            fontFamily="Sharp Grotesk Book"
                            w="50rem"
                        >
                            Well, now my time has come. My time to rise up and
                            speak up. So I wrote a book, You Glow, Girl!, to
                            share my story. The power of connecting with so many
                            extraordinary women through my book, encouraged me
                            to make a comeback. And not just any comeback. I
                            wanted to create something bigger and better, not
                            just a beverage, but a movement. To empower all
                            women.{" "}
                            <span
                                style={{
                                    fontSize: "1.25rem",
                                    fontFamily: "Sharp Grotesk Book",
                                    fontWeight: "bolder",
                                }}
                            >
                                Women who are being told they&apos;re too much
                                or too little to hold any position of power.
                                This has now become my fuel to my mission, to
                                create a world where we run the show, minimizing
                                the discrepancy one new female-led business at a
                                time.
                            </span>
                        </Text>
                    </Box>
                    <Box w="33%" display="grid" placeItems="center">
                        <Image
                            w="400px"
                            borderRadius="3xl"
                            src={BookPhoto}
                            alt="Beth"
                        />
                    </Box>
                </Box>
                <Box w="100%" m="5rem" p="0 20rem 0 10rem">
                    <Stack>
                        <Text fontSize="xl" fontFamily="Sharp Grotesk Book">
                            We only have this one big beautiful life and I
                            didn&apos;t want to live it feeling defeated or less
                            than. I want to live it proudly and loudly and with
                            purpose. I no longer want to play small. I realized
                            I could choose. And so, I did.
                        </Text>
                        <Text fontSize="xl" fontFamily="Sharp Grotesk Book">
                            Welcome to my new beverage, WoW. With or without you
                            have the power to choose.
                        </Text>
                        <br />
                        <Text fontSize="xl" fontFamily="Sharp Grotesk Book">
                            XO,
                        </Text>
                        <Text
                            fontSize="xl"
                            fontFamily="Sharp Grotesk Book"
                            fontStyle="italic"
                        >
                            Beth Wilson-Parentice
                        </Text>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

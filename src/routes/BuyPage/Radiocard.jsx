import { Box, useRadio } from "@chakra-ui/react";
import React from "react";

export default function RadioCard({ ...properties }) {
    const { getInputProps, getCheckboxProps } = useRadio(properties);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
        <Box as="label">
            <input {...input} />
            <Box
                {...checkbox}
                cursor="pointer"
                borderWidth="1px"
                borderColor="gray.800"
                borderRadius="md"
                boxShadow="md"
                color="gray.800"
                _hover={{
                    scale: 1.05,
                }}
                _checked={{
                    bg: "#1A202C",
                    color: "white",
                }}
                _focus={{
                    boxShadow: "outline",
                }}
                px={5}
                py={3}
            >
                {properties}
            </Box>
        </Box>
    );
}

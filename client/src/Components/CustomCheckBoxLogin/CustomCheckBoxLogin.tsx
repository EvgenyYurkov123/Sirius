import { Box, CheckboxProps } from "@chakra-ui/react";
import { useState } from "react";
import { css } from "@emotion/react";

const CustomCheckbox = (props: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <Box
            w="22px"
            h="22px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="1px solid rgb(200, 204, 208)"
            borderRadius="4px"
            cursor="pointer"
            onClick={handleToggle}
            {...props}
            css={css`
                background: transparent !important;
                overflow: visible !important; // Allow content to overflow the box
            `}
        >
            {isChecked && (
                <Box
                    as="span"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    css={css`
                        overflow: visible;
                    `}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="none">
                        <path stroke="#C636FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.6 2.8 7.077 16 2.4 10.711" />
                    </svg>
                </Box>
            )}
        </Box>
    );
};

export default CustomCheckbox;

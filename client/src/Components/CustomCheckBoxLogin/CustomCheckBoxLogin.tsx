import { Box, Checkbox, CheckboxProps } from "@chakra-ui/react";
import { css } from "@emotion/react";

const CustomCheckbox = (props: CheckboxProps) => {
    return (
        <Checkbox
            icon={
                <Box
                    as="span"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="none">
                        <path stroke="#C636FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.6 2.4 7.077 16 2.4 10.711" />
                    </svg>
                </Box>
            }
            {...props}
            css={css`
        input:checked + span {
          svg {
            opacity: 1;
          }
        }
      `}
        />
    );
};

export default CustomCheckbox;

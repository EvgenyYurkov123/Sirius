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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="18"
                        fill="none"
                        style={{ opacity: 0 }} // Скрыть SVG по умолчанию
                    >
                        <path
                            stroke="#C636FF"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M17.6 2.4 7.077 16 2.4 10.711"
                        />
                    </svg>
                </Box>
            }
            {...props}
            css={css`
        input {
          display: none;
        }
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.25em;
          height: 1.25em;
          border: 2px solid #C636FF;
          border-radius: 3px;
        }
        input:checked + span {
          svg {
            opacity: 1; // Показываем SVG при нажатии
          }
        }
      `}
        />
    );
};

export default CustomCheckbox;

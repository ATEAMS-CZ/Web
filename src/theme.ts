import {extendTheme, StyleFunctionProps} from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        body: `'Inter', sans-serif`,
        heading: `'Inter', sans-serif`,
    },
    colors: {
        title: "#e5e7e8",
        subtitle: "#cfcfcf",

        brand: {
            50: "#ef6472",
            100: "#da3949",
            200: "#c22d3a",
            300: "#a91f2a",
        },

        dark: {
            700: "#040e10"
        }
    },
    components: {
        Heading: {
            baseStyle: {
                color: "title",
            }
        },
        Text: {
            baseStyle: {
                color: "subtitle",
            }
        },
        Link: {
            baseStyle: {
                color: "subtitle",

                _hover: {
                    color: "brand.50",
                }
            }
        },
        Button: {
            baseStyle: {
                fontWeight: "regular",
                borderRadius: "md",
                paddingX: "25px",
                paddingY: "10px",
                height: "auto",
            },

            defaultProps: {
                colorScheme: 'red',
            },

            variants: {
                outline: (props: StyleFunctionProps) => ({
                    border: "2px solid",
                    borderColor: props.colorScheme === "red" ? "brand.100" : null,
                    color: props.colorScheme === "red" ? "brand.100" : null,

                    _hover: hoverOutlineButton(props),
                    _active: hoverOutlineButton(props),
                }),

                solid: (props: StyleFunctionProps) => ({
                    bg: props.colorScheme === "red" ? "brand.100" : null,
                    color: props.colorScheme === "red" ? "white" : null,

                    _hover: hoverSolidButton(props),
                    _active: hoverSolidButton(props),
                })
            }
        }
    }
})

const hoverOutlineButton: (props: StyleFunctionProps) => Record<string, any> = (props) => ({
    border: "2px solid",
    borderColor: props.colorScheme === "red" ? "brand.100" : null,
    bg: props.colorScheme === "red" ? "brand.100" : null,
    color: props.colorScheme === "red" ? "white" : null,
});

const hoverSolidButton: (props: StyleFunctionProps) => Record<string, any> = (props) => ({
    bg: props.colorScheme === "red" ? "brand.300" : null,
    color: props.colorScheme === "red" ? "white" : null,
});
// Chakra Imports
import {
    Flex,
    StatLabel, Text, Stat,
    useColorModeValue, Button,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, {useState} from "react";

export default function AdminNavbar(props) {
    const [scrolled, setScrolled] = useState(false);
    const {
        variant,
        children,
        fixed,
        secondary,
        brandText,
        onOpen,
        ...rest
    } = props;
    // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
    let mainText = useColorModeValue("gray.700", "gray.200");
    let secondaryText = useColorModeValue("gray.400", "gray.200");
    let navbarPosition = "absolute";
    let navbarFilter = "none";
    let navbarBackdrop = "blur(21px)";
    let navbarShadow = "none";
    let navbarBg = "none";
    let navbarBorder = "transparent";
    let secondaryMargin = "0px";
    let paddingX = "15px";
    if (props.fixed === true)
        if (scrolled === true) {
            navbarPosition = "fixed";
            navbarShadow = useColorModeValue(
                "0px 7px 23px rgba(0, 0, 0, 0.05)",
                "none"
            );
            navbarBg = useColorModeValue(
                "linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)",
                "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
            );
            navbarBorder = useColorModeValue("#FFFFFF", "rgba(255, 255, 255, 0.31)");
            navbarFilter = useColorModeValue(
                "none",
                "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))"
            );
        }
    if (props.secondary) {
        navbarBackdrop = "none";
        navbarPosition = "absolute";
        mainText = "white";
        secondaryText = "white";
        secondaryMargin = "22px";
        paddingX = "30px";
    }
    const changeNavbar = () => {
        if (window.scrollY > 1) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    window.addEventListener("scroll", changeNavbar);
    return (
        <div style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
            padding: 0
        }}>
            <Flex
                position={navbarPosition}
                boxShadow={navbarShadow}
                bg={navbarBg}
                borderColor={navbarBorder}
                filter={navbarFilter}
                backdropFilter={navbarBackdrop}
                borderWidth="1.5px"
                borderStyle="solid"
                transitionDelay="0s, 0s, 0s, 0s"
                transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
                transition-property="box-shadow, background-color, filter, border"
                transitionTimingFunction="linear, linear, linear, linear"
                alignItems={{xl: "center"}}
                borderRadius="16px"
                display="flex"
                minH="75px"
                justifyContent={{xl: "center"}}
                lineHeight="25.6px"
                mx="auto"
                mt={secondaryMargin}
                pb="8px"
                left={""}
                right={""}
                px={{
                    sm: "0",
                    md: "30px",
                }}
                ps={{
                    xl: "12px",
                }}
                pt="8px"
                top="18px"
                w={{sm: "calc(100vw - 30px)", xl: "calc(100vw - 75px - 275px)"}}
                width={"100%"}
            >
                <Flex
                    w="100%"
                    flexDirection={{
                        sm: "column",
                        md: "row",
                    }}
                    alignItems={{xl: "center"}}
                    paddingLeft="16"
                    paddingRight="16"
                >
                    <img src={'/favicon.png'} style={{width: 64, height: 64}}/>
                    <Stat me={"auto"} paddingLeft={"8"}>
                        <StatLabel fontSize="48"
                                   color="#FFFFFF"
                                   fontWeight="bold"
                                   pb=".1rem">EasyBlock</StatLabel>
                    </Stat>
                </Flex>

                {props.signer == null ?
                    <Button
                        bg={"#FFFFFF"}
                        p="0px"
                        variant="no-hover"
                        my={{sm: "1.5rem", lg: "0px"}}
                        onClick={() => {
                            if (props.signer == null) {
                                props.connectWalletHandler();
                            } else {
                                // console.log("should disconnect");
                                // props.setSigner(null);
                            }
                        }}
                        paddingLeft={8}
                        paddingRight={8}
                        paddingTop={4}
                        paddingBottom={4}
                    >
                        <Text
                            fontSize="24"
                            color={"#3e68a4"}
                            fontWeight="bold"
                            cursor="pointer"
                            transition="all .5s ease"
                            my={{sm: "1.5rem", lg: "0px"}}
                        >
                            {props.signer == null ? "Connect" : "Disconnect"}
                        </Text>
                    </Button> : null}
            </Flex>
        </div>
    );
}

AdminNavbar.propTypes = {
    brandText: PropTypes.string,
    variant: PropTypes.string,
    secondary: PropTypes.bool,
    fixed: PropTypes.bool,
    onOpen: PropTypes.func,
};

// Chakra imports
import {
    Box,
    Button,
    Flex,
    Grid,
    Icon,
    Image,
    Portal,
    Progress,
    SimpleGrid,
    Spacer,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
// Custom icons
import {
    CartIcon,
    DocumentIcon,
    GlobeIcon,
    RocketIcon,
    StatsIcon,
    WalletIcon,
} from "components/Icons/Icons.js";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import TimelineRow from "components/Tables/TimelineRow";
import React, {useState} from "react";
// react icons
import {BsArrowRight} from "react-icons/bs";
import {IoCheckmarkDoneCircleSharp} from "react-icons/io5";
import {FiDollarSign} from "react-icons/fi"
import {dashboardTableData, timelineData} from "variables/general";
import {CreditIcon} from "../../components/Icons/Icons";

export default function Dashboard() {
    const value = "$100.000";
    // Chakra Color Mode
    const {colorMode, toggleColorMode} = useColorMode();
    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");

    // General stats
    const [totalInvestments, setTotalInvestments] = useState(0);
    const [totalRewardsPaid, setTotalRewardsPaid] = useState(0);
    const [totalShareCount, setTotalShareCount] = useState(60);
    const [strongPrice, setStrongPrice] = useState(500);
    const [nodesOwned, setNodesOwned] = useState(1);

    // User stats
    const [userShares, setUserShares] = useState(0);
    const [userPendingRewards, setUserPendingRewards] = useState(0);

    const [series, setSeries] = useState([
        {
            type: "area",
            name: "Mobile apps",
            data: [190, 220, 205, 350, 370, 450, 400, 360, 210, 250, 292, 150],
        },
        {
            type: "area",
            name: "Websites",
            data: [400, 291, 121, 117, 25, 133, 121, 211, 147, 25, 201, 203],
        },
    ]);
    const overlayRef = React.useRef();

    return (
        <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 32}}>
            <Flex flexDirection="column" pt={{base: "120px", md: "75px"}} maxWidth={"1400px"} paddingLeft={0}
                  paddingRight={0}>
                <SimpleGrid columns={{sm: 1, md: 2, xl: 4}} spacing="24px" paddingLeft={0} paddingRight={0}>
                    <Card minH="83px">
                        <CardBody>
                            <Flex flexDirection="row" align="center" justify="center" w="100%">
                                <Stat me="auto">
                                    <StatLabel
                                        fontSize="sm"
                                        color="gray.400"
                                        fontWeight="bold"
                                        pb=".1rem"
                                    >
                                        StrongBlock APR/APY
                                    </StatLabel>
                                    <Flex>
                                        <StatNumber fontSize="lg" color={textColor}>
                                            365%
                                        </StatNumber>
                                        <StatHelpText
                                            alignSelf="flex-end"
                                            justifySelf="flex-end"
                                            m="0px"
                                            color="green.400"
                                            fontWeight="bold"
                                            ps="3px"
                                            fontSize="md"
                                        >
                                            {"(3778%)"}
                                        </StatHelpText>
                                    </Flex>
                                </Stat>
                                <IconBox as="box" h={"48px"} w={"48px"} bg={"#FFFFFF"}>
                                    <img style={{width: 36, height: 36}} src={'/stronblock/StrongBlockLogo.png'}/>
                                </IconBox>
                            </Flex>
                        </CardBody>
                    </Card>
                    <Card minH="83px">
                        <CardBody>
                            <Flex flexDirection="row" align="center" justify="center" w="100%">
                                <Stat me="auto">
                                    <StatLabel
                                        fontSize="sm"
                                        color="gray.400"
                                        fontWeight="bold"
                                        pb=".1rem"
                                    >
                                        Total Investment
                                    </StatLabel>
                                    <Flex>
                                        <StatNumber fontSize="lg" color={textColor}>
                                            {totalInvestments} $
                                        </StatNumber>
                                    </Flex>
                                </Stat>
                                <IconBox as="box" h={"48px"} w={"48px"} bg={"#FFFFFF"}>
                                    <WalletIcon h={"36px"} w={"36px"} color={"#3e68a4"}/>
                                </IconBox>
                            </Flex>
                        </CardBody>
                    </Card>
                    <Card minH="83px">
                        <CardBody>
                            <Flex flexDirection="row" align="center" justify="center" w="100%">
                                <Stat>
                                    <StatLabel
                                        fontSize="sm"
                                        color="gray.400"
                                        fontWeight="bold"
                                        pb=".1rem"
                                    >
                                        Total Rewards
                                    </StatLabel>
                                    <Flex>
                                        <StatNumber fontSize="lg" color={textColor}>
                                            {totalRewardsPaid} $
                                        </StatNumber>
                                    </Flex>
                                </Stat>
                                <Spacer/>
                                <IconBox as="box" h={"48px"} w={"48px"} bg={"#FFFFFF"}>
                                    <FiDollarSign h={"48px"} w={"48px"} color={"#3e68a4"}/>
                                </IconBox>
                            </Flex>
                        </CardBody>
                    </Card>
                    <Card minH="83px">
                        <CardBody>
                            <Flex flexDirection="row" align="center" justify="center" w="100%">
                                <Stat me="auto">
                                    <StatLabel
                                        fontSize="sm"
                                        color="gray.400"
                                        fontWeight="bold"
                                        pb=".1rem"
                                    >
                                        Daily Reward / Share
                                    </StatLabel>
                                    <Flex>
                                        <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                                            {(nodesOwned * 0.1 * strongPrice / totalShareCount).toFixed(4)} $
                                        </StatNumber>
                                    </Flex>
                                </Stat>
                                <IconBox as="box" h={"48px"} w={"48px"} bg={"#FFFFFF"}>
                                    <FiDollarSign h={"48px"} w={"48px"} color={"#3e68a4"}/>
                                </IconBox>
                            </Flex>
                        </CardBody>
                    </Card>
                </SimpleGrid>
                <Grid
                    templateColumns={{md: "1fr", lg: "1.8fr 1.2fr"}}
                    templateRows={{md: "1fr auto", lg: "1fr"}}
                    my="26px"
                    gap="24px"
                >
                    <Card minHeight="290.5px" p="1.2rem">
                        <CardBody w="100%">
                            <Flex flexDirection={{sm: "column", lg: "row"}} w="100%">
                                <Flex
                                    flexDirection="column"
                                    h="100%"
                                    lineHeight="1.6"
                                    width={{lg: "45%"}}
                                >
                                    <Text fontSize="sm" color="gray.400" fontWeight="bold">
                                        Built by developers
                                    </Text>
                                    <Text
                                        fontSize="lg"
                                        color={textColor}
                                        fontWeight="bold"
                                        pb=".5rem"
                                    >
                                        EasyBlock
                                    </Text>
                                    <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                        From colors, cards, typography to complex elements, you will
                                        find the full documentation.
                                    </Text>
                                    <Spacer/>
                                    <Flex align="center">
                                        <Button
                                            p="0px"
                                            variant="no-hover"
                                            bg="transparent"
                                            my={{sm: "1.5rem", lg: "0px"}}
                                        >
                                            <Text
                                                fontSize="sm"
                                                color={textColor}
                                                fontWeight="bold"
                                                cursor="pointer"
                                                transition="all .5s ease"
                                                my={{sm: "1.5rem", lg: "0px"}}
                                                _hover={{me: "4px"}}
                                            >
                                                Read more
                                            </Text>
                                            <Icon
                                                as={BsArrowRight}
                                                w="20px"
                                                h="20px"
                                                fontSize="2xl"
                                                transition="all .5s ease"
                                                mx=".3rem"
                                                cursor="pointer"
                                                pt="4px"
                                                _hover={{transform: "translateX(20%)"}}
                                            />
                                        </Button>
                                    </Flex>
                                </Flex>
                                <Spacer/>
                                <Flex
                                    bg="teal.300"
                                    align="center"
                                    justify="center"
                                    borderRadius="15px"
                                    width={{lg: "40%"}}
                                    minHeight={{sm: "250px"}}
                                >
                                    <Image
                                        src={logoChakra}
                                        alt="chakra image"
                                        minWidth={{md: "300px", lg: "auto"}}
                                    />
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                    <Card maxHeight="290.5px" p="1rem">
                        <CardBody
                            p="0px"
                            backgroundImage={peopleImage}
                            bgPosition="center"
                            bgRepeat="no-repeat"
                            w="100%"
                            h={{sm: "200px", lg: "100%"}}
                            bgSize="cover"
                            position="relative"
                            borderRadius="15px"
                        >
                            <Box
                                bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
                                w="100%"
                                position="absolute"
                                h="inherit"
                                borderRadius="inherit"
                                ref={overlayRef}
                            ></Box>
                            <Portal containerRef={overlayRef}>
                                <Flex
                                    flexDirection="column"
                                    color="white"
                                    p="1.5rem 1.2rem 0.3rem 1.2rem"
                                    lineHeight="1.6"
                                >
                                    <Text fontSize="xl" fontWeight="bold" pb=".3rem">
                                        Work with the rockets
                                    </Text>
                                    <Text fontSize="sm" fontWeight="normal" w={{lg: "92%"}}>
                                        Wealth creation is a revolutionary recent positive-sum game.
                                        It is all about who takes the opportunity first.
                                    </Text>
                                    <Spacer/>
                                    <Flex
                                        align="center"
                                        mt={{sm: "20px", lg: "40px", xl: "90px"}}
                                    >
                                        <Button p="0px" variant="no-hover" bg="transparent" mt="12px">
                                            <Text
                                                fontSize="sm"
                                                fontWeight="bold"
                                                _hover={{me: "4px"}}
                                                transition="all .5s ease"
                                            >
                                                Read more
                                            </Text>
                                            <Icon
                                                as={BsArrowRight}
                                                w="20px"
                                                h="20px"
                                                fontSize="xl"
                                                transition="all .5s ease"
                                                mx=".3rem"
                                                cursor="pointer"
                                                _hover={{transform: "translateX(20%)"}}
                                                pt="4px"
                                            />
                                        </Button>
                                    </Flex>
                                </Flex>
                            </Portal>
                        </CardBody>
                    </Card>
                </Grid>
            </Flex>
        </div>
    );
}

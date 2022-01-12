/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import {FiTwitter} from "react-icons/fi";
import {BiBookBookmark} from "react-icons/bi";
import {AiFillGithub} from "react-icons/all";

export default function Footer(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");=
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="center"
      px="30px"
      pb="20px"

    >
        <List display="flex">
            <ListItem
                me={{
                    base: "20px",
                    md: "44px",
                }}
            >
                <Link color="gray.400" href="https://twitter.com/easyblock_fin" target={'_blank'}>
                    <FiTwitter size={25}/>
                </Link>
            </ListItem>
            <ListItem
                me={{
                    base: "20px",
                    md: "44px",
                }}
            >
                <Link color="gray.400" href="https://docs.easyblock.finance" target={'_blank'}>
                    <BiBookBookmark size={25}/>
                </Link>
            </ListItem>
            <ListItem
                me={{
                    base: "20px",
                    md: "44px",
                }}
            >
                <Link color="gray.400" href="https://github.com/DoguD/easyblock-contracts" target={'_blank'}>
                    <AiFillGithub size={25}/>
                </Link>
            </ListItem>
        </List>
    </Flex>
  );
}

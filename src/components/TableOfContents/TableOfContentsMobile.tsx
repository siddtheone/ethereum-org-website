import {
  useDisclosure,
  chakra,
  Box,
  Fade,
  Flex,
  Icon,
  List,
} from "@chakra-ui/react"
import React from "react"
import { MdExpandMore } from "react-icons/md"
import Translation from "../Translation"
import ItemsList from "./ItemsList"
import { Item, outerListProps } from "./utils"

export interface IPropsTableOfContentsMobile {
  items?: Array<Item>
  maxDepth?: number
}

const Mobile: React.FC<IPropsTableOfContentsMobile> = ({ items, maxDepth }) => {
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure({
    defaultIsOpen: false,
  })
  if (!items) {
    return null
  }

  return (
    <Box
      as="aside"
      background="background"
      border="1px"
      borderColor="border"
      borderRadius="4px"
      py={2}
      px={4}
    >
      <Flex
        color="text200"
        cursor="pointer"
        alignItems="center"
        justify="space-between"
        {...getButtonProps()}
      >
        <chakra.span flex={1} fontWeight={500}>
          <Translation id="on-this-page" />
        </chakra.span>
        <Icon
          as={MdExpandMore}
          transform={isOpen ? "rotate(0)" : "rotate(-90deg)"}
          boxSize={6}
          transition="transform .4s"
        />
      </Flex>
      <Fade
        in={isOpen}
        {...getDisclosureProps()}
        transition={{ enter: { duration: 0.6 } }}
      >
        <List {...outerListProps}>
          <ItemsList
            items={items}
            depth={0}
            maxDepth={maxDepth ? maxDepth : 1}
          />
        </List>
      </Fade>
    </Box>
  )
}

export default Mobile

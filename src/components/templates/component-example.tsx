import { Box } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode, useState } from "react";

export type RegisterProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export const Example = ({ children }: RegisterProps) => {
  return (
    <>
      <Box>Hello world</Box>
    </>
  );
};

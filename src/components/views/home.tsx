import NextLink from "next/link";
import { ReactNode, useEffect, useState } from "react";
import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { gql, useQuery } from "@apollo/client";
import {
  Type_User,
  useCreateUserMutation,
  useGetUsersQuery,
  Users,
} from "../../graphql/types";

export type RegisterProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

interface StatsCardProps {
  title: string;
  stat: string | number;
  icon: ReactNode;
}

export const HorusHome = ({ children }: RegisterProps) => {
  const getUsers = useGetUsersQuery();
  const [dataUser, setDataUser] = useState([] as Users[]);
  const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
    variables: {
      user_name: "Martin",
      first_name: "Martin",
      last_name: "Hernandez Rito",
      active: true,
      email: "martin.hernandez.makicop@gmail.com",
      pass: "lemaos",
      user_type: Type_User.Admin,
    },
  });

  useEffect(() => {
    console.log(getUsers.data);

    if (getUsers.data) {
      if (!getUsers.data?.GetUsers) return;

      setDataUser(getUsers.data?.GetUsers);
    }
  }, [getUsers.data]);

  const addUser = () => {
    createUserMutation();
  };
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Bienvenido a Horus Playground!
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Usuarios"}
          stat={dataUser.length}
          icon={<BsPerson size={"3em"} />}
        />
        <StatsCard
          title={"Algo"}
          stat={"Otro algo"}
          icon={<FiServer size={"3em"} />}
        />
        <StatsCard
          title={"Algo"}
          stat={"Otro algo"}
          icon={<GoLocation size={"3em"} />}
        />
      </SimpleGrid>
      <Button onClick={addUser}>Add user</Button>
    </Box>
  );
};

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"}>{title}</StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

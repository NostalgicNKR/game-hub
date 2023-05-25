import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaLinux,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";
import Platform from "../entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIcons = ({ platforms }: Props) => {
  const PlatformIconsList: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    iphone: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <>
      <HStack marginY={1}>
        {platforms.map((p) => (
          <Icon
            key={p.id}
            as={PlatformIconsList[p.slug]}
            color={"gray.500"}
          ></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIcons;

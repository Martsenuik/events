import { FaLocationDot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { LuWallet } from "react-icons/lu";
import { Item, Name, Text } from "./Event.styled";

export const Event = ({ name, location, speaker, type, time }) => {
  return (
    <>
      <Item>
        <Name>{name}</Name>
        <Text>
          <FaLocationDot />
          {location}
        </Text>
        <Text>
          <IoPerson />
          {speaker}
        </Text>
        <Text>
          <LuWallet />
          {type}
        </Text>
        <Text>
          <FaRegCalendarAlt />
          {time.start}
        </Text>
        <Text>
          <GoClock />
          {time.end}
        </Text>
      </Item>
    </>
  );
};

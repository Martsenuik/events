import { Event } from "./Event";
import { List, Title, TitleBox } from "./Event.styled";

export const PageBoard = ({ eventData }) => {
  return (
    <>
      <TitleBox>
        <Title>24th Core Worlds Coalition Conference</Title>
      </TitleBox>
      <List>
        {eventData.map((item) => {
          return (
            <Event
              name={item.name}
              location={item.location}
              speaker={item.speaker}
              type={item.type}
              time={item.time}
            />
          );
        })}
      </List>
    </>
  );
};

interface Props {
  className?: string;
}

export const Events: React.FC<Props> = ({ events }) => {
  return (
    <div>
      {events.map((event) => (
        <li key={event.event_id}>{event.name}</li>
      ))}
    </div>
  );
};

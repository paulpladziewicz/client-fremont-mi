interface Props {
  className?: string;
  events: any;
}

export const Events: React.FC<Props> = ({ events }) => {
  return (
    <div>
      {events?.map((event: any) => (
        <li key={event.event_id}>{event.name}</li>
      ))}
    </div>
  );
};

import { Layout } from 'components';
import axios from "axios";

// @ts-ignore
const PublicEvent = ({ event }) => {

    const renderEvent = () => {
        if (!event) return;

        return <h1>{event.first_name}</h1>;
    };

    return <Layout>{renderEvent()}</Layout>;
};

// export async function getServerSideProps(context: { query: { eventId: any; }; }) {
//     const { query: { eventId } } = context;
//     const res = await axios.get(`http://localhost:4000/people/${eventId}`);
//     const event = res.data;
//
//     return {
//         props: {
//             event
//         }
//     };
// }

export default PublicEvent;

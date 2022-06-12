import { PostOptions } from 'components';

export const EventsDashboardDisplay = () => {
  return (
    <div className='border border-gray-400 p-4 rounded-2xl'>
      <div className='flex justify-between mb-8'>
        <h2 className='text-4xl font-bold text-slate-800'>Events</h2>
        <PostOptions />
      </div>
    </div>
  );
};

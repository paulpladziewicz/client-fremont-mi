import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  className?: string;
  size?: string;
}
export const Logo: React.FC<Props> = ({ className, size = '2rem' }) => {
  const renderedStyles = classNames('cursor-pointer font-black', className);
  return (
    <Link href='/'>
      <div className={renderedStyles} style={{ fontSize: size }}>
        <span>Fremont</span>
        <span className='text-indigo-700'>MI</span>
      </div>
    </Link>
  );
};

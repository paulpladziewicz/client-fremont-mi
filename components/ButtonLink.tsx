import Link from 'next/link';
import classNames from 'classnames';

interface Props {
  text: string;
  href: string;
  className?: string;
}

export const ButtonLink: React.FC<Props> = ({ text, href, className = '' }) => {
  const renderedStyles = classNames(
    'inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
    className
  );
  return (
    <Link href={href}>
      <a className={renderedStyles}>{text}</a>
    </Link>
  );
};

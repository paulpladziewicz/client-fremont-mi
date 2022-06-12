import styles from 'styles/Heading.module.css';
import classNames from 'classnames';

interface Props {
  as: string;
  display?: string;
  className?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<Props> = ({
  as,
  display = as,
  className,
  children
}) => {
  const headingStyles = classNames(styles[display], className);
  const renderHeading = () => {
    if (as === 'h1') {
      return <h1 className={headingStyles}>{children}</h1>;
    }
    if (as === 'h2') {
      return <h2 className={headingStyles}>{children}</h2>;
    }
    if (as === 'h3') {
      return <h3 className={headingStyles}>{children}</h3>;
    }
  };

  return <>{renderHeading()}</>;
};

import cx from 'classnames';

type Props = {
  name: string;
  className?: string | null | undefined;
};

const MaterialIcon = ({ name, className = null }: Props) => {
  return <i className={cx('material-icons', className)}>{name}</i>;
};

export default MaterialIcon;

import cx from 'classnames';

interface MenuHeaderProps {
  Icon: React.ComponentProps<any>;
  isActive?: boolean;
  showIn: 'mobile' | 'dekstop';
  message?: number;
}

export default function MenuHeader(props: MenuHeaderProps) {
  const { Icon, isActive, showIn, message } = props;

  const classMenu = cx({
    'h-6 cursor-pointer': true,
    'text-black': isActive,
    'hidden lg:inline-flex hover:scale-125 transition-all duration-150 ease-out': showIn === 'dekstop',
    'lg:hidden': showIn === 'mobile',
  });

  if (message) {
    return (
      <div className="relative hidden lg:inline-flex">
        <div className="absolute w-5 h-5 text-xs top-[-7px] left-[10px] z-10 bg-red-500 text-white rounded-full flex justify-center items-center pointer-events-none">
          {message}
        </div>
        <Icon className={classMenu} />
      </div>
    );
  }

  return <Icon className={classMenu} />;
}

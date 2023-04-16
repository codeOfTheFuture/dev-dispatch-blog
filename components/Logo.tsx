import Image from "next/image";

interface Props {
  renderDefault: (props: any) => JSX.Element;
}

const Logo = (props: Props) => {
  const { renderDefault } = props;

  return (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 relative">
        <Image
          className="rounded-full object-cover"
          fill
          src="/assets/logo-img.jpg"
          alt="logo"
        />
      </div>
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;

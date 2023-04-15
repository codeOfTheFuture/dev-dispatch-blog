import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

interface Props {
  renderDefault: (props: any) => JSX.Element;
}

const StudioNavbar = (props: Props) => {
  return (
    <nav>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex items-center text-custom-brand">
          <ArrowUturnLeftIcon className="w-6 h-6" />
          Go To Website
        </Link>

        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-custom-brand">
          <h1 className="font-bold text-white">
            Check out my portfolio to view all of my projects 👉
          </h1>
          <Link
            href="https://www.jeff-oliver.com/"
            className="text-custom-brand font-bold ml-2"
            target="_blank">
            www.jeff-oliver.com
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </nav>
  );
};

export default StudioNavbar;

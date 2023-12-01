import Image from "next/image";

export const Header = () => {
  return (
    <header className="p-4 fixed top-0 w-full z-40 bg-black">
      <Image src="/images/logo.svg" alt="Early Bird" width={90} height={32} />
    </header>
  );
};

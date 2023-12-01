import Image from "next/image";

export const Header = () => {
  return (
    <header className="p-4">
      <Image src="/images/logo.svg" alt="Early Bird" width={90} height={32} />
    </header>
  );
};

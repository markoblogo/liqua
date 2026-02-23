import Image from "next/image";

type ThemedLogoProps = {
  width: number;
  height: number;
  className?: string;
};

export function ThemedLogo({ width, height, className }: ThemedLogoProps) {
  return (
    <span className={`logo-wrap ${className ?? ""}`.trim()}>
      <Image
        src="/logo/liqua-black.svg"
        alt="Liqua logo icon"
        width={width}
        height={height}
        className="logo-asset logo-black"
        priority
      />
      <Image
        src="/logo/liqua-white.svg"
        alt="Liqua logo icon"
        width={width}
        height={height}
        className="logo-asset logo-white"
        priority
      />
    </span>
  );
}

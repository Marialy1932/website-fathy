interface PropsServicio {
  urlImg: string;
  servive: string;
  description: string;
  iconColor: string;
  isUltimate: boolean;
  position: string;
  delay: number;
}

export default function Servicio({
  urlImg,
  servive,
  description,
  iconColor,
  isUltimate,
  position,
  delay,
}: PropsServicio) {
  let border = isUltimate ? "" : "border-b border-gray-200";
  let side = "";
  let reverseCard = "";
  let marginIcon = "";
  let textOrientation = "";

  if (position === "left") {
    side = "Right";
    reverseCard = "flex-row-reverse";
    marginIcon = "ml-6";
    textOrientation = "text-right";
  } else {
    side = "Left";
    marginIcon = "mr-6";
    textOrientation = "text-left";
  }

  return (
    <div
      className={`flex items-center min-h-[137px] ${reverseCard} motion-safe:animate-fadeIn${side}`}
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: "both",
      }}
    >
      <div
        className={`flex flex-shrink-0 rounded-full w-15 h-15 items-center justify-center ${iconColor} ${marginIcon}`}
      >
        <img src={urlImg} alt="" width={50} />
      </div>

      <a href="/servicios" className={`${textOrientation}`}>
        <h3 className={`text-xl font-semibold`}>{servive}</h3>
        <span className={`text-sm text-gray-500`}>{description}</span>
      </a>
    </div>
  );
}

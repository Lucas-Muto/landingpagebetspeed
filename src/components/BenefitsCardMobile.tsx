import { Benefit } from "@/app/utils/benefits";

export function BenefitsCardMobile({
  benefit,
  index,
}: {
  benefit: Benefit;
  index: number;
}) {
  return (
    <div className="w-[200px] p-4 h-[200px] rounded-xl bg-black bg-opacity-20">
      <img
        src={benefit.url}
        alt={benefit.title}
        className={`${index === 4 ? "w-3" : "w-5"}`}
      />
      <h3 className="text-white text-xs my-3 font-bold">{benefit.title}</h3>
      <p className="text-white text-xs">{benefit.description}</p>
    </div>
  );
}

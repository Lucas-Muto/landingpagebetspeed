import { Benefit } from "@/app/utils/benefits";

export function BenefitsCard({
  benefit,
  index,
}: {
  benefit: Benefit;
  index: number;
}) {
  return (
    <div
      className={`w-[392px] px-8 h-[235px] ${
        index === 1 || index === 4 ? "border-x-2 border-white" : ""
      } ${index > 2 ? "mt-20" : ""}`}
    >
      <img
        src={benefit.url}
        alt={benefit.title}
        className={`${index === 4 ? "w-3" : "w-5"}`}
      />
      <h3 className="text-primary mb-3 my-8">{benefit.title}</h3>
      <p className="text-white">{benefit.description}</p>
    </div>
  );
}

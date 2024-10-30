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
      className={`w-[350px] px-8 h-[185px] ${
        index === 1 || index === 4 ? "border-x-2 border-white" : ""
      } ${index > 2 ? "mt-14" : ""}`}
    >
      <img
        src={benefit.url}
        alt={benefit.title}
        className={`${index === 4 ? "w-3" : "w-5"}`}
      />
      <h3 className="text-primary text-sm mb-3 my-8">{benefit.title}</h3>
      <p className="text-white text-sm">{benefit.description}</p>
    </div>
  );
}

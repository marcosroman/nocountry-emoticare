interface Props {
  children: JSX.Element;
  title: string;
  desc: string;
}

function FeatureCard({ title, desc, children }: Props) {
  return (
    <article className="border rounded-lg p-4 bg-white min-h-44">
      {children}
      <h3 className="font-semibold text-lg mt-3">{title}</h3>
      <p className="mt-4 text-[#6C6E71] text-sm">{desc}</p>
    </article>
  );
}

export default FeatureCard;

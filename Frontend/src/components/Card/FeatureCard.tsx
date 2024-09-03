interface Props {
  children: JSX.Element;
  title: string;
  desc: string;
}

function FeatureCard({ title, desc, children }: Props) {
  return (
    <article className="flex flex-col items-center justify-center border rounded-lg px-8 bg-white min-h-60 shadow-lg transition-all duration-200 hover:shadow-blue-100 hover:shadow-2xl hover:border-blue-600">
      <span className="flex items-center justify-center">{children}</span>
      <h3 className="font-semibold text-xl mt-3 text-center">{title}</h3>
      <p className="mt-4 text-[#6C6E71] text-base text-center">{desc}</p>
    </article>
  );
}

export default FeatureCard;

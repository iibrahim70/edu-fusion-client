const SectionTitle = ({ title, description }) => {
  return (
    <div className="space-y-5 mb-10">
      <h2 className="text-3xl xl:text-4xl font-bold">{title}</h2>
      <p className="text-justify xl:w-[70%]">{description}</p>
    </div>
  );
};

export default SectionTitle;

function ContentContainer({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-xl my-5">
      <h1 className="text-left text-3xl text-gray-500 font-extrabold sm:text-5xl mb-4">
        {title}
        {note && (
          <span className="text-xs sm:text-base text-gray-800">{note}</span>
        )}
      </h1>

      {children}
    </div>
  );
}

export default ContentContainer;

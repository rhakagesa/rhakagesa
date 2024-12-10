function ContentContainer({
  title,
  note,
  className,
  children,
}: {
  title: string;
  note?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <div className="mx-auto max-w-xl my-5">
        <h1 className="text-left text-3xl text-gray-500 font-extrabold sm:text-5xl mb-4">
          {title}
          {note && (
            <span className="text-xs sm:text-base text-gray-800">{note}</span>
          )}
        </h1>
        {children}
      </div>
    </div>
    
  );
}

export default ContentContainer;

function Profile({
  imgsrc,
  title,
  desc,
}: {
  imgsrc: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4">
      <img
        src={imgsrc}
        alt=""
        className="aspect-square w-24 object-contain sm:self-start border-b-2 border-r-2 rounded-full"
      />

      <div>
        <h3 className="text-base sm:text-lg font-bold text-gray-900">
          {title}
        </h3>

        <p className="text-xs sm:text-base text-gray-700 text-justify leading-tight">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default Profile;

import { useRef } from "react";
import { useInView } from "motion/react";

function ContentContainer({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const effectTransitionLeft: string = isInView
    ? "translate-x-0 opacity-100"
    : "-translate-x-full opacity-0";

  const transitionAndDuration: string = "transition-all duration-1000";

  return (
    <div
      ref={ref}
      className={`mx-auto max-w-xl my-5 ${effectTransitionLeft} ${transitionAndDuration}`}
    >
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

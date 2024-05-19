import TestimonialCard from "./TestimonialCard";

const Main = () => {
  return (
    <main className="mx-auto flex min-w-[300px] max-w-[1160px] flex-1 items-center">
      <div>
        <article className="grid grid-cols-1 gap-y-6 px-6 py-[70px] md:grid-flow-row md:grid-cols-4 md:gap-x-8 md:gap-y-6">
          <TestimonialCard
            name="Daniel Clifford"
            className="purple-card md:col-span-2"
            avatarBorder="border-opacity-40 border-tg-white border-2"
          />
          <TestimonialCard
            name="Jonathan Walters"
            className="dark bg-tg-gray-blue"
            avatarBorder="border-opacity-70 border-tg-white border-2"
          />
          <TestimonialCard
            name="Jeanette Harmon"
            className="light md:col-start-1"
            avatarBorder="border-tg-white border-2 md:col-start-1 md:col-end-3"
          />
          <TestimonialCard
            name="Patrick Abrams"
            className="dark bg-tg-dark-blue md:col-span-2 md:col-start-2"
            avatarBorder="border-tg-violet border-2"
          />
          <TestimonialCard
            name="Kira Whittle"
            className="light md:col-start-4 md:row-span-2 md:row-start-1"
          />
        </article>
      </div>
    </main>
  );
};

export default Main;

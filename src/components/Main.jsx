import TestimonialCard from "./TestimonialCard";

const Main = () => {
  return (
    <main className="container mx-auto mb-auto">
      <article className="grid grid-cols-1 gap-y-6 px-6 py-[70px]">
        <TestimonialCard
          name="Daniel Clifford"
          className="purple-card"
          avatarBorder="border-opacity-40 border-tg-white border-2"
        />
        <TestimonialCard
          name="Jonathan Walters"
          className="dark bg-tg-gray-blue"
          avatarBorder="border-opacity-70 border-tg-white border-2"
        />
        <TestimonialCard
          name="Jeanette Harmon"
          className="light"
          avatarBorder="border-tg-white border-2"
        />
        <TestimonialCard
          name="Patrick Abrams"
          className="dark bg-tg-dark-blue"
          avatarBorder="border-tg-violet border-2"
        />
        <TestimonialCard name="Kira Whittle" className="light" />
      </article>
    </main>
  );
};

export default Main;

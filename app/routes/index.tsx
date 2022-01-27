import screen from "../images/screen.png";

export default function Index() {
  return (
    <section>
      <h2 className="text-white text-center mt-20 text-5xl">Habitmeister</h2>
      <img
        src={screen}
        alt="habit app screen image"
        className="mx-auto w-1/12 mt-10"
      />
      <h1 className=" mt-10 text-center w-2/5 mx-auto text-5xl font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-lime-300 to-orange-600">
        Build better habits.
      </h1>
      <p className="text-white text-center mt-5">
        Hello world! This is your Habit building app
      </p>
    </section>
  );
}

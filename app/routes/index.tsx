import screen from "../images/screen.png";

export default function Index() {
  return (
    <div>
      <img
        src={screen}
        alt="habit app screen image"
        className="mx-auto w-1/12 mt-40"
      />
      <p className="text-white text-center mt-10">
        Hello world! This is your Habit building app
      </p>
    </div>
  );
}

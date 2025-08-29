import Counter from "@/components/counter";
import { ThemeSwitch } from "@/components/theme-switch";

const index = () => {
  return (
    <div className=" h-screen flex items-center justify-center flex-col max-md:p-2">
      <ThemeSwitch className="p-2" />
      <center className="grid gap-2">
        {" "}
        <h1 className="font-extrabold text-6xl max-md:text-3xl">
          The Boring App
        </h1>
        <h1 className="font-light text-3xl max-md:text-xl">
          Sometimes, being bored is better.
        </h1>
        <Counter />
      </center>
    </div>
  );
};

export default index;

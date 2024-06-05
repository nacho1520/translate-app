import Translator from "@/components/Translator";
import heroImg from "../assets/hero_img.jpg";
import logo from "../assets/logo.svg";

const optionsLanguage = [
  {
    "id": 1,
    "lang": "English",
  },
  {
    "id": 2,
    "lang": "French",
  }
];

const Home = () => {
  return (
    <main className="relative flex flex-col items-center pt-[92px]">
      <img 
        src={ heroImg.src }
        className="absolute left-0 top-0 w-full h-[100vh] -z-10"
      />
      <img
        src={ logo.src }
        width={ 137 }
        height={ 45 }
      />

      <div className="grid grid-cols-2 mt-[52px] gap-4">
        <Translator langs={ optionsLanguage } />
        <Translator langs={ optionsLanguage } />
      </div>
    </main>
  );
};

export default Home;

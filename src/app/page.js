import heroImg from "../assets/hero_img.jpg";

const Home = () => {
  return (
    <main className="">
      <img 
        src={ heroImg.src }
        className="w-full h-[100vh] -z-10"
      />
    </main>
  );
};

export default Home;

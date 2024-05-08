import Authlayout from "./(auth)/layout";
import Header from "./(auth)/page";

export default function Home() {
  return (
    <div>
      <Authlayout>
        <Header />
      </Authlayout>
    </div>
  );
}

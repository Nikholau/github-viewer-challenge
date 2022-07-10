import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const Home: React.FC = () => {
  document.title = 'Home | JustForYou';
  return (
      <div>
        <Input 
        name="name"
        />
        <Button>Procurar</Button>
      </div>
  );
};
export default Home;
import { useFormik } from "formik";
import { useCallback } from "react";
import * as Yup from 'yup';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import './styles.scss';
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  document.title = 'Home | GitHub Viewer';

  const navigate = useNavigate();

  const handleClickUser = useCallback((name: string) => {
    if (!name.trim()) return alert("Por favor, insira um nome de usuário válido!");
    navigate(`/repositories?name=${name}`);
  }, [navigate]);
  

  const formik = useFormik({
    initialValues: { name: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Nome é obrigatório'),
    }),
    onSubmit: (values) => handleClickUser(values.name),
  });

  return (
    <div className="homeContainer">
      <div className="formContainer">
        <h1>GitHub Viewer</h1>
        <form onSubmit={formik.handleSubmit}>
          <Input
            name="name"
            placeholder="Nome do usuário GitHub"
            formAttributes={formik}
          />
          <Button type="submit">Procurar</Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
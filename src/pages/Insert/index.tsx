import { useFormik } from "formik";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from 'yup';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import './styles.scss';



const Home: React.FC = () => {
  document.title = 'Home | JustForYou';

  const history = useHistory();

  const handleClickUser = useCallback((name: string) => {
    history.push('/repositories?name=' + name);
  }, [history]);

  const getUserForm = useFormik({
    enableReinitialize: true,
    initialValues: {name: ''},
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Nome é obrigatório'),
    }),
    onSubmit: values => {
      handleClickUser(values.name);
    },
  });
  
  return (
    <>
        <div className="form">
          <div className="submitForm">
          <Input 
          name="name"
          placeholder="Nome usuário Github"
          value={getUserForm.values.name}
          formAttributes={getUserForm}
          />
          <Button 
          type="button" 
          onClick={getUserForm.handleSubmit}>
            Procurar
          </Button>
          </div>
        </div>
    </>
  );
};
export default Home;
import { useFormik } from "formik";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from 'yup';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import './styles.scss';

import referenceLeft from "../../assets/references/EstudosID2021_Prancheta 1 cópia 2.jpg";
import referenceRight from "../../assets/references/EstudosID2021_Prancheta 1 cópia 4.jpg";
import logo from "../../assets/brand/jfy-logo-iron-1280.png";



const Home: React.FC = () => {
  document.title = 'Home | JustForYou';

  const history = useHistory();
  
  const handleClickUser = useCallback(() => {
    history.push('/repositories');
  }, [history]);

  const getUserForm = useFormik({
    enableReinitialize: true,
    initialValues: {name: ''},
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Nome é obrigatório'),
    }),
    onSubmit: values => {
      console.log('chegou', values);
    },
  });
  
  return (
    <>
    <div className="container">
      <img src={referenceLeft} alt="left" className="left-image"/>
        <div className="form">
          <img src={logo} alt="logo" />
          <div className="submitForm">
          <Input 
          name="name"
          label="Nome usuário Github"
          placeholder="Digite aqui"
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
      <img src={referenceRight} alt="right" className="right-image"/>
    </div>
    </>
  );
};
export default Home;
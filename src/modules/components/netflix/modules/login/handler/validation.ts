import  { useState } from 'react';

const useValidation = () => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({email: '',password: '',});
    
    ///controlador del form validation
    const handleChange = (e:any) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [id]: type === 'checkbox' ? checked : value,
        }));
    };
    //
// controlador que dispara la validation
    const handleSubmit = (event:any) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if (form.checkValidity()) {
        }
    };
    //
return {
    formData,
    validated,
    handleChange,
    handleSubmit,
    
}

}
export default useValidation ;
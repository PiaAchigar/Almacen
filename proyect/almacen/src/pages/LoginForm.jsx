import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Button,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };
  /**Debo de enviar usu y pass para que el back lo valide */

  return (
    <>
      <Container maxW="md" maxH="md" direction={"colum"} placeItems="center">
        <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="name" marginBottom={10} isInvalid={errors.name} isRequired>
          <FormLabel >Usuario</FormLabel>
          <Input
            type="name"
            placeholder="Ingresa tu nombre"
            autoComplete="off"
            
            {...register("name", { required: true })}
          />
        </FormControl>
        <FormControl id="pass" marginBottom={10} isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="pass" placeholder="**********" {...register("pass", { required: true })} />
          {/* {errors.name && <span textColor="red">Datos incorresctos</span>} */}
        </FormControl>

        <Button type="submit" backgroundColor="green" textColor="white">Ingresar</Button>
        </form>
      </Container>
    </>
  );
};
export default LoginForm;
//     function validateName(value) {
//       let error
//       if (!value) {
//         error = 'Debes introducir tu nombre'
//       } else if (value.toLowerCase() !== 'naruto') {
//         error = "El nombre no es valido"
//       }
//       return error
//     }

//     return (
//       <Formik
//         initialValues={{ name: 'Sasuke' }}
//         onSubmit={(values, actions) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2))
//             actions.setSubmitting(false)
//           }, 1000)
//         }}
//       >
//         {(props) => (
//           <Form>
//             <Field name='name' validate={validateName}>
//               {({ field, form }) => (
//                 <FormControl isInvalid={form.errors.name && form.touched.name}>
//                   <FormLabel>Ingresa tu nombre</FormLabel>
//                   <Input {...field} placeholder='Nombre' />
//                   <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                 </FormControl>
//               )}
//             </Field>
//             <Button
//               mt={4}
//               colorScheme='teal'
//               isLoading={props.isSubmitting}
//               type='submit'
//             >
//               Ingresar
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     )
//   }

// import React from 'react';
// import { Formik } from 'formik';

// const Basic = () => (
//   <div>
//     <h1>Anywhere in your app!</h1>
//     <Formik
//       initialValues={{ email: '', password: '' }}
//       validate={values => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = 'Required';
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address';
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//         /* and other goodies */
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email}
//           />
//           {errors.email && touched.email && errors.email}
//           <input
//             type="password"
//             name="password"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.password}
//           />
//           {errors.password && touched.password && errors.password}
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </form>
//       )}
//     </Formik>
//   </div>
// );

// export default Basic;

import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Muy corto!')
    .max(50, 'Muy largo!')
    .required('Requerido'),
  lastName: Yup.string()
    .min(2, 'Muy corto!')
    .max(50, 'Muy largo!')
    .required('Requerido'),
  email: Yup.string().email('Email no válido').required('Requerido'),
});

const App = () => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={console.log}
        validationSchema={SignupSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
          return (
            <View>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                errors={errors.email}
              />
              {errors.email
                && (
                  <Text style={{ color: 'red' }}>{errors.email}</Text>
                )}
              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )
        }}
      </Formik>
    </View>
  )
}

export default App;


import React from 'react'
import * as yup from 'yup';

const Validation=yup.object().shape( {
name:yup.string().required(),
}
)

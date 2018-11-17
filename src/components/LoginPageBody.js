import React from "react"
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, FormGroup, Input} from "reactstrap";
import './LoginPageBody.css'
import {withRouter} from 'react-router-dom';
import {request} from "../utils/api-utils";

const renderError = msg => <div className="error-message">{msg}</div>;

function LoginPageBody(props) {
    const handleSubmit = async (values, actions) => {
        const [response, error] = await request("/login", "POST", JSON.stringify(values));

        actions.setSubmitting(false);
        if (response && response.ok) {
            props.history.push('/');

        } else if (error) {
            actions.setErrors({
                password: error.error

            });

        }

    };
    return (
        <div className="login-form-container">
            <Formik
                onSubmit={handleSubmit}
                render={
                    ({errors, status, touched, isSubmitting}) => (
                        <Form>
                            <FormGroup>
                                <Input required placeholder="Username" name="username" type="text" tag={Field}/>
                                <ErrorMessage name="username" component="div" render={renderError}/>
                            </FormGroup>
                            <FormGroup>
                                <Input required placeholder="Password" name="password" type="password" tag={Field}/>
                                <ErrorMessage name="password" component="div" render={renderError}/>
                            </FormGroup>
                            <Button color="primary" type="submit" disabled={isSubmitting}>Log In</Button>
                        </Form>

                    )
                }
            />
        </div>
    )
        ;
}

export default withRouter(LoginPageBody);
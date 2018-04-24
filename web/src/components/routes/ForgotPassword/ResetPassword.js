import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import { Box } from 'grid-styled';
import queryString from 'query-string';

import Container from 'components/layout/Container';
import { H2 } from 'components/layout/Text';
import { Button } from 'components/layout/Button';
import { FormInput } from '../../layout/Form';

import { required, minLength, } from 'validation/rules';

const r = required();
const minLength8 = minLength(8);
const passwordsMatch = (value, allValues) => allValues.password && value !== allValues.password ? 'Passwords does not match' : undefined;

const ResetPasswordForm = reduxForm({
    form: 'resetPasswordForm',
})(class extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        // Reset captcha after receiving response
        if (prevProps.submitting && prevProps.submitting !== this.props.submitting) {
            const cptCmp = this.recaptchaField.getRenderedComponent();
            cptCmp.resetRecaptcha();
        }
    }
    render() {
        const {
            handleSubmit,
            pristine,
            submitting,
        } = this.props;

        return (
            <Form onSubmit={handleSubmit}>
                <Box width={1 / 2}>
                    <Field
                        name="password"
                        component={FormInput}
                        type="password"
                        label="Password"
                        placeholder="Password"
                        description="8 characters or more"
                        validate={[r, minLength8]}
                        isRequired
                    />
                    <Field
                        name="confirmPassword"
                        component={FormInput}
                        type="password"
                        label="Confirm password"
                        placeholder="Confirm password"
                        validate={[r, passwordsMatch]}
                        isRequired
                    />
                </Box>

                <Button type="submit" disabled={pristine || submitting} text="Save new password" primary />
            </Form>
        );
    }
})

export default class extends React.Component {
    state = {
        code: null,
    }
    componentWillReceiveProps(newProps) {
        const { code } = queryString.parse(this.props.location.search);
        this.setState({ code });
    }
    render() {
        return (
            <Container flex='1 0 auto' flexDirection="column" py={4}>
                <H2>Resetting the password</H2>

                <ResetPasswordForm handleSubmit={() => { }} />

            </Container>
        );
    }
}

import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, Form } from 'redux-form';
import { Box } from 'grid-styled';

import Container from 'components/layout/Container';
import { H2 } from 'components/layout/Text';
import { Button } from 'components/layout/Button';
import { FormInput, FormCaptcha } from '../../layout/Form';

import { required } from 'validation/rules';

import { resetPassword } from './actions';

const r = required();

const ForgotPasswordForm = reduxForm({
    form: 'forgotPasswordForm',
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
                    <Field name="email" component={FormInput} type="email" label="Email" placeholder="Email" />
                    <Field name="recaptcha" component={FormCaptcha} validate={[r]} withRef ref={r => { this.recaptchaField = r }} isRequired />
                </Box>

                <Button type="submit" disabled={pristine || submitting} text="Reset your password" primary />
            </Form>
        );
    }
})

class ForgotPassword extends React.Component {
    resetPassword = () => {
        const { form, resetPassword } = this.props;
        resetPassword(form.values.email, form.values.recaptcha);
    }
    render() {
        return (
            <Container flex='1 0 auto' flexDirection="column" py={4}>
                <H2>Forgot your password?</H2>
                <p>
                    If you entered an email address in your settings page, complete this form with that email address. We'll then send an email with further information.
                </p>

                <ForgotPasswordForm onSubmit={this.resetPassword} />

            </Container>
        );
    }
}

export default connect(({
    form: { forgotPasswordForm },
}) => ({
    form: forgotPasswordForm
}), { resetPassword })(ForgotPassword);

import { resetPasswordRequest, recoverPassword } from 'api/index';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const resetPassword = (email, recaptcha) => async dispatch => {
    await resetPasswordRequest({ email, recaptcha });
    dispatch({ type: RESET_PASSWORD_REQUEST });
};

export const RECOVER_PASSWORD = 'RECOVER_PASSWORD';
export const saveNewPassword = (newPassword, code) => async dispatch => {
    await recoverPassword({ newPassword, code });
    dispatch({ type: RECOVER_PASSWORD });
};

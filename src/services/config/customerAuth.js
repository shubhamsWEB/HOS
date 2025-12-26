const sendOTP = (params) => (({
    url: `/v1/login/otp/send`,
    method: "post",
    data: {
        phoneNumber: params.phoneNumber
    }
}));

const validateOTP = (params) => (({
    url: `/v1/login/otp/validate`,
    method: "post",
    data: {
        phoneNumber: params.phoneNumber,
        otpNumber: params.otpNumber
    }
}));

const customerSignup = (params) => (({
    url: `/v1/login/signup`,
    method: "post",
    data: {
        name: params.name,
        phoneNumber: params.phoneNumber,
        password: params.password,
        otp: params.otp
    }
}));

const customerLogin = (params) => (({
    url: `/v1/login`,
    method: "post",
    data: {
        phoneNumber: params.phoneNumber,
        password: params.password
    }
}));

export { sendOTP, validateOTP, customerSignup, customerLogin };


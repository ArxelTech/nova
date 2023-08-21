import React from 'react'
import AuthLayout from '../../../components/authComponent/authLayout' 
import ForgotPasswordStepControl from '../../../components/authComponent/forgotpasswordComponent'

interface Props {}

function ForgotPassword(props: Props) {
    const {} = props

    const [tab, setTab] = React.useState(0)

    return (
        <AuthLayout 
            title={tab === 0 ? "Reset Password":
                tab === 1 ? "We just sent you a code": 
                tab === 2 ? "Enter new password": 
                "Password reset successfully"} 
            body={tab === 0 ? "Lost your password? Let’s get you back into your account": 
                tab === 1 ? "Enter the verification code sent to michael@novaapp.io": 
                tab === 2 ? "": 
                "Your password has been reset successfully, you may now login to your account"} >
            <ForgotPasswordStepControl tab={tab} setTab={setTab} />
        </AuthLayout>
    )
}

export default ForgotPassword

import React from "react";
import Header from './Header';
import LoginPageBody from './LoginPageBody';
import Footer from './Footer'
import DocumentTitle from "react-document-title"
function LoginPage() {
    return(
        <DocumentTitle title='Finance - Login'>
            <div>
            <Header loggedIn={false}></Header>
            <LoginPageBody></LoginPageBody>
            <Footer></Footer>
            </div>
        </DocumentTitle>
    )

}
export default LoginPage;
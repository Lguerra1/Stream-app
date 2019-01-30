import React, { Component } from 'react';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '519705048316-la1975md0nsim4kpn8nqsvl70bpfe81c.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return (
            <div>
                GoogleAuth
            </div>
        )
    }
}

export default GoogleAuth;
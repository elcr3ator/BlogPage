import React, { useEffect, set } from 'react'


class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.showError = this.showError.bind(this);
        this.state = { 
            hasError: false,
            error: '3',
            errorInfo: '4'
         };
         
    }

    static getDerivedStateFromError(error){
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    showError(){
        console.log(this.state.error, 'rfrgerg');
        console.log(this.state.errorInfo);
    }

    render(){
        const divStyle = {
            display: 'flex',
            alignItems: 'center',
            margin: '10px 10px'
        }

        const contentStyle={
            color: '#343434',
            fontFamily: 'Roboto',
            padding: '2vw 2vw',
            background: '#FAFAFA',
            boxShadow: '0px 16px 40px rgba(112, 144, 176, 0.1)'
        }

        const contentShow = {
            display: 'flex',
            marginBottom: '0.3vw'
        }

        if(this.state.hasError){
           return (
            <div style={divStyle}>
                <div style={contentStyle}>
                    <div style={contentShow}>
                        <p onClick={this.showError} style={{paddingRight: '0.3vw', cursor: 'pointer'}}><i><u>Тут</u></i></p>
                        <p><i> щось не так, але завдяки вам ми вже про це знаємо!</i></p>
                    </div>
                    <p><i> Наш программіст точно щось наплутав...</i></p>
                </div>
            </div>
           )
        }

        // SHORT ERROR - LONG ERROR

        return this.props.children;
    }
}


export default ErrorBoundary
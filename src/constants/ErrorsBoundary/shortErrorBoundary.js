import React from 'react'


class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.showError = this.showError.bind(this);
        this.state = { 
            hasError: false,
            error: '',
            errorInfo: ''
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
        console.log(this.state.error);
        console.log(this.state.errorInfo);
    }

    render(){
        const contentStyle={
            color: '#343434',
            fontFamily: 'Roboto',
            cursor: 'pointer'
        }

        if(this.state.hasError){
           return (
            <p onClick={this.showError} style={contentStyle}><i>Ой... <u>Помилка</u></i></p>
           )
        }

        // SHORT ERROR - LONG ERROR

        return this.props.children;
    }
}


export default ErrorBoundary
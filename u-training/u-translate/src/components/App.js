import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";


class App extends React.Component {
    state = {language: 'en'}

    onLanguageChange(language) {
        this.setState({language: language});
    }


    render() {
        return (
             <div className="ui container">
                 <div>
                    Select a language:
                    <i className="flag gb" onClick={() => this.onLanguageChange('en')} />
                    <i className="flag br" onClick={() => this.onLanguageChange('pt-br')} />
                 </div>
                 <ColorContext.Provider value="primary">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                 </ColorContext.Provider>
            </div>
        );
    }
}

export default App;
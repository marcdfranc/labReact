import React from 'react';
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;


    render() {
        return ( 
            <div>
                Select a language:
                <i className="flag gb" onClick={() => this.context.onLanguageChange('en')} />
                <i className="flag br" onClick={() => this.context.onLanguageChange('pt-br')} />
            </div>
        );
    }
}
 
export default LanguageSelector;
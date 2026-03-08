import React from 'react';
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
    // static contextType = LanguageContext; consumindo Context data usando a propriedade contextType

    /* Render utilizando context como propriedade
    render() {
        const text = this.context === 'en' ? "Submit" : "Enviar";
        return ( <button className="ui button primary">{text}</button>);
    }*/

    // Utilizando Context com Consumer
    render() {
        return (
            <ColorContext.Consumer>
                {(color) =>
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {(value) => value === 'en' ? "Submit" : "Enviar" }
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext.Consumer>
        );
    }
}
 
export default Button;
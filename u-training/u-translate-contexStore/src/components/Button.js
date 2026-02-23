import React from 'react';
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
    // Utilizando Context com Consumer
    render() {
        return (
            <ColorContext.Consumer>
                {(color) =>
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {( { language } ) => language === 'en' ? "Submit" : "Enviar" }
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext.Consumer>
        );
    }
}
 
export default Button;
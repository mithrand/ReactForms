/**
 * Created by amunoz on 10/03/2017.
 */

import * as React from 'react';
import {SimpleButton} from './SimpleButtonComponent';

interface Button {
    value: string;
    label: string;
}

export class ButtonForm extends React.Component <null, null> {

    static getButtons = (): Button[] => {
        return [{ label: 'Great', value: 'Great' }, { label: 'BullShit', value: 'BullShit' }];
    };

    constructor() {
        super();
    }

    onClickButton = (value: any) => { console.log(value.tostring); };

    render() {
        let btns =  ButtonForm.getButtons()
                    .map((btn) => {
                        return (<SimpleButton key={btn.value} onClick={this.onClickButton} {...btn} />);
                    });
        return (<form>{btns}</form>);
    }
}

export default ButtonForm;
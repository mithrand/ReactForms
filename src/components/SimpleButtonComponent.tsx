/**
 * Created by amunoz on 10/03/2017.
 */

import * as React from 'react';

export interface SimpleButtonProps {
    label: string;
    value: any;
    onClick(event: any): void;
}

export class SimpleButton extends React.Component< SimpleButtonProps, {}> {

    props: SimpleButtonProps;

    constructor(props: SimpleButtonProps) {
        super(props);
        this.props = props;
    }

    onClickHandler = (event: any) => { this.props.onClick(event.target.value); };

    render() {
        return(
            <button
                value={this.props.value}
                name={this.props.label}
                onClick={this.onClickHandler}
            >
                {this.props.label}
            </button>
        );
    }
}

export default SimpleButton;
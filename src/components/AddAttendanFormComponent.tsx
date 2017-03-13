/**
 * Created by amunoz on 13/03/2017.
 */

import * as React from 'react';

export interface AttendantForm {
    name: string;
    surname: string;
}

export interface AddAttendanFormProps {
    onFormSubmit(attendant: AttendantForm): any | void;
}

export class AddAttendanForm extends React.Component<AddAttendanFormProps, {}> {

    props: AddAttendanFormProps;
    refs: {
        [key: string]: (HTMLInputElement);
        stepInput: (HTMLInputElement);
    };

    constructor(props: AddAttendanFormProps) {
        super(props);
        this.props = props;
    }

    formSubmitHandler= (e: any): void => {
        let attendant: AttendantForm;
        e.preventDefault();
        if (this.refs.name.value &&  this.refs.surname.value ) {
            attendant = { name: this.refs.name.value, surname: this.refs.surname.value};
            this.props.onFormSubmit(attendant);
            this.refs.name.value = '';
            this.refs.surname.value = '';
        }

    };

    render() {
        return(
            <form onSubmit={this.formSubmitHandler}>
                <input type="text" placeholder="Name" ref="name"/>
                <input type="text" placeholder="Surname" ref="surname"/>
                <input type="submit" />
            </form>
        );
    }

}

export default AddAttendanForm;
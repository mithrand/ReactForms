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
    state: AttendantForm;

    resetState = (): void => {
        this.setState({name: '', surname: ''});
    };

    constructor(props: AddAttendanFormProps) {
        super(props);
        this.props = props;
        this.resetState();
    };

    formSubmitHandler= (e: any): void => {
        e.preventDefault();
        if (this.state.name &&  this.state.surname ) {
            this.props.onFormSubmit(this.state);
            this.resetState();
        }
    };

    onNameChangeHandler = (event: React.FormEvent<HTMLInputElement> ) => {
      let newState = Object.assign({}, this.state, {name: event.currentTarget.value}) ;
      this.setState(newState);
    };

    onSurnameChangeHandler = (event: React.FormEvent<HTMLInputElement> ) => {
        let newState = Object.assign({}, this.state, {surname: event.currentTarget.value}) ;
        this.setState(newState);
    };

    render() {
        return(
            <form onSubmit={this.formSubmitHandler}>
                <input type="text" placeholder="Name" onChange={this.onNameChangeHandler}/>
                <input type="text" placeholder="Surname" onChange={this.onSurnameChangeHandler}/>
                <input type="submit" />
            </form>
        );
    }

}

export default AddAttendanForm;
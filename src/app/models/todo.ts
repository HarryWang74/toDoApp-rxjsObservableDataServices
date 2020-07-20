import {Record} from 'immutable';

const TodoRecord = Record({
    id: 0,
    subject: ""
});

export class ToDo extends TodoRecord {
    id:number;
    subject:string;
    constructor(props) {
        super(props);
    }
}


export class ToDo {
    id: number;
    subject: string;
    completed: boolean;
    overdue?: boolean;
    dueDate: Date;
    assignedContactId: number;
    assignedContactName: string;
    assignedContactImageUrl: string;
    saving?: boolean;
}



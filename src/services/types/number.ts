export interface Root {
  data: DataContact;
}

export interface DataContact {
  contact: Contact[];
}

export interface Contact {
  created_at: string;
  first_name: string;
  id: number;
  last_name: string;
  phones: Phone[];
}

export interface Phone {
  number: string;
}


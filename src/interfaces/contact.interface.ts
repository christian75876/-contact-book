interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  imageUri: string | null;
  location: number[] | null;
}

export default Contact;

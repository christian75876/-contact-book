import {ParamListBase} from '@react-navigation/native';

export interface RootStackParamList extends ParamListBase {
  Home: undefined;
  ContactDetails: {contactId: number};
  NewContact: undefined;
  UpdateContact: {contactId: number};
}

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  ContactList from '../components/ContactList/ContactList';
import ContactForm from "../components/ContactForm/ContactForm";
import { fetchContacts } from "../redux/contacts/operations";
import {  selectIsLoading} from "../redux/contacts/selectors";
import SearchBox from '../components/SearchBox/SearchBox';


export default function ContactsPage () {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
  


    useEffect(() =>{
        dispatch(fetchContacts());
    }, [dispatch]);


    return (
        <>
        <div>{isLoading &&  'Request in progress...'}</div>
        <ContactForm />
        < SearchBox />
        <ContactList />
        </>
    );
}


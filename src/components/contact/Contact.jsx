import s from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact, } from "../../redux/contacts/operations";
import toast from "react-hot-toast";






const Contact = ({name, number, id }) => {
    const dispatch = useDispatch();
    

    
    const handleDelete = () => {
        dispatch(deleteContact(id));
        toast.success("Successfully deleted.") 
    };
   

  return (
    <div className={s.container}>
      <div className={s.div}>
        <p className={s.text}>
          <FaUserLarge />
          {name}
        </p>
        <p className={s.text}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>

      <button type="button" className={s.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
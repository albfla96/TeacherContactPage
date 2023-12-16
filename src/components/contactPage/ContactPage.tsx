import './ContactPage.css';

interface Teacher {
    name: string;
    email: string;
    // Add more properties if needed
  }
  
  interface ContactCardProps {
    teacher: Teacher;
  }
  const ContactCard: React.FC<ContactCardProps> = ({ teacher }) => {
    return (
      <div className="contact-card">
        <h2>{teacher.name}</h2>
        <p>Email: {teacher.email}</p>
        {/* Add more contact information */}
      </div>
    );
  };
  
export default ContactCard;
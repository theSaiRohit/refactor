import RegisterForm from "./register-form";
import RegisterHeading from "./register-heading";

export default function RegisterContainer({ eventName }: { eventName: string }) {
  return (
    <div className="register-container">
      <RegisterHeading />
      <div className="form-body">
        <RegisterForm eventName={eventName} />
      </div>
    </div>
  );
}

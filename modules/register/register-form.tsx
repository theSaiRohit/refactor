import { useRef, type FormEventHandler } from "react";
import Image from "next/image";
import useForm from "@/hooks/use-form";

export default function RegisterForm({ eventName }: { eventName: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const googleSubmit = useForm({
    formRef: formRef,
    gFormId: "1xr28zjlJvmfVKtgNW44fqXb4UI2rZUkxbnzFClnTFHg",
    links: [
      { entryId: "1759689869", formId: "name" },
      { entryId: "1859042591", formId: "mail" },
      { entryId: "1651948340", formId: "number" },
    ],
    extraEntries: [{ entryId: "237604300", value: eventName }],
  });

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();
    googleSubmit();
  };

  return (
    <div className="form-container">
      <div className="img-container form-img-container">
        <Image
          src="/assets/images/form.jpg"
          alt="3D Swirl"
          fill
          priority
          sizes="100%"
          className="form-img"
        />
      </div>
      <form id="reg-form" onSubmit={submitHandler} ref={formRef}>
        <h2 className="form-heading">Provide your details</h2>
        <label htmlFor="name" className="label-text">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          id="name"
          required
        ></input>
        <label htmlFor="mail" className="label-text">
          Mail Address
        </label>
        <input
          type="email"
          name="mail"
          placeholder="Your mail"
          id="mail"
          required
        ></input>
        <label htmlFor="number" className="label-text">
          Phone Number
        </label>
        <input
          type="number"
          name="phone number"
          placeholder="Your number"
          id="number"
          required
        ></input>
        <label htmlFor="" className="checkbox label-text">
          <input type="checkbox" required />
          <span>I agree to share all my details</span>
        </label>
        <button type="submit" className="reg-btn">
          Register
        </button>
      </form>
    </div>
  );
}

import { FC } from "react";

const OrganizationForm: FC = () => {
  

  const isEmailValid = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };


  return (
    <>
      <div>
        <form id="orgform">
          <div>
            <label htmlFor="name" className="block">
              Name
            </label>
            <div>
              <input
                type="text"
                name="name"
                className="block"
                placeholder="name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block">
              Email
            </label>
            <div>
              <input
                type="text"
                name="email"
                className="block"
                placeholder="email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="url" className="block">
              URL
            </label>
            <div>
              <input
                type="text"
                name="url"
                className="block"
                placeholder="url"
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default OrganizationForm;

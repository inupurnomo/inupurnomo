import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { FiClock as ClockIcon } from "react-icons/fi";

interface FormDataProps {
  name: string;
  email: string;
  message: string;
}

const formInitialState: FormDataProps = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataProps>(formInitialState);

  const [formErrors, setFormErrors] = useState<Partial<FormDataProps>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: value ? undefined : `${name} is required`,
    });
  };

  
  useEffect(() => {
    setIsSubmitDisabled(Object.values(formErrors).some((error) => error))
    console.log(Object.values(formErrors).some((error) => error))
  }, [formErrors]);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hasErrors = Object.values(formErrors).some((error) => error);

    if (!hasErrors) {
      setIsLoading(true);
      const response = async () =>
        await axios.post("/api/contact", { formData });
      toast.promise(response, {
        pending: {
          render() {
            return `Sending message...`;
          },
        },
        success: {
          render({ data }) {
            setIsLoading(false);
            return `${data?.data?.message}`;
          },
        },
        error: {
          render({ data }) {
            setIsLoading(false);
            return `${data}`;
          },
        },
      });
      // try {
      //   const response = await axios.post("/api/contacts", { formData });
      //   if (response.status === 200) {
      //     setFormData(formInitialState);
      //   }
      // } catch (error) {
      //   alert(error);
      // }
    } else {
      toast.error('Error!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="header-contact py-4">
        <h2 className="text-xl">Or send me a message</h2>
      </div>
      <div className="body-contact">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="px-3 py-2 rounded-md focus:outline-none border dark:border-neutral-700"
              type="text"
              name="name"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="px-3 py-2 rounded-md focus:outline-none border dark:border-neutral-700"
              type="email"
              name="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <textarea
              className="px-3 py-2 rounded-md focus:outline-none w-full border dark:border-neutral-700"
              name="message"
              id="message"
              cols={30}
              rows={10}
              required
              placeholder="Message *"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            className="rounded-md bg-marrsgreen dark:bg-carrigreen px-3 py-2 disabled hover:bg-marrslight hover:dark:bg-carrilight transition-all duration-300"
            type="submit"
            data-umami-event="Send Contact Message"
            disabled={isSubmitDisabled}
          >
            {isLoading ? "Sending Message" : "Send Message"}
          </button>
          <div className="flex items-center gap-2 dark:text-neutral-400 my-5">
            <ClockIcon />
            <div className="text-sm">
              <span className="font-medium">Avg. response:</span> 1-2 Hours
              (Working Hours, GMT+7)
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

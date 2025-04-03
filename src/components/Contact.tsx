import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";

const Contact = () => {
  

  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  interface ApiResponse {
    success: boolean;
    message: string;
  }

  const API_URL = "https://project-five-murex.vercel.app/send"
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const emailVali = /^[^\s@]+@[^\s@]+\.[^\s@]+$/



  

  const handleSubmission = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    let { name, email, subject, message } = formData;
    name = name.trim();
    email = email.trim();
    subject = subject.trim();
    message = message.trim();
    
    const emailValidation = () =>{
      if(!email.match(emailVali)){
        document.getElementById("error")!.innerHTML = "Please enter a valid email address"
        document.getElementById("error")!.style.color = "red"
        return false
      }else{
      return true
      }}

      
      if(emailValidation()){
        console.log("Form submitted successfully");
        mutate.mutate(formData);
      }
  }

  const mutate = useMutation<ApiResponse, Error, FormData>({
    mutationFn: async (formData: FormData): Promise<ApiResponse> => {
      setLoading(true);
      const response: Response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setError("Something went wrong");
        setSuccess("");
        throw new Error("Something went wrong");
      }

      const data: ApiResponse = await response.json();
      return data;
    },

    onSuccess: (data: ApiResponse): void => {
      setLoading(false);
      setSuccess(data.message || "Message sent successfully");
      setError("");
      setFormdata({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    },

    onError: (error: Error): void => {
      setLoading(false);
      setError(error.message || "Something went wrong");
      setSuccess("");
    },
  });

  useEffect(()=>{
    let timer: ReturnType<typeof setTimeout>;
    if(success || error){
      timer = setTimeout(() => {
        setSuccess("");
        setError("");
      }, 5000);
    }
    return () => clearTimeout(timer);

  }, [success, error]);

  

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmission}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your name"
                  onChange={(e) => setFormdata({ ...formData, name: e.target.value })}
                  value={formData.name}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  onChange={(e) => setFormdata({ ...formData, email: e.target.value })}
                  value={formData.email}
                />
                <p id="error"></p>
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Project discussion"
                onChange={(e) => setFormdata({ ...formData, subject: e.target.value })}
                value={formData.subject}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Your message here..."
                onChange={(e) => setFormdata({ ...formData, message: e.target.value })}
                value={formData.message}
              />
            </div>
            <button
              type="submit"
              className={`w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:opacity-90 transition-opacity ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? "Sending..." : "Send Message"}
                 
            </button>

            {success &&(<div>
              <p className="text-green-500 text-center mt-4">{success}</p>
            </div>)}

            {error &&(<div>
              <p className="text-red-500 text-center mt-4">{error}</p>
            </div>)}

            
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
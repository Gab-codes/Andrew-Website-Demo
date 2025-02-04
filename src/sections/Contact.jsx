import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, User, Phone } from "lucide-react";
import { motion } from "motion/react";

const ContactMe = () => {
  const clientPhone = "(302) 555-1234";
  const clientEmail = "example@email.com";

  return (
    <section
      className="py-16 px-5 sm:px-10 bg-gray-50 overflow-hidden"
      id="contact"
    >
      <motion.h2
        className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Contact Me
        <Mail className="inline-flex ml-2 w-10 h-10" />
      </motion.h2>

      <form className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-8">
        <div className="relative">
          <motion.label
            className="block text-sm font-medium text-gray-700 mb-2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Full Name
          </motion.label>
          <motion.div
            className="flex items-center relative"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <User className="absolute left-3 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Enter your full name"
              className="w-full pl-10"
            />
          </motion.div>
        </div>

        <div className="relative">
          <motion.label
            className="block text-sm font-medium text-gray-700 mb-2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Email Address
          </motion.label>
          <motion.div
            className="flex items-center relative"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Mail className="absolute left-3 text-gray-400 w-5 h-5" />
            <Input
              type="email"
              placeholder="Enter your email address"
              className="w-full pl-10"
            />
          </motion.div>
        </div>

        <div className="relative">
          <motion.label
            className="block text-sm font-medium text-gray-700 mb-2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Phone Number
          </motion.label>
          <motion.div
            className="flex items-center relative"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Phone className="absolute left-3 text-gray-400 w-5 h-5" />
            <Input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full pl-10"
            />
          </motion.div>
        </div>

        <div>
          <motion.label
            className="block text-sm font-medium text-gray-700 mb-2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Message
          </motion.label>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Textarea
              placeholder="Write your message here"
              className="w-full"
              rows={5}
            />
          </motion.div>
        </div>

        <div className="text-center">
          <Button
            type="submit"
            onSubmit={(e) => {
              e.preventDefault();
              alert("sending email is not yet set");
            }}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white px-6 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all"
          >
            Send Message
          </Button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <p className="text-lg font-medium text-gray-700">
          You can also reach me directly at:
        </p>
        <div className="mt-4">
          <p>
            <strong>Phone: </strong>
            <a
              href={`tel:${clientPhone}`}
              className="text-blue-500 hover:text-blue-700"
            >
              +1 (909) 360-3729
            </a>
          </p>
          <p>
            <strong>Email: </strong>
            <a
              href={`mailto:${clientEmail}`}
              className="text-blue-500 hover:text-blue-700"
            >
              {clientEmail}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

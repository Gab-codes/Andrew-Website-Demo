import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, DollarSign } from "lucide-react";

const PracticeAreas = () => {
  return (
    <section className="py-16 px-5 sm:px-10 bg-gray-50" id="services">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Services
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <motion.div
          className="max-w-sm mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="h-full bg-white shadow-lg rounded-lg">
            <CardHeader className="flex items-center gap-4">
              <FileText className="text-blue-600 w-8 h-8" />{" "}
              <CardTitle className="text-xl font-semibold text-blue-600">
                Claims Handling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                I specialize in handling insurance claims, including dispute
                resolution, claims negotiation, and timely settlements.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="max-w-sm mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="h-full bg-white shadow-lg rounded-lg">
            <CardHeader className="flex items-center gap-4">
              <Users className="text-blue-600 w-8 h-8" />{" "}
              <CardTitle className="text-xl font-semibold text-blue-600">
                Legal Advice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Providing expert legal advice for clients seeking assistance in
                various legal matters, from documentation to litigation.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="max-w-sm mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="h-full bg-white shadow-lg rounded-lg">
            <CardHeader className="flex items-center gap-4">
              <DollarSign className="text-blue-600 w-8 h-8" />{" "}
              <CardTitle className="text-xl font-semibold text-blue-600">
                Financial Planning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Offering comprehensive financial planning services, including
                retirement planning, investment strategies, and wealth
                management.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreas;

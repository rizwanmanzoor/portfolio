import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://developersouls.com/api/portfolio-contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Form submission failed");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      alert(
        error.message || "Unable to submit the form. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }

    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center"
        >
          <CheckCircle className="w-10 h-10 text-accent" />
        </motion.div>
        <h3 className="text-2xl text-white mb-4 font-heading">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-400 font-body">
          Thank you for reaching out. I'll get back to you within 24-48 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <label className="text-gray-300 text-sm mb-2 block font-body">
            Your Name *
          </label>
          <Input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name"
            className="bg-white/5 border-white/10 font-body text-white placeholder:text-gray-500 h-14 rounded-xl focus:border-accent focus:ring-accent/20"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <label className="text-gray-300 font-body text-sm mb-2 block">
            Email Address *
          </label>
          <Input
            required
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="mail@example.com"
            className="bg-white/5 border-white/10 text-white font-body placeholder:text-gray-500 h-14 rounded-xl focus:border-accent focus:ring-accent/20"
          />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <label className="text-gray-300 text-sm mb-2 font-body block">
            Phone Number *
          </label>
          <Input
            required
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="+1 234 567 8900"
            className="bg-white/5 border-white/10 text-white font-body placeholder:text-gray-500 h-14 rounded-xl focus:border-accent focus:ring-accent/20"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <label className="text-gray-300 text-sm mb-2 font-body block">
            Budget (Optional)
          </label>
          <Input
            type="text"
            value={formData.budget}
            onChange={(e) =>
              setFormData({ ...formData, budget: e.target.value })
            }
            placeholder="Budget"
            className="bg-white/5 border-white/10 text-white font-body placeholder:text-gray-500 h-14 rounded-xl focus:border-accent focus:ring-accent/20"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <label className="text-gray-300 text-sm font-body mb-2 block">
          Tell me about your project *
        </label>
        <Textarea
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Describe your project, goals, and timeline..."
          rows={6}
          className="bg-white/5 border-white/10 text-white font-body placeholder:text-gray-500 rounded-xl resize-none focus:border-accent focus:ring-accent/20"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <Button
          variant="destructive"
          type="submit"
          disabled={isLoading}
          className="w-full h-14 bg-accent text-primary font-body rounded-xl font-semibold text-lg hover:bg-[#2fd068] transition-all duration-300 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-gray-500 text-sm font-body text-center"
      >
        I typically respond within 24-48 hours.
      </motion.p>
    </form>
  );
}

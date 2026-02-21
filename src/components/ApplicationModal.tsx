import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Job } from "@/data/jobs";

const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE"; // Replace with your Web3Forms access key

interface ApplicationModalProps {
  job: Job | null;
  onClose: () => void;
}

const ApplicationModal = ({ job, onClose }: ApplicationModalProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", `Application: ${job?.title}`);
    formData.append("from_name", formData.get("name") as string);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (res.ok) setSuccess(true);
    } catch {
      // handle error
    } finally {
      setLoading(false);
    }
  };

  if (!job) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          className="bg-card border border-border w-full max-w-lg max-h-[90vh] overflow-y-auto p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between mb-8">
            <div>
              <h3 className="font-display text-2xl tracking-wide text-foreground">
                Apply Now
              </h3>
              <p className="text-sm text-muted-foreground font-body mt-1">
                {job.title} — {job.location}
              </p>
            </div>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
              <X size={20} />
            </button>
          </div>

          {success ? (
            <div className="text-center py-10">
              <h4 className="font-display text-2xl text-foreground mb-3">
                Application Submitted
              </h4>
              <p className="text-muted-foreground font-body font-light">
                Thank you for your interest. We'll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="to" value="talent@altitudetalent.com.lk" />
              <input type="checkbox" name="botcheck" className="hidden" />

              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body">
                  Full Name *
                </label>
                <input
                  name="name"
                  required
                  className="w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-foreground/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-foreground/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body">
                  Phone *
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-foreground/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body">
                  LinkedIn Profile
                </label>
                <input
                  name="linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/..."
                  className="w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground/40"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body">
                  CV (PDF) *
                </label>
                <label className="flex items-center gap-3 w-full bg-background border border-border px-4 py-3 cursor-pointer hover:border-foreground/40 transition-colors">
                  <Upload size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground font-body">
                    {fileName || "Choose file..."}
                  </span>
                  <input
                    name="attachment"
                    type="file"
                    accept=".pdf"
                    required
                    className="hidden"
                    onChange={(e) =>
                      setFileName(e.target.files?.[0]?.name || "")
                    }
                  />
                </label>
              </div>

              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body">
                  Cover Letter
                </label>
                <textarea
                  name="cover_letter"
                  rows={4}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-foreground/40 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ApplicationModal;

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center bg-accent/5 justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        {/* 404 */}
        <h1 className="text-[140px] md:text-[200px] font-semibold leading-none text-accent">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-medium font-body text-foreground mt-6 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-200 text-lg mb-10">
          The page you are looking for does not exist.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/">
            <Button variant="destructive" className="bg-accent text-primary w-50">
              <Home className="w-5 h-5" />
              Go to Home
            </Button>
          </Link>

          <Button variant="outline" className="w-50" onClick={() => history.back()}>
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

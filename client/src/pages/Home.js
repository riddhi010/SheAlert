import { useState } from "react";
import { motion } from "framer-motion";
import "./orbUniverse.css";

const features = [
  { name: "Emergency", icon: "🚨", angle: 0, color: "from-red-400 to-pink-500" },
  { name: "Chat", icon: "💬", angle: 60, color: "from-purple-400 to-fuchsia-500" },
  { name: "Location", icon: "📍", angle: 120, color: "from-blue-400 to-cyan-500" },
  { name: "Resources", icon: "📚", angle: 180, color: "from-green-400 to-lime-500" },
  { name: "Support", icon: "🤝", angle: 240, color: "from-yellow-400 to-orange-500" },
  { name: "Safety", icon: "🛡️", angle: 300, color: "from-indigo-400 to-violet-500" },
];

export default function SheAlertOrbUniverse() {
  const [active, setActive] = useState(null);

  return (
    <div className="orb-bg min-h-screen w-full flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 z-0 stars" />

      <div className="relative w-[30rem] h-[30rem]">
        <div className="absolute w-full h-full flex items-center justify-center z-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-40 h-40 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white text-xl font-bold flex items-center justify-center shadow-2xl"
          >
            SheAlert 💗
          </motion.div>
        </div>

        {features.map((f, i) => {
          const x = 120 * Math.cos((f.angle * Math.PI) / 180);
          const y = 120 * Math.sin((f.angle * Math.PI) / 180);
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2 }}
              className={`absolute left-1/2 top-1/2 w-20 h-20 rounded-full bg-gradient-to-br ${f.color} text-white shadow-lg flex items-center justify-center cursor-pointer orbit`}
              style={{ transform: `translate(${x}px, ${y}px)` }}
              onClick={() => setActive(f)}
            >
              <div className="text-xl text-center">
                {f.icon}
                <div className="text-xs mt-1">{f.name}</div>
              </div>
            </motion.div>
          );
        })}

        {active && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20rem] p-6 bg-white bg-opacity-30 backdrop-blur-xl rounded-xl shadow-2xl z-20 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-2xl font-bold mb-2">{active.icon} {active.name}</div>
            <p className="text-white">More details about <strong>{active.name}</strong> feature will go here...</p>
            <button
              className="mt-4 text-sm text-pink-200 hover:text-white underline"
              onClick={() => setActive(null)}
            >
              Close
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

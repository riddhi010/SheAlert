import React from "react";

const SendAlert = () => {
  const handleSendAlert = () => {
    const token = localStorage.getItem("token"); // or however you're storing the JWT
    const userId = localStorage.getItem("userId"); // or get it from context/state

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = `https://maps.google.com/?q=${position.coords.latitude},${position.coords.longitude}`;

        fetch("http://localhost:5000/send-alert", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({ userId, location }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Alert response:", data);
            alert("Alert sent successfully!");
          })
          .catch((err) => {
            console.error("Error sending alert:", err);
          });
      },
      (error) => {
        console.error("Error getting location:", error);
        alert("Unable to access location. Please enable location services.");
      }
    );
  };

  return (
    <div>
      <button
  onClick={handleSendAlert}
  className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
>
  🚨 Send Alert
</button>

    </div>
  );
};

export default SendAlert;

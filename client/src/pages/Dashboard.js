// src/pages/Dashboard.jsx

import MapComponent from "../components/MapComponent";
import FloatingAlertButton from "../components/FloatingAlertButton";

export default function Dashboard() {
  const handleSendAlert = async () => {
    const res = await fetch('http://localhost:5000/api/alert/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'Riddhi',
        location: window.location.href
      })
    });
    const data = await res.json();
    alert(data.message || 'Alert sent!');
  };

  return (
    <>
      
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">Live Location</h2>
        <MapComponent />
      </div>
      <FloatingAlertButton onClick={handleSendAlert} />
    </>
  );
}

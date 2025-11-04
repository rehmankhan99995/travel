"use client";

import { useState } from "react";
import Header from "@/components/ui/staffheader2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardList, CheckCircle2, Loader2, Plus } from "lucide-react";
import { toast } from "sonner";

interface Traveler {
  id: number;
  name: string;
  passport: string;
  location: string;
  type: string;
  date: string;
}

export default function CheckInPage() {
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [travelers, setTravelers] = useState<Traveler[]>([
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      date: "2025-11-15",
      type: "Check-in",
      location: "Jeddah",
      passport: "A1234567",
    },
    {
      id: 2,
      name: "Fatima Al-Saud",
      date: "2025-11-20",
      type: "Check-out",
      location: "Makkah",
      passport: "B9876543",
    },
  ]);

  // Form state
  const [form, setForm] = useState({
    name: "",
    passport: "",
    location: "",
    type: "Check-in",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.passport || !form.location) {
      toast.error("Please fill out all fields before submitting.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Processing check-in...", {
      description: "Please wait while we verify traveler details.",
    });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const newTraveler: Traveler = {
        id: travelers.length + 1,
        name: form.name,
        passport: form.passport,
        location: form.location,
        type: form.type,
        date: new Date().toISOString().split("T")[0],
      };

      setTravelers([newTraveler, ...travelers]);
      setForm({ name: "", passport: "", location: "", type: "Check-in" });
      setShowForm(false);

      toast.success("Traveler successfully checked in!", {
        id: toastId,
        description: "The check-in record has been added to the system.",
        icon: <CheckCircle2 className="text-green-500 w-5 h-5" />,
        duration: 3000,
      });
    } catch (error) {
      toast.error("Something went wrong", {
        id: toastId,
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header title="Check-in / Check-out Management" />

      <div className="p-8 overflow-auto flex-1 ml-2.5">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Traveler Management
            </h2>
            <p className="text-gray-600 mt-1">
              Manage check-in and check-out for travelers (Saudi-based operations)
            </p>
          </div>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-700 text-white cursor-pointer hover:bg-blue-800 transition flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            {showForm ? "Close Form" : "New Check-in"}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Section */}
          {showForm && (
            <Card className="lg:col-span-1 shadow-sm hover:shadow-md transition">
              <CardHeader>
                <CardTitle>New Check-in Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Traveler Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Passport Number
                    </label>
                    <input
                      type="text"
                      name="passport"
                      value={form.passport}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                      placeholder="Passport #"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <select
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                    >
                      <option value="">Select Location</option>
                      <option value="Makkah">Makkah</option>
                      <option value="Medina">Medina</option>
                      <option value="Jeddah">Jeddah</option>
                      <option value="Riyadh">Riyadh</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type
                    </label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                    >
                      <option value="Check-in">Check-in</option>
                      {/* <option value="Check-out">Check-out</option> */}
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg font-medium flex items-center justify-center transition"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Travelers List */}
          <Card
            className={`shadow-sm hover:shadow-md transition ${
              showForm ? "lg:col-span-2" : "lg:col-span-3"
            }`}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-blue-700" />
                Recent Check-ins / Check-outs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {travelers.length > 0 ? (
                  travelers.map((traveler) => (
                    <div
                      key={traveler.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                    >
                      <div>
                        <p className="font-semibold text-gray-900">{traveler.name}</p>
                        <p className="text-sm text-gray-600">
                          {traveler.location} • {traveler.date}
                        </p>
                      </div>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${
                          traveler.type === "Check-in"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {traveler.type}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600 text-sm text-center py-4">
                    No travelers found.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

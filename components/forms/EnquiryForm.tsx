"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import {
  Loader2,
  CheckCircle2,
  AlertCircle,
  Plane,
  ArrowLeftRight,
  User,
  Mail,
  Phone,
  Search,
  Plus,
  Minus,
  MessageSquare,
  ChevronDown,
  Users
} from "lucide-react";

const schema = zod.object({
  name: zod.string().min(2, "Name must be at least 2 characters"),
  email: zod.string().email("Invalid email address"),
  phone: zod.string().min(7, "Phone number must be at least 7 digits"),
  from: zod.string().min(1, "Departure location is required"),
  to: zod.string().min(1, "Destination is required"),
  departureDate: zod.string().min(1, "Departure date is required"),
  returnDate: zod.string().optional(),
  passengers: zod.string(),
  tripType: zod.enum(["one-way", "return", "multi-city"]),
  message: zod.string().optional(),
  website: zod.string().optional(), // Honeypot field
});

type EnquiryFormData = zod.infer<typeof schema>;

export const EnquiryForm: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Passenger & Class State
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabinClass, setCabinClass] = useState<"Economy" | "Business" | "First Class">("Economy");
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      passengers: "1 Passenger (1 Adult, Economy)",
      tripType: "return",
      website: "",
      from: "",
      to: "",
      departureDate: "",
      returnDate: "",
      message: "",
    },
  });

  const tripType = watch("tripType");
  const fromValue = watch("from");
  const toValue = watch("to");

  // Sync passengers string whenever counters or cabin class change
  useEffect(() => {
    const total = adults + children + infants;
    const passengerText = total === 1 ? "1 Passenger" : `${total} Passengers`;
    const details = `${adults} Adult${adults > 1 ? "s" : ""}${children > 0 ? `, ${children} Child${children > 1 ? "ren" : ""}` : ""}${infants > 0 ? `, ${infants} Infant${infants > 1 ? "s" : ""}` : ""}`;
    const formatted = `${passengerText} (${details}, ${cabinClass})`;
    setValue("passengers", formatted);
  }, [adults, children, infants, cabinClass, setValue]);

  // Click outside to close passenger dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowPassengerDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSwap = () => {
    setValue("from", toValue || "");
    setValue("to", fromValue || "");
  };

  const onSubmit = async (data: EnquiryFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        reset();
        setAdults(1);
        setChildren(0);
        setInfants(0);
        setCabinClass("Economy");
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-deep-blue border border-white/5 shadow-2xl rounded-[2rem] max-w-4xl mx-auto">
        <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
        <h3 className="text-2xl font-bold text-white mb-2 font-display">Thank You!</h3>
        <p className="text-muted max-w-md text-sm md:text-base leading-relaxed">
          Your enquiry has been received successfully. Our Birmingham travel specialists will contact you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 px-6 py-2.5 bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full shadow-lg shadow-gold/15 transition-all text-sm cursor-pointer"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  const passengersDisplay = () => {
    const total = adults + children + infants;
    return `${total} Passenger${total > 1 ? "s" : ""}, ${cabinClass}`;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-deep-blue border border-white/5 shadow-2xl rounded-[2rem] p-6 md:p-8 space-y-6 text-left max-w-4xl mx-auto relative pt-12"
      noValidate
    >
      {/* Top Floating Badge */}
      <div className="absolute -top-5 left-8 md:left-10 bg-sky text-white px-6 py-2.5 rounded-full font-bold flex items-center space-x-2 shadow-lg shadow-sky/20 z-20 text-xs md:text-sm tracking-wide">
        <Plane className="w-4 h-4" />
        <span>Flights</span>
      </div>

      {/* Honeypot field - absolute hidden */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
          placeholder="Leave this empty"
        />
      </div>

      {/* Row 1: Trip Type Selection */}
      <div className="flex items-center space-x-6 border-b border-white/5 pb-4">
        {[
          { value: "one-way", label: "One Way" },
          { value: "return", label: "Round Way" },
          { value: "multi-city", label: "Multi-City" },
        ].map((type) => (
          <label
            key={type.value}
            className="flex items-center text-sm text-white cursor-pointer select-none font-medium transition-colors hover:text-sky"
          >
            <input
              type="radio"
              value={type.value}
              className="text-sky focus:ring-sky bg-white/5 border-white/20 mr-2.5 w-4 h-4 accent-sky"
              {...register("tripType")}
            />
            {type.label}
          </label>
        ))}
      </div>

      {/* Row 1: From & To fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
        {/* Departure Box */}
        <div className={`relative bg-white/5 border ${errors.from ? "border-rose-500/50" : "border-white/10"} rounded-2xl p-3.5 flex flex-col justify-between hover:border-white/20 transition-all min-h-[70px] col-span-1`}>
          <span className="text-xs font-semibold text-muted/80 tracking-wider uppercase mb-1 flex items-center">
            From
          </span>
          <input
            type="text"
            className="w-full bg-transparent text-white font-bold text-sm md:text-base border-none p-0 focus:ring-0 focus:outline-none placeholder:text-white/20"
            placeholder="London (All)"
            {...register("from")}
          />
          <Plane className="w-5 h-5 text-sky absolute top-3.5 right-4 rotate-45 opacity-70" />
          {errors.from && (
            <span className="text-rose-500 text-[10px] mt-1 block absolute bottom-0.5 left-4">{errors.from.message}</span>
          )}
        </div>

        {/* Swap Button */}
        <div className="absolute right-4 md:right-auto md:left-1/2 top-[52px] md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 z-20">
          <button
            type="button"
            onClick={handleSwap}
            className="w-9 h-9 rounded-full bg-sky text-white border-2 border-deep-blue flex items-center justify-center hover:bg-sky/90 transition-all cursor-pointer shadow-md shadow-black/20"
            aria-label="Swap Departure and Destination"
          >
            <ArrowLeftRight className="w-4 h-4" />
          </button>
        </div>

        {/* Destination Box */}
        <div className={`relative bg-white/5 border ${errors.to ? "border-rose-500/50" : "border-white/10"} rounded-2xl p-3.5 flex flex-col justify-between hover:border-white/20 transition-all min-h-[70px] col-span-1`}>
          <span className="text-xs font-semibold text-muted/80 tracking-wider uppercase mb-1">
            To
          </span>
          <input
            type="text"
            className="w-full bg-transparent text-white font-bold text-sm md:text-base border-none p-0 focus:ring-0 focus:outline-none placeholder:text-white/20"
            placeholder="Destination"
            {...register("to")}
          />
          <Plane className="w-5 h-5 text-sky absolute top-3.5 right-4 rotate-135 opacity-70" />
          {errors.to && (
            <span className="text-rose-500 text-[10px] mt-1 block absolute bottom-0.5 left-4">{errors.to.message}</span>
          )}
        </div>
      </div>

      {/* Row 2: Dates & Passenger Class fields */}
      <div className={`grid grid-cols-1 gap-4 ${tripType === "return" ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
        {/* Date Box */}
        <div className={`relative bg-white/5 border ${errors.departureDate ? "border-rose-500/50" : "border-white/10"} rounded-2xl p-3.5 flex flex-col justify-between hover:border-white/20 transition-all min-h-[70px] col-span-1`}>
          <span className="text-xs font-semibold text-muted/80 tracking-wider uppercase mb-1">
            Journey Date
          </span>
          <input
            type="date"
            className="w-full bg-transparent text-white font-bold text-sm md:text-base border-none p-0 focus:ring-0 focus:outline-none [color-scheme:dark] cursor-pointer"
            {...register("departureDate")}
          />
          {/* <Calendar className="w-5 h-5 text-sky absolute top-3.5 right-4 opacity-70 pointer-events-none" /> */}
          {errors.departureDate && (
            <span className="text-rose-500 text-[10px] mt-1 block absolute bottom-0.5 left-4">{errors.departureDate.message}</span>
          )}
        </div>

        {/* Return Date Box (Only shown or enabled if Return) */}
        {tripType === "return" && (
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-3.5 flex flex-col justify-between hover:border-white/20 transition-all min-h-[70px] md:col-span-1">
            <span className="text-xs font-semibold text-muted/80 tracking-wider uppercase mb-1">
              Return Date
            </span>
            <input
              type="date"
              className="w-full bg-transparent text-white font-bold text-sm md:text-base border-none p-0 focus:ring-0 focus:outline-none [color-scheme:dark] cursor-pointer"
              {...register("returnDate")}
            />
            {/* <Calendar className="w-5 h-5 text-sky absolute top-3.5 right-4 opacity-70 pointer-events-none" /> */}
          </div>
        )}

        {/* Passengers & Class Selection Box */}
        <div
          ref={dropdownRef}
          className="relative bg-white/5 border border-white/10 rounded-2xl p-3.5 flex flex-col justify-between hover:border-white/20 transition-all min-h-[70px] md:col-span-1 cursor-pointer select-none"
          onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
        >
          <span className="text-xs font-semibold text-muted/80 tracking-wider uppercase mb-1">
            Passenger, Class
          </span>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold text-sm md:text-base leading-tight truncate">
              {passengersDisplay()}
            </span>
            <ChevronDown className="w-4 h-4 text-sky ml-2 flex-shrink-0" />
          </div>
          <Users className="w-5 h-5 text-sky absolute top-3.5 right-4 opacity-70" />

          {/* Hidden registers for form hook to track */}
          <input type="hidden" {...register("passengers")} />

          {/* Interactive Dropdown Popover */}
          {showPassengerDropdown && (
            <div
              className="absolute right-0 top-[calc(100%+8px)] w-72 bg-deep-blue border border-white/10 shadow-2xl rounded-2xl p-5 z-50 space-y-5 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Adults Counter */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">Adults</div>
                  <div className="text-xs text-muted">12+ Years</div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    disabled={adults <= 1}
                    onClick={() => setAdults(adults - 1)}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-white font-bold text-sm min-w-[12px] text-center">{adults}</span>
                  <button
                    type="button"
                    disabled={adults >= 9}
                    onClick={() => setAdults(adults + 1)}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Children Counter */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">Children</div>
                  <div className="text-xs text-muted">2-12 Years</div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    disabled={children <= 0}
                    onClick={() => setChildren(children - 1)}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-white font-bold text-sm min-w-[12px] text-center">{children}</span>
                  <button
                    type="button"
                    disabled={children >= 9}
                    onClick={() => setChildren(children + 1)}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Infants Counter */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">Infants</div>
                  <div className="text-xs text-muted">Below 2 Years</div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    disabled={infants <= 0}
                    onClick={() => setInfants(infants - 1)}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-white font-bold text-sm min-w-[12px] text-center">{infants}</span>
                  <button
                    type="button"
                    disabled={infants >= 9}
                    onClick={() => setInfants(infants + 1)}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Cabin Class Selection */}
              <div className="border-t border-white/5 pt-4 space-y-2.5">
                <div className="text-xs font-bold text-muted uppercase tracking-wider">Cabin Class</div>
                <div className="space-y-2">
                  {[
                    { value: "Economy", label: "Economy" },
                    { value: "Business", label: "Business" },
                    { value: "First Class", label: "First Class" },
                  ].map((cls) => (
                    <label
                      key={cls.value}
                      className="flex items-center text-sm text-white cursor-pointer select-none font-medium"
                    >
                      <input
                        type="radio"
                        name="cabinClassSelect"
                        checked={cabinClass === cls.value}
                        onChange={() => setCabinClass(cls.value as "Economy" | "Business" | "First Class")}
                        className="text-sky focus:ring-sky bg-white/5 border-white/20 mr-2.5 w-4 h-4 accent-sky"
                      />
                      {cls.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Done Button */}
              <button
                type="button"
                onClick={() => setShowPassengerDropdown(false)}
                className="w-full py-2 bg-sky hover:bg-sky/90 text-white font-semibold rounded-lg text-sm shadow-md shadow-sky/10 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Row 3: User Details (Name, Email, Contact) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Full Name */}
        <div className={`relative bg-white/5 border ${errors.name ? "border-rose-500/50" : "border-white/10"} rounded-2xl p-3.5 flex flex-col justify-between hover:border-white/20 transition-all min-h-[70px]`}>
          <span className="text-xs font-semibold text-muted/80 tracking-wider uppercase mb-1">
            Name
          </span>
          <input
            type="text"
            className="w-full bg-transparent text-white font-bold text-sm md:text-base border-none p-0 focus:ring-0 focus:outline-none placeholder:text-white/20"
            placeholder="Enter Your Name"
            {...register("name")}
          />
          <User className="w-5 h-5 text-sky absolute top-3.5 right-4 opacity-70 pointer-events-none" />
          {errors.name && (
            <span className="text-rose-500 text-[10px] mt-1 block absolute bottom-0.5 left-4">{errors.name.message}</span>
          )}
        </div>

        {/* Email Address */}
        <div className={`relative bg-white/5 border ${errors.email ? "border-rose-500/50" : "border-white/10"} rounded-2xl p-3.5 flex flex-col justify-between hover:border-white/20 transition-all min-h-[70px]`}>
          <span className="text-xs font-semibold text-muted/80 tracking-wider uppercase mb-1">
            Email
          </span>
          <input
            type="email"
            className="w-full bg-transparent text-white font-bold text-sm md:text-base border-none p-0 focus:ring-0 focus:outline-none placeholder:text-white/20"
            placeholder="Enter Your Email"
            {...register("email")}
          />
          <Mail className="w-5 h-5 text-sky absolute top-3.5 right-4 opacity-70 pointer-events-none" />
          {errors.email && (
            <span className="text-rose-500 text-[10px] mt-1 block absolute bottom-0.5 left-4">{errors.email.message}</span>
          )}
        </div>

        {/* Contact Phone */}
        <div className={`relative bg-white/5 border ${errors.phone ? "border-rose-500/50" : "border-white/10"} rounded-2xl p-3.5 flex flex-col justify-between hover:border-white/20 transition-all min-h-[70px]`}>
          <span className="text-xs font-semibold text-muted/80 tracking-wider uppercase mb-1">
            Contact
          </span>
          <input
            type="tel"
            className="w-full bg-transparent text-white font-bold text-sm md:text-base border-none p-0 focus:ring-0 focus:outline-none placeholder:text-white/20"
            placeholder="Enter Your Number"
            {...register("phone")}
          />
          <Phone className="w-5 h-5 text-sky absolute top-3.5 right-4 opacity-70 pointer-events-none" />
          {errors.phone && (
            <span className="text-rose-500 text-[10px] mt-1 block absolute bottom-0.5 left-4">{errors.phone.message}</span>
          )}
        </div>
      </div>

      {/* Special Requirements Textarea (Subtle & Sleek) */}
      <div className="relative bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col hover:border-white/20 transition-all">
        <span className="text-xs font-semibold text-muted/80 tracking-wider uppercase mb-1 flex items-center">
          <MessageSquare className="w-3.5 h-3.5 mr-1 text-sky" />
          Special Requirements
        </span>
        <textarea
          rows={2}
          className="w-full bg-transparent text-white font-medium text-sm md:text-base border-none p-0 focus:ring-0 focus:outline-none resize-none placeholder:text-white/20 mt-1"
          placeholder="Preferred airlines, flexible dates, hotel transfers or other requests..."
          {...register("message")}
        />
      </div>

      {/* Error Message Display */}
      {status === "error" && (
        <div className="flex items-center space-x-2 text-rose-500 text-sm bg-rose-500/10 p-3 rounded-lg border border-rose-500/20">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Centered Search/Submit Button */}
      <div className="flex justify-center pt-2 relative">
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-10 py-4 bg-sky hover:bg-sky/90 text-white font-bold rounded-full shadow-lg shadow-sky/20 hover:scale-[1.03] active:scale-[0.97] transition-all duration-150 text-base flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Search className="w-5 h-5 mr-2" />
              Search Now
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default EnquiryForm;

import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { format, differenceInDays, addDays } from "date-fns";
import { CalendarIcon, Users, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { rooms } from "@/lib/data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

import zebras from "@/assets/zebras.jpg";

const Booking = () => {
  const [params] = useSearchParams();
  const preselectedRoom = params.get("room") || "";

  const [selectedRoom, setSelectedRoom] = useState(preselectedRoom);
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const room = rooms.find((r) => r.id === selectedRoom);
  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;
  const totalPrice = room ? room.price * Math.max(nights, 0) : 0;

  const today = new Date();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRoom || !checkIn || !checkOut || nights <= 0 || !name || !phone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Booking request submitted! We'll contact you shortly to confirm.", {
      description: `${room?.name} • ${nights} night(s) • KES ${totalPrice.toLocaleString()}`,
    });
  };

  return (
    <Layout>
      {/* Hero with zebras */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <img src={zebras} alt="Zebras in the wild" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-safari-brown/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-4xl md:text-5xl text-primary-foreground text-shadow-hero">Make a Reservation</h1>
          <p className="text-primary-foreground/80 mt-4">Book your stay at Haven Breeze Villas</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Quick links like Isalaasha */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
            <Link to="/accommodations" className="text-primary underline underline-offset-4 hover:text-safari-olive-light">View our rates</Link>
            <a href="#booking-form" className="text-primary underline underline-offset-4 hover:text-safari-olive-light">Book your stay</a>
            <Link to="/contact" className="text-primary underline underline-offset-4 hover:text-safari-olive-light">Terms & conditions</Link>
          </div>

          <form id="booking-form" onSubmit={handleSubmit} className="bg-card p-8 md:p-12 rounded-lg shadow-lg space-y-8">
            <h2 className="font-heading text-2xl text-foreground text-center mb-2">Book Your Stay</h2>

            {/* Room selection */}
            <div>
              <Label className="text-foreground">Select Room *</Label>
              <Select value={selectedRoom} onValueChange={setSelectedRoom}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Choose a room" />
                </SelectTrigger>
                <SelectContent>
                  {rooms.map((r) => (
                    <SelectItem key={r.id} value={r.id}>
                      {r.name} — KES {r.price.toLocaleString()}/night
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Dates */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-foreground">Check-in *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full mt-2 justify-start text-left font-normal", !checkIn && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkIn ? format(checkIn, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={(d) => {
                        setCheckIn(d);
                        if (d && (!checkOut || checkOut <= d)) setCheckOut(addDays(d, 1));
                      }}
                      disabled={(d) => d < today}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label className="text-foreground">Check-out *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full mt-2 justify-start text-left font-normal", !checkOut && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkOut ? format(checkOut, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(d) => d <= (checkIn || today)}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Guests */}
            <div>
              <Label className="text-foreground">Guests</Label>
              <div className="flex items-center gap-4 mt-2">
                <Button type="button" variant="outline" size="icon" onClick={() => setGuests(Math.max(1, guests - 1))}>
                  <Minus size={16} />
                </Button>
                <span className="text-lg font-medium w-8 text-center text-foreground">{guests}</span>
                <Button type="button" variant="outline" size="icon" onClick={() => setGuests(Math.min(room?.capacity || 6, guests + 1))}>
                  <Plus size={16} />
                </Button>
                <Users size={16} className="text-muted-foreground" />
              </div>
            </div>

            {/* Guest info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-foreground">Full Name *</Label>
                <Input className="mt-2" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required />
              </div>
              <div>
                <Label className="text-foreground">Phone *</Label>
                <Input className="mt-2" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+254 700 000 000" required />
              </div>
            </div>
            <div>
              <Label className="text-foreground">Email</Label>
              <Input className="mt-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" />
            </div>

            {/* Price summary */}
            {room && nights > 0 && (
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-heading text-lg text-foreground mb-3">Booking Summary</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between"><span>{room.name}</span><span>KES {room.price.toLocaleString()}/night</span></div>
                  <div className="flex justify-between"><span>{nights} night(s)</span><span>× {nights}</span></div>
                  <div className="border-t border-border pt-2 flex justify-between font-semibold text-foreground text-base">
                    <span>Total</span><span>KES {totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-safari-olive-light text-primary-foreground">
              Submit Booking Request
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Payment via M-Pesa or card will be arranged upon confirmation. You'll receive a WhatsApp/email confirmation within 24 hours.
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;

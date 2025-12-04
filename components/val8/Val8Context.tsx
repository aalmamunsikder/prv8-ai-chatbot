import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types for the context
export type UserIntent = 'planning' | 'browsing' | 'booking' | null;

export interface TripContext {
  destination?: string;
  dates?: string;
  travelers?: number;
  preferences?: string[];
  budget?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'val8';
  text: string;
  type?: 'text' | 'options' | 'card-stack' | 'confirmation';
  options?: string[];
  timestamp: number;
}

export interface HotelCard {
  id: string;
  name: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  tags: string[];
}

export interface UserProfile {
  name: string;
  email: string;
  isAuthenticated: boolean;
}

export interface Trip {
  id: string;
  hotel: HotelCard;
  dates: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

interface Val8ContextType {
  currentFrame: number;
  setCurrentFrame: (frame: number) => void;
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  userIntent: UserIntent;
  setUserIntent: (intent: UserIntent) => void;
  tripContext: TripContext;
  updateTripContext: (context: Partial<TripContext>) => void;
  chatHistory: ChatMessage[];
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  bookingState: 'idle' | 'summary' | 'checkout' | 'confirmed' | 'post-booking';
  setBookingState: (state: 'idle' | 'summary' | 'checkout' | 'confirmed' | 'post-booking') => void;
  selectedHotel: HotelCard | null;
  setSelectedHotel: (hotel: HotelCard | null) => void;
  showExitModal: boolean;
  setShowExitModal: (show: boolean) => void;
  // New State
  user: UserProfile | null;
  login: (email: string, name?: string) => void;
  logout: () => void;
  view: 'chat' | 'dashboard';
  setView: (view: 'chat' | 'dashboard') => void;
  trips: Trip[];
  addTrip: (trip: Trip) => void;
  showLoginModal: boolean;
  setShowLoginModal: (show: boolean) => void;
}

const Val8Context = createContext<Val8ContextType | undefined>(undefined);

export const Val8Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false); // Start minimized
  const [userIntent, setUserIntent] = useState<UserIntent>(null);
  const [tripContext, setTripContext] = useState<TripContext>({});
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingState, setBookingState] = useState<'idle' | 'summary' | 'checkout' | 'confirmed' | 'post-booking'>('idle');
  const [selectedHotel, setSelectedHotel] = useState<HotelCard | null>(null);
  const [showExitModal, setShowExitModal] = useState(false);

  // New State Implementation
  const [user, setUser] = useState<UserProfile | null>(null);
  const [view, setView] = useState<'chat' | 'dashboard'>('chat');
  const [trips, setTrips] = useState<Trip[]>([]);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const login = (email: string, name: string = 'Guest') => {
    setUser({ name, email, isAuthenticated: true });
    setShowLoginModal(false);
  };

  const logout = () => {
    setUser(null);
    setView('chat');
  };

  const addTrip = (trip: Trip) => {
    setTrips(prev => [trip, ...prev]);
  };

  const updateTripContext = (context: Partial<TripContext>) => {
    setTripContext(prev => ({ ...prev, ...context }));
  };

  const addMessage = (message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    const newMessage: ChatMessage = {
      ...message,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
    };
    setChatHistory(prev => [...prev, newMessage]);
  };

  return (
    <Val8Context.Provider
      value={{
        currentFrame,
        setCurrentFrame,
        isExpanded,
        setIsExpanded,
        userIntent,
        setUserIntent,
        tripContext,
        updateTripContext,
        chatHistory,
        addMessage,
        isLoading,
        setIsLoading,
        bookingState,
        setBookingState,
        selectedHotel,
        setSelectedHotel,
        showExitModal,
        setShowExitModal,
        user,
        login,
        logout,
        view,
        setView,
        trips,
        addTrip,
        showLoginModal,
        setShowLoginModal
      }}
    >
      {children}
    </Val8Context.Provider>
  );
};

export const useVal8 = () => {
  const context = useContext(Val8Context);
  if (context === undefined) {
    throw new Error('useVal8 must be used within a Val8Provider');
  }
  return context;
};

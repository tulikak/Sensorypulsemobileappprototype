import { createBrowserRouter } from "react-router";
import { Welcome } from "./components/Welcome";
import { Snapshot } from "./components/Snapshot";
import { Dashboard } from "./components/Dashboard";
import { Insights } from "./components/Insights";
import { Patterns } from "./components/Patterns";
import { HapticWearable } from "./components/HapticWearable";
import { VisualTracker } from "./components/VisualTracker";
import { AmbientOrb } from "./components/AmbientOrb";
import { AROverlay } from "./components/AROverlay";
import { Privacy } from "./components/Privacy";
import { NotFound } from "./components/NotFound";

// Router configuration for SensoryPulse app
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Welcome,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/snapshot",
    Component: Snapshot,
  },
  {
    path: "/patterns",
    Component: Patterns,
  },
  {
    path: "/insights",
    Component: Insights,
  },
  {
    path: "/haptic-wearable",
    Component: HapticWearable,
  },
  {
    path: "/visual-tracker",
    Component: VisualTracker,
  },
  {
    path: "/ambient-orb",
    Component: AmbientOrb,
  },
  {
    path: "/ar-overlay",
    Component: AROverlay,
  },
  {
    path: "/privacy",
    Component: Privacy,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
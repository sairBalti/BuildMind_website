import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { recordMarketingVisit } from "../utils/monitoring";

export default function usePageVisitTracking() {
  const location = useLocation();

  useEffect(() => {
    recordMarketingVisit(location.pathname + (location.search || ""));
  }, [location.pathname, location.search]);
}

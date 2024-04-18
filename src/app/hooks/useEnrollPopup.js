import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const useEnrollPopup = () => {
  const [isEnrollPopupOpen, setIsEnrollPopupOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // Update the URL based on the state
    if (isEnrollPopupOpen) router.push("/?enroll-popup=true", { scroll: false });
    else router.push("/?enroll-popup=false", { scroll: false });
  }, [isEnrollPopupOpen]);

  return [isEnrollPopupOpen, setIsEnrollPopupOpen];
};

export default useEnrollPopup;
